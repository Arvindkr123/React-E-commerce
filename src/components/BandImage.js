import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./BandImage.module.css";

function BandImage() {
  const bandTours = useSelector((state) => state.cart.bandTourDetails);
  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.genericsText}>The Generics</h1>
        <h3 className={styles.tourText}>Tours</h3>
      </div>
      <div className={styles.card}>
        {bandTours.map((tour, index) => (
          <div key={index}>
            <div className={styles.cardImage}>
              <img
                src={tour.tourImage}
                alt={tour.tourName}
                loading="lazy"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.tourName}>{tour.tourName}</h3>
              <p className={styles.tourDescription}>{tour.tourDescription}</p>
              <p className={styles.tourDates}>
                <strong>Dates: </strong>
                {tour.tourStartDate}
              </p>
              <p className={styles.tourVenue}>
                <strong>Venue: </strong>
                {tour.tourLocation}
              </p>
              <button className={styles.tourButton}>Buy Tickets</button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default BandImage;
