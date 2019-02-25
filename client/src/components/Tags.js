import React from "react";

export default ({ tags }) => {
  if (tags) {
    return (
      <div>
        {tags.map((tag) => (
          <span
            key={tag.tagName}
            style={{
              background: "#eee",
              padding: "1px 8px",
              borderRadius: 5,
              marginRight: 5,
              backgroundColor: tag.bgColor,
              color: tag.color
            }}
          >
            #{tag.tagName}
          </span>
        ))}
      </div>
    );
  } else {
    return false;
  }
};
