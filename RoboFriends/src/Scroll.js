import React from "react"; 
function Scroll(props) {
  console.log(props);
  return (
    <div
      style={{
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        border: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
}
export default Scroll;
