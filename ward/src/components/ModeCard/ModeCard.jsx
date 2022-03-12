import { useHistory } from "react-router-dom";
import "./ModeCard.scss";

export const ModeCard = ({ title, description, path }) => {
  const history = useHistory();

  return (
    <div className="mode-card">
      <div className="mode-card__preview" />
      <div className="card-info">
        <h3 className="card-info__title">{title}</h3>
        <p className="card-info__description">{description}</p>
        <button
          className="card-info__start"
          onClick={() => history.push(path)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
