const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#1f5b48] border-t-transparent"></div>
        <p className="mt-4 text-sm text-gray-500">Loading friends...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;