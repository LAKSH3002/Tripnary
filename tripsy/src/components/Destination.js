import park1 from "../Assets/Dineyland.jpeg";
import park2 from "../Assets/Disney2.jpeg";
import DestinationData from "./Destinationdata";
import "./DestStyles.css";

const Destination = () => {
  return (
    <div className="Destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to see a lot, within a time frame</p>

      <DestinationData
      heading = "Disney Land"
      text="Disneyland Park is a theme park in Anaheim, California, United
            States. It is the first Disneyland. It was opened on July 17, 1955,
            by Walt Disney, the man who invented Mickey Mouse. It is one of the
            most popular theme parks in the world. Disneyland Park celebrated
            its 67th anniversary on July 17, 2022. Disneyland Park consists of
            nine themed lands and a number of concealed backstage areas, and
            occupies over 100 acres (40 ha) with the new addition of Mickey and
            Minnie's Runaway Railway that came to Mickey's Toontown in 2023"
        img1 = {park1}
        img2 = {park2}
      />
    </div>
  );
};

export default Destination;
