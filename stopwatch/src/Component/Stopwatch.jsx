import React from "react";

const Stopwatch = () => {
  const [count, setcount] = React.useState(0);
  // const [timerid,setid]=React.useState(null)
  // WE CAN USE USEREF INSTEAD OF USESTATE TO PREVENT EXTRA RE RENDER SINCE TIMERID IS NOT USED IN OUR DOM
  const timerid = React.useRef(null);

  function msToTime(duration) {
    // var milliseconds = Math.floor((duration % 1000) / 100),
    var seconds = Math.floor((duration / 100) % 60);
    var minutes = Math.floor((duration / (100 * 60)) % 60);
    var hours = Math.floor((duration / (100 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

  const handlestart = () => {
    if (!timerid.current) {
      let id = setInterval(() => {
        setcount((prev) => prev + 1);
      }, 10);
      // setid(id)
      timerid.current = id;
    }
  };

  const handlepause = () => {
    clearInterval(timerid.current);
    // setid(null)
    timerid.current = null;
  };

  const handlereset = () => {
    clearInterval(timerid.current);
    setcount(0);
    // setid(null)
    timerid.current = null;
  };

  // FOR CLEANUP DURING UNMOUTING TO PREVENT MEMORY LEAKAGE
  React.useEffect(() => {
    return handlereset;
  }, []);

  return (
    <>
      <div>
        <h1>{msToTime(count)}</h1>
        {/* <button onClick={handlestart}>START</button>
        <button onClick={handlepause}>PAUSE</button>
        <button onClick={handlereset}>RESET</button> */}
        <button onClick={handlestart}>शुरू</button>
        <button onClick={handlepause}>रोकें</button>
        <button onClick={handlereset}>रीसेट</button>
      </div>
    </>
  );
};

export default Stopwatch;
