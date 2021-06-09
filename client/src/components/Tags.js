import React from "react";
import {Link} from 'react-router-dom';

export default ({ tags }) => {
  if (tags) {
    return (
      <div>
        {tags.map((tag) => (
          <Link
            to={`/blog/t/${tag.tagName}`}
            key={tag.tagName}
            style={{
              background: "#eee",
              padding: "1px 8px",
              borderRadius: 15,
              marginRight: 10,
              backgroundColor: tag.bgColor,
              color: tag.color
            }}
          >
            #{tag.tagName}
          </Link>
        ))}
      </div>
    );
  } else {
    return false;
  }
};
