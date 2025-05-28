"use client";

import { useState } from "react";
import { FiPackage, FiSearch, FiMapPin, FiTruck, FiHome, FiCheck } from "react-icons/fi";
import { toast } from "@/hooks/use-toast";

export default function TrackOrderForm() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState<null | {
    id: string;
    date: string;
    status: "processing" | "shipped" | "out_for_delivery" | "delivered";
    customer: string;
    items: number;
    total: number;
    deliveryDate: string;
    currentStep: number;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Tracking order:", { orderId, email });
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      if (orderId === "GG123456" || orderId.toLowerCase() === "demo") {
        // Demo order for testing
        setOrderStatus({
          id: "GG123456",
          date: "May 26, 2025",
          status: "shipped",
          customer: "John Doe",
          items: 3,
          total: 2499,
          deliveryDate: "May 29, 2025",
          currentStep: 2,
        });
        toast({
          title: "Order Found",
          description: "We've found your order details.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Order Not Found",
          description: "We couldn't find an order with these details. Please check and try again.",
        });
      }
    }, 1500);
  };

  const steps = [
    { icon: FiPackage, label: "Order Processing" },
    { icon: FiTruck, label: "Order Shipped" },
    { icon: FiMapPin, label: "Out for Delivery" },
    { icon: FiHome, label: "Delivered" },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gift-text mb-2">Track Your Order</h1>
        <p className="text-gray-600">
          Enter your order details below to check the current status of your delivery
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-1">
            Order ID *
          </label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="e.g. GG123456 (try 'demo' for a sample)"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gift-rosegold focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email used for the order"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gift-rosegold focus:border-transparent"
          />
        </div>
        
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center bg-gift-rosegold text-white font-medium py-3 px-6 rounded-md hover:bg-gift-gold transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              'Searching...'
            ) : (
              <>
                <FiSearch className="mr-2" />
                Track Order
              </>
            )}
          </button>
        </div>
      </form>
      
      {orderStatus && (
        <div className="mt-10 border-t pt-8">
          <div className="bg-gift-pink bg-opacity-20 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Order ID</p>
                <p className="font-semibold text-gift-text">{orderStatus.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Order Date</p>
                <p className="font-semibold text-gift-text">{orderStatus.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Items</p>
                <p className="font-semibold text-gift-text">{orderStatus.items} items</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Order Total</p>
                <p className="font-semibold text-gift-text">₹{orderStatus.total}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="font-semibold text-gift-text capitalize">
                  {orderStatus.status.replace('_', ' ')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Expected Delivery</p>
                <p className="font-semibold text-gift-text">{orderStatus.deliveryDate}</p>
              </div>
            </div>
          </div>
          
          <h3 className="font-semibold text-lg text-gift-text mb-4">Delivery Progress</h3>
          
          <div className="relative">
            {/* Progress bar */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200">
              <div 
                className="h-full bg-gift-rosegold transition-all duration-500" 
                style={{ width: `${(orderStatus.currentStep / (steps.length - 1)) * 100}%` }} 
              />
            </div>
            
            {/* Steps */}
            <div className="flex justify-between">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index <= orderStatus.currentStep;
                const isCompleted = index < orderStatus.currentStep;
                
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${isActive ? 'bg-gift-rosegold text-white' : 'bg-gray-200 text-gray-400'} transition-colors duration-300`}
                    >
                      {isCompleted ? <FiCheck className="h-5 w-5" /> : <StepIcon className="h-5 w-5" />}
                    </div>
                    <p className={`mt-2 text-sm ${isActive ? 'text-gift-text font-medium' : 'text-gray-500'} text-center`}>
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need help with your order? Contact our customer support at{' '}
              <a href="tel:+919876543210" className="text-gift-rosegold hover:underline">
                +91 98765 43210
              </a>{' '}
              or via{' '}
              <a href="mailto:support@giftandgrate.com" className="text-gift-rosegold hover:underline">
                support@giftandgrate.com
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}