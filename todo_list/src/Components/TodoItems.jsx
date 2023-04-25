import React, { useState } from "react";
import styles from "./Todos.module.css";

const TodoItems = ({ ele, onDelete }) => {
  // console.log("ele", ele);
  const [isChecked, setIsChecked] = useState(ele.check || false);
  ele.check=isChecked
  // console.log('is check->',ele.isChecked,isChecked)
  
  return (
    <div className={styles.Todobox} key={ele.id}>
      <div className={styles.TodoboxInside}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            const val = e.target.checked;
            // console.log("e:", val);
            // const val = e.target.checked
            setIsChecked(val);
          }}
        />
        {/* {console.log(isChecked)} */}
        <div
          // className={`desc ${isChecked && styles.striked}`}
          // className={styles.desc}
          className={isChecked ? `${styles.striked}` : ""}
        >
          {ele.title}
        </div>
      </div>
      <button className="removebutton" onClick={() => onDelete(ele.id)}>
        {/* Remove */}
        हटाएं
      </button>
    </div>
  );
};

export default TodoItems;
