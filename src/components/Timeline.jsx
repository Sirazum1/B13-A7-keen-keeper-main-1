import { useState } from 'react';
import { Phone, MessageSquare, Video, ChevronDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Timeline = () => {
  const { timeline } = useAppContext();
  const [filter, setFilter] = useState('All');

  const filteredTimeline =
    filter === 'All'
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const iconMap = {
    Call: <Phone size={18} />,
    Text: <MessageSquare size={18} />,
    Video: <Video size={18} />
  };

  return (
    <div className="bg-[#f6f8fb] min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Timeline</h2>

        <div className="mb-6 relative w-full max-w-xs">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 shadow-sm outline-none"
          >
            <option value="All">All Interactions</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>

          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="space-y-4">
          {filteredTimeline.length > 0 ? (
            filteredTimeline.map((entry) => (
              <div
                key={entry.id}
                className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1f5b48]">
                  {iconMap[entry.type]}
                </div>

                <div>
                  <p className="font-semibold text-gray-800">{entry.title}</p>
                  <p className="text-sm text-gray-500 mt-1">Date: {entry.date}</p>
                  <p className="text-sm text-gray-500">Type: {entry.type}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center text-gray-500">
              No timeline entries found for this filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;