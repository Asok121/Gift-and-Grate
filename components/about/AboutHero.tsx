import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1523407210695-4d5fbc72ee7c?q=80&w=1746&auto=format&fit=crop"
        alt="About Gift & Grate"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            From passion to premium gifting experiences
          </p>
        </div>
      </div>
    </div>
  );
}