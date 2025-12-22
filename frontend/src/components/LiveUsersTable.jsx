import { useState, useEffect } from 'react';
import { allNames } from '../data/names';

const LiveUsersTable = () => {
  
  const [users, setUsers] = useState([]);
  const [usedNames, setUsedNames] = useState(new Set());
  const [availableNames, setAvailableNames] = useState([...allNames]);

  const generateUser = () => {
    if (availableNames.length === 0) {
      setAvailableNames([...allNames]);
      setUsedNames(new Set());
    }
    
    const nameIndex = Math.floor(Math.random() * availableNames.length);
    const selectedName = availableNames[nameIndex];
    
    setAvailableNames(prev => prev.filter((_, index) => index !== nameIndex));
    setUsedNames(prev => new Set([...prev, selectedName]));
    
    // Generate more realistic investment amounts with variety
    let investment;
    const rand = Math.random();
    if (rand < 0.4) {
      // 40% chance: 100-999 (hundreds)
      investment = Math.floor(Math.random() * 900) + 100;
    } else if (rand < 0.7) {
      // 30% chance: 1000-4999 (low thousands)
      investment = Math.floor(Math.random() * 4000) + 1000;
    } else if (rand < 0.9) {
      // 20% chance: 5000-15000 (mid range)
      investment = Math.floor(Math.random() * 10000) + 5000;
    } else {
      // 10% chance: 15000-30000 (high amounts)
      investment = Math.floor(Math.random() * 15000) + 15000;
    }
    
    return {
      name: selectedName,
      investment: investment,
      payout: Math.floor(Math.random() * 95000) + 5000, // 5000-100000
      status: Math.random() > 0.3 ? 'Paid' : 'Processing',
      stage: Math.random() > 0.3 ? 2 : 1,
      createdAt: Date.now(),
      id: Math.random()
    };
  };

  useEffect(() => {
    // Initialize with 15 users
    const initialUsers = Array.from({ length: 15 }, generateUser);
    setUsers(initialUsers);

    // Add new user every 20 seconds and remove oldest
    const interval = setInterval(() => {
      setUsers(prev => {
        const newUsers = [...prev];
        // Remove 5 random users and add 5 new ones
        for (let i = 0; i < 5; i++) {
          const randomIndex = Math.floor(Math.random() * newUsers.length);
          newUsers.splice(randomIndex, 1);
          newUsers.push(generateUser());
        }
        return newUsers;
      });
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  // Progress from Processing (Big Chance payout) to Paid (amount payout)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setUsers(prev => 
        prev.map(user => {
          if (user.stage === 1 && (now - user.createdAt) >= 10000) {
            return { ...user, stage: 2, status: 'Paid' };
          }
          return user;
        })
      );
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="max-h-96 overflow-y-auto overflow-x-auto">
        <table className="w-full min-w-full table-auto">
          <thead className="bg-gray-700 sticky top-0">
            <tr>
              <th className="px-2 sm:px-4 py-3 text-left text-white font-semibold text-xs sm:text-sm whitespace-nowrap">Name</th>
              <th className="px-2 sm:px-4 py-3 text-left text-white font-semibold text-xs sm:text-sm whitespace-nowrap">Investment</th>
              <th className="px-2 sm:px-4 py-3 text-left text-white font-semibold text-xs sm:text-sm whitespace-nowrap">Payout</th>
              <th className="px-2 sm:px-4 py-3 text-left text-white font-semibold text-xs sm:text-sm whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr 
                key={user.id} 
                className={`border-b border-gray-700 hover:bg-gray-800 transition-all duration-500 ${
                  index === users.length - 1 ? 'animate-pulse bg-gray-800' : ''
                }`}
              >
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-300 text-xs sm:text-sm font-medium whitespace-nowrap">{user.name}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-green-400 font-semibold text-xs sm:text-sm whitespace-nowrap">
                  KES {user.investment.toLocaleString()}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-green-400 font-semibold text-xs sm:text-sm whitespace-nowrap">
                  {user.stage === 1 ? (
                    <span className="text-yellow-400 animate-pulse">Bonus Chance</span>
                  ) : (
                    `KES ${user.payout.toLocaleString()}`
                  )}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3">
                  <span className={`px-1 sm:px-2 py-1 rounded text-xs ${
                    user.status === 'Paid' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-blue-600 text-white animate-pulse'
                  } whitespace-nowrap`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveUsersTable;