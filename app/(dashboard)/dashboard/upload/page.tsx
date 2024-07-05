"use client";

import React, { useState } from 'react';
import Page1 from './segments/Page1';
import Page2 from './segments/Page2';
import Page3 from './segments/Page3';
import Episodes from './segments/Page4';



import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"



const Page = () => {
    const [activeSegment, setActiveSegment] = useState('Page1');

  const renderSegment = () => {
    switch (activeSegment) {
      case 'page1':
        return <Page1 setActiveSegment={setActiveSegment} />;
      case 'page2':
        return <Page2 setActiveSegment={setActiveSegment} />;
      case 'page3':
        return <Page3 setActiveSegment={setActiveSegment} />;
      case 'episodes':
        return <Episodes setActiveSegment={setActiveSegment} />;
      default:
        return <Page1 setActiveSegment={setActiveSegment} />;
    }
  };
  return (
    <>
<Alert className='mx-6'>
      
      <AlertTitle>Only Hindi language   हिंदी  </AlertTitle>
      <AlertDescription>
        Other language contents will be deleted and the uploader might face suspension.
      </AlertDescription>
    </Alert>

    <p className="text-2xl text-center">Upload Panel</p>
    <div>
        {renderSegment()}
      </div>
    


    </>
  )
}

export default Page