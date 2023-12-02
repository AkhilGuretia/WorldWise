import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div>
      <PageNav />

      <main className={styles.homepage}>
        <section>
          <h1>
            You travel the World.
            <br />
            Worldwise keeps track of your of your adventures.
          </h1>
          <h2>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
