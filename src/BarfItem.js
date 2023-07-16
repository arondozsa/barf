import { useEffect, useState } from "react";

const BarfItem = ({ sum, day, type, isGutMix, isPacal }) => {
  const [extra, setExtra] = useState(null);

  let multiplyer;

  useEffect(() => {
    if (type === "csont") multiplyer = 0.45;
    if (type === "hus") {
      multiplyer = 0.35;
      if (isGutMix) multiplyer = 0.35 - 0.175;
      if (isPacal) multiplyer = 0.35 - 0.125;
      if (isPacal && isGutMix) multiplyer = 0.35 - 0.175 - 0.125;
    }
    if (type === "belsoseg") {
      multiplyer = 0.075;
      if (isGutMix) multiplyer = 0.25;
    }
    if (type === "zoldseg") {
      multiplyer = 0.15;
      if (isPacal) multiplyer = 0.125;
    }
  }, [type, isGutMix, isPacal, sum, day]);
  useEffect(() => {
    setExtra(Math.round(sum * day * multiplyer * 1000) / 1000);
  }, [sum, day, multiplyer, isGutMix, isPacal]);
  return (
    <div className={`result-item ` + type}>
      <p>{type === "zoldseg" && isPacal ? "zoldpacal" : type}: </p>
      <p className="dot"></p>
      <span className="result">{extra} kg</span>
    </div>
  );
};
export default BarfItem;
