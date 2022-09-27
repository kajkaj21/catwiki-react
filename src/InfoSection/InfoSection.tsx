import styles from "./InfoSection.module.scss";

const InfoSection = () => {
  return (
    <section className={styles.InfoSection}>
      <div>
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <span>
          <a
            target="_blank"
            href="https://www.goodnet.org/articles/7-scientifically-proven-health-benefits-being-cat-owner"
          >
            Read more &rarr;
          </a>
        </span>
      </div>
      <div className={styles.Grid}>
        <div className={styles.Grid__Item}>
          <div>
            <img src="/image-2.webp" alt="cat1" />
          </div>
        </div>
        <div className={styles.Grid__Item}>
          <div>
            <img src="/image-1.webp" alt="cat2" />
          </div>
        </div>
        <div className={styles.Grid__Item}>
          <div>
            <img src="/image-3.webp" alt="cat3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { InfoSection };
