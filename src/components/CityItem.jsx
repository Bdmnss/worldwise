import PropTypes from "prop-types";
import Styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={Styles.cityItem}
      >
        <span className={Styles.emoji}>{emoji}</span>
        <h3 className={Styles.name}>{cityName}</h3>
        <time className={Styles.date}>{formatDate(date)}</time>
        <button className={Styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityItem;
