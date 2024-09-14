import park1 from "../Assets/Dineyland.jpeg";
import park2 from "../Assets/Disney2.jpeg";
import statue from "../Assets/statue.jpg";
import statue2 from "../Assets/statue2.jpeg";
import bldg1 from "../Assets/burjalarab.jpeg";
import bldg2 from "../Assets/burjkhalifa.jpeg";
import TripData from "./Tripdata";
import "./Tripstyles.css";

function Trip() 
{
  return (
    <div className="Trip">
      <h1>Recent Trips</h1>
      <p className="hey">
        You can discover our unique Trips using The Tripsy App
      </p>

      <TripData
        className="first-trip"
        heading="Disney Land"
        text="Disneyland Park is a theme park in Anaheim, California, United
            States. It is the first Disneyland. It was opened on July 17, 1955,
            by Walt Disney, the man who invented Mickey Mouse. Disneyland Park consists of
            nine themed lands and a number of concealed backstage areas, and
            occupies over 100 acres (40 ha) with the new addition of Mickey and
            Minnie's Runaway Railway that came to Mickey's Toontown in 2023. A TOTAL 
            OF 1567 PEOPLE JOINED THE TRIP - MAKING IT THE MOST POPULAR TRIP OF TRIPSY."
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
        An Extraordinary Mann!!!!!!!
        950 PEOPLE JOINED US IN THIS TRIP.
        "
        img1={statue2}
        img2={statue}
      />

      <TripData
        className="first-trip"
        heading="Dubai"
        text="Dubai is the second largest emirate in the United Arab Emirates (UAE) sharing borders with Abu Dhabi in the south, 
        Sharjah in the northeast, and the Sultanate of Oman in the southeast. 
        The emirate of Dubai covers an area of 4,114 square kilometres. In This Trip a total of 786 people Joined us
        Making it the 3rd largest Trip for Tripsy."
        img1={bldg1}
        img2={bldg2}
      />
    </div>
  );
}

export default Trip;
