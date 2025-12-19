import { createContext, useContext, useState, useEffect } from 'react';

const BalanceContext = createContext();

export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error('useBalance must be used within a BalanceProvider');
  }
  return context;
};

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [investments, setInvestments] = useState([]);
  const [dailyGrowth, setDailyGrowth] = useState(0);
  const [referralEarnings, setReferralEarnings] = useState(0);

  // Simulate daily growth (2% per day)
  useEffect(() => {
    if (totalInvestment > 0) {
      const interval = setInterval(() => {
        const dailyReturn = totalInvestment * 0.02; // 2% daily return
        setDailyGrowth(prev => prev + dailyReturn);
        setBalance(prev => prev + dailyReturn);
      }, 5000); // Update every 5 seconds for demo (in real app, this would be daily)

      return () => clearInterval(interval);
    }
  }, [totalInvestment]);

  const invest = (amount) => {
    setTotalInvestment(prev => prev + amount);
    setBalance(prev => prev + amount);
  };

  const PLANS = {
    bronze: { key: 'bronze', name: 'BRONZE PLAN', emoji: '🟤', min: 100, max: 499, returns: '2–4% per month', period: '30 days' },
    silver: { key: 'silver', name: 'SILVER PLAN', emoji: '⚪', min: 500, max: 4999, returns: '5–8% per month', period: '60 days' },
    platinum: { key: 'platinum', name: 'PLATINUM PLAN', emoji: '🔵', min: 5000, max: 49999, returns: '9–14% per month', period: '90 days' },
    gold: { key: 'gold', name: 'GOLD PLAN', emoji: '🟡', min: 50000, max: Infinity, returns: '15–20% per month', period: '6–12 months' },
  };

  const investPlan = (planKey, amount) => {
    const plan = PLANS[planKey];
    if (!plan) return { success: false, message: 'Invalid plan selected' };
    const num = Number(amount);
    if (isNaN(num) || num <= 0) return { success: false, message: 'Enter a valid amount' };
    if (num < plan.min) return { success: false, message: `Minimum investment for ${plan.name} is Ksh ${plan.min}` };
    if (num > plan.max) return { success: false, message: `Maximum investment for ${plan.name} is Ksh ${plan.max === Infinity ? '∞' : plan.max}` };

    // Register investment locally
    const investment = { id: Date.now(), plan: planKey, amount: num, date: new Date().toISOString() };
    setInvestments(prev => [investment, ...prev]);
    // Reuse existing invest logic to affect totals
    invest(num);

    return { success: true, investment };
  };

  const addReferralCommission = (amount) => {
    const commission = amount * 0.1; // 10% commission
    setReferralEarnings(prev => prev + commission);
    setBalance(prev => prev + commission);
    return commission;
  };

  const withdraw = (amount) => {
    if (balance >= amount) {
      setBalance(prev => prev - amount);
      return true;
    }
    return false;
  };

  return (
    <BalanceContext.Provider value={{
      balance,
      totalInvestment,
      dailyGrowth,
      referralEarnings,
      investments,
      PLANS,
      invest,
      investPlan,
      addReferralCommission,
      withdraw
    }}>
      {children}
    </BalanceContext.Provider>
  );
};