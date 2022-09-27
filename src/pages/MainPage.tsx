import { TheHeader } from "../TheHeader/TheHeader";
import { HeroSection } from "../HeroSection/HeroSection";
import { InfoSection } from "../InfoSection/InfoSection";
import { TheFooter } from "../TheFooter/TheFooter";
import { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TheHeader />
      <HeroSection />
      <InfoSection />
      <TheFooter />
    </>
  );
};

export { MainPage };
