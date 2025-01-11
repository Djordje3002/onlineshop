

function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-400"></div>
      </div>
      <p className="text-white mt-4 text-lg animate-pulse">Loading, please wait...</p>
    </div>
  );
}

export default LoadingPage;
