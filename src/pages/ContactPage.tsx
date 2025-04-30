import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { SectionHeader } from '@/components/ui/section-header';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast.success('Your message has been sent!', {
        description: 'We will get back to you as soon as possible.',
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <SectionHeader
        title="Contact Us"
        description="Have questions about dog breeds or need assistance? We're here to help!"
        align="center"
        icon={<MailIcon className="h-8 w-8" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MailIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email Us</h3>
                <p className="text-muted-foreground mb-1">For general inquiries:</p>
                <a 
                  href="mailto:info@pawsomebreeds.com" 
                  className="text-primary hover:underline"
                >
                  info@pawsomebreeds.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <PhoneIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Call Us</h3>
                <p className="text-muted-foreground mb-1">Monday to Friday, 9am-5pm EST:</p>
                <a 
                  href="tel:+15551234567" 
                  className="text-primary hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MapPinIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Bark Avenue<br />
                  Dogtown, CA 90210<br />
                  United States
                </p>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden h-[300px] relative mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1652813469068!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="What is this regarding?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help you?" 
                        className="min-h-[150px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <SendIcon className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </Form>
          
          <div className="mt-8 bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}