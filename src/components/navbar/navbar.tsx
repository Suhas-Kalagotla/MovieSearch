import { useState, useEffect } from "react";
import { Menu, Search, FolderPlus } from "lucide-react";
import "./navbar.css";

export default function Navbar({
  handleSearch,
  queryMovies,
}: {
  handleSearch: (search: string) => void;
  queryMovies: (search: string) => void;
}) {
  const [search, setSearch] = useState<string>("all");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    queryMovies(search);
  };

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  return (
    <div className="navbar">
      <div>
        <img className="logo" src="imdb.png" />
      </div>
      <div className="image">
        <Menu />
        Menu
      </div>
      <div className="search">
      <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className="searchBar"
          />
          <button
            type="submit"
            id="searchButton"
            onClick={() => queryMovies(search)}
          >
            <Search color="black" />
          </button>
        </form>
      </div>
      <div className="imdb">
        <p>
          IMDB<span className="customColor">Pro</span> |
        </p>
      </div>
      <div className="image">
        <FolderPlus />
        Watchlist
      </div>
      <div className="image">Sign In</div>
    </div>
  );
}
