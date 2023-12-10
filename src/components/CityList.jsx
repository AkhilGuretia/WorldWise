/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import CityItem from "./CityItem";

const CityList = ({ cities, isLoading }) => {
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
