"use client"
import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, Globe, Figma, Paintbrush, Code, Laptop } from 'lucide-react';
import ShineBorder from "@/components/magicui/shine-border";
interface WebDevProjectProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

interface DesignProjectProps {
  title: string;
  image: string;
  category: string;
}

const iconMap: { [key: string]: JSX.Element } = {
  React: <Code className="text-blue-500" />,
  Vue: <Code className="text-green-500" />,
  Angular: <Code className="text-red-500" />,
  Figma: <Figma className="text-purple-500" />,
  Web: <Globe className="text-gray-500" />,
  Design: <Paintbrush className="text-pink-500" />,
};

const WebDevProject: React.FC<WebDevProjectProps> = ({ title, description, image, techStack, link }) => (
  <ShineBorder className="group  bg-opacity-0 dark:bg-white  dark:bg-opacity-0"  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
  <Card className="group bg-opacity-0 dark:bg-white border-none dark:bg-opacity-0">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="relative h-64 w-full overflow-hidden rounded-lg">
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="group-hover:opacity-75 transition-opacity duration-300"
        />
      </div>
      <CardDescription className="mt-4 text-gray-900 dark:text-white">{description}</CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <div className="flex space-x-2">
        {techStack.map((tech, index) => (
          <span key={index} className="flex items-center text-sm ">
            {iconMap[tech] || <Laptop className="mr-1" />}          
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
        <Globe size={20} />
      </a>
    </CardFooter>
  </Card>
  </ShineBorder>
);

const DesignProject: React.FC<DesignProjectProps> = ({ title, image, category }) => (
  
  <Dialog>
    <DialogTrigger asChild>
      <Card className="group dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-black dark:via-gray-700 dark:to-blue-900 cursor-pointer">
        <CardContent className="p-0">
          <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
            <Image 
              src={image} 
              alt={title} 
              layout="fill" 
              objectFit="cover" 
              className="group-hover:opacity-75 transition-opacity duration-300"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-5 items-center">
          <CardTitle className="text-sm">{title}</CardTitle>
          {iconMap[category] || <Paintbrush className="text-pink-500" />}
        </CardFooter>
      </Card>
    </DialogTrigger>
    <DialogContent>
      <div className="relative h-[70vh]  w-full">
        <Image src={image} alt={title} layout="fill"  objectFit="contain" />
      </div>
    </DialogContent>
  </Dialog>
);
const webProjects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive online store with cart functionality and secure checkout.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/ecommerce"
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
    techStack: ["Vue", "Firebase", "Tailwind"],
    link: "https://example.com/taskmanager"
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media performance across platforms.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww",
    techStack: ["Angular", "D3.js", "Express"],
    link: "https://example.com/socialdashboard"
  }
];

const designProjects = [
  { title: "Brand Identity Design", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmQlMjBpZGVudGl0eXxlbnwwfHwwfHx8MA%3D%3D", category: "Figma" },
  { title: "Mobile App UI/UX", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwJTIwdWl8ZW58MHx8MHx8fDA%3D", category: "Design" },
  { title: "Website Redesign", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D", category: "Web" },
];

export default function Portfolio() {
  return (
    <div >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl flex justify-center items center font-bold text-gray-900 dark:text-white mb-8">Our Portfolio</h2>
          
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="py-6 px-2 mb-5 flex justify-center w-full ">
              <TabsTrigger value="web" className="text-xl flex justify-center w-full">Web </TabsTrigger>
              <TabsTrigger value="design" className="text-xl flex justify-center w-full">Design</TabsTrigger>
            </TabsList>

            
            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webProjects.map((project, index) => (
                  <WebDevProject key={index} {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="design">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designProjects.map((project, index) => (
                  <DesignProject key={index} {...project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}