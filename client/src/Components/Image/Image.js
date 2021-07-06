import React from "react";
import { ImageWrapper } from "./Image.styles.js";

const Image = (props) => {
  return (
    <>
      <ImageWrapper>
        <img
          className="profile-photo"
          src={props.source}
          alt="No data available! Upload data!"
          style={{width: '50%'}}
        />
      </ImageWrapper>
    </>
  );
};

export default Image;
