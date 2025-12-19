import React, { useState } from 'react';
import { useBalance } from '../context/BalanceContext';

const PlanCard = ({ plan, onInvest }) => {
  const [amount, setAmount] = useState(plan.min);
  const [message, setMessage] = useState('');

  const handleInvest = async () => {
    const res = onInvest(plan.key, amount);
    if (res.success) {
      setMessage(`✅ Invested Ksh ${amount} in ${plan.name}`);
      setAmount(plan.min);
      setTimeout(() => setMessage(''), 4000);
    } else {
      setMessage(`❌ ${res.message}`);
      setTimeout(() => setMessage(''), 4000);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
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
          min={plan.min}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-1/2 px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded"
        />
        <button onClick={handleInvest} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Invest</button>
      </div>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
};

const InvestmentPlans = () => {
  const { PLANS, investPlan } = useBalance();

  const plans = [PLANS.bronze, PLANS.silver, PLANS.platinum, PLANS.gold];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan) => (
        <PlanCard key={plan.key} plan={{...plan,
          goal: plan.key === 'gold' ? 'High-net-worth & institutional-level clients' : plan.key === 'platinum' ? 'Serious investors, long-term retention' : plan.key === 'silver' ? 'Core user base & recurring revenue' : 'First-time investors, trust-building',
          features: plan.key === 'bronze' ? ['Manual investment','Monthly payouts','Basic portfolio dashboard','Email/SMS notifications','No compounding'] : plan.key === 'silver' ? ['Optional auto-reinvestment','Monthly performance reports','Priority withdrawals','Partial compounding','Telegram / WhatsApp alerts'] : plan.key === 'platinum' ? ['Full compounding','Faster withdrawals (24–48 hours)','Advanced portfolio analytics','Early access to premium opportunities','Dedicated support channel'] : ['Full compounding','Faster withdrawals','Advanced analytics','Long term opportunities']
        }} onInvest={investPlan} />
      ))}
    </div>
  );
};

export default InvestmentPlans;
