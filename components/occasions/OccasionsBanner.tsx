import { FiCalendar } from "react-icons/fi";

export default function OccasionsBanner() {
  return (
    <div className="bg-gift-gold bg-opacity-10 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="bg-gift-gold text-white p-4 rounded-full">
            <FiCalendar className="h-8 w-8" />
          </div>
          <h1 className="title-large">Shop by Occasion</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect gift for every special moment in life
          </p>
        </div>
      </div>
    </div>
  );
}