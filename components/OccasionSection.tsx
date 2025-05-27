import { Button } from './ui/button';

const occasions = [
  {
    id: 1,
    name: "Birthday",
    emoji: "🎂",
    link: "/occasions/birthday"
  },
  {
    id: 2,
    name: "Anniversary",
    emoji: "💍",
    link: "/occasions/anniversary"
  },
  {
    id: 3,
    name: "Love & Romance",
    emoji: "❤️",
    link: "/occasions/love"
  },
  {
    id: 4,
    name: "Congratulations",
    emoji: "🎉",
    link: "/occasions/congratulations"
  },
  {
    id: 5,
    name: "Thank You",
    emoji: "🙏",
    link: "/occasions/thank-you"
  },
  {
    id: 6,
    name: "Festivals",
    emoji: "✨",
    link: "/occasions/festivals"
  }
];

const OccasionSection = () => {
  return (
    <section className="section-padding bg-blushpink/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-3 text-deepplum">
            Shop by Occasion
          </h2>
          <p className="text-lg text-deepplum/70 max-w-2xl mx-auto">
            Find the perfect gift for every special moment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {occasions.map((occasion) => (
            <Button 
              key={occasion.id} 
              variant="outline" 
              className="flex flex-col items-center justify-center p-6 h-auto bg-white hover:bg-blushpink/20 border-2 border-blushpink/20 hover:border-blushpink rounded-2xl transition-all hover-lift"
              asChild
            >
              <a href={occasion.link}>
                <span className="text-3xl mb-2">{occasion.emoji}</span>
                <span className="font-montserrat font-medium text-deepplum">{occasion.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccasionSection;