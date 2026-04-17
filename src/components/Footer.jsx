const Footer = () => {
  return (
    <footer className="bg-[#1f5b48] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-bold mb-4">KeenKeeper</h2>

        <p className="text-sm text-gray-200 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        <h3 className="text-sm font-semibold mb-4">Social Links</h3>

        <div className="flex justify-center space-x-4 mb-10">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-all">
            <img src="/images/facebook.png" alt="Facebook" className="w-4 h-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-all">
            <img src="/images/instagram.png" alt="Instagram" className="w-4 h-4" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-all">
            <img src="/images/twitter.png" alt="Twitter" className="w-4 h-4" />
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 gap-4">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;