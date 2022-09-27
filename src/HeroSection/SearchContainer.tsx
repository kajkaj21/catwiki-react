import { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CatsContext } from "../contexts/CatsContext";
import { Link } from "react-router-dom";
import styles from "./SearchContainer.module.scss";

type Props = {
  onChangeSearchVisibility: () => void;
};

const SearchContainer = (props: Props) => {
  const catsCtx = useContext(CatsContext);
  const [filteredCats, setFilteredCats] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const filterCats = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;

      const filtered = catsCtx?.cats.filter((cat: { name: string }) =>
        cat.name.toLowerCase().startsWith(value.toLowerCase())
      );

      if (filtered) {
        setFilteredCats(filtered);
      }
    }
  };

  return createPortal(
    <div className={styles.Container}>
      <div onClick={props.onChangeSearchVisibility}>&#10005;</div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        onChange={filterCats}
      />
      <ul>
        {catsCtx?.cats &&
          filteredCats.length === 0 &&
          catsCtx?.cats.map((cat: { id: string; name: string }) => {
            return (
              <Link
                key={cat.id}
                to={`cats/${cat.id}`}
                state={{ catId: cat.id }}
              >
                <li>{cat.name}</li>
              </Link>
            );
          })}
        {filteredCats.length > 0 &&
          filteredCats.map((cat: { id: string; name: string }) => {
            return (
              <Link
                key={cat.id}
                to={`cats/${cat.id}`}
                state={{ catId: cat.id }}
              >
                <li>{cat.name}</li>
              </Link>
            );
          })}
      </ul>
    </div>,
    document.body
  );
};

export { SearchContainer };
