import park1 from "../Assets/Dineyland.jpeg";
import park2 from "../Assets/Disney2.jpeg";
import statue from "../Assets/statue.jpg";
import statue2 from "../Assets/statue2.jpeg";

import DestinationData from "./Destinationdata";
import "./DestStyles.css";

const Destination = () => {
  return (
    <div className="Destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-dest"
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

      <DestinationData
        className="first-dest-reverse"
        heading="Statue of Unity"
        text="
        Sardar Vallabhbhai Patel, born on October 31, 1875, played a crucial role
        in uniting India's princely states post-independence, earning him the title 
        Iron Man of India. Patel's leadership and vision were instrumental in unifying 
        India as the first Deputy Prime Minister and Home Minister. 
        He was respected and admired for his contributions towards a unified and independent India.
        Patel passed away on December 15, 1950, leaving an enduring legacy as a revered leader.
        "
        img1={statue}
        img2={statue2}
      />
    </div>
  );
};

export default Destination;
