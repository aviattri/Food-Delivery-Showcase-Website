import assets from "./assets";
import { Download, Features, SectionWrapper } from "./components";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="NFT SHOWCASE APP"
        description="Amazing NFT Store where you can buy the trendy Monkey NFTs"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Clean UX/UI built"
        description="Powered by Expo and tailwind"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="NFT Showcase is built on expo which runs natively on all user devices"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative Showcase"
        description="App contains various features like Favourites, Search, and Details about each NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

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
