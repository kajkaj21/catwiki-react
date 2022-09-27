import styles from "./CatSkills.module.scss";

let points = [1, 2, 3, 4, 5];

type Props = {
  skillName: string;
  skillPoints: number;
};

const CatSkills = (props: Props) => {
  return (
    <div className={styles.Container}>
      <h3 className={styles.SkillName}>{props.skillName}:</h3>
      <div className={`${styles.Points} ${styles.TwoPoints}`}>
        {points.map((tile) => {
          return (
            <div
              key={tile}
              className={`${styles.Tile} ${
                tile <= props.skillPoints ? styles.TileFilled : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export { CatSkills };
