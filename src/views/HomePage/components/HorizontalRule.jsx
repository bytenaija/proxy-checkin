import React from "react";

const HorinzontalRule = ({
  isGradient,
  firstColor,
  secondColor,
  text,
  numberOfVisits
}) => {
  if (numberOfVisits) {
    return (
      <>
        <div>{text}</div>
        <div
          style={{
            width: "5px",
            borderRadius: "5px",
            height: `${numberOfVisits * 80}px`,
            background: isGradient
              ? `linear-gradient(to bottom, ${firstColor}, ${secondColor})`
              : firstColor
          }}
        />
      </>
    );
  }
  return null;
};

export default HorinzontalRule;
