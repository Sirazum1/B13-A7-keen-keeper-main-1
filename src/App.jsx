import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import FriendDetail from './components/FriendDetail';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Toast from './context/Toast';
import { AppProvider, useAppContext } from './context/AppContext';

const AppLayout = () => {
  const { toast } = useAppContext();

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      <Toast show={toast.show} message={toast.message} />
      <Navbar />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/friend/:id" element={<FriendDetail />} />

        <Route path="/add-friend" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <Router>
        <AppLayout />
      </Router>
    </AppProvider>
  );
}

export default App;