import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import BreedCard from '@/components/breeds/BreedCard';
import BreedHero from '@/components/breeds/BreedHero';
import FunnyContentCard from '@/components/funny/FunnyContentCard';
import { dogBreeds } from '@/data/breeds';
import { funnyDogContent } from '@/data/funnyContent';
import { DogIcon, PlayCircleIcon, PawPrintIcon, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  // Get 3 featured breeds
  const featuredBreeds = dogBreeds.slice(0, 3);
  // Get 4 funny content items
  const featuredFunnyContent = funnyDogContent.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <BreedHero />
      
      {/* Featured Breeds Section */}
      <section className="py-16 px-4" id="breeds-section">
        <div className="container mx-auto">
          <SectionHeader
            title="Explore Popular Dog Breeds"
            description="Discover detailed information about the most popular dog breeds and find your perfect canine companion."
            align="center"
            icon={<DogIcon className="h-8 w-8" />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/breeds" className="flex items-center gap-2">
                View All Breeds
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <SectionHeader
            title="Why Choose PawsomeBreeds"
            description="We provide comprehensive, reliable information to help you make informed decisions about your furry friend."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-card rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DogIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Breed Information</h3>
              <p className="text-muted-foreground">
                Access comprehensive data on 50+ dog breeds, including temperament, 
                care requirements, and health concerns.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <PlayCircleIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fun Content Collection</h3>
              <p className="text-muted-foreground">
                Enjoy a curated selection of hilarious dog videos, memes, and 
                images to brighten your day.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <PawPrintIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Breed Compatibility</h3>
              <p className="text-muted-foreground">
                Find the perfect dog breed for your lifestyle with our detailed 
                compatibility information and search filters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Funny Content Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader
            title="Fun Dog Content"
            description="Take a break and enjoy some of the funniest and most heartwarming dog content from around the web."
            align="center"
            icon={<PlayCircleIcon className="h-8 w-8" />}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFunnyContent.map((content) => (
              <FunnyContentCard key={content.id} content={content} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/funny" className="flex items-center gap-2">
                More Funny Content
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect Canine Companion
            </h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Whether you're looking for an energetic running partner or a cuddly lap dog,
              we have all the information you need to make the perfect choice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                asChild
              >
                <Link to="/breeds">Explore All Breeds</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}