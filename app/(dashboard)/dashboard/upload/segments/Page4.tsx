'use client'
import { Button } from "@/components/ui/button"
// pages/episodes.js

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';


// Define the type for the props
interface Episodes1Props {
    setActiveSegment: (segment: string) => void;
  }
  
  // Annotate the functional component with the props type
  const Episodes: React.FC<Episodes1Props> = ({ setActiveSegment }) => {

  const [numEpisodes, setNumEpisodes] = useState(0);
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [episodeLinks, setEpisodeLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState('');
  const [loading, setLoading] = useState(false); // State to track API loading

  const handleSubmitNumEpisodes = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const num = parseInt(numEpisodes.toString(), 10);
    if (num > 0) {
      setEpisodeLinks(new Array(num).fill(''));
    }
  };

  const handleLinkInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkInput(e.target.value);
  };

  const handleSubmitLink = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedLinks = [...episodeLinks];
    updatedLinks[currentEpisode - 1] = linkInput;
    setEpisodeLinks(updatedLinks);
    setLinkInput('');
    setLoading(true);

    try {
      const FolderName = sessionStorage.getItem('FolderName');
      const selectedMovieTitle = sessionStorage.getItem('selectedMovieTitle');
      const encodedNumber = sessionStorage.getItem('encodedNumber');
      const response = await fetch(`https://upload.sagaranmol.link?foldername=${FolderName}&newTitle=${encodedNumber}-${selectedMovieTitle}E${currentEpisode}&upload_url=${encodeURIComponent(linkInput)}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(`API response: ${JSON.stringify(data)}`);

      setLoading(false);
      // Move to next episode or finish if all links are filled
      setCurrentEpisode((prev) => prev + 1);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setLoading(false);
    }
  };

  // Effect to handle final POST request when all episodes are uploaded
  useEffect(() => {
    if (currentEpisode > episodeLinks.length && episodeLinks.length > 0) {
      const submitFinalData = async () => {
        const sessionData = {
          data: {
            contentId: sessionStorage.getItem('FolderName'),
            uploader: sessionStorage.getItem('encodedNumber'),
          },
        };

        try {
          const response = await fetch('https://mdbnew.sagaranmol.link', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(sessionData),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log(`Final API response: ${JSON.stringify(data)}`);
        } catch (error) {
          console.error('There was a problem with the final fetch operation:', error);
        }
      };

      submitFinalData();
    }
  }, [currentEpisode, episodeLinks]);

  const renderLinkForm = () => {
    if (currentEpisode > episodeLinks.length) {
        return (
            <div>
              <p>All episodes links submitted!</p>
              <Button onClick={() => setActiveSegment('page2')}>Upload More & Earn</Button>
            </div>
          );
    }
    return (
      <form onSubmit={handleSubmitLink} style={{ textAlign: 'center' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Enter link for Episode {currentEpisode}:
          <input
            type="text"
            value={linkInput}
            onChange={handleLinkInputChange}
            required
            style={{
              marginLeft: '10px',
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              fontSize: '16px',
              width: '100%', // Full width input
              boxSizing: 'border-box',
            }}
          />
        </label>
        <br />
        <button type="submit" disabled={loading} style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}>
          {loading ? 'Loading...' : 'OK'}
        </button>
      </form>
    );
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '100%', width: '400px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        {episodeLinks.length === 0 && (
          <form onSubmit={handleSubmitNumEpisodes} style={{ textAlign: 'center' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              How many episodes does the series have?
              <input
                type="number"
                value={numEpisodes}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNumEpisodes(Number(e.target.value))}
                required
                style={{
                  marginLeft: '10px',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  fontSize: '16px',
                  width: '100%', // Full width input
                  boxSizing: 'border-box',
                }}
              />
            </label>
            <br />
            <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}>OK</button>
          </form>
        )}
        {episodeLinks.length > 0 && renderLinkForm()}
      </div>
    </div>
  );
};

export default Episodes;
