import { FiGrid } from "react-icons/fi";

export default function AllCategoriesBanner() {
  return (
    <div className="bg-gift-pink bg-opacity-20 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="bg-gift-rosegold text-white p-4 rounded-full">
            <FiGrid className="h-8 w-8" />
          </div>
          <h1 className="title-large">All Categories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide selection of gift categories for every special occasion
          </p>
        </div>
      </div>
    </div>
  );
}