"use client";

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { CheckCircle, Truck, Package, Clock } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [orderDetails, setOrderDetails] = useState<null | {
    orderNumber: string;
    status: 'processing' | 'shipped' | 'outForDelivery' | 'delivered';
    date: string;
    estimatedDelivery: string;
    items: { name: string; quantity: number }[];
  }>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    console.log('Tracking order:', orderNumber);
    
    // Simulate API call to track order
    setTimeout(() => {
      if (orderNumber.startsWith('GG-')) {
        // Demo order data
        setOrderDetails({
          orderNumber,
          status: ['processing', 'shipped', 'outForDelivery', 'delivered'][Math.floor(Math.random() * 4)] as any,
          date: new Date(Date.now() - Math.random() * 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN'),
          estimatedDelivery: new Date(Date.now() + Math.random() * 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN'),
          items: [
            { name: 'Flowers Gift Bundle', quantity: 1 },
            { name: 'Birthday Cake - Chocolate', quantity: 1 }
          ]
        });
      } else {
        setOrderDetails(null);
      }
      setIsTracking(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen">
      <NavBar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-deepplum mb-4">Track Your Order</h1>
          <p className="text-lg text-deepplum/70 max-w-2xl mx-auto">Enter your order number to check the status of your delivery</p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm p-8 mb-8">
          <form onSubmit={handleTrack}>
            <div className="mb-6">
              <label htmlFor="orderNumber" className="block text-sm font-medium text-deepplum mb-2">Order Number</label>
              <input 
                type="text" 
                id="orderNumber" 
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="e.g., GG-123456"
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                required
              />
              <p className="text-sm text-deepplum/60 mt-1">You can find your order number in your confirmation email</p>
            </div>
            
            <Button 
              type="submit" 
              className="btn-primary w-full" 
              disabled={isTracking || !orderNumber}
            >
              {isTracking ? 'Tracking...' : 'Track Order'}
            </Button>
          </form>
        </div>

        {orderDetails ? (
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="border-b border-gray-100 pb-6 mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-deepplum">Order {orderDetails.orderNumber}</h2>
                  <p className="text-deepplum/70">Placed on {orderDetails.date}</p>
                </div>
                <div className="bg-blushpink/10 py-2 px-4 rounded-full text-rosegold font-medium">
                  {orderDetails.status === 'processing' && 'Processing'}
                  {orderDetails.status === 'shipped' && 'Shipped'}
                  {orderDetails.status === 'outForDelivery' && 'Out for Delivery'}
                  {orderDetails.status === 'delivered' && 'Delivered'}
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-deepplum mb-4">Tracking Status</h3>
              
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-100"></div>
                
                {/* Steps */}
                <div className="space-y-6">
                  <div className="flex items-start relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${orderDetails.status !== 'processing' ? 'bg-green-100 text-green-600' : 'bg-blushpink text-white'}`}>
                      {orderDetails.status !== 'processing' ? <CheckCircle size={20} /> : <Clock size={20} />}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-deepplum">Order Processing</h4>
                      <p className="text-sm text-deepplum/70">We're preparing your order</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      orderDetails.status === 'shipped' || orderDetails.status === 'outForDelivery' || orderDetails.status === 'delivered' 
                        ? 'bg-green-100 text-green-600' 
                        : orderDetails.status === 'processing' ? 'bg-gray-100 text-gray-400' : 'bg-blushpink text-white'
                    }`}>
                      {orderDetails.status === 'shipped' || orderDetails.status === 'outForDelivery' || orderDetails.status === 'delivered' 
                        ? <CheckCircle size={20} /> 
                        : <Package size={20} />}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-deepplum">Order Shipped</h4>
                      <p className="text-sm text-deepplum/70">Your order is on its way</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      orderDetails.status === 'outForDelivery' || orderDetails.status === 'delivered' 
                        ? 'bg-green-100 text-green-600' 
                        : orderDetails.status === 'processing' || orderDetails.status === 'shipped' ? 'bg-gray-100 text-gray-400' : 'bg-blushpink text-white'
                    }`}>
                      {orderDetails.status === 'outForDelivery' || orderDetails.status === 'delivered' 
                        ? <CheckCircle size={20} /> 
                        : <Truck size={20} />}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-deepplum">Out for Delivery</h4>
                      <p className="text-sm text-deepplum/70">Our delivery partner is bringing your order to you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      orderDetails.status === 'delivered' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      <CheckCircle size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-deepplum">Delivered</h4>
                      <p className="text-sm text-deepplum/70">Your order has been delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-deepplum mb-3">Order Summary</h3>
                <div className="space-y-3">
                  {orderDetails.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-deepplum/80">{item.name} × {item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-deepplum mb-3">Delivery Information</h3>
                <p className="text-deepplum/80 mb-2">Estimated delivery: {orderDetails.estimatedDelivery}</p>
                
                <div className="mt-4">
                  <p className="text-sm text-deepplum/70">
                    If you have any questions about your order, please contact our customer support.
                  </p>
                  <Button className="btn-primary mt-2" onClick={() => window.location.href = '/contact'}>
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : orderNumber && !isTracking ? (
          <div className="max-w-xl mx-auto text-center bg-white rounded-lg shadow-sm p-8">
            <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-500">!</span>
            </div>
            <h2 className="text-xl font-semibold text-deepplum mb-2">Order Not Found</h2>
            <p className="text-deepplum/70 mb-6">
              We couldn't find an order with the number "{orderNumber}". Please check the order number and try again.
            </p>
            <p className="text-deepplum/70 text-sm">
              For demo purposes, please use an order number starting with "GG-" (e.g., GG-123456).
            </p>
          </div>
        ) : null}
      </div>
      
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
