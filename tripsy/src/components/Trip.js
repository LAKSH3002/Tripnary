import Tripdata from "./Tripdata";
import "./Tripstyles.css";
import Img1 from "../Assets/atlantis.jpg";
import Img2 from "../Assets/eiffle_tower.jpg";
import Img3 from "../Assets/london_bridge.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique Destinations using Google Maps.</p>
      <div className="tripcard">
        <Tripdata
          image={Img1}
          heading="Trip To Dubai"
          text="The hotel is known for its extravagant water-themed attractions, 
          including the Aquaventure Waterpark and The Lost Chambers Aquarium. 
          Additionally, Atlantis offers fine dining options, stunning views of the 
          Arabian Gulf, and a vibrant nightlife scene, contributing to its appeal 
          as a sought-after destination"
        />
        <Tripdata
          image={Img2}
          heading="Trip To Paris"
          text="Like all towers, it allows us to see and to be seen, with a spectacular 
          ascent, a unique panoramic view of Paris, and a glittering beacon in the skies of
          the Capital. The Tower also represents the magic of light. Its lighting, its sparkling 
          lights, and its beacon shine and inspire dreams every evening."
        />
        <Tripdata
          image={Img3}
          heading="Trip To London"
          text="The London Bridge is known as the world's largest antique, and with the 
          opening of the bridge in October 1971, Lake Havasu City was permanently put on the 
          map as a world-famous attraction."
        />
      </div>
    </div>
  );
}

export default Trip;
