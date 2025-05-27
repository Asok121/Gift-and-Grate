import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: "Flowers",
    image: "https://images.unsplash.com/photo-1591829086114-2cd654e45df4?q=80&w=1172&auto=format&fit=crop",
    link: "/categories/flowers"
  },
  {
    id: 2,
    name: "Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1089&auto=format&fit=crop",
    link: "/categories/cakes"
  },
  {
    id: 3,
    name: "Hampers",
    image: "https://images.unsplash.com/photo-1575466726361-30f332eb99a6?q=80&w=1170&auto=format&fit=crop",
    link: "/categories/hampers"
  },
  {
    id: 4,
    name: "Personalized",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1074&auto=format&fit=crop",
    link: "/categories/personalized"
  }
];

const CategorySection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-3 text-deepplum">
            Shop by Category
          </h2>
          <p className="text-lg text-deepplum/70 max-w-2xl mx-auto">
            Explore our curated collection of premium gifts for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={category.link} key={category.id} className="group">
              <div className="rounded-xl overflow-hidden card-hover relative">
                <div className="aspect-square relative">
                  <Image 
                    src={category.image} 
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-deepplum/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold font-montserrat group-hover:text-blushpink transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;