import React from "react";
import { v4 } from "uuid";
import styles from "../App.module.css";
import { useContext } from "react";
import { CropContext } from "../Context/CropContext";
import Styled from "styled-components";

const Heading = Styled.div`
  // text-align:center;
  @media only screen and (max-width:480px){
    margin:auto; 
    text-align:center;
    // background-color: blue;
    width:365px
    }
  `;

const Cropdetails = () => {
  const { cropData, searchedData } = useContext(CropContext);

  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      setActive(active === cropData.length - 1 ? 0 : active + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [active]);

  return searchedData.length !== 0 ? (
    <>
      <Heading>
        {searchedData.map((e) => (
          <div key={v4()} className={styles.box}>
            <div>
              <h1>{e.Name}</h1>
            </div>
            <div className={styles.pd}>Soil: {e.Soil}</div>
            <div className={styles.pd}>Season: {e.Season}</div>
            <div>
              <img src={e.Image} alt="pic" />
            </div>
            <div>
              <h3>Price: {e.Avg}</h3>
            </div>
            <div className={styles.pd}>
              <a href={e.Url} target="_blank()">
                {/* Click here To know more */}
                👉🏻अधिक जानकारी के लिए यहां क्लिक करें
              </a>
            </div>
            <br></br>
            <div className={styles.pd}>
              <a href={e.Youtube} target="_blank()">
                {/* Click here for a video */}
                वीडियो के लिए यहां क्लिक करें👈🏻
              </a>
            </div>
            <div>
              <p>{e.Description}</p>
            </div>
          </div>
        ))}
      </Heading>
    </>
  ) : (
    <>
      <Heading>
        <div key={v4()} className={styles.box}>
          <div>
            <h1>{cropData[active]?.Name}</h1>
          </div>
          <div className={styles.pd}>Soil: {cropData[active]?.Soil}</div>
          <div className={styles.pd}>Season: {cropData[active]?.Season}</div>
          <div>
            <img src={cropData[active]?.Image} alt="pic" />
          </div>
          <div>
            <h3>Price: {cropData[active]?.Avg}</h3>
          </div>
          <div className={styles.pd}>
            <a href={cropData[active]?.Url} target="_blank()">
              {/* Click here To know more */}
              👉🏻अधिक जानकारी के लिए यहां क्लिक करें
            </a>
          </div>
          <div className={styles.pd}>
            <a href={cropData[active]?.Youtube} target="_blank()">
              {/* Click here for a video */}
              वीडियो के लिए यहां क्लिक करें👈🏻
            </a>
          </div>
        </div>
      </Heading>
    </>
  );
};

export default Cropdetails;
