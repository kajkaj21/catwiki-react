import { useContext, useEffect, useState } from "react";
import { CatsContext } from "../contexts/CatsContext";
import { CatSkills } from "./CatSkills";
import styles from "./CatContainer.module.scss";
import { Audio } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

type Props = {
  catId: string;
};

type CatTypes = {
  id: string;
  description: string;
  name: string;
  image: {
    url: string;
  };
  wikipedia_url: string;
  temperament: string;
  origin: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
};

type CatImage = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const CatContainer = (props: Props) => {
  const catsCtx = useContext(CatsContext);
  const location = useLocation();

  const fetchCatImages = async (id: string) => {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=10`
    );
    if (!res) {
      return;
    }
    const data = await res.json();
    if (data) {
      setCurrentCatImages([...data]);
    }
  };

  const [currentCat, setCurrentCat] = useState<CatTypes>();
  const [currentCatImages, setCurrentCatImages] = useState<CatImage[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (props.catId) {
      fetchCatImages(props.catId);
      setCurrentCat(
        catsCtx?.cats.find((cat: CatTypes) => cat.id === props.catId)
      );
    } else {
    }
    console.log(location.pathname.split("/")[2]);
  }, [props.catId, catsCtx?.cats]);

  return (
    <>
      {catsCtx?.cats.length === 0 && (
        <Audio height="80" width="80" color="#291507" ariaLabel="loading" />
      )}
      {catsCtx && catsCtx?.cats.length > 0 && (
        <div className={styles.Container}>
          <div className={styles.ImageContainer}>
            <img
              src={currentCat?.image?.url || "/no-image.png"}
              alt={currentCat?.name}
            />
          </div>
          <div>
            <h3>{currentCat?.name}</h3>
            <p className={styles.Description}>
              {currentCat?.description}{" "}
              <span>
                <a target="_blank" href={currentCat?.wikipedia_url}>
                  Read more &rarr;
                </a>
              </span>
            </p>
            <p className={styles.AdditionalInfo}>
              <strong>Temperament:</strong> {currentCat?.temperament}
            </p>
            <p className={styles.AdditionalInfo}>
              <strong>Origin:</strong> {currentCat?.origin}
            </p>
            <p className={styles.AdditionalInfo}>
              <strong>Life Span:</strong> {currentCat?.life_span} years
            </p>
            {currentCat?.adaptability && (
              <CatSkills
                skillName="Adaptability"
                skillPoints={currentCat?.adaptability}
              />
            )}
            {currentCat?.affection_level && (
              <CatSkills
                skillName="Affection level"
                skillPoints={currentCat?.affection_level}
              />
            )}

            {currentCat?.child_friendly && (
              <CatSkills
                skillName="Child Friendly"
                skillPoints={currentCat?.child_friendly}
              />
            )}
            {currentCat?.grooming && (
              <CatSkills
                skillName="Grooming"
                skillPoints={currentCat?.grooming}
              />
            )}
            {currentCat?.intelligence && (
              <CatSkills
                skillName="Intelligence"
                skillPoints={currentCat?.intelligence}
              />
            )}
            {currentCat?.health_issues && (
              <CatSkills
                skillName="Health issues"
                skillPoints={currentCat?.health_issues}
              />
            )}
            {currentCat?.social_needs && (
              <CatSkills
                skillName="Social needs"
                skillPoints={currentCat?.social_needs}
              />
            )}
            {currentCat?.stranger_friendly && (
              <CatSkills
                skillName="Stranger friendly"
                skillPoints={currentCat?.stranger_friendly}
              />
            )}
          </div>
        </div>
      )}
      <div className={styles.Images}>
        <h3>Other photos</h3>
        {currentCatImages.length === 0 && (
          <Audio height="80" width="80" color="#291507" ariaLabel="loading" />
        )}
        {currentCatImages.length > 0 && (
          <div className={styles.ImagesGrid}>
            {currentCatImages.map((image) => {
              return (
                <div className={styles.ImageContainer} key={image.id}>
                  <img src={image.url} alt={currentCat?.name} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export { CatContainer };
