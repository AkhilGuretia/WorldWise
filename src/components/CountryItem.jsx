/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

function CountryItem({ country, key }) {
  return (
    <li key={key} className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
