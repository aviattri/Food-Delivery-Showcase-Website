import assets from "./assets";
import { Download, Features, SectionWrapper } from "./components";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="FOOD DELIVERY APP"
        description="Best way to order delicious food from the comfort of your phone"
        showBtn
        mockImg={assets.onBoarding}
        banner="banner"
      />
      <SectionWrapper
        title="Clean UX/UI built"
        description="Powered by Expo, Figma and React-Native"
        mockImg={assets.home}
        reverse
      />
      <SectionWrapper
        title="Creative Showcase"
        description="App contains various features like Ordering, Filter, Checkout, Favourites, Profile, Drawer, MapView, Delivery Status and much more"
        mockImg={assets.mock1}
        mockImg2={assets.mock2}
        banner="banner02"
      />

      <Download />
      <Features />
      <div className="px-4 py-2 justifiy-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by Aviraj Attri. {""}
          <span>Inspired by @JavaScriptMastery</span>
        </p>
      </div>
    </>
  );
};

export default App;
