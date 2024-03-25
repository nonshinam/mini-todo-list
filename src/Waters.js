import React, { useEffect, useState } from "react";
import { GiGlassShot } from "react-icons/gi";

export default function Waters() {
  const [rating, setRating] = useState(() => {
    const data = JSON.parse(localStorage.getItem("rate"));
    return data || null;
  });
  const [hover, setHover] = useState(null);

  useEffect(() => {
    localStorage.setItem("rate", JSON.stringify(rating));
  }, [rating]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("rate"));
    if (result) {
      setRating(result);
    }
  }, []);

  return (
    <>
      {Array(7)
        .fill(1)
        .map((star, index) => {
          let current = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={current}
                style={{ display: "none" }}
                onClick={() => setRating(current)}
              />
              <GiGlassShot
                style={{ cursor: "pointer" }}
                color={current <= (hover || rating) ? "#73b8f1" : "#c7c6c6"}
                onMouseEnter={() => setHover(current)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
    </>
  );
}
