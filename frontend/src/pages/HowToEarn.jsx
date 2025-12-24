import { Link } from 'react-router-dom';
import { TrendingUp, Users, Gift, DollarSign, Clock, Star } from 'lucide-react';

const HowToEarn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            💰 How to Earn with WealthRise
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover multiple ways to grow your wealth and earn passive income with our proven investment platform
          </p>
        </div>

        {/* Main Earning Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Investment Returns */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-xl font-bold text-white">Daily Investment Returns</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-green-600 bg-opacity-20 p-4 rounded-lg">
                <h3 className="text-green-400 font-semibold text-lg">1.5% Daily Growth</h3>
                <p className="text-gray-300 text-sm">Your investment grows by 1.5% every single day</p>
              </div>
              <div className="text-gray-300 text-sm space-y-2">
                <p>• Invest KES 1,000 → Earn KES 15 daily</p>
                <p>• Invest KES 10,000 → Earn KES 150 daily</p>
                <p>• Invest KES 50,000 → Earn KES 750 daily</p>
              </div>
            </div>
          </div>

          {/* Referral Program */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-xl font-bold text-white">Referral Commissions</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-yellow-600 bg-opacity-20 p-4 rounded-lg">
                <h3 className="text-yellow-400 font-semibold text-lg">20% Commission</h3>
                <p className="text-gray-300 text-sm">Earn 20% of every friend's investment</p>
              </div>
              <div className="text-gray-300 text-sm space-y-2">
                <p>• Friend invests KES 5,000 → You earn KES 1,000</p>
                <p>• Friend invests KES 20,000 → You earn KES 4,000</p>
                <p>• Unlimited referrals = Unlimited earnings!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Features */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-xl mb-8">
          <div className="flex items-center mb-4">
            <Gift className="w-8 h-8 text-white mr-3" />
            <h2 className="text-xl font-bold text-white">Bonus Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            <div className="text-center">
              <Star className="w-6 h-6 mx-auto mb-2" />
              <h3 className="font-semibold">5% Welcome Bonus</h3>
              <p className="text-sm opacity-90">On your first deposit</p>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <h3 className="font-semibold">Bonus Chances</h3>
              <p className="text-sm opacity-90">Random extra payouts</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-6 h-6 mx-auto mb-2" />
              <h3 className="font-semibold">Compound Growth</h3>
              <p className="text-sm opacity-90">Reinvest for exponential gains</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gray-800 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold text-white mb-6 text-center">💎 Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-green-400 font-bold text-lg">Sarah K.</div>
              <div className="text-gray-300 text-sm">Started with KES 5,000</div>
              <div className="text-white font-semibold">Now earning KES 2,000+ daily</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-green-400 font-bold text-lg">John M.</div>
              <div className="text-gray-300 text-sm">Referred 10 friends</div>
              <div className="text-white font-semibold">Earned KES 50,000 in commissions</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-green-400 font-bold text-lg">Grace W.</div>
              <div className="text-gray-300 text-sm">Invested KES 20,000</div>
              <div className="text-white font-semibold">Withdrew KES 80,000 in 3 months</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Earning?</h2>
          <p className="text-gray-300 mb-6">Join thousands of successful investors building wealth daily</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dashboard"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition"
            >
              💰 Start Investing Now
            </Link>
            <Link 
              to="/referrals"
              className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-700 transition"
            >
              🎁 Share & Earn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToEarn;