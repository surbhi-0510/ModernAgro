import React from "react";
import Data from "./Data";
import FileKid from "./FileKid";

const File = () => {
  return (
    <div className="parentbox">
      {Data.map((el) => {
        return <FileKid el={el} key={el.id} style={{ display: "flex" }} />;
      })}
    </div>
  );
};

export default File;
