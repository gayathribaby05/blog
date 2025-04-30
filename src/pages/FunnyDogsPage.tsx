import { useState } from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import FunnyContentCard from '@/components/funny/FunnyContentCard';
import { TabsList, TabsTrigger, Tabs, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { funnyDogContent } from '@/data/funnyContent';
import { PlayCircleIcon, SearchIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FunnyDogsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredContent = funnyDogContent.filter((content) =>
    content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    content.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const memes = filteredContent.filter((content) => content.type === 'meme');
  const images = filteredContent.filter((content) => content.type === 'image');
  const videos = filteredContent.filter((content) => content.type === 'video');

  return (
    <div className="container mx-auto px-4 py-10">
      <SectionHeader
        title="Funny Dog Content"
        description="Take a break and enjoy our collection of hilarious dog memes, videos, and images."
        align="center"
        icon={<PlayCircleIcon className="h-8 w-8" />}
      />

      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search funny content..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="memes">Memes</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {filteredContent.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">No content found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search term.
              </p>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredContent.map((content) => (
                <FunnyContentCard key={content.id} content={content} />
              ))}
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="memes">
          {memes.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">No memes found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search term.
              </p>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {memes.map((content) => (
                <FunnyContentCard key={content.id} content={content} />
              ))}
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="images">
          {images.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">No images found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search term.
              </p>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {images.map((content) => (
                <FunnyContentCard key={content.id} content={content} />
              ))}
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="videos">
          {videos.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">No videos found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search term.
              </p>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {videos.map((content) => (
                <FunnyContentCard key={content.id} content={content} />
              ))}
            </motion.div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}