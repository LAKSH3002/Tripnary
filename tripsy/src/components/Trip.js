import park1 from "../Assets/Dineyland.jpeg";
import park2 from "../Assets/Disney2.jpeg";
import statue from "../Assets/statue.jpg";
import statue2 from "../Assets/statue2.jpeg";
import bldg1 from "../Assets/burjalarab.jpeg";
import bldg2 from "../Assets/burjkhalifa.jpeg";
import TripData from "./Tripdata";
import "./Tripstyles.css";

function Trip() {
  return (
    <div className="Trip">
      <h1>Sample Itenary of Few Places</h1>
      <p className="hey">
        Check out our Premium Subscription to Get Full Itenary, Hotel Status,
        Transport Method!!!
      </p>

      <TripData
        className="first-trip"
        heading="Hong Kong"
        text=" Arrival & Kowloon Exploration: Visit Wong Tai Sin Temple in Morning, Kowloon Walled City Park in Afternoon and Symphony of Lights Show in Evening"
        text2="Hong Kong Island Highlights"
        text3="Lantau Island & Disneyland"
        text4="Cultural Exploration & Shopping"
        text5="Nature & Departure"
        text6="To Get Personalised Itenary Click The Following Button!"
        img1={park1}
        img2={park2}
      />

      <TripData
        className="first-trip-reverse"
        heading="Statue of Unity"
        text=" Arrival & Exploring the Statue of Unity"
        text2=" Nature & Adventure"
        text3=" Cultural Immersion & Tribal Experience"
        text4=" Adventure & Scenic Views"
        text5=" Relaxation & Departure"
        text6="To Get Personalised Itenary Click The Following Button!"
        img1={statue2}
        img2={statue}
      />

      <TripData
        className="first-trip"
        heading="Dubai"
        text="Arrival & Exploring Modern Dubai"
        text2="Palm Jumeirah, Beaches & Desert Safari"
        text3="Old Dubai & Cultural Exploration"
        text4=" Shopping & Marina District"
        text5="Adventure & Departure"
        text6="To Get Personalised Itenary Click The Following Button!"
        img1={bldg1}
        img2={bldg2}
      />
    </div>
  );
}

export default Trip;
