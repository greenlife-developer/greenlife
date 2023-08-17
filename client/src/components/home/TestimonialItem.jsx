import React from "react";

export default function TestimonialItem(props) {
  return (
    <div className="item">
      <div className="">
        <div className="item-info">
          <img src={props.img} alt="" />
          <h3>{props.name}</h3>
          <p>{props.title}</p>
        </div>
        <hr />
        <div className="item-content">
          <h4>{props.content}</h4>
        </div>
      </div>
    </div>
  );
}
