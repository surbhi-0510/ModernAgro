import React from "react";
import { useContext } from "react";
import { CropContext } from "../Context/CropContext";
import styles from "../App.module.css";
import Styled from "styled-components";

const Heading = Styled.div`
    @media (max-width:480px){
      // background-color:yellow;
      // width:
      // width:400px
      // margin-left:10px;
      // text-align:center;
    }
  `;

const Search = () => {
  const { cropData, searchedData, setSearchedData } = useContext(CropContext);
  const [ip, setIp] = React.useState("");

  const handleip = (e) => {
    console.log(e.target.value);
    setIp(e.target.value);
  };

  const handleClick = (e) => {
    console.log("e", e.target.val, ip);
    let c = cropData.filter((el) => {
      return el.Name.toLowerCase() === ip.toLowerCase();
    });
    // console.log("c",c)
    setSearchedData(c);
  };
  return (
    <div className={styles.parentdiv}>
      <Heading>
        <div className={styles.searchbar}>
          <input
            type="text"
            className={styles.inputbox}
            value={ip}
            // placeholder="Search for the Crop"
            placeholder="फसल की खोज करें"
            onChange={handleip}
            // onChange={(e)=>ref.current = e.target.value}
          />
          <div>
            <img
              className={styles.imagesearch}
              src="https://cdn-icons-png.flaticon.com/512/954/954591.png"
              alt="search"
              onClick={handleClick}
            />
          </div>
          <button
            className={styles.buttonback}
            disabled={searchedData.length === 0}
            onClick={() => setSearchedData([])}
          >
            {/* Go Back! */}
            वापस जाओ!
          </button>
        </div>
      </Heading>
    </div>
  );
};

export default Search;
