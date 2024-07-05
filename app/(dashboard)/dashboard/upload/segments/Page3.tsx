"use client";
import React, { useEffect, useState } from 'react';
import Episodes from './Page4';

type SessionData = {
  selectedMovieId: string;
  selectedMovieType: string;
  selectedMovieTitle: string;
};

type ApiData = {
  id: string;
  title: string;
  type: string;
};

type AdditionalApiData = {
  detail: string;
};

type Page3Props = {
  setActiveSegment: (segment: string) => void;
};

const Page3: React.FC<Page3Props> = ({ setActiveSegment }) => {
  const [sessionData, setSessionData] = useState<Partial<SessionData>>({});
  const [apiData, setApiData] = useState<Partial<ApiData>>({});
  const [additionalApiData, setAdditionalApiData] = useState<Partial<AdditionalApiData>>({});

  useEffect(() => {
    const data: Partial<SessionData> = {
      selectedMovieId: sessionStorage.getItem('selectedMovieId') || '',
      selectedMovieType: sessionStorage.getItem('selectedMovieType') || '',
      selectedMovieTitle: sessionStorage.getItem('selectedMovieTitle') || ''
    };
    setSessionData(data);
  }, []);

  useEffect(() => {
    const fetchApiData = async () => {
      if (sessionData.selectedMovieId && sessionData.selectedMovieType) {
        try {
          const response = await fetch(`https://call.sagaranmol.link/?type=check&id=${sessionData.selectedMovieType}-${sessionData.selectedMovieId}`);
          const result = await response.json();
          console.log(result.total_videos);
          setApiData(result);

          if (result.total_videos === 0) {
            const additionalResponse = await fetch(`https://call.sagaranmol.link/?type=new&id=${sessionData.selectedMovieType}-${sessionData.selectedMovieId}`);
            const additionalResult = await additionalResponse.json();
            setAdditionalApiData(additionalResult);
          } else {
            alert('The content already exists');
            alert('Try uploading another');
            setActiveSegment('page2');
          }
        } catch (error) {
          console.error('Error fetching API data:', error);
        }
      }
    };

    fetchApiData();
  }, [sessionData, setActiveSegment]); // Run this effect when sessionData changes

  return (
    <>
      <div>
        <ul>
          {sessionData.selectedMovieId && (
            <li>
              <strong>Selected Movie ID:</strong> {sessionData.selectedMovieId}
            </li>
          )}
          {sessionData.selectedMovieType && (
            <li>
              <strong>Selected Movie Type:</strong> {sessionData.selectedMovieType}
            </li>
          )}
          {sessionData.selectedMovieTitle && (
            <li>
              <strong>Selected Movie Title:</strong> {sessionData.selectedMovieTitle}
            </li>
          )}
        </ul>
      </div>
      <div style={{ position: 'absolute', bottom: 0 }}>
        {/* Content from the Side */}
        <Episodes setActiveSegment={setActiveSegment} />
        {/* Content from the Side */}
      </div>
    </>
  );
};

export default Page3;
