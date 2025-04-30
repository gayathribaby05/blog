import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShareIcon, ThumbsUpIcon } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { FunnyContent } from '@/data/funnyContent';

interface FunnyContentCardProps {
  content: FunnyContent;
}

export default function FunnyContentCard({ content }: FunnyContentCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 100) + 10);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`Check out this funny dog content: ${content.title}`);
    toast.success('Link copied to clipboard!');
  };

  const renderContent = () => {
    switch (content.type) {
      case 'image':
      case 'meme':
        return (
          <div className="overflow-hidden rounded-t-lg">
            <img
              src={content.source}
              alt={content.title}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        );
      case 'video':
        return (
          <div className="aspect-video rounded-t-lg overflow-hidden">
            <iframe
              src={content.source}
              title={content.title}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative">
          {renderContent()}
          <Badge 
            className="absolute top-3 right-3" 
            variant="secondary"
          >
            {content.type === 'meme' ? 'Meme' : content.type === 'video' ? 'Video' : 'Image'}
          </Badge>
        </div>
        
        <CardContent className="flex-grow pt-4">
          <h3 className="font-medium text-lg mb-1">{content.title}</h3>
          <p className="text-muted-foreground text-sm">{content.description}</p>
        </CardContent>
        
        <CardFooter className="border-t py-3 px-4 flex justify-between">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center gap-1 ${isLiked ? 'text-primary' : ''}`}
            onClick={handleLike}
          >
            <ThumbsUpIcon className={`h-4 w-4 ${isLiked ? 'fill-primary' : ''}`} />
            <span>{likeCount}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={handleShare}
          >
            <ShareIcon className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}