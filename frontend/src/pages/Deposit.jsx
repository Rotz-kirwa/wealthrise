import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Smartphone, Wallet, Plus, Minus, CreditCard, TrendingUp, Info, CheckCircle, Clock, Shield } from 'lucide-react';
import { useBalance } from '../context/BalanceContext';
import { mpesaAPI } from '../services/mpesa';

const Deposit = () => {
  const { balance } = useBalance();
  const location = useLocation();
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [investmentPlan, setInvestmentPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location.state?.investmentAmount) {
      setAmount(location.state.investmentAmount.toString());
      setSelectedAmount(location.state.investmentAmount.toString());
      setInvestmentPlan(location.state);
    }
  }, [location.state]);

  const handleDeposit = async () => {
    if (!amount || !phoneNumber) {
      alert('Please enter amount and phone number');
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await mpesaAPI.initiatePayment(phoneNumber, amount);
      
      if (response.data.success) {
        alert(`STK Push sent to ${phoneNumber} for KES ${amount}. Check your phone to complete payment.`);
        setAmount('');
        setPhoneNumber('');
        setSelectedAmount('');
      }
    } catch (error) {
      alert('Payment failed: ' + (error.response?.data?.message || error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {investmentPlan ? `💰 Fund Your ${investmentPlan.planName}` : '🚀 WealthRise Account Hub'}
          </h1>
          <p className="text-gray-300 text-lg">
            {investmentPlan ? `Invest now to start earning 1.5% daily` : 'Your gateway to financial freedom'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          
          {/* Balance Card */}
          <div className="lg:w-1/4">
            <div className="bg-gray-800 rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-white shadow-xl border border-gray-700">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <Wallet className="w-6 h-6 lg:w-8 lg:h-8 mr-2" />
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-300">Balance</p>
                    <p className="text-xl lg:text-2xl font-bold text-green-400">KES {balance.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-green-500" />
                  <div>
                    <p className="text-xs lg:text-sm text-gray-300">Daily Rate</p>
                    <p className="text-lg lg:text-xl font-bold text-green-400">1.5%</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-blue-400" />
                  <div>
                    <p className="text-xs lg:text-sm text-gray-300">Security</p>
                    <p className="text-sm lg:text-base font-bold">Bank Grade 🔒</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-gray-700 rounded-xl p-3">
                <p className="text-xs lg:text-sm text-gray-300 text-center">💡 Your money is growing 24/7!</p>
              </div>
            </div>
          </div>

          {/* Deposit Section */}
          <div className="lg:w-1/2">
            <div className="bg-gray-800 rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-xl border border-gray-700 h-full">
              <div className="flex items-center mb-4 lg:mb-6">
                <Plus className="w-6 h-6 lg:w-8 lg:h-8 text-green-400 mr-3 lg:mr-4" />
                <h2 className="text-xl lg:text-3xl font-bold text-green-400">Add Funds</h2>
              </div>

              {/* How It Works Section */}
              <div className="mb-6 lg:mb-8 bg-gray-700 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-600">
                <h4 className="text-base lg:text-xl font-bold mb-3 lg:mb-4 flex items-center text-white">
                  <Info className="w-4 h-4 lg:w-6 lg:h-6 mr-2" />
                  How Investment Works
                </h4>
                <div className="flex gap-2 lg:gap-4 text-xs lg:text-sm text-white">
                  <div className="text-center flex-1">
                    <div className="bg-gray-600 rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center mx-auto mb-1 lg:mb-2">
                      <span className="text-sm lg:text-2xl">1️⃣</span>
                    </div>
                    <p className="font-semibold text-xs lg:text-sm">Choose Plan</p>
                    <p className="opacity-90 text-xs lg:text-sm">Select tier</p>
                  </div>
                  <div className="text-center flex-1">
                    <div className="bg-gray-600 rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center mx-auto mb-1 lg:mb-2">
                      <span className="text-sm lg:text-2xl">2️⃣</span>
                    </div>
                    <p className="font-semibold text-xs lg:text-sm">Deposit Funds</p>
                    <p className="opacity-90 text-xs lg:text-sm">Pay M-Pesa</p>
                  </div>
                  <div className="text-center flex-1">
                    <div className="bg-gray-600 rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center mx-auto mb-1 lg:mb-2">
                      <span className="text-sm lg:text-2xl">3️⃣</span>
                    </div>
                    <p className="font-semibold text-xs lg:text-sm">Earn Daily</p>
                    <p className="opacity-90 text-xs lg:text-sm">1.5% / 24hrs</p>
                  </div>
                </div>
              </div>

              {/* Investment Plans Selection */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4">Choose Investment Plan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 mb-3 lg:mb-4">
                  <button
                    onClick={() => {
                      setAmount('');
                      setSelectedAmount('bronze');
                    }}
                    className={`p-3 lg:p-4 rounded-lg lg:rounded-xl border-2 transition text-left ${
                      selectedAmount === 'bronze'
                        ? 'border-amber-600 bg-amber-600 bg-opacity-20 text-amber-400'
                        : 'border-amber-700 text-amber-300 hover:border-amber-600 hover:bg-amber-700 hover:bg-opacity-10'
                    }`}
                  >
                    <div className="flex items-center mb-1 lg:mb-2">
                      <span className="text-sm lg:text-lg mr-2">💰</span>
                      <span className="font-semibold text-xs lg:text-sm">BRONZE STARTER</span>
                    </div>
                    <p className="text-xs lg:text-sm opacity-80">KES 100 - 499 • 45% Total Return</p>
                  </button>
                  
                  <button
                    onClick={() => {
                      setAmount('');
                      setSelectedAmount('silver');
                    }}
                    className={`p-3 lg:p-4 rounded-lg lg:rounded-xl border-2 transition text-left ${
                      selectedAmount === 'silver'
                        ? 'border-gray-400 bg-gray-400 bg-opacity-20 text-gray-300'
                        : 'border-gray-500 text-gray-400 hover:border-gray-400 hover:bg-gray-600 hover:bg-opacity-10'
                    }`}
                  >
                    <div className="flex items-center mb-1 lg:mb-2">
                      <span className="text-sm lg:text-lg mr-2">🥈</span>
                      <span className="font-semibold text-xs lg:text-sm">SILVER ACCELERATOR</span>
                    </div>
                    <p className="text-xs lg:text-sm opacity-80">KES 500 - 4,999 • 90% Total Return</p>
                  </button>
                  
                  <button
                    onClick={() => {
                      setAmount('');
                      setSelectedAmount('platinum');
                    }}
                    className={`p-3 lg:p-4 rounded-lg lg:rounded-xl border-2 transition text-left ${
                      selectedAmount === 'platinum'
                        ? 'border-slate-400 bg-slate-400 bg-opacity-20 text-slate-300'
                        : 'border-slate-500 text-slate-400 hover:border-slate-400 hover:bg-slate-600 hover:bg-opacity-10'
                    }`}
                  >
                    <div className="flex items-center mb-1 lg:mb-2">
                      <span className="text-sm lg:text-lg mr-2">💎</span>
                      <span className="font-semibold text-xs lg:text-sm">PLATINUM EMPIRE</span>
                    </div>
                    <p className="text-xs lg:text-sm opacity-80">KES 5,000 - 49,999 • 135% Total Return</p>
                  </button>
                  
                  <button
                    onClick={() => {
                      setAmount('');
                      setSelectedAmount('gold');
                    }}
                    className={`p-3 lg:p-4 rounded-lg lg:rounded-xl border-2 transition text-left ${
                      selectedAmount === 'gold'
                        ? 'border-yellow-500 bg-yellow-500 bg-opacity-20 text-yellow-400'
                        : 'border-yellow-600 text-yellow-500 hover:border-yellow-500 hover:bg-yellow-600 hover:bg-opacity-10'
                    }`}
                  >
                    <div className="flex items-center mb-1 lg:mb-2">
                      <span className="text-sm lg:text-lg mr-2">🏆</span>
                      <span className="font-semibold text-xs lg:text-sm">GOLD DYNASTY</span>
                    </div>
                    <p className="text-xs lg:text-sm opacity-80">KES 50,000+ • 270-540% Total Return</p>
                  </button>
                </div>
                
                <input
                  type="number"
                  placeholder={selectedAmount === 'bronze' ? 'Enter amount (100-499)' : 
                             selectedAmount === 'silver' ? 'Enter amount (500-4,999)' : 
                             selectedAmount === 'platinum' ? 'Enter amount (5,000-49,999)' : 
                             selectedAmount === 'gold' ? 'Enter amount (50,000+)' : 
                             'Enter custom amount'}
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setSelectedAmount('');
                  }}
                  className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-gray-700 border-2 border-gray-600 text-white rounded-lg lg:rounded-2xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition text-sm lg:text-lg"
                />
              </div>
              
              {/* Phone Number */}
              <div className="mb-6 lg:mb-8">
                <label className="block text-white font-bold mb-2 lg:mb-4 text-sm lg:text-lg">📱 M-Pesa Phone Number</label>
                <div className="relative">
                  <Smartphone className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-6 lg:h-6 text-green-400" />
                  <input
                    type="tel"
                    placeholder="254712345678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full pl-10 lg:pl-14 pr-4 lg:pr-6 py-3 lg:py-4 bg-gray-700 border-2 border-gray-600 text-white rounded-lg lg:rounded-2xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition text-sm lg:text-lg"
                  />
                </div>
                <p className="text-green-300 mt-2 lg:mt-3 flex items-center text-xs lg:text-sm">
                  <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  Instant STK push • Secure payment • No fees
                </p>
              </div>
              
              {/* Deposit Button */}
              <button
                onClick={handleDeposit}
                disabled={isLoading || !amount || !phoneNumber}
                className="w-full bg-green-600 text-white py-3 lg:py-5 rounded-lg lg:rounded-2xl font-bold text-base lg:text-xl hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 lg:space-x-3 shadow-lg"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 lg:h-6 lg:w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 lg:w-6 lg:h-6" />
                    <span>💰 Deposit & Start Earning</span>
                  </>
                )}
              </button>
              
              {/* M-Pesa Badge */}
              <div className="flex items-center justify-center mt-4 lg:mt-6">
                <div className="flex items-center space-x-2 lg:space-x-3 bg-green-600 px-3 lg:px-6 py-2 lg:py-3 rounded-full">
                  <Smartphone className="w-3 h-3 lg:w-5 lg:h-5 text-white" />
                  <span className="text-white font-bold text-xs lg:text-sm">Powered by M-PESA</span>
                  <span className="text-green-200">🔒</span>
                </div>
              </div>
            </div>
          </div>

          {/* Withdrawal Section */}
          <div className="lg:w-1/4">
            <div className="bg-gray-800 rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-xl border border-gray-700 text-white h-full">
              <div className="flex items-center mb-4 lg:mb-6">
                <Minus className="w-6 h-6 lg:w-8 lg:h-8 text-orange-400 mr-3 lg:mr-4" />
                <h3 className="text-xl lg:text-3xl font-bold text-orange-400">💸 Withdrawals</h3>
              </div>
              
              {/* Withdrawal Process */}
              <div className="mb-4 lg:mb-6 bg-gray-700 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-600">
                <h4 className="text-base lg:text-xl font-bold mb-3 lg:mb-4 flex items-center">
                  <Clock className="w-4 h-4 lg:w-6 lg:h-6 mr-2 text-yellow-400" />
                  Withdrawal Process
                </h4>
                <div className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-green-400" />
                    <span>✅ Minimum: KES 1,200</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-green-400" />
                    <span>⚡ Processing: Instant</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-green-400" />
                    <span>📱 Direct to M-Pesa</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-green-400" />
                    <span>🆓 No withdrawal fees</span>
                  </div>
                </div>
              </div>
              
              <input
                type="number"
                placeholder="Enter withdrawal amount (Min: 1,200)"
                className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-gray-700 border-2 border-gray-600 text-white placeholder-gray-400 rounded-lg lg:rounded-2xl focus:outline-none mb-4 lg:mb-6 text-sm lg:text-lg"
                disabled
              />
              
              <button
                disabled
                className="w-full bg-gray-600 bg-opacity-50 text-gray-300 py-3 lg:py-4 rounded-lg lg:rounded-2xl font-bold text-sm lg:text-lg cursor-not-allowed"
              >
                💰 Withdraw (Min KES 1,200)
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-3xl p-6 text-white text-center border border-gray-700 hover:border-gray-600 transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Instant Growth</h3>
            <p className="opacity-90">Your money starts earning immediately after deposit</p>
          </div>
          
          <div className="bg-gray-800 rounded-3xl p-6 text-white text-center border border-gray-700 hover:border-gray-600 transition">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">100% Secure</h3>
            <p className="opacity-90">Bank-level security protects your investments</p>
          </div>
          
          <div className="bg-gray-800 rounded-3xl p-6 text-white text-center border border-gray-700 hover:border-gray-600 transition">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-2">Daily Returns</h3>
            <p className="opacity-90">Consistent 1.5% daily growth on all investments</p>
          </div>

          <div className="bg-gray-800 rounded-3xl p-6 text-white text-center border border-gray-700 hover:border-gray-600 transition">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Refer & Earn</h3>
            <p className="opacity-90">Earn 20% from every friend's investment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;