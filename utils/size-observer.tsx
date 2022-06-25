import React from "react";

interface ScrollValue {
  innerWidth: number;
}

interface PropsSizeObserver {
  children: any;
}

export const SizeContext = React.createContext<ScrollValue>({
  innerWidth: 0,
});

const SizeObserver: React.FC<PropsSizeObserver> = ({ children }) => {
  const [innerWidth, setInnerWidth] = React.useState(0);
  const handleResize = React.useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }),
    [[handleResize]];

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeObserver;
