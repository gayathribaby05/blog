import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BreedHero() {
  const scrollToBreeds = () => {
    const breedsSection = document.getElementById('breeds-section');
    if (breedsSection) {
      breedsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover the Perfect Dog Breed for Your Lifestyle
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore 50+ dog breeds with comprehensive information about temperament, 
            care requirements, and suitability for your home.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg"
              onClick={scrollToBreeds}
            >
              Explore Breeds
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white text-lg"
              asChild
            >
              <Link to="/funny">
                Funny Dog Content
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
        <motion.button
          onClick={scrollToBreeds}
          className="bg-white/20 p-3 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          aria-label="Scroll down"
        >
          <ArrowDownIcon className="h-6 w-6 text-white" />
        </motion.button>
      </div>
    </div>
  );
}