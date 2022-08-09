import {React} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>     
        <div className="header-info">
          <h1>CineList</h1>
          <button><Link to="/Watchlist">Watchlist</Link></button>
          <button><Link to="/Watched">Watched Movies</Link></button>
        </div>
        <div className="search-bar">
          <form onSubmit={handleOnSubmit}>
            <input className="search" type="search" placeholder="Search..."
              value={searchTerm} onChange={handleOnChange} />
          </form>
        </div>
      </header>
    );
};

export default Navbar