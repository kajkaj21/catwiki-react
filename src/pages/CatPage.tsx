import { TheHeader } from "../TheHeader/TheHeader";
import { TheFooter } from "../TheFooter/TheFooter";
import { CatContainer } from "../CatContainer/CatContainer";
import { useLocation } from "react-router-dom";

const CatPage = () => {
  const location = useLocation();
  return (
    <>
      <TheHeader />
      <CatContainer catId={location.state.catId} />
      <TheFooter />
    </>
  );
};

export { CatPage };
