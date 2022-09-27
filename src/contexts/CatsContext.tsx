import { createContext, ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

type CatsContextTypes = {
  API_KEY: string;
  cats: [];
};

const CatsContext = createContext<CatsContextTypes | null>(null);

const CatsContextProvider = (props: Props) => {
  const API_KEY =
    "live_9IRwOiPCmv3Waa0xf9seFZM3C8kMPAMVrUF0SDUXtmxmrUxxn2NxivwicRs2nIJ1";
  const [cats, setCats] = useState<[]>([]);

  const fetchCatBreeds = async () => {
    const res = await fetch(`https://api.thecatapi.com/v1/breeds`);
    if (!res.ok) {
      throw new Error("Something went wrong, status " + res.status);
    }
    const data: [] = await res.json();
    if (Array.isArray(data)) {
      setCats([...data]);
    }
  };

  useEffect(() => {
    fetchCatBreeds();
  }, []);

  return (
    <CatsContext.Provider value={{ API_KEY, cats }}>
      {props.children}
    </CatsContext.Provider>
  );
};

export { CatsContext, CatsContextProvider };
