import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const statusClasses =
    friend.status === 'overdue'
      ? 'bg-red-100 text-red-600'
      : friend.status === 'almost due'
      ? 'bg-yellow-100 text-yellow-700'
      : 'bg-green-100 text-green-700';

  return (
    <Link
      to={`/friend/${friend.id}`}
      className="block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />

      <h2 className="text-base font-semibold text-center text-gray-800">
        {friend.name}
      </h2>

      <p className="text-center text-xs text-gray-400 mb-3">
        {friend.days_since_contact} days ago
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-3">
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

      <p className={`w-fit mx-auto text-[10px] px-3 py-1 rounded-full font-semibold ${statusClasses}`}>
        {friend.status}
      </p>
    </Link>
  );
};

export default FriendCard;