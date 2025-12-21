import { Gift, Users, TrendingUp, Share2 } from 'lucide-react';

const Referrals = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Gift className="w-10 h-10 mr-4 text-yellow-400" />
            🎉 Refer Friends & Earn Big!
          </h1>
          <p className="text-xl text-gray-300">Turn your network into your net worth</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* How Referrals Work */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
              <Users className="w-8 h-8 mr-3 text-yellow-400" />
              How Referrals Work
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <p className="font-semibold text-white">Share Your Link</p>
                  <p className="text-gray-300 text-sm">Send your unique referral link to friends</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <p className="font-semibold text-white">They Invest</p>
                  <p className="text-gray-300 text-sm">Your friend signs up and makes their first investment</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <p className="font-semibold text-white">You Earn 20%</p>
                  <p className="text-gray-300 text-sm">Get instant 20% commission on their investment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings Calculator */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
              <TrendingUp className="w-8 h-8 mr-3 text-green-400" />
              Earnings Calculator
            </h3>
            <div className="space-y-4">
              <div className="bg-green-600 bg-opacity-30 rounded-xl p-4 border border-green-500">
                <p className="text-lg font-bold text-white">Friend invests KES 1,000</p>
                <p className="text-2xl font-bold text-green-400">You earn: KES 200 💰</p>
              </div>
              <div className="bg-blue-600 bg-opacity-30 rounded-xl p-4 border border-blue-500">
                <p className="text-lg font-bold text-white">Friend invests KES 5,000</p>
                <p className="text-2xl font-bold text-blue-400">You earn: KES 1,000 💰</p>
              </div>
              <div className="bg-purple-600 bg-opacity-30 rounded-xl p-4 border border-purple-500">
                <p className="text-lg font-bold text-white">Friend invests KES 50,000</p>
                <p className="text-2xl font-bold text-purple-400">You earn: KES 10,000 💰</p>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center text-white">
            <Share2 className="w-8 h-8 mr-3 text-yellow-400" />
            Your Referral Link
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value="https://wealthrise.com/ref/USER123"
              readOnly
              className="flex-1 px-4 py-3 bg-gray-600 border border-gray-500 text-white rounded-xl focus:outline-none"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition">
              📋 Copy Link
            </button>
          </div>
          <p className="text-center mt-4 text-gray-300">
            💡 The more friends you refer, the more you earn! No limits on referral earnings.
          </p>
        </div>

        {/* Bonus Incentives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-600">
            <div className="text-4xl mb-4">🏆</div>
            <p className="font-bold text-white text-lg">Refer 5 Friends</p>
            <p className="text-2xl font-bold text-green-400 mt-2">Bonus: KES 500</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-600">
            <div className="text-4xl mb-4">🔥</div>
            <p className="font-bold text-white text-lg">Refer 10 Friends</p>
            <p className="text-2xl font-bold text-blue-400 mt-2">Bonus: KES 1,500</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-600">
            <div className="text-4xl mb-4">👑</div>
            <p className="font-bold text-white text-lg">Refer 20 Friends</p>
            <p className="text-2xl font-bold text-purple-400 mt-2">Bonus: KES 5,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;