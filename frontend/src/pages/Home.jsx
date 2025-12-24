import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Zap, Users } from 'lucide-react';
import LiveChart from '../components/LiveChart';
import LiveUsersTable from '../components/LiveUsersTable';
import { useAuth } from '../context/AuthContext';
import { useBalance } from '../context/BalanceContext';

const Home = () => {
  const { user } = useAuth();
  let balance = 0;
  
  try {
    const balanceContext = useBalance();
    balance = balanceContext.balance || 0;
  } catch (error) {
    // Balance context not available
    balance = 0;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <img 
          src="https://www.dropbox.com/scl/fi/05xln7s5nhfbkwj5hiith/h.jpeg?rlkey=g5frwh08ky8e5ol5qu35f1zgm&st=rjkx8ux5&raw=1" 
          alt="Investment Hero" 
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover object-center mt-12 sm:mt-16"
          loading="eager"
          decoding="async"
        />
        {/* Overlay to ensure buttons are visible */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-3 z-10">
          <Link 
            to="/referrals"
            className="bg-yellow-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold hover:bg-yellow-700 transition shadow-lg flex items-center justify-center backdrop-blur-sm"
          >
            🎁 REFER & EARN
          </Link>
        </div>
      </section>

      {/* Scrolling Withdrawals Ticker */}
      <div className="bg-green-600 py-1.5 sm:py-2 md:py-3 overflow-hidden">
        <div className="flex animate-scroll-continuous whitespace-nowrap">
          <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 text-white text-xs sm:text-sm min-w-max">
            <div className="text-center"><div>+254796-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4077</div></div>
            <div className="text-center"><div>+254711-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1386</div></div>
            <div className="text-center"><div>+254789-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4944</div></div>
            <div className="text-center"><div>+254780-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2156</div></div>
            <div className="text-center"><div>+254722-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3287</div></div>
            <div className="text-center"><div>+254733-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5643</div></div>
            <div className="text-center"><div>+254745-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1892</div></div>
            <div className="text-center"><div>+254756-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4321</div></div>
            <div className="text-center"><div>+254767-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2765</div></div>
            <div className="text-center"><div>+254778-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3498</div></div>
            <div className="text-center"><div>+254701-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5127</div></div>
            <div className="text-center"><div>+254712-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1654</div></div>
            <div className="text-center"><div>+254723-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4876</div></div>
            <div className="text-center"><div>+254734-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2943</div></div>
            <div className="text-center"><div>+254746-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3765</div></div>
            <div className="text-center"><div>+254757-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1287</div></div>
            <div className="text-center"><div>+254768-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5432</div></div>
            <div className="text-center"><div>+254779-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2198</div></div>
            <div className="text-center"><div>+254702-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4567</div></div>
            <div className="text-center"><div>+254713-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3421</div></div>
            <div className="text-center"><div>+254724-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1876</div></div>
            <div className="text-center"><div>+254735-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5234</div></div>
            <div className="text-center"><div>+254747-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2987</div></div>
            <div className="text-center"><div>+254758-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4123</div></div>
            <div className="text-center"><div>+254769-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1765</div></div>
            <div className="text-center"><div>+254703-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3654</div></div>
            <div className="text-center"><div>+254714-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2432</div></div>
            <div className="text-center"><div>+254725-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5876</div></div>
            <div className="text-center"><div>+254736-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1543</div></div>
            <div className="text-center"><div>+254748-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4321</div></div>
            <div className="text-center"><div>+254759-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2876</div></div>
            <div className="text-center"><div>+254704-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3987</div></div>
            <div className="text-center"><div>+254715-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1234</div></div>
            <div className="text-center"><div>+254726-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5432</div></div>
            <div className="text-center"><div>+254737-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2765</div></div>
            <div className="text-center"><div>+254749-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4198</div></div>
            <div className="text-center"><div>+254705-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3456</div></div>
            <div className="text-center"><div>+254716-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1987</div></div>
            <div className="text-center"><div>+254727-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5123</div></div>
            <div className="text-center"><div>+254738-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2654</div></div>
            <div className="text-center"><div>+254706-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4876</div></div>
            <div className="text-center"><div>+254717-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3321</div></div>
            <div className="text-center"><div>+254728-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1765</div></div>
            <div className="text-center"><div>+254739-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5987</div></div>
            <div className="text-center"><div>+254707-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2432</div></div>
            <div className="text-center"><div>+254718-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4123</div></div>
            <div className="text-center"><div>+254729-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3654</div></div>
            <div className="text-center"><div>+254708-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1876</div></div>
            <div className="text-center"><div>+254719-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5234</div></div>
            <div className="text-center"><div>+254709-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2987</div></div>
            <div className="text-center"><div>+254710-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4567</div></div>
          </div>
          <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 text-white text-xs sm:text-sm min-w-max">
            <div className="text-center"><div>+254796-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4077</div></div>
            <div className="text-center"><div>+254711-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1386</div></div>
            <div className="text-center"><div>+254789-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4944</div></div>
            <div className="text-center"><div>+254780-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2156</div></div>
            <div className="text-center"><div>+254722-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3287</div></div>
            <div className="text-center"><div>+254733-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5643</div></div>
            <div className="text-center"><div>+254745-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1892</div></div>
            <div className="text-center"><div>+254756-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4321</div></div>
            <div className="text-center"><div>+254767-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2765</div></div>
            <div className="text-center"><div>+254778-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3498</div></div>
            <div className="text-center"><div>+254701-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5127</div></div>
            <div className="text-center"><div>+254712-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1654</div></div>
            <div className="text-center"><div>+254723-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4876</div></div>
            <div className="text-center"><div>+254734-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2943</div></div>
            <div className="text-center"><div>+254746-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3765</div></div>
            <div className="text-center"><div>+254757-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1287</div></div>
            <div className="text-center"><div>+254768-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5432</div></div>
            <div className="text-center"><div>+254779-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2198</div></div>
            <div className="text-center"><div>+254702-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4567</div></div>
            <div className="text-center"><div>+254713-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 3421</div></div>
            <div className="text-center"><div>+254724-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1876</div></div>
            <div className="text-center"><div>+254735-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 5234</div></div>
            <div className="text-center"><div>+254747-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 2987</div></div>
            <div className="text-center"><div>+254758-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 4123</div></div>
            <div className="text-center"><div>+254769-XXXX-XX</div><div>just withdrew</div><div className="font-bold">KES 1765</div></div>
          </div>
        </div>
      </div>

      {/* Users Investment Table */}
      <section className="py-6 sm:py-8 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center mr-3">Recent Investments & Payouts</h2>
            <Link 
              to="/how-to-earn"
              className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center space-x-1"
            >
              <span className="animate-pulse">💡</span>
              <span>How to Earn</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <LiveUsersTable />
            
            <LiveChart />
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-6 sm:py-8 lg:py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-4 sm:mb-6 lg:mb-8">How to Start Earning</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-gray-800 p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-700">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <span className="text-white font-bold text-sm sm:text-lg lg:text-xl">1</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">Sign Up & Verify</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Create account with name, email, password. Verify your identity for secure access.</p>
            </div>
            
            <div className="bg-gray-800 p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-700">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <span className="text-white font-bold text-sm sm:text-lg lg:text-xl">2</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">Deposit & Invest</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Choose your investment amount. Higher investments unlock greater reward potential.</p>
            </div>
            
            <div className="bg-gray-800 p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-700">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <span className="text-white font-bold text-sm sm:text-lg lg:text-xl">3</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">Refer & Earn</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Invite friends via referral link. Earn bonus rewards when they invest.</p>
            </div>
            
            <div className="bg-gray-800 p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-700">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <span className="text-white font-bold text-sm sm:text-lg lg:text-xl">4</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">Earn Returns</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Your funds generate daily returns. More investment + referrals = bigger rewards.</p>
            </div>
            
            <div className="bg-gray-800 p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-700">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <span className="text-white font-bold text-sm sm:text-lg lg:text-xl">5</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">Withdraw Funds</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Reach minimum threshold and request withdrawal to your account.</p>
            </div>
            
            <div className="bg-gray-800 p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-700">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <span className="text-white font-bold text-sm sm:text-lg lg:text-xl">6</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">Stay Active</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Keep investing and referring to maintain maximum earning potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why 50,000+ Investors Choose WealthRise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join Kenya's fastest-growing investment community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Security Feature */}
            <div className="group relative bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Bank-Level Security</h3>
                <p className="text-blue-100 text-center text-sm leading-relaxed">
                  Your investments are protected with military-grade encryption and secure M-Pesa integration
                </p>
                <div className="mt-4 text-center">
                  <span className="inline-block bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">
                    SSL Encrypted
                  </span>
                </div>
              </div>
            </div>

            {/* Speed Feature */}
            <div className="group relative bg-gradient-to-br from-green-600 to-emerald-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Instant Transactions</h3>
                <p className="text-green-100 text-center text-sm leading-relaxed">
                  Lightning-fast deposits and withdrawals through M-Pesa. Start earning in under 60 seconds
                </p>
                <div className="mt-4 text-center">
                  <span className="inline-block bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">
                    Under 60 Seconds
                  </span>
                </div>
              </div>
            </div>

            {/* Support Feature */}
            <div className="group relative bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">24/7 Expert Support</h3>
                <p className="text-purple-100 text-center text-sm leading-relaxed">
                  Dedicated WhatsApp support team ready to help you maximize your investment returns
                </p>
                <div className="mt-4 text-center">
                  <span className="inline-block bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">
                    Always Online
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">50,000+ Active Investors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm">KES 2B+ Invested</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 sm:py-8 lg:py-12 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 lg:mb-8">Join thousands of investors building wealth with WealthRise</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <Link 
              to="/dashboard"
              className="bg-white text-green-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg lg:text-xl font-bold hover:bg-gray-100 transition w-full sm:w-auto"
            >
              💰 INVEST NOW
            </Link>
            <Link 
              to={user ? "/deposit" : "/register"}
              className="bg-green-700 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base lg:text-lg font-semibold hover:bg-green-800 transition w-full sm:w-auto"
            >
              {user ? `Balance: KES ${balance.toFixed(2)}` : "Get Started Today"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;