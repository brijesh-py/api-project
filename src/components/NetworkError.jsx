const NetworkError = () => {
  return (
    <div className="text-center mx-auto space-y-3 p-4">
      <h1 className="text-white text-3xl font-bold">Network Error</h1>
      <p className="text-gray-300 text-sm">
        Oops! It seems that something went wrong while trying to connect to the
        network. Please check your internet connection and try again.
      </p>
      <a href={""} className="text-blue-500">
        Retry
      </a>
    </div>
  );
};

export default NetworkError;
