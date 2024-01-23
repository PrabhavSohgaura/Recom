import Category from "../../components/Category/Category";
import Slider from "../../components/Slider/Slider";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <Slider />
      <Category />
    </div>
  );
};

export default Home;
