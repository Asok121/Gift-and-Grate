import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-softcream p-4 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-rosegold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-deepplum mb-6">Page Not Found</h2>
        <p className="text-lg text-deepplum/80 mb-8">
          We couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="btn-secondary">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-rosegold text-rosegold hover:bg-rosegold/10">
            <Link href="/categories">Browse Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
