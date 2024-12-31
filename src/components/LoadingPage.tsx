export const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900 backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};
