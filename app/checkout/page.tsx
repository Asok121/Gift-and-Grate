"use client";

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingBag, CreditCard, Wallet, BanknoteIcon, Calendar, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
};

const sampleCartItems: CartItem[] = [
  {
    id: 'flowers-1',
    name: 'Flowers Gift 1',
    image: 'https://source.unsplash.com/random/600x600/?flowers,gift,1',
    price: 1299,
    size: 'Regular',
    quantity: 1
  },
  {
    id: 'cakes-3',
    name: 'Cakes Gift 3',
    image: 'https://source.unsplash.com/random/600x600/?cake,gift,1',
    price: 849,
    size: 'Small',
    quantity: 2
  }
];

type AddressDetails = {
  fullName: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

type PaymentMethod = 'card' | 'upi' | 'cod';

export default function CheckoutPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState<'address' | 'payment' | 'confirmation'>('address');
  const [addressDetails, setAddressDetails] = useState<AddressDetails>({
    fullName: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [processing, setProcessing] = useState(false);
  
  const cartItems = sampleCartItems;
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 999 ? 0 : 99;
  const total = subtotal + deliveryFee;
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddressDetails(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(`Updated ${name} to ${value}`);
  };
  
  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Address details submitted:', addressDetails);
    setStep('payment');
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing payment with method:', paymentMethod);
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setStep('confirmation');
      toast({
        title: "Order Placed Successfully!",
        description: "Your order has been confirmed and will be shipped soon."
      });
    }, 1500);
  };
  
  const handleReturnHome = () => {
    router.push('/');
  };
  
  const isAddressFormValid = (
    addressDetails.fullName && 
    addressDetails.mobile && 
    addressDetails.address && 
    addressDetails.city && 
    addressDetails.state && 
    addressDetails.pincode
  );

  return (
    <main className="min-h-screen">
      <NavBar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-deepplum mb-2">Checkout</h1>
          <p className="text-deepplum/70">Complete your purchase</p>
        </div>

        {/* Checkout Steps */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="flex items-center text-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'address' ? 'bg-rosegold text-white' : 'bg-rosegold text-white'}`}>
                  1
                </div>
                <span className={`text-sm mt-2 ${step === 'address' ? 'text-deepplum font-medium' : 'text-deepplum'}`}>Address</span>
              </div>
              <div className={`w-12 h-1 ${step === 'address' ? 'bg-gray-200' : 'bg-rosegold'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'payment' ? 'bg-rosegold text-white' : step === 'confirmation' ? 'bg-rosegold text-white' : 'bg-gray-200 text-gray-400'}`}>
                  2
                </div>
                <span className={`text-sm mt-2 ${step === 'payment' ? 'text-deepplum font-medium' : step === 'confirmation' ? 'text-deepplum' : 'text-gray-400'}`}>Payment</span>
              </div>
              <div className={`w-12 h-1 ${step === 'confirmation' ? 'bg-rosegold' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'confirmation' ? 'bg-rosegold text-white' : 'bg-gray-200 text-gray-400'}`}>
                  3
                </div>
                <span className={`text-sm mt-2 ${step === 'confirmation' ? 'text-deepplum font-medium' : 'text-gray-400'}`}>Confirmation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {step === 'address' && (
                <form onSubmit={handleAddressSubmit}>
                  <h2 className="text-xl font-semibold text-deepplum mb-6">Delivery Address</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-deepplum mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        value={addressDetails.fullName}
                        onChange={handleAddressChange}
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-deepplum mb-1">Mobile Number</label>
                      <input 
                        type="tel" 
                        id="mobile" 
                        name="mobile"
                        value={addressDetails.mobile}
                        onChange={handleAddressChange}
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-deepplum mb-1">Address</label>
                    <textarea 
                      id="address" 
                      name="address"
                      value={addressDetails.address}
                      onChange={handleAddressChange}
                      rows={3}
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-deepplum mb-1">City</label>
                      <input 
                        type="text" 
                        id="city" 
                        name="city"
                        value={addressDetails.city}
                        onChange={handleAddressChange}
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-deepplum mb-1">State</label>
                      <input 
                        type="text" 
                        id="state" 
                        name="state"
                        value={addressDetails.state}
                        onChange={handleAddressChange}
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium text-deepplum mb-1">Pincode</label>
                      <input 
                        type="text" 
                        id="pincode" 
                        name="pincode"
                        value={addressDetails.pincode}
                        onChange={handleAddressChange}
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-8">
                    <Button type="button" variant="outline" onClick={() => router.push('/cart')}>
                      Back to Cart
                    </Button>
                    <Button type="submit" className="btn-primary" disabled={!isAddressFormValid}>
                      Continue to Payment
                    </Button>
                  </div>
                </form>
              )}
              
              {step === 'payment' && (
                <form onSubmit={handlePaymentSubmit}>
                  <h2 className="text-xl font-semibold text-deepplum mb-6">Payment Method</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div 
                      className={`p-4 border rounded-md flex items-start cursor-pointer ${paymentMethod === 'card' ? 'border-rosegold bg-blushpink/10' : 'border-gray-200'}`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <div className="mr-3 mt-1">
                        <input 
                          type="radio" 
                          id="card" 
                          name="paymentMethod" 
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-rosegold' : 'border-gray-300'}`}>
                          {paymentMethod === 'card' && (
                            <div className="w-3 h-3 rounded-full bg-rosegold"></div>
                          )}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <label htmlFor="card" className="flex items-center cursor-pointer">
                          <CreditCard className="text-rosegold mr-2" size={20} />
                          <span className="font-medium">Credit/Debit Card</span>
                        </label>
                        <p className="text-sm text-deepplum/70 mt-1">Pay securely with your card</p>
                      </div>
                    </div>
                    
                    <div 
                      className={`p-4 border rounded-md flex items-start cursor-pointer ${paymentMethod === 'upi' ? 'border-rosegold bg-blushpink/10' : 'border-gray-200'}`}
                      onClick={() => setPaymentMethod('upi')}
                    >
                      <div className="mr-3 mt-1">
                        <input 
                          type="radio" 
                          id="upi" 
                          name="paymentMethod" 
                          checked={paymentMethod === 'upi'}
                          onChange={() => setPaymentMethod('upi')}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'upi' ? 'border-rosegold' : 'border-gray-300'}`}>
                          {paymentMethod === 'upi' && (
                            <div className="w-3 h-3 rounded-full bg-rosegold"></div>
                          )}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <label htmlFor="upi" className="flex items-center cursor-pointer">
                          <Wallet className="text-rosegold mr-2" size={20} />
                          <span className="font-medium">UPI / Google Pay / PhonePe</span>
                        </label>
                        <p className="text-sm text-deepplum/70 mt-1">Pay instantly with UPI</p>
                      </div>
                    </div>
                    
                    <div 
                      className={`p-4 border rounded-md flex items-start cursor-pointer ${paymentMethod === 'cod' ? 'border-rosegold bg-blushpink/10' : 'border-gray-200'}`}
                      onClick={() => setPaymentMethod('cod')}
                    >
                      <div className="mr-3 mt-1">
                        <input 
                          type="radio" 
                          id="cod" 
                          name="paymentMethod" 
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-rosegold' : 'border-gray-300'}`}>
                          {paymentMethod === 'cod' && (
                            <div className="w-3 h-3 rounded-full bg-rosegold"></div>
                          )}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <label htmlFor="cod" className="flex items-center cursor-pointer">
                          <BanknoteIcon className="text-rosegold mr-2" size={20} />
                          <span className="font-medium">Cash on Delivery</span>
                        </label>
                        <p className="text-sm text-deepplum/70 mt-1">Pay when you receive your order</p>
                      </div>
                    </div>
                  </div>
                  
                  {paymentMethod === 'card' && (
                    <div className="border rounded-md p-4 mb-8">
                      <h3 className="text-lg font-medium text-deepplum mb-4">Card Details</h3>
                      <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-deepplum mb-1">Card Number</label>
                        <input 
                          type="text" 
                          id="cardNumber" 
                          placeholder="1234 5678 9012 3456"
                          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-deepplum mb-1">Expiry Date</label>
                          <input 
                            type="text" 
                            id="expiry" 
                            placeholder="MM/YY"
                            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-deepplum mb-1">CVV</label>
                          <input 
                            type="text" 
                            id="cvv" 
                            placeholder="123"
                            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-deepplum mb-1">Name on Card</label>
                        <input 
                          type="text" 
                          id="cardName" 
                          placeholder="John Doe"
                          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                        />
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'upi' && (
                    <div className="border rounded-md p-4 mb-8">
                      <h3 className="text-lg font-medium text-deepplum mb-4">UPI Payment</h3>
                      <div>
                        <label htmlFor="upiId" className="block text-sm font-medium text-deepplum mb-1">UPI ID</label>
                        <input 
                          type="text" 
                          id="upiId" 
                          placeholder="yourname@upi"
                          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blushpink"
                        />
                      </div>
                      <p className="text-sm text-deepplum/70 mt-4">You will receive a payment request on your UPI app</p>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center mt-8">
                    <Button type="button" variant="outline" onClick={() => setStep('address')}>
                      Back to Address
                    </Button>
                    <Button type="submit" className="btn-primary" disabled={processing}>
                      {processing ? 'Processing...' : 'Place Order'}
                    </Button>
                  </div>
                </form>
              )}
              
              {step === 'confirmation' && (
                <div className="text-center py-8">
                  <div className="h-20 w-20 mx-auto bg-softcream rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-rosegold" size={40} />
                  </div>
                  <h2 className="text-2xl font-semibold text-deepplum mb-4">Order Confirmed!</h2>
                  <p className="text-deepplum/70 mb-2 max-w-md mx-auto">
                    Your order #GG-{Math.floor(100000 + Math.random() * 900000)} has been placed successfully.
                  </p>
                  <p className="text-deepplum/70 mb-8 max-w-md mx-auto">
                    We've sent a confirmation email with your order details.
                  </p>
                  <div className="flex justify-center items-center mt-2 mb-8">
                    <Calendar className="text-deepplum mr-2" size={20} />
                    <span>Estimated Delivery: {new Date(Date.now() + 2*24*60*60*1000).toLocaleDateString('en-IN')}</span>
                  </div>
                  <Button className="btn-primary" onClick={handleReturnHome}>
                    Return to Home
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Section: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
              <h2 className="text-xl font-semibold text-deepplum mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium text-deepplum">{item.name}</h3>
                      <p className="text-xs text-deepplum/70">Size: {item.size}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-deepplum/70">Qty: {item.quantity}</span>
                        <span className="text-sm font-medium text-deepplum">₹{item.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-deepplum/70">Subtotal</span>
                  <span className="text-deepplum font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-deepplum/70">Delivery</span>
                  <span className="text-deepplum font-medium">
                    {deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-deepplum font-semibold">Total</span>
                    <span className="text-deepplum font-bold">₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
