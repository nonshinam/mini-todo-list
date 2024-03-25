import React from "react";
import { PiSmileySadFill } from "react-icons/pi";
import { PiSmileyMehFill } from "react-icons/pi";
import { PiSmileyFill } from "react-icons/pi";
import { PiSmileyWinkFill } from "react-icons/pi";
import { PiSmileyXEyesFill } from "react-icons/pi";
export default function Emoji({ red, gray, yellow, purple,green ,blue}) {
  function changeColor1(event) {
    if (event.target.style.color == red) {
      event.target.style.color = gray;
    } else {
      event.target.style.color = red;
    }
  }
  function changeColor2(event) {
    if (event.target.style.color == yellow) {
      event.target.style.color = gray;
    } else {
      event.target.style.color = yellow;
    }
  }
  function changeColor3(event) {
    if (event.target.style.color == purple) {
      event.target.style.color = gray;
    } else {
      event.target.style.color = purple;
    }
  }
  function changeColor4(event) {
    if (event.target.style.color == green) {
      event.target.style.color = gray;
    } else {
      event.target.style.color = green;
    }
  }
  function changeColor5(event) {
    if (event.target.style.color == blue) {
      event.target.style.color = gray;
    } else {
      event.target.style.color = blue;
    }
  }
  return (
    <>
      <div className="imogis">
        <PiSmileySadFill onClick={(event) => changeColor1(event)} />
        <PiSmileyMehFill onClick={(event) => changeColor2(event)} />
        <PiSmileyFill onClick={(event) => changeColor3(event)} />
        <PiSmileyWinkFill onClick={(event) => changeColor4(event)} />
        <PiSmileyXEyesFill onClick={(event) => changeColor5(event)} />
      </div>
    </>
  );
}
