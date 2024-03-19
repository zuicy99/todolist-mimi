import React from "react";

export const emograde = ({ emotionGrade }) => {
  const emoImages = [
    { emotionGrade: 1, path: `/images/layer1.svg` },
    { emotionGrade: 2, path: `/images/layer2.svg` },
    { emotionGrade: 3, path: `/images/layer3.svg` },
    { emotionGrade: 4, path: `/images/layer4.svg` },
    { emotionGrade: 5, path: `/images/layer5.svg` },
  ];
  // console.log(emoImages);
  return (
    <div>
      <img src="/images/layer1.svg" alt=""></img>
    </div>
  );
};

export default emograde;
