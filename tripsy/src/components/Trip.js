import park1 from "../Assets/Dineyland.jpeg";
import park2 from "../Assets/Disney2.jpeg";
import statue from "../Assets/statue.jpg";
import statue2 from "../Assets/statue2.jpeg";
import TripData from "./Tripdata";
import "./Tripstyles.css";

function Trip () {
  return (
    <div className="Trip">
      <h1>Recent Trips</h1>
      <p className="hey">You can discover our unique Trips using The Tripsy App</p>

      <TripData
        className="first-trip"
        heading="Disney Land"
        text="Disneyland Park is a theme park in Anaheim, California, United
            States. It is the first Disneyland. It was opened on July 17, 1955,
            by Walt Disney, the man who invented Mickey Mouse. It is one of the
            most popular theme parks in the world. Disneyland Park celebrated
            its 67th anniversary on July 17, 2022. Disneyland Park consists of
            nine themed lands and a number of concealed backstage areas, and
            occupies over 100 acres (40 ha) with the new addition of Mickey and
            Minnie's Runaway Railway that came to Mickey's Toontown in 2023"
        img1={park1}
        img2={park2}
      />

      <TripData
        className="first-trip-reverse"
        heading="Statue of Unity"
        text="
        Sardar Vallabhbhai Patel, born on October 31, 1875, played a crucial role
        in uniting India's princely states post-independence, earning him the title 
        Iron Man of India. Patel's leadership and vision were instrumental in unifying 
        India as the first Deputy Prime Minister and Home Minister. 
        He was respected and admired for his contributions towards a unified and independent India.
        Patel passed away on December 15, 1950, leaving an enduring legacy as a revered leader.
        "
        img1={statue2}
        img2={statue}
      />
    </div>
  );
};

export default Trip;
