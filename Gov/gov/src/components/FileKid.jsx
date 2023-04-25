import React from "react";

const FileKid = ({ el }) => {
  const [flip, setFlip] = React.useState("false");
  return (
    <div onClick={() => setFlip(!flip)}>
      {!flip ? (
        <div>
          <h1>{el.Name}</h1>
          <a target="_blank()" href={el.Url}>
            रजिस्ट्रेशन के लिए यहां दबाए
          </a>
        </div>
      ) : (
        <div>
          <img src={el.Image} alt="poster" />
        </div>
      )}
    </div>
  );
};

export default FileKid;
