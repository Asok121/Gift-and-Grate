"use client";

import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import Link from 'next/link';
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

// Sample cart items
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

export default function CartPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading cart data
    const timer = setTimeout(() => {
      setCartItems(sampleCartItems);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    console.log(`Updated quantity for ${id} to ${newQuantity}`);
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Product has been removed from your cart"
    });
    console.log(`Removed item ${id} from cart`);
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 999 ? 0 : 99;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems);
    router.push('/checkout');
  };

  return (
    <main className="min-h-screen">
      <NavBar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-deepplum mb-2">Your Cart</h1>
          <p className="text-deepplum/70">Review your items before checkout</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-blushpink/50 flex items-center justify-center mb-4">
                <ShoppingBag className="text-rosegold" size={24} />
              </div>
              <p className="text-deepplum/70">Loading your cart...</p>
            </div>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="h-20 w-20 mx-auto bg-softcream rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="text-rosegold" size={32} />
            </div>
            <h2 className="text-2xl font-semibold text-deepplum mb-4">Your cart is empty</h2>
            <p className="text-deepplum/70 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Browse our collection to find the perfect gift.
            </p>
            <Button asChild className="btn-primary">
              <Link href="/categories">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {cartItems.map((item, index) => (
                  <div key={item.id} className={`p-4 sm:p-6 flex flex-col sm:flex-row gap-4 ${index < cartItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="sm:w-24 sm:h-24 h-auto">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-semibold text-deepplum">{item.name}</h3>
                        <button 
                          className="text-rosegold hover:text-red-500 transition-colors"
                          onClick={() => removeItem(item.id)}
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-sm text-deepplum/70 mb-2">Size: {item.size}</p>
                      <p className="font-semibold text-rosegold mb-3">₹{item.price.toLocaleString()}</p>
                      
                      <div className="flex items-center">
                        <button 
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="mx-3 text-deepplum">{item.quantity}</span>
                        <button 
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button asChild variant="outline" className="text-deepplum">
                  <Link href="/categories">Continue Shopping</Link>
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-deepplum mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
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
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-deepplum font-semibold">Total</span>
                      <span className="text-deepplum font-bold">₹{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="btn-primary w-full flex items-center justify-center gap-2" 
                  onClick={handleCheckout}
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </Button>
                
                <div className="mt-6 text-center text-sm text-deepplum/60">
                  <p>We accept multiple payment methods</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <div className="w-10 h-6 bg-gray-100 rounded"></div>
                    <div className="w-10 h-6 bg-gray-100 rounded"></div>
                    <div className="w-10 h-6 bg-gray-100 rounded"></div>
                    <div className="w-10 h-6 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
