import { TrendingUp, DollarSign, PieChart, Activity } from 'lucide-react';
import { useBalance } from '../context/BalanceContext';
import { useState } from 'react';
import ReferralSection from '../components/ReferralSection';
import InvestmentPlans from '../components/InvestmentPlans';

const Dashboard = () => {
  const { balance, totalInvestment, dailyGrowth, referralEarnings } = useBalance();
  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 uppercase italic">WealthRise Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
            <div className="flex items-center">
              <DollarSign className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Total Balance</p>
                <p className="text-2xl font-bold text-white animate-pulse">KES {balance.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Daily Growth</p>
                <p className="text-2xl font-bold text-green-600 animate-pulse">+KES {dailyGrowth.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
            <div className="flex items-center">
              <PieChart className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Total Investment</p>
                <p className="text-2xl font-bold text-white">KES {totalInvestment.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
            <div className="flex items-center">
              <Activity className="w-8 h-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Referral Earnings</p>
                <p className="text-2xl font-bold text-green-600">+KES {referralEarnings.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Section */}
        <div className="mb-8">
          <ReferralSection />
        </div>

        {/* Investment Plans */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Investment Plans</h2>
          <InvestmentPlans />
        </div>

        {/* Recent Investments (local) */}
        <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">Recent Investments</h2>
          <RecentInvestments />
        </div>
      </div>
    </div>
  );
};

const RecentInvestments = () => {
  const { investments } = useBalance();

  if (!investments || investments.length === 0) {
    return <p className="text-gray-400">No investments yet — start by choosing a plan above.</p>;
  }

  return (
    <div className="space-y-3">
      {investments.map(inv => (
        <div key={inv.id} className="flex justify-between items-center p-3 bg-gray-700 rounded">
          <div>
            <p className="font-medium text-white">{inv.plan.toUpperCase()} Investment</p>
            <p className="text-sm text-gray-400">Ksh {inv.amount} • {new Date(inv.date).toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-green-600">Ksh {inv.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;