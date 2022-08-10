import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function ConfettiRain() {
  const [sizes, setSizes] = useState({
    ww: 0,
    wh: 0,
  });

  useEffect(() => {
    setSizes({
      ww: window.innerWidth,
      wh: window.innerHeight,
    });
  }, []);

  return (
    <Confetti
      width={sizes.ww}
      height={sizes.wh}
      numberOfPieces={300}
      opacity={0.8}
    />
  );
}
