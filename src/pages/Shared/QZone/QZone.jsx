import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-light text-center py-4 my-4">
      <h1>Q-Zone</h1>
      <img src={qzone1} alt="Q-Zone image" />
      <img src={qzone2} alt="Q-Zone image" />
      <img src={qzone3} alt="Q-Zone image" />
    </div>
  );
};

export default QZone;
