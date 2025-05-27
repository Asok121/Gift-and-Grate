"use client";

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag, Calendar, TruckIcon, Award, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

type Props = {
  params: {
    productId: string;
  };
};

export default function ProductPage({ params }: Props) {
  // Access productId directly from params
  const productId = params.productId;
  const router = useRouter();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Regular');
  const [addingToCart, setAddingToCart] = useState(false);

  // Extract category and product ID
  const [category, productNum] = productId.split('-');
  
  // Generate product data based on ID
  const product = {
    id: productId,
    name: `${category.charAt(0).toUpperCase() + category.slice(1)} Gift ${productNum}`,
    price: Math.floor(Math.random() * 3000) + 500,
    description: `Beautiful ${category} gift arrangement, perfect for any occasion. Made with premium materials and careful attention to detail.`,
    images: [
      `https://source.unsplash.com/random/600x600/?${category},gift,1`,
      `https://source.unsplash.com/random/600x600/?${category},gift,2`,
      `https://source.unsplash.com/random/600x600/?${category},gift,3`
    ],
    sizes: ['Small', 'Regular', 'Large', 'Premium'],
    sizePrices: {
      'Small': Math.floor(Math.random() * 1000) + 500,
      'Regular': Math.floor(Math.random() * 2000) + 1000,
      'Large': Math.floor(Math.random() * 3000) + 1500,
      'Premium': Math.floor(Math.random() * 4000) + 2000
    },
    deliveryDate: new Date(Date.now() + 2*24*60*60*1000).toLocaleDateString('en-IN'),
    rating: (Math.random() * 1 + 4).toFixed(1),
    reviews: Math.floor(Math.random() * 100) + 50
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => q > 1 ? q - 1 : 1);

  const handleAddToCart = () => {
    console.log('Adding to cart:', { product, quantity, selectedSize });
    setAddingToCart(true);
    
    // Simulate API call
    setTimeout(() => {
      setAddingToCart(false);
      toast({
        title: "Added to cart!",
        description: `${product.name} (${selectedSize}) × ${quantity}`,
      });
    }, 800);
  };

  const handleBuyNow = () => {
    console.log('Buy now:', { product, quantity, selectedSize });
    handleAddToCart();
    // Navigate to cart page
    setTimeout(() => {
      router.push('/cart');
    }, 1000);
  };

  return (
    <main className="min-h-screen">
      <NavBar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4 h-96 md:h-[500px]">
              <img 
                src={selectedImage} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`bg-white rounded-md overflow-hidden h-24 ${selectedImage === image ? 'ring-2 ring-rosegold' : 'opacity-70'}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-deepplum mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-festivegold mr-4">
                <span className="text-sm mr-1">★</span>
                <span className="text-sm mr-1">★</span>
                <span className="text-sm mr-1">★</span>
                <span className="text-sm mr-1">★</span>
                <span className="text-sm mr-2">★</span>
                <span className="text-sm text-deepplum">{product.rating}</span>
              </div>
              <span className="text-sm text-deepplum/60">{product.reviews} reviews</span>
            </div>
            
            <div className="text-2xl font-bold text-rosegold mb-6">
              ₹{product.sizePrices[selectedSize].toLocaleString()}
            </div>
            
            <p className="text-deepplum/80 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-md border ${selectedSize === size ? 'bg-blushpink border-rosegold' : 'border-gray-300 bg-white'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size} - ₹{product.sizePrices[size].toLocaleString()}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center">
                <button 
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <span className="mx-4 text-lg">{quantity}</span>
                <button 
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="btn-secondary flex-1 gap-2" 
                onClick={handleAddToCart}
                disabled={addingToCart}
              >
                <ShoppingBag size={18} />
                {addingToCart ? 'Adding...' : 'Add to Cart'}
              </Button>
              <Button 
                className="btn-primary flex-1 gap-2" 
                onClick={handleBuyNow}
                disabled={addingToCart}
              >
                Buy Now
              </Button>
              <Button variant="outline" className="w-12 h-12 p-0 flex items-center justify-center">
                <Heart size={20} className="text-rosegold" />
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start mb-4">
                <Calendar className="text-rosegold mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold">Delivery Date</h4>
                  <p>Estimated delivery on {product.deliveryDate}</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <TruckIcon className="text-rosegold mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold">Free Delivery</h4>
                  <p>On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="text-rosegold mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold">Quality Guarantee</h4>
                  <p>100% satisfaction or full refund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
