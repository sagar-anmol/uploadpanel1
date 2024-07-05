"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

// Define the type for the props
interface Page1Props {
  setActiveSegment: (segment: string) => void;
}

// Annotate the functional component with the props type
const Page1: React.FC<Page1Props> = ({ setActiveSegment }) => {
  return (
    <>
      <div className="flex justify-center mt-20 mb-10"> 
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Remote Upload Now</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                I&apos;ve read the answers and know how to upload. I&apos;m excited to start earning money and embedding all the content on my streaming website to generate income.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setActiveSegment('page2')}>Start</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Accordion type="single" collapsible className="mx-auto ml-auto mr-auto max-w-screen-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>How to Upload?</AccordionTrigger>
            <AccordionContent>
              You can upload the content by pasting the download link here (always try to paste the highest quality)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Anyone can embed my content?</AccordionTrigger>
            <AccordionContent>
              Yes. Also, you can embed others&apos; content but the revenue from the ads of your content comes to you, irrespective of who embedded your content and vice versa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it multi-quality?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s multi-quality by default, which includes various qualities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it downloadable?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s downloadable, and also helps to increase your earnings.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Page1;
