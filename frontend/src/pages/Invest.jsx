import InvestmentPlans from '../components/InvestmentPlans';

const Invest = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            🔥 Investment Plans That Print Money While You Sleep
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Choose your wealth-building strategy
          </p>
        </div>
        
        <InvestmentPlans />
        
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg">
          <p className="text-white text-lg font-semibold mb-2">
            ⏰ Limited Time: First 100 investors get 10% bonus on any plan
          </p>
          <p className="text-green-100 text-sm">
            🔒 Zero risk — Withdraw your principal anytime, keep all profits
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invest;