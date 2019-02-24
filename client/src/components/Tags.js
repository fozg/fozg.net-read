import React from "react";

export default ({ tags }) => {
  if (tags && tags.trim() !== "") {
    return (
      <div>
        {tags.split(";").map((tag, idx) => (
          <span
            key={tag}
            style={{
              background: "#eee",
              padding: "1px 8px",
              borderRadius: 5,
              marginRight: 5,
              backgroundColor: "rgb(93, 160, 161)",
              color: "#fff"
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    );
  } else {
    return false;
  }
};
