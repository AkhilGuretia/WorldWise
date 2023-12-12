/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";

import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (cities.length < 1)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((accumulator, current) => {
    if (!accumulator.map((el) => el.country).includes(current.country))
      return [
        ...accumulator,
        { country: current.country, emoji: current.emoji },
      ];
    else return accumulator;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
