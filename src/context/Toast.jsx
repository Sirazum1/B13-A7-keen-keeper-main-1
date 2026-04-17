const Toast = ({ message, show }) => {
  return (
    <div
      className={`fixed right-5 top-5 z-50 rounded-lg bg-[#1f5b48] px-4 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;