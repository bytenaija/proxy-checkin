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
      <div className="h-rule">
        <div>{text}</div>
        <div
          style={{
            width: "3px",
            borderRadius: "5px",
            height: `${numberOfVisits * 85}px`,
            background: isGradient
              ? `linear-gradient(to bottom, ${firstColor}, ${secondColor})`
              : secondColor
          }}
        />
      </div>
    );
  }
  return null;
};

export default HorinzontalRule;
