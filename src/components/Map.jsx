import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");

  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>MAP</h1>
      <h1>
        POSITION: {lat} {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: "1000", lng: "-1000" })}>
        Change Position
      </button>
    </div>
  );
};

export default Map;
