import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <span className="text-9xl mb-6">🐾</span>
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-muted-foreground text-lg max-w-md mb-8">
        It seems like you've wandered off the trail. This page doesn't exist, but there are plenty of dog breeds to explore!
      </p>
      <Button asChild>
        <Link to="/" className="flex items-center gap-2">
          <HomeIcon className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}