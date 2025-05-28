import { FiMail } from "react-icons/fi";

export default function ContactHero() {
  return (
    <div className="bg-gift-rosegold bg-opacity-10 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="bg-gift-rosegold text-white p-4 rounded-full">
            <FiMail className="h-8 w-8" />
          </div>
          <h1 className="title-large">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you with your gifting needs.
          </p>
        </div>
      </div>
    </div>
  );
}