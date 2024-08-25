import Image from 'next/image';
import { ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const stats = [
  { name: 'Company Growth', value: 240, suffix: '%' },
  { name: 'Team Members', value: 175, suffix: '+' },
  { name: 'Projects Completed', value: 625, suffix: '+' },
];

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <Card className=" dark:bg-gray-900">
    <CardContent className="p-6">
      <div className="mb-4 text-gray-600 dark:text-gray-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-700 dark:text-gray-200">{description}</p>
    </CardContent>
  </Card>
);

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="p-6  dark:bg-gray-900 rounded-lg">
              <blockquote className="text-xl italic font-semibold text-gray-800 dark:text-gray-100">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-200">{testimonial.author}</p>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.company}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex">
      <CarouselPrevious />
      <CarouselNext />        
      </div>

    </Carousel>
  );
};

export default function AboutUsPage() {
  const testimonials = [
    { quote: "They transformed our online presence. Highly recommended!", author: "Jane Doe", company: "Tech Innovators Inc." },
    { quote: "Outstanding service and results. They truly understand web development.", author: "John Smith", company: "Digital Solutions Ltd." },
    { quote: "Professional, creative, and always on time. A pleasure to work with!", author: "Emily Brown", company: "E-commerce Experts" },
  ];

  return (
    <div className=" text-gray-900 dark:text-white">
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            About
          </h1>

          {/* First section: Image on the left, text on the right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[400px] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" 
                alt="About Us" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">We are Creative Since 2005</h2>
              <p className="text-lg">
                Driven by a passion for seamless user experiences, we&apos;ve meticulously curated our approach to empower creators, designers, and developers alike. Our mission is to provide comprehensive solutions, enabling you to build intuitive, beautiful interfaces that resonate with users on every interaction.
              </p>
              <Button className=" text-white hover:bg-gray-700 dark:0 dark:hover: transition duration-300">
                Learn More
              </Button>
            </div>
          </div>

          {/* Second section: Text on the left, image on the right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Our Innovative Approach</h2>
              <p className="text-lg">
                At the heart of our success lies an unwavering commitment to innovation. We continuously push the boundaries of what&apos;s possible, leveraging cutting-edge technologies and methodologies to deliver exceptional results. Our team&apos;s diverse expertise allows us to tackle complex challenges with creative solutions that drive your business forward.
              </p>
              <Button className=" text-white hover:bg-gray-700 dark:0 dark:hover: transition duration-300">
                Discover More
              </Button>
            </div>
            
            <div className="relative h-[400px] w-full order-1 lg:order-2">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" 
                alt="Our Approach" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold mb-8 text-center ">Our Results in Numbers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className=" dark:bg-gray-900 p-6 rounded-xl shadow-md"
                >
                  <div className="text-3xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-lg text-gray-700 dark:text-gray-200">{stat.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        




      {/* Client Testimonials Carousel */}
      <div className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <TestimonialCarousel testimonials={testimonials} />
      </div>

      {/* Team Section */}
      <div className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alice Johnson", role: "Lead Developer", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D" },
            { name: "Bob Smith", role: "UX Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdCUyMHBpYyUyMHVzZXJ8ZW58MHx8MHx8fDA%3D" },
            { name: "Carol Williams", role: "Project Manager", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{member.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section with Accordion */}
      <div className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            { question: "What types of web development projects do you handle?", answer: "We handle a wide range of web development projects, including custom websites, e-commerce platforms, web applications, and more. Our expertise covers both frontend and backend development." },
            { question: "How long does a typical web development project take?", answer: "The timeline for a web development project can vary depending on its complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take several months. We provide detailed timelines during our project planning phase." },
            { question: "Do you offer ongoing support and maintenance?", answer: "Yes, we offer ongoing support and maintenance packages to ensure your website or application continues to perform optimally. This includes regular updates, security patches, and technical support." },
            { question: "Can you help with redesigning an existing website?", answer: "Absolutely! We specialize in website redesigns, helping businesses modernize their online presence while preserving their brand identity and improving user experience." },
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-gray-800 dark:text-gray-200">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Ready to Start Your Project?</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Let&apos;s discuss how we can bring your vision to life.</p>
        <Button size="lg" className=" text-white hover:bg-gray-700 dark:0 dark:hover:">Contact Us Today</Button>
      </div>
    </div>
  );
}