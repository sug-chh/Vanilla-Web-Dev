import React from "react";

function Card(props) {
  const { name, email } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shawdow-5">
      <img
        src={`https://robohash.org/${props.id}?200X200" alt = "something.png`}
        alt="robot.png"
      />
      <div>
        <h2>{name}</h2>
        <p>{email} </p>
      </div>
    </div>
  );
}

export default Card;
