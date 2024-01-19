"use client"
const LoadingCard = () => (
  <div className="flex items-center justify-center h-1/2 mt-32">
    <div className="animate-pulse bg-gray-200 p-6 rounded-md shadow-md">
      <div className="h-8 bg-gray-300 w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-300 w-3/4"></div>
    </div>
  </div>
)

export default LoadingCard
