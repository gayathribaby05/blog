import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DogIcon, 
  HeartIcon, 
  HomeIcon, 
  InfoIcon, 
  Ruler, 
  Activity, 
  Heart, 
  Sparkles
} from "lucide-react";
import { dogBreeds } from "@/data/breeds";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function BreedDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);
  
  const breed = dogBreeds.find(dog => dog.id === Number(id));
  
  if (!breed) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Breed Not Found</h2>
        <p className="mb-6">Sorry, we couldn't find the breed you're looking for.</p>
        <Button onClick={() => navigate("/breeds")}>Return to All Breeds</Button>
      </div>
    );
  }

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast.success(
      isFavorited 
        ? `${breed.name} removed from favorites` 
        : `${breed.name} added to favorites`
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/breeds")}
        className="mb-4 hover:bg-background"
      >
        <HomeIcon className="h-4 w-4 mr-2" />
        Back to All Breeds
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img 
                  src={breed.image} 
                  alt={breed.name} 
                  className="w-full aspect-square object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-4 right-4 rounded-full ${
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
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <DogIcon className="h-6 w-6" />
                    {breed.name}
                  </CardTitle>
                  <CardDescription>{breed.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-primary/80">{breed.size}</Badge>
                    {breed.goodWithKids && (
                      <Badge variant="outline">Kid-Friendly</Badge>
                    )}
                    {breed.goodWithPets && (
                      <Badge variant="outline">Pet-Friendly</Badge>
                    )}
                  </div>
                  
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Size</TableCell>
                        <TableCell>{breed.size}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Weight</TableCell>
                        <TableCell>{breed.weight}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Lifespan</TableCell>
                        <TableCell>{breed.lifespan}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Energy Level</TableCell>
                        <TableCell>{breed.energyLevel}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Friendliness</TableCell>
                        <TableCell>{breed.friendliness}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="facts">Fun Facts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <InfoIcon className="h-5 w-5 text-primary" />
                    <CardTitle>Breed Overview</CardTitle>
                  </div>
                  <CardDescription>
                    Essential characteristics and traits of the {breed.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Temperament</h3>
                    <p>{breed.temperament}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-card/50">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <Ruler className="h-4 w-4 text-primary" />
                          <CardTitle className="text-sm">Size</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{breed.size}</p>
                        <p className="text-sm text-muted-foreground">{breed.weight}</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-card/50">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-primary" />
                          <CardTitle className="text-sm">Energy</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{breed.energyLevel}</p>
                        <p className="text-sm text-muted-foreground">{breed.exercise}</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-card/50">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <HeartIcon className="h-4 w-4 text-primary" />
                          <CardTitle className="text-sm">Friendliness</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{breed.friendliness}</p>
                        <p className="text-sm text-muted-foreground">
                          {breed.goodWithKids ? 'Good with children' : 'May not be ideal for children'}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">About {breed.name}s</h3>
                    <p className="text-muted-foreground">
                      The {breed.name} is known for its {breed.temperament.toLowerCase()} nature.
                      With a lifespan of {breed.lifespan}, these dogs make wonderful companions
                      for {breed.friendliness === 'High' || breed.friendliness === 'Very High' 
                        ? 'families and individuals alike' 
                        : 'experienced dog owners'}.
                      They require {breed.exercise.toLowerCase()} and are {breed.trainability.toLowerCase()}.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="care" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <InfoIcon className="h-5 w-5 text-primary" />
                    <CardTitle>Care Requirements</CardTitle>
                  </div>
                  <CardDescription>
                    How to properly care for your {breed.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Grooming</h3>
                    <p className="mb-4">{breed.grooming}</p>
                    <div className="bg-card/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Grooming Tips</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Brush regularly to reduce shedding and prevent mats</li>
                        <li>Clean ears weekly to prevent infections</li>
                        <li>Trim nails every few weeks</li>
                        <li>Brush teeth regularly for dental health</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Exercise</h3>
                    <p className="mb-4">{breed.exercise}</p>
                    <div className="bg-card/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Exercise Recommendations</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {breed.energyLevel === 'High' || breed.energyLevel === 'Very High' ? (
                          <>
                            <li>Daily walks totaling at least 60 minutes</li>
                            <li>Active play sessions or fetch games</li>
                            <li>Consider dog sports like agility or flyball</li>
                            <li>Mental stimulation through puzzle toys</li>
                          </>
                        ) : breed.energyLevel === 'Medium' ? (
                          <>
                            <li>Daily walks totaling 30-45 minutes</li>
                            <li>Moderate play sessions</li>
                            <li>Interactive toys for mental stimulation</li>
                          </>
                        ) : (
                          <>
                            <li>Short daily walks of 15-20 minutes</li>
                            <li>Gentle play sessions</li>
                            <li>Avoid strenuous activity, especially in hot weather</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Training</h3>
                    <p className="mb-4">{breed.trainability}</p>
                    <div className="bg-card/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Training Tips</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Use positive reinforcement techniques</li>
                        <li>Be consistent with commands and boundaries</li>
                        <li>Start socialization early with different people and animals</li>
                        <li>Keep training sessions short and fun</li>
                        {breed.trainability.includes("stubborn") && (
                          <li>Be patient and persistent as this breed can be stubborn</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="health" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <InfoIcon className="h-5 w-5 text-primary" />
                    <CardTitle>Health Information</CardTitle>
                  </div>
                  <CardDescription>
                    Common health concerns and preventive care
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Common Health Issues</h3>
                    <p className="mb-4">{breed.health}</p>
                    <div className="bg-card/50 p-4 rounded-lg mb-6">
                      <h4 className="font-medium mb-2">Watch for These Signs</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {breed.health.includes("hip") && (
                          <li>Difficulty rising, climbing stairs, or jumping</li>
                        )}
                        {breed.health.includes("eye") && (
                          <li>Redness, cloudiness, or discharge from eyes</li>
                        )}
                        {breed.health.includes("skin") && (
                          <li>Excessive scratching, redness, or hair loss</li>
                        )}
                        {breed.health.includes("ear") && (
                          <li>Head shaking, scratching at ears, or unusual odor</li>
                        )}
                        {breed.health.includes("breathing") || breed.health.includes("respiratory") ? (
                          <li>Difficulty breathing, excessive panting, or snoring</li>
                        ) : null}
                        <li>Changes in appetite, thirst, or energy levels</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Preventive Care</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border border-muted">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Regular Vet Visits</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Schedule annual checkups to catch potential issues early. 
                            Senior dogs (7+ years) should visit every 6 months.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-muted">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Vaccinations</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Keep vaccinations up to date, including rabies, 
                            distemper, parvovirus, and others recommended by your vet.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-muted">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Dental Care</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Brush teeth regularly and consider professional 
                            cleanings to prevent dental disease.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-muted">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Proper Diet</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Feed high-quality food appropriate for age, size, and 
                            activity level to maintain healthy weight.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="facts" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <CardTitle>Fun Facts</CardTitle>
                  </div>
                  <CardDescription>
                    Interesting and surprising facts about {breed.name}s
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {breed.funFacts.map((fact, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                          {index + 1}
                        </div>
                        <div className="flex-1 text-muted-foreground">{fact}</div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 p-4 bg-card/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Did You Know?</h3>
                    <p className="text-muted-foreground">
                      The {breed.name} ranks among the 
                      {breed.temperament.includes("Intelligent") || breed.trainability.includes("intelligent") 
                        ? " most intelligent " 
                        : breed.temperament.includes("Friendly") 
                          ? " friendliest " 
                          : breed.temperament.includes("Loyal") 
                            ? " most loyal " 
                            : " popular "}
                      dog breeds in the world. They are known for their 
                      {breed.temperament.toLowerCase().includes("active") 
                        ? " active lifestyle and " 
                        : " "} 
                      distinctive appearance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}