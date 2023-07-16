import { useState } from "react";
import BarfItem from "./BarfItem";

const Barf = () => {
  const [days, setDays] = useState(null);
  const [perDay, setPerDay] = useState(1);
  const [isGutMix, setGutMix] = useState(false);
  const [isPacal, setPacal] = useState(false);
  return (
    <div className="barf-wrap">
      <div className="text-wrapper">
        <h1>🥩 Barf kalkulator 🦴</h1>
        <p>{"Add meg az adatokat, es elvezd, hogy nem kell szamolgatnod 😉"}</p>
      </div>
      <div className="form-wrap">
        <div className="input-wrap">
          <label>Hany napra szeretned?</label>
          <input
            onChange={(e) => setDays(e.target.value)}
            type="number"
            placeholder={"kg"}
          ></input>
        </div>
        <div className="input-wrap">
          <label>Mennyit esznek egy nap?</label>
          <input
            step={0.1}
            onChange={(e) => setPerDay(e.target.value)}
            type="number"
            placeholder={"kg"}
            defaultValue={perDay}
          ></input>
        </div>
        <div className="input-wrap">
          <div className="checkbox-wrap">
            <label>Belsoseg mixet hasznalok</label>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => setGutMix(!isGutMix)}
            ></input>
          </div>
        </div>
        <div className="input-wrap">
          <div className="checkbox-wrap">
            <label>Zoldpacalt hasznalok</label>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => setPacal(!isPacal)}
            ></input>
          </div>
        </div>
      </div>
      {days && perDay && (
        <div className="results-wrap">
          <BarfItem
            isPacal={isPacal}
            isGutMix={isGutMix}
            day={days}
            sum={perDay}
            type="csont"
          />
          <BarfItem
            isGutMix={isGutMix}
            isPacal={isPacal}
            day={days}
            sum={perDay}
            type="hus"
          />
          <BarfItem
            isGutMix={isGutMix}
            day={days}
            sum={perDay}
            isPacal={isPacal}
            type="belsoseg"
          />
          <BarfItem
            isGutMix={isGutMix}
            day={days}
            isPacal={isPacal}
            sum={perDay}
            type="zoldseg"
          />
        </div>
      )}
    </div>
  );
};
export default Barf;
