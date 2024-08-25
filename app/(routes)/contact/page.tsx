"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <main className="py-20">
            <div className="text-center ">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
          Contact Us 
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          We&apos;d love to talk about how we can help you.
        </p>
      </div>
      <div className="flex items-center justify-center my-7">
        <div className="mr-4">
          <a href="tel:+237671595993" className="text-blue-600 hover:underline">Call Me</a>
        </div>
        <div>
          <a href="https://wa.me/671595993" className="text-green-600 hover:underline">WhatsApp Me</a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="lg:mb-0 mb-10">
            <Card className="w-full h-full bg-cover bg-[url(https://images.unsplash.com/photo-1511140973288-19bf21d7e771?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] text-dark">
            
            </Card>
          </div>

          <Card >
            <CardHeader>
              <CardTitle className="text-yellow-400 text-3xl font-semibold">Send Us A Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone" />
              <div>
                <Label className="text-gray-500 mb-2 block">Preferred method of communication</Label>
                <RadioGroup defaultValue="email" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email" />
                    <Label htmlFor="email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone" />
                    <Label htmlFor="phone">Phone</Label>
                  </div>
                </RadioGroup>
              </div>
              <Input type="text" placeholder="Message" />
              <Button className="w-full ">Send</Button>
            </CardContent>
          </Card>
        </div>
      </div>


    </main>
  );
}