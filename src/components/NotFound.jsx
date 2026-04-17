import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] bg-[#f6f8fb] flex items-center justify-center px-6">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 max-w-lg w-full text-center">
        <p className="text-sm font-semibold text-[#1f5b48] mb-3">404 Error</p>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Page not found</h1>
        <p className="text-sm text-gray-500 mb-8 leading-6">
          Sorry, the page you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-[#1f5b48] px-5 py-3 text-sm font-medium text-white hover:bg-[#174739] transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;