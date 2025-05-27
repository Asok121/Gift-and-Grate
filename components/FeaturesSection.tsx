import { Truck, Clock, Gift, ThumbsUp } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Same Day Delivery",
    description: "Order by 3PM for same-day delivery across Coimbatore",
    icon: Clock
  },
  {
    id: 2,
    title: "Premium Quality",
    description: "Handcrafted gifts using the finest quality materials",
    icon: ThumbsUp
  },
  {
    id: 3,
    title: "Personalization",
    description: "Add a personal touch to make your gift unique",
    icon: Gift
  },
  {
    id: 4,
    title: "Reliable Shipping",
    description: "Safe packaging and on-time delivery guaranteed",
    icon: Truck
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-3 text-deepplum">
            Why Choose Gift & Grate?
          </h2>
          <p className="text-lg text-deepplum/70 max-w-2xl mx-auto">
            Experience premium gifting with our exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="bg-softcream p-6 rounded-xl text-center hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blushpink/20 text-rosegold mb-4">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-2 text-deepplum">
                  {feature.title}
                </h3>
                <p className="text-deepplum/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;