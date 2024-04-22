import { useEffect, useState } from "react";
import "./App.css";
import { Card, Navbar } from "./components";
import axios from "axios";

interface cardProps {
  poster_path: string;
  title: string;
  vote_average: string;
}

function App() {
  const [movies, setMovies] = useState<cardProps[]>([]);
  const [display, setDisplay] = useState<cardProps[]>([]);

  const handleSearch = async (search: string) => {
    const data = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });

    if (search.length == 0) setDisplay(movies);
    else {
      setDisplay(data);
    }
  };

  const queryMovies = async (search: string) => {
    try {
      const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          query: search,
          api_key: "ec5ff6154f35e55e040a4667e2d33fcf",
        },
      });
      const data = res.data.results;
      setMovies((prevData) => [...prevData, ...data]);
      setDisplay(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovies = async () => {
    try {
      const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          query: "all",
          api_key: "ec5ff6154f35e55e040a4667e2d33fcf",
        },
      });
      const data = res.data.results;
      if (res.status == 200) {
        setMovies(data);
        setDisplay(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar handleSearch={handleSearch} queryMovies={queryMovies} />
      <div className="container">
        <div className="displayCards">
          {display.length > 0 ? (
            display.map((card, index) => <Card {...card} key={index} />)
          ) : (
            <p>No movies to display</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
