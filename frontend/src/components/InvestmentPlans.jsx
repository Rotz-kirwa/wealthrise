import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBalance } from '../context/BalanceContext';
import ConfirmModal from './ConfirmModal';
import Toast from './Toast';

const PlanCard = ({ plan, onInvest }) => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleInvest = () => {
    // Navigate to deposit page with investment details
    navigate('/deposit', { 
      state: { 
        investmentPlan: plan.key,
        investmentAmount: amount,
        planName: plan.name 
      } 
    });
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="text-lg">{plan.emoji}</div>
            <div>
              <h3 className="text-sm font-semibold text-white">{plan.name}</h3>
              <p className="text-xs text-gray-400">KES {plan.min}{plan.max !== Infinity && `-${plan.max}`}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-green-400 font-semibold">+5% Bonus</div>
            <div className="text-xs text-blue-400">1.5% Daily</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={plan.max === Infinity ? `${plan.min}+` : `${plan.min}-${plan.max}`}
            className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded text-sm"
            min={plan.min}
            max={plan.max === Infinity ? undefined : plan.max}
          />
          <button onClick={handleInvest} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm font-medium">Invest</button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{plan.emoji}</div>
            <div>
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="text-sm text-gray-400">{plan.returns} • {plan.period}</p>
            </div>
          </div>
          <div className="text-sm text-gray-300">Min Ksh {plan.min}{plan.max !== Infinity && ` • Max Ksh ${plan.max}`}</div>
        </div>

        <p className="text-gray-400 text-sm mb-4">{plan.goal || ''}</p>

        <ul className="text-sm text-gray-300 mb-4 space-y-1">
          {(plan.features || []).map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>

        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={plan.max === Infinity ? `${plan.min}+` : `${plan.min}-${plan.max}`}
            className="w-1/2 px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded"
            min={plan.min}
            max={plan.max === Infinity ? undefined : plan.max}
          />
          <button onClick={handleInvest} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Invest</button>
        </div>
      </div>
    </>
  );
};

const InvestmentPlans = () => {
  const { PLANS, investPlan } = useBalance();

  const plans = [PLANS.bronze, PLANS.silver, PLANS.platinum, PLANS.gold];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
      {plans.map((plan) => (
        <PlanCard key={plan.key} plan={{...plan,
          goal: plan.key === 'gold' ? 'Elite tier: Make more in a year than most do in five' : plan.key === 'platinum' ? 'Multiply your wealth — Turn 10K into 100K+' : plan.key === 'silver' ? 'Double your money in 60 days' : 'Your first step to financial freedom',
          features: plan.key === 'bronze' ? ['⚡ Activate in 60 seconds — Money starts working immediately','📈 Watch it grow daily — 1.5% compounds every 24 hours','💸 Turn hundreds into thousands — Proven wealth multiplier','🔔 Never miss a profit — Real-time earnings alerts','🎁 Instant bonus — Extra 5% on first deposit'] : plan.key === 'silver' ? ['🔄 Auto-reinvest mode — Compound gains automatically','📊 Track every shilling — Live profit dashboard','⚡ Withdraw anytime — No penalties, no waiting','💎 2x earnings days — Random bonus multipliers','👥 Referral jackpot — Earn 10% from friends profits'] : plan.key === 'platinum' ? ['🏆 Triple compounding — Profits multiply exponentially','⚡ Instant withdrawals — Cash hits M-Pesa in under 5 minutes','📈 Insider analytics — Predict peak profit windows','🎯 VIP-only deals — Access to 2%–3% daily flash opportunities','👑 Personal advisor — WhatsApp support 24/7'] : ['💎 Exponential compounding — 1.5% daily = 5,475% annual equivalent','🚀 Priority withdrawals — Money in your account in 60 seconds','🧠 AI profit optimizer — Automated max-gain strategies','🌟 Exclusive high-yield drops — Pre-access to 5%–10% monthly opportunities','🛡️ Insurance-backed — Your capital is 100% protected']
        }} onInvest={investPlan} />
      ))}
    </div>
  );
};

export default InvestmentPlans;
