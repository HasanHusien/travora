import { useTours } from "../react_query/useTours";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

function Overview() {
  const { data, isLoading, error } = useTours();
  const tours = data?.tours || [];

  // const [tours, setTours] = useState([]);
  // useEffect(() => {
  //   async function getTours() {
  //     const res = await fetch("/api/tours");
  //     const data = await res.json();
  //      setTours(data.tours)
  //   }
  //   getTours();
  // }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <main className="main">
      <div className="card-container">
        {tours?.map((tour) => (
          <div className="card" key={tour._id}>
            <div className="card__header">
              <div className="card__picture">
                <div className="card__picture-overlay">&nbsp;</div>

                <img
                  className="card__picture-img"
                  src={`img/tours/${tour.imageCover}`}
                  alt={tour.name}
                />
              </div>

              <h3 className="heading-tertirary">
                <span>{tour.name}</span>
              </h3>
            </div>

            <div className="card__details">
              <h4 className="card__sub-heading">
                {`${tour.difficulty} ${tour.duration}-day Easy 5-day tour`}
              </h4>

              <p className="card__text">{tour.summary}</p>

              <div className="card__data">
                <svg className="card__icon">
                  <use href="img/icons.svg#icon-map-pin" />
                </svg>
                <span>{tour.startLocation.description}</span>
              </div>

              <div className="card__data">
                <svg className="card__icon">
                  <use href="img/icons.svg#icon-calendar" />
                </svg>
                <span>
                  {new Date(tour.startDates[0]).toLocaleString("en-us", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="card__data">
                <svg className="card__icon">
                  <use href="img/icons.svg#icon-flag" />
                </svg>
                <span>{`${tour.locations.length} stops`}</span>
              </div>

              <div className="card__data">
                <svg className="card__icon">
                  <use href="img/icons.svg#icon-user" />
                </svg>
                <span>{`${tour.maxGroupSize} people`}</span>
              </div>
            </div>

            <div className="card__footer">
              <p>
                <span className="card__footer-value">{`$${tour.price}`}</span>{" "}
                <span className="card__footer-text">per person</span>
              </p>

              <p className="card__ratings">
                <span className="card__footer-value">
                  {tour.ratingsAverage}
                </span>{" "}
                <span className="card__footer-text">
                  {`rating (${tour.ratingsQuantity})`}
                </span>
              </p>

              <a
                className="btn btn--green btn--small"
                href={`/tour/${tour.slug}`}
              >
                Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Overview;
