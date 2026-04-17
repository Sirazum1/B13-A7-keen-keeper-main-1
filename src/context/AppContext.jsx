import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AppContext = createContext();

const defaultTimeline = [
  {
    id: 1,
    type: 'Call',
    friendId: 7,
    friendName: 'Sarah Kim',
    date: '2026-04-01',
    title: 'Call with Sarah Kim'
  },
  {
    id: 2,
    type: 'Text',
    friendId: 5,
    friendName: 'Olivia Martinez',
    date: '2026-03-28',
    title: 'Text with Olivia Martinez'
  },
  {
    id: 3,
    type: 'Video',
    friendId: 4,
    friendName: 'Marcus Johnson',
    date: '2026-03-23',
    title: 'Video with Marcus Johnson'
  }
];

export const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState(() => {
    const stored = localStorage.getItem('timeline_entries');
    return stored ? JSON.parse(stored) : defaultTimeline;
  });
  const [toast, setToast] = useState({
    show: false,
    message: ''
  });

  useEffect(() => {
    const loadFriends = async () => {
      try {
        setLoading(true);
        const response = await fetch('/friends.json');
        const data = await response.json();

        setTimeout(() => {
          setFriends(data);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Failed to fetch friends:', error);
        setLoading(false);
      }
    };

    loadFriends();
  }, []);

  useEffect(() => {
    localStorage.setItem('timeline_entries', JSON.stringify(timeline));
  }, [timeline]);

  const showToast = (message) => {
    setToast({ show: true, message });

    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2500);
  };

  const addInteraction = (type, friend) => {
    const today = new Date().toISOString().split('T')[0];

    const newEntry = {
      id: Date.now(),
      type,
      friendId: friend.id,
      friendName: friend.name,
      date: today,
      title: `${type} with ${friend.name}`
    };

    setTimeline((prev) => [newEntry, ...prev]);
    showToast(`${type} logged for ${friend.name}`);
  };

  const statsData = useMemo(() => {
    const counts = {
      Call: 0,
      Text: 0,
      Video: 0
    };

    timeline.forEach((item) => {
      if (counts[item.type] !== undefined) {
        counts[item.type] += 1;
      }
    });

    return [
      { name: 'Call', value: counts.Call },
      { name: 'Text', value: counts.Text },
      { name: 'Video', value: counts.Video }
    ];
  }, [timeline]);

  return (
    <AppContext.Provider
      value={{
        friends,
        loading,
        timeline,
        toast,
        addInteraction,
        statsData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);