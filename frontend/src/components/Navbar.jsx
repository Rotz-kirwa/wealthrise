import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useBalance } from '../context/BalanceContext';
import { LogOut, User, DollarSign, Plus } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  let balance = 0;
  
  try {
    const balanceContext = useBalance();
    balance = balanceContext.balance || 0;
  } catch (error) {
    // Balance context not available
    balance = 0;
  }
  
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-95 backdrop-blur-sm border-b border-gray-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-lg sm:text-xl font-bold">
            <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            <span className="uppercase italic">WealthRise</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {location.pathname !== '/' && (
                  <Link to="/" className="hover:text-green-300 text-green-400">Main Board</Link>
                )}
                <Link to="/dashboard" className="hover:text-green-300 text-green-400">Invest Now</Link>
                <Link to="/deposit" className="hover:text-green-300 text-green-400 flex items-center relative group">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:from-green-400 group-hover:to-emerald-500">
                    <Plus className="w-6 h-6 text-white font-bold" />
                  </div>
                  <span className="ml-2 text-sm font-medium">KES {balance.toFixed(2)}</span>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Balance: KES {balance.toFixed(2)}
                  </div>
                </Link>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="hidden lg:inline">{user.name}</span>
                </div>
                <button 
                  onClick={logout}
                  className="flex items-center space-x-1 hover:text-green-300 text-green-400"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden lg:inline">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-gray-300">Login</Link>
                <Link to="/register" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  💰 Invest
                </Link>
                <Link 
                  to="/deposit" 
                  className="flex items-center space-x-2 bg-gray-700 px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Plus className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs font-medium text-green-400">KES {balance.toFixed(2)}</span>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;