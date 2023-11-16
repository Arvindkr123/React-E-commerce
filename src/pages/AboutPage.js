import { Fragment } from "react";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <Fragment>
      <div className={styles.aboutSection}>
        <h1 style={{ fontWeight: "bolder" }}>About Us Page</h1>
        <p>
          A band party is a fun and exciting event that brings people together
          to enjoy live music and entertainment. Whether it's a small gathering
          in someone's backyard or a large festival in a public space, a band
          party is a great way to socialize and unwind while enjoying the
          talents of musicians and performers.
        </p>
        <p>
          If you're planning a band party, it's important to consider the
          logistics of the event, such as finding a suitable venue, booking the
          bands, and ensuring that there is enough space and facilities for
          attendees. With proper planning and organization, a band party can be
          a memorable and enjoyable experience for everyone involved.
        </p>
      </div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bolder",
          margin: "2rem",
        }}
      >
        Contact Me
      </h2>
      <div className={styles.front}>
        <img
          src="https://avatars.githubusercontent.com/u/74539541?v=4"
          alt="Arvind Kumar"
          className={styles.aboutPageImage}
          loading="lazy"
        />
        <div className={styles.container}>
          <h2>Arvind Kumar</h2>
          <p>thakurarvinkr10@gmail.com</p>
          <p>
            <button className={styles.button1}>Contact</button>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutPage;
