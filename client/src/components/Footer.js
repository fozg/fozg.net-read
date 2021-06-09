/** Code Monitor [progress: 10%] [userstory: F123] */

import React from "react";
import styles from "./Footer.module.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.Footer}>
        <div className="container">
          <div className={styles.footer__inner}>
            <span className={styles.highlight}>Xin chào</span>
            <br />
            Mình là Phong - Code dạo tại Fozg.net, đây là nơi mình chia sẻ kiến
            thức về lập trình, công nghệ và cũng có thể là những bài viết không
            đầu không cuối.
            <br />
            <br />
            Nếu có ghé qua hãy để lại cho mình một lời nhắn nhé :)
            <br />
            <br />
            <span className={styles.highlight}>Kết nối với mình</span>
            <br />
            <a href="https://github.com/fozg" target="_blank">
              Github
            </a>
            <br />
            <a href="https://dev.to/fozg" target="_blank">
              Dev.to
            </a>
            <br />
            <a href="mailto:phongdaohong@gmail.com">Email</a>
          </div>
        </div>
      </div>
    );
  }
}
