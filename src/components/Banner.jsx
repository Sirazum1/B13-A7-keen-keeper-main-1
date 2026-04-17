import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import FriendCard from './FriendCard';
import LoadingSpinner from './LoadingSpinner';
import { useAppContext } from '../context/AppContext';

const Banner = () => {
  const { friends, loading, timeline } = useAppContext();

  const onTrackCount = friends.filter((friend) => friend.status === 'on-track').length;
  const needAttentionCount = friends.filter(
    (friend) => friend.status === 'overdue' || friend.status === 'almost due'
  ).length;

  if (loading) {
    return (
      <section className="bg-[#f6f8fb] min-h-screen px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f6f8fb] min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl text-center px-8 py-12 shadow-sm mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Friends to keep close in your life
          </h1>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-8 leading-6">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <Link
            to="/add-friend"
            className="inline-flex items-center gap-2 bg-[#1f5b48] text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-[#174739] transition-all"
          >
            <UserPlus size={16} />
            Add a Friend
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-[#1f5b48]">{friends.length}</h3>
            <p className="text-xs text-gray-500 mt-2">Total Friends</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-[#1f5b48]">{onTrackCount}</h3>
            <p className="text-xs text-gray-500 mt-2">On Track</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-[#1f5b48]">{needAttentionCount}</h3>
            <p className="text-xs text-gray-500 mt-2">Need Attention</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-[#1f5b48]">{timeline.length}</h3>
            <p className="text-xs text-gray-500 mt-2">Interactions Logged</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;