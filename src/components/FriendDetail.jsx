import { useParams } from 'react-router-dom';
import { Phone, MessageSquare, Video, Clock3, Archive, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import LoadingSpinner from './LoadingSpinner';

const FriendDetail = () => {
  const { id } = useParams();
  const { friends, loading, addInteraction } = useAppContext();

  if (loading) {
    return (
      <div className="bg-[#f6f8fb] min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  const friend = friends.find((item) => item.id === parseInt(id));

  if (!friend) {
    return (
      <div className="bg-[#f6f8fb] min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Friend not found</h2>
          <p className="text-sm text-gray-500">This profile does not exist.</p>
        </div>
      </div>
    );
  }

  const statusClasses =
    friend.status === 'overdue'
      ? 'bg-red-100 text-red-600'
      : friend.status === 'almost due'
      ? 'bg-yellow-100 text-yellow-700'
      : 'bg-green-100 text-green-700';

  return (
    <div className="bg-[#f6f8fb] min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />

          <h2 className="text-2xl font-bold mt-4 text-center text-gray-800">
            {friend.name}
          </h2>

          <div className="flex justify-center mt-3">
            <span className={`text-xs px-3 py-1 rounded-full font-semibold ${statusClasses}`}>
              {friend.status}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className={`text-[10px] px-2 py-1 rounded-full font-medium ${
                  index % 2 === 0
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500 italic mt-4 text-center leading-6">
            {friend.bio}
          </p>

          <p className="text-sm text-gray-500 mt-4 text-center">{friend.email}</p>

          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 bg-white py-3 rounded-lg text-sm hover:bg-gray-50 transition-all">
              <Clock3 size={16} />
              Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 bg-white py-3 rounded-lg text-sm hover:bg-gray-50 transition-all">
              <Archive size={16} />
              Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 border border-red-200 bg-red-50 text-red-600 py-3 rounded-lg text-sm hover:bg-red-100 transition-all">
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <p className="text-2xl font-bold text-[#1f5b48]">{friend.days_since_contact}</p>
              <p className="text-xs text-gray-500 mt-2">Days Since Contact</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <p className="text-2xl font-bold text-[#1f5b48]">{friend.goal}</p>
              <p className="text-xs text-gray-500 mt-2">Goal (Days)</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <p className="text-base font-bold text-[#1f5b48]">{friend.next_due_date}</p>
              <p className="text-xs text-gray-500 mt-2">Next Due Date</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Relationship Goal</h3>
              <p className="text-sm text-gray-500 mt-1">
                Connect every {friend.goal} days
              </p>
            </div>

            <button className="border border-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-50">
              Edit
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => addInteraction('Call', friend)}
                className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-xl py-6 text-sm hover:bg-gray-50 transition-all"
              >
                <Phone size={18} />
                Call
              </button>

              <button
                onClick={() => addInteraction('Text', friend)}
                className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-xl py-6 text-sm hover:bg-gray-50 transition-all"
              >
                <MessageSquare size={18} />
                Text
              </button>

              <button
                onClick={() => addInteraction('Video', friend)}
                className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-xl py-6 text-sm hover:bg-gray-50 transition-all"
              >
                <Video size={18} />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;