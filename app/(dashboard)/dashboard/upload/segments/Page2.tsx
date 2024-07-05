"use client";

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


// Define the type for the props
interface HomeProps {
  setActiveSegment: (segment: string) => void;
}

// Annotate the functional component with the props type
const Home: React.FC<HomeProps> = ({ setActiveSegment }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data from TMDB', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (selectedMovie) {
      const sessionStorage = window.sessionStorage;
      sessionStorage.setItem('selectedMovieTitle', selectedMovie.title);
      sessionStorage.setItem('selectedMovieId', selectedMovie.id);
      let contentType = selectedMovie.media_type || 'movie';
      sessionStorage.setItem('selectedMovieType', contentType);
      let foldername = `${contentType}-${selectedMovie.id}`;
      sessionStorage.setItem('FolderName', foldername);
    }
  }, [selectedMovie]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (e.target.value.length === 0) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data from TMDB', error);
      }
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${e.target.value}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error searching movies in TMDB', error);
    }
  };

  const handleClick = (movie: any) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <Head>
        <title>Movie Carousel</title>
        <meta name="description" content="A horizontally scrollable carousel of movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <h1 className="text-2xl mb-4">Search Movies</h1>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for a movie..."
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <div className="overflow-x-auto whitespace-nowrap py-4">
          {movies.map((movie) => (
            <div key={movie.id} className="inline-block px-2 text-center">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-40 h-60 object-cover mb-2 cursor-pointer"
                onClick={() => handleClick(movie)}
              />
              <p
                className="text-sm cursor-pointer"
                onClick={() => handleClick(movie)}
              >
                {movie.title}
              </p>
            </div>
          ))}
        </div>
        
        {selectedMovie && (
          <AlertDialog open={!!selectedMovie} onOpenChange={() => setSelectedMovie(null)}>
            <AlertDialogTrigger asChild>
              <button className="hidden"></button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{selectedMovie.title}</AlertDialogTitle>
                <AlertDialogDescription>
                  This is the movie you selected. Title: {selectedMovie.title}, Type: {selectedMovie.media_type || 'movie'}, ID: {selectedMovie.id}. Do you want to proceed?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setSelectedMovie(null)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => setActiveSegment('page3')}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </main>
    </div>
  );
};

export default Home;
