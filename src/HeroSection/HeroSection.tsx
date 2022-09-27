import { useContext, useState } from "react";
import { CatsContext } from "../contexts/CatsContext";
import { SearchContainer } from "./SearchContainer";
import { Link, useParams } from "react-router-dom";
import styles from "./HeroSection.module.scss";
import { Audio } from "react-loader-spinner";

const randomCats: any[] = [];
const HeroSection = () => {
  const catsCtx = useContext(CatsContext);

  if (catsCtx?.cats && catsCtx?.cats.length > 0) {
    while (randomCats.length < 4) {
      const randomCat: { id: string; image: { url: string } } =
        catsCtx?.cats[Math.floor(Math.random() * catsCtx?.cats.length)];

      if (
        randomCats.some((cat) => cat.id === randomCat.id) ||
        randomCat.image === undefined
      ) {
        continue;
      }

      randomCats.push(randomCat);
    }
  }

  const [searchVisible, setSearchVisible] = useState<boolean>(false);

  const changeSearchVisibility = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <>
      {searchVisible && (
        <SearchContainer onChangeSearchVisibility={changeSearchVisibility} />
      )}
      <section className={styles.HeroSection}>
        <div className={styles.HeroSection__Top}>
          <div>
            <h2>CatWiki</h2>
            <p>Get to know more about your cat breed</p>
            <input
              type="text"
              placeholder="Search"
              onClick={changeSearchVisibility}
            />
          </div>
        </div>
        <div className={styles.HeroSection__Bottom}>
          <h3>Most Searched Breeds</h3>
          <p>66+ Breeds For you to discover</p>
          {catsCtx?.cats.length === 0 && (
            <Audio height="80" width="80" color="#291507" ariaLabel="loading" />
          )}
          {catsCtx?.cats && catsCtx?.cats.length > 0 && (
            <div className={styles.Grid}>
              {randomCats.map((cat) => {
                return (
                  <Link
                    to={`cats/${cat.id}`}
                    state={{ catId: cat.id }}
                    key={cat?.id}
                  >
                    <div className={styles.Grid__Item}>
                      <div>
                        <img
                          src={cat?.image?.url || "/no-image.webp"}
                          alt={cat?.id}
                        />
                      </div>
                      <span>{cat?.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export { HeroSection };
