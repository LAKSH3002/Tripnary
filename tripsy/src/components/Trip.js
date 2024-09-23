import park1 from "../Assets/Dineyland.jpeg";
import park2 from "../Assets/Disney2.jpeg";
import statue from "../Assets/statue.jpg";
import statue2 from "../Assets/statue2.jpeg";
import bldg1 from "../Assets/burjalarab.jpeg";
import bldg2 from "../Assets/burjkhalifa.jpeg";
import "./Tripstyles.css";

function Trip() {
  return (
    <div className="Trip">
      <h1>Sample Itenary of Few Places</h1>
      <p className="hey">
        Check out our Premium Subscription to Get Full Itenary, Hotel Status,
        Transport Method!!!
      </p>

      <div className="trip">
        <div className="first-trip">
          <div className="trip-text">
            <h2>Hong Kong</h2>
            <p>
              <b>Day 1: </b>Hong Kong Island Highlights
            </p>
            <p>
              <b>Day 2: </b>Lantau Island & Disneyland
            </p>
            <p>
              <b>Day 2: </b>Lantau Island & Disneyland
            </p>
            <p>
              <b>Day 2: </b>Lantau Island & Disneyland
            </p>
            <p>
              <b>Day 2: </b>Lantau Island & Disneyland
            </p>
            <p>To Get Personalised Itenary Click The Following Button!</p>
          </div>

          <div className="images-trip">
            <img alt="image" src={park1} />
            <img alt="image" src={park2} />
          </div>
        </div>
      </div>

      <div className="trip">
        <div className="first-trip-reverse">
          <div className="trip-text">
            <h2>Statue of Unity</h2>
            <p>
              <b>Day 1: </b>Arrival & Exploring the Statue of Unity
            </p>
            <p>
              <b>Day 2: </b>Cultural Immersion & Tribal Experience
            </p>
            <p>
              <b>Day 2: </b>Cultural Immersion & Tribal Experience
            </p>
            <p>
              <b>Day 2: </b>Cultural Immersion & Tribal Experience
            </p>
            <p>
              <b>Day 2: </b>Cultural Immersion & Tribal Experience
            </p>
            <p>To Get Personalised Itenary Click The Following Button!</p>
          </div>

          <div className="images-trip">
            <img alt="image" src={statue} />
            <img alt="image" src={statue2} />
          </div>
        </div>
      </div>

      <div className="trip">
        <div className="first-trip">
          <div className="trip-text">
            <h2>Dubai</h2>
            <p>
              <b>Day 1: </b>Arrival & Exploring Modern Dubai
            </p>
            <p>
              <b>Day 2: </b>Palm Jumeirah, Beaches & Desert Safari
            </p>
            <p>
              <b>Day 2: </b>Palm Jumeirah, Beaches & Desert Safari
            </p>
            <p>
              <b>Day 2: </b>Palm Jumeirah, Beaches & Desert Safari
            </p>
            <p>
              <b>Day 2: </b>Palm Jumeirah, Beaches & Desert Safari
            </p>
            <p>To Get Personalised Itenary Click The Following Button!</p>
          </div>

          <div className="images-trip">
            <img alt="image" src={bldg1} />
            <img alt="image" src={bldg2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
