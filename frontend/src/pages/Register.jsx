import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authAPI } from '../services/api';
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const [referredBy, setReferredBy] = useState('');

  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
      setReferredBy(ref);
    }
  }, [searchParams]);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Registering with:', formData);
      
      const response = await authAPI.register(formData);
      console.log('Registration response:', response);
      login(response.data);
      navigate('/');
    } catch (err) {
      console.error('Registration error:', err);
      console.error('Error response:', err.response?.data);
      setError(err.response?.data?.message || err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-8 sm:py-12 px-4">
      <div className="max-w-md w-full space-y-6 sm:space-y-8">
        <div>
          <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-extrabold text-white">
            Create your account
          </h2>
          {referredBy && (
            <div className="mt-4 p-3 bg-green-900 bg-opacity-30 border border-green-600 rounded-lg text-center">
              <p className="text-green-200 text-sm">
                🎉 You were referred by: <span className="font-semibold">{referredBy}</span>
              </p>
            </div>
          )}
        </div>
        <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          <div className="space-y-3 sm:space-y-4">
            <input
              type="text"
              required
              className="w-full px-3 py-3 sm:py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder-gray-400 text-base"
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              required
              className="w-full px-3 py-3 sm:py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder-gray-400 text-base"
              placeholder="Phone (07xxxxxxxx)"
              pattern="^07\d{8}$"
              maxLength="10"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <div className="relative">
              <input
                type="number"
                required
                className="w-full px-3 py-3 sm:py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder-gray-400 text-base"
                placeholder="4-digit PIN"
                maxLength="4"
                pattern="\d{4}"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value.slice(0, 4) })}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 sm:py-2 px-4 border border-transparent rounded-md shadow-sm text-base sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign up'}
          </button>

          <div className="text-center">
            <Link to="/login" className="text-orange-600 hover:text-orange-500">
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;