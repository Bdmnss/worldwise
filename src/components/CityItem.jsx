import PropTypes from "prop-types";
import Styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date } = city;

  return (
    <li className={Styles.cityItem}>
      <span className={Styles.emoji}>{emoji}</span>
      <h3 className={Styles.name}>{cityName}</h3>
      <time className={Styles.date}>{formatDate(date)}</time>
      <button className={Styles.deleteBtn}>&times;</button>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CityItem;
