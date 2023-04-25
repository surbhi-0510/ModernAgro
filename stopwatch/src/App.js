import Stopwatch from "./Component/Stopwatch";
// import styles from "./App.module.css"
import React from "react";
import Styled from "styled-components";

function App() {
  const Heading = Styled.div`

  @media (max-width: 600px){
    .bg{
      // background-image:url("https://i.pinimg.com/736x/48/f0/1a/48f01a8ac0366610a79cab3117aae32a--rain-drops-water-drops.jpg");
      background-image: url("https://thumbs.dreamstime.com/b/plant-growing-soil-sunshine-eco-earth-day-concept-148191624.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height:700px;
      width:100%;
      display:flex;
  }

      .bg div{
        font-size:larger;
        margin:auto;
        color:#fff;
        text-align:center;
        text-shadow: 0 0 5px #fff,
        0 0 10px #fff, 0 0 15px rgb(124, 252, 124),
        0 0 20px rgb(124, 252, 124), 0 0 25px rgb(124, 252, 124),
        0 0 30px rgb(124, 252, 124), 0 0 35px rgb(124, 252, 124);
      }
      .bg div button{
        margin-top:30px;
        text-align:center;
        padding:10px;
        background-color:green;
        border-radius:20px;
        color:white;
      }

      }


  @media all and (min-width: 601px) {
    .bg{
        background-image: url("https://images-cdn.ubuy.co.in/E5E4PO6-super-loud-alarm-clock-with-bed-shaker.jpg");
        height:1000px;
        width:1515px;
        // border:1px solid red;
        display:flex;
        // background-color:red;
    }
        .bg div{
          font-size:100px;
          line-height: 0px;
          width:800px;
          height:300px;
          margin:130px 0px 0px 350px;
          padding:50px;
          transform: rotate(5deg);
          background-color: rgb(70, 68, 68);
          color:white
        }
        .bg div button{
          margin-left:100px;
          padding:20px;
          font-size: large;
          font-weight: bolder;
          border-radius: 20px;
          background-color: rgb(89, 89, 233);
          box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
          border:0px solid white;
          color:white;
        }
      }

`;
  return (
    <>
      <Heading>
        <div className="bg">
          <Stopwatch />
        </div>
      </Heading>
    </>
  );
}

export default App;
