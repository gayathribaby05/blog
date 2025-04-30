import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Eye, Heart } from 'lucide-react';
import { type Dog } from '@/types/dog';

interface BreedCardProps {
  breed: Dog;
}

export default function BreedCard({ breed }: BreedCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card 
        className="overflow-hidden h-full flex flex-col border-2 hover:border-primary/50 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={breed.image}
            alt={breed.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-80' : 'opacity-70'
            }`}
          ></div>
          
          <div className="absolute top-3 right-3 z-10">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${
                isFavorited 
                  ? 'bg-primary/20 text-primary hover:bg-primary/30' 
                  : 'bg-black/20 text-white hover:bg-black/30'
              }`}
              onClick={toggleFavorite}
              aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart 
                className={`h-5 w-5 ${isFavorited ? 'fill-primary' : ''}`} 
              />
            </Button>
          </div>
          
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            <Badge className="bg-primary/80 hover:bg-primary">{breed.size}</Badge>
            {breed.goodWithKids && (
              <Badge variant="secondary" className="bg-secondary/80 hover:bg-secondary">
                Kid-Friendly
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="flex-grow p-5">
          <h3 className="text-xl font-bold mb-2">{breed.name}</h3>
          <p className="text-muted-foreground text-sm line-clamp-3">{breed.description}</p>
        </CardContent>

        <CardFooter className="p-5 pt-0">
          <Link to={`/breeds/${breed.id}`} className="w-full">
            <Button 
              variant="outline" 
              className="w-full group hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <Eye className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}