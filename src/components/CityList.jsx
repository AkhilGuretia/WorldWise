import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { useEffect } from "react";
import { useState } from "react";

const CityList = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetch("http://localhost:3000/cities");

        const res = await data.json();

        setCities(res);
      } catch (error) {
        console.log("something went wrong while fetching the data");
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
