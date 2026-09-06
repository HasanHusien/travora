// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTour } from "../react_query/useTour";
import OverviewBox from "../components/OverViewBox";
import ReviewCard from "../components/ReviewCard";
import Map from "../components/Map";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
function Tour() {
  const { slug } = useParams();
  const { data, isLoading, error } = useTour(slug);

  const tour = data?.tour || [];

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay">&nbsp;</div>

          <img
            className="header__hero-img"
            src={`/img/tours/${tour?.imageCover}`}
            alt={tour?.name}
          />
        </div>

        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{`${tour?.name} tour`}</span>
          </h1>

          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use href="/img/icons.svg#icon-clock" />
              </svg>

              <span className="heading-box__text">
                {`${tour?.duration} days`}
              </span>
            </div>

            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use href="/img/icons.svg#icon-map-pin" />
              </svg>

              <span className="heading-box__text">
                {tour?.startLocation?.description}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>

              <OverviewBox
                label="Next date"
                text={new Date(tour?.startDates[0]).toLocaleString("en-us", {
                  month: "long",
                  year: "numeric",
                })}
                icon="calendar"
              />

              <OverviewBox
                label="Difficulty"
                text={tour?.difficulty}
                icon="trending-up"
              />

              <OverviewBox
                label="Participants"
                text={`${tour?.maxGroupSize} people`}
                icon="user"
              />

              <OverviewBox
                label="Rating"
                text={`${tour?.ratingsAverage} / 5`}
                icon="star"
              />
            </div>

            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

              {tour?.guides.map((guide) => (
                <div className="overview-box__detail" key={guide._id}>
                  <img
                    className="overview-box__img"
                    src={`/img/users/${guide.photo}`}
                    alt={guide.name}
                  />

                  {guide.role === "lead-guide" && (
                    <span className="overview-box__label">Lead guide</span>
                  )}

                  {guide.role === "guide" && (
                    <span className="overview-box__label">Tour guide</span>
                  )}

                  <span className="overview-box__text">{guide.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="description-box">
            <h2 className="heading-secondary ma-bt-lg">
              {`About ${tour?.name} tour`}
            </h2>

            {tour?.description.split("\n").map((paragraph, index) => (
              <p className="description__text" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pictures">
        {tour?.images.map((image, index) => (
          <div className="picture-box" key={image}>
            <img
              className={`picture-box__img picture-box__img--${index + 1}`}
              src={`/img/tours/${image}`}
              alt={`The Park Camper Tour ${index + 1}`}
            />
          </div>
        ))}
      </section>

      <section className="section-map">
        {/* <div id="map" data-locations={JSON.stringify(tour?.locations)} /> */}
        <Map locations={tour?.locations} />
      </section>

      <section className="section-reviews">
        <div className="reviews">
          {tour?.reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </section>

      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src="/img/logo-white.png" alt="Natours logo" />
          </div>

          <img
            className="cta__img cta__img--1"
            src="/img/tours/tour-5-2.jpg"
            alt=""
          />

          <img
            className="cta__img cta__img--2"
            src="/img/tours/tour-5-1.jpg"
            alt=""
          />

          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>

            <p className="cta__text">
              10 days. 1 adventure. Infinite memories. Make it yours today!
            </p>

            <button className="btn btn--green span-all-rows">
              Book tour now!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tour;
