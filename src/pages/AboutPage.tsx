import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HeartIcon, InfoIcon, UsersIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Veterinarian',
      bio: 'Sarah has been a practicing veterinarian for over 15 years with a special focus on canine health and behavior.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      initials: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Dog Behavior Specialist',
      bio: 'Michael has trained over 500 dogs and specializes in understanding breed-specific behaviors and training techniques.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      initials: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Creator',
      bio: 'Emily creates engaging, informative content about different dog breeds and is the curator of our funny dog content.',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      initials: 'ER',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <SectionHeader
        title="About PawsomeBreeds"
        description="Learn about our mission and the team behind the comprehensive dog breed information website."
        align="center"
        icon={<InfoIcon className="h-8 w-8" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            At PawsomeBreeds, our mission is to provide comprehensive, accurate, and
            accessible information about dog breeds to help people make informed
            decisions when choosing a canine companion. We believe that matching
            the right person with the right dog breed leads to happier homes and
            fewer dogs in shelters.
          </p>
          <p className="text-muted-foreground mb-6">
            We're passionate about dogs and committed to educating the public about
            different breeds' characteristics, needs, and temperaments. Our team
            of veterinarians, dog trainers, and breed experts collaborates to
            ensure all information is up-to-date and reliable.
          </p>
          <div className="flex items-center gap-2 text-primary">
            <HeartIcon className="h-5 w-5" />
            <span className="font-medium">Helping humans find their perfect canine match since 2021</span>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="aspect-video rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Dog with owner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 translate-y-1/4 -translate-x-8">
            <div className="bg-background rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Happy dog"
                className="w-48 h-48 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SectionHeader
          title="Meet Our Team"
          description="The experts behind PawsomeBreeds who work tirelessly to bring you accurate and helpful dog breed information."
          align="center"
          icon={<UsersIcon className="h-8 w-8" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-[3/2] relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border-2 border-background -mt-10">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <div className="mt-20 bg-muted/30 rounded-xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <InfoIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Accuracy</h3>
                  <p className="text-muted-foreground">
                    We pride ourselves on providing accurate, well-researched
                    information that dog owners can rely on for making important
                    decisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <HeartIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Compassion</h3>
                  <p className="text-muted-foreground">
                    We believe in promoting responsible dog ownership and the
                    humane treatment of all animals through education and
                    awareness.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <UsersIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Community</h3>
                  <p className="text-muted-foreground">
                    We foster a supportive community where dog lovers can share
                    experiences, advice, and celebrate the joy that dogs bring to
                    our lives.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}