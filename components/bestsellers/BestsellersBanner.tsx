import { FiAward } from "react-icons/fi";

export default function BestsellersBanner() {
  return (
    <div className="bg-gift-rosegold bg-opacity-10 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="bg-gift-rosegold text-white p-4 rounded-full">
            <FiAward className="h-8 w-8" />
          </div>
          <h1 className="title-large">Our Bestsellers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular gifts loved by customers across India
          </p>
        </div>
      </div>
    </div>
  );
}