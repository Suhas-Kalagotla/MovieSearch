import "./card.css";
import { Plus } from "lucide-react";

interface cardProps {
  poster_path: string;
  title: string;
  vote_average: string;
}

export default function Card( card : cardProps) {
  return (
    <div className="card">
      <div className="cardHeader">
        <img src={"https://image.tmdb.org/t/p/w500/" + card.poster_path} />
      </div>
      <div className="cardBody">
        <p className="title">{card.title}</p>
      </div>
      <div className="cardFooter">
        <div className="add">
          <Plus color="white" />
        </div>
        <div className="rating">{card.vote_average}</div>
      </div>
    </div>
  );
}
