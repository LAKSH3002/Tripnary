import Destinationdata from "./Destinationdata";
import "./Destinationstyles.css";
import Img1 from "../Assets/atlantis.jpg";
import Img2 from "../Assets/eiffle_tower.jpg";
import Img3 from "../Assets/london_bridge.jpg";
import Img4 from "../Assets/newyork.jpeg";
import Img5 from "../Assets/sydney.jpeg";
import Img6 from "../Assets/maldives.jpeg";

function Destination() {
  return (
    <div className="dest">
      <h1>Popular Destinations</h1>
      <p className="heading">
        The Following Are the Most Popular Places to Visit!!
      </p>
      <div className="destcard">
        <Destinationdata
          image={Img1}
          heading="Dubai"
          text="The hotel is known for its extravagant water-themed attractions, 
          including the Aquaventure Waterpark and The Lost Chambers Aquarium. 
          Additionally, Atlantis offers fine dining options, stunning views of the 
          Arabian Gulf, and a vibrant nightlife scene, contributing to its appeal 
          as a sought-after destination"
          buttontext="Prepare My Itenary"
        />
        <Destinationdata
          image={Img2}
          heading="Paris"
          text="Like all towers, it allows us to see and to be seen, with a spectacular 
          ascent, a unique panoramic view of Paris, and a glittering beacon in the skies of
          the Capital. The Tower also represents the magic of light. Its lighting, its sparkling 
          lights, and its beacon shine and inspire dreams every evening."
          buttontext="Prepare My Itenary"
        />
        <Destinationdata
          image={Img3}
          heading="London"
          text="The London Bridge is known as the world's largest antique, and with the 
          opening of the bridge in October 1971, Lake Havasu City was permanently put on the 
          map as a world-famous attraction.The Tower also represents the magic of light. Its lighting, its sparkling 
          lights, and its beacon shine and inspire dreams every evening."
          buttontext="Prepare My Itenary"
        />
      </div>

      <div className="destcard">
        <Destinationdata
          image={Img4}
          heading="New York"
          text="The city comprises five boroughs, each coextensive with a respective county. 
          New York is a global center of finance and commerce, culture, technology, entertainment 
          and media, academics and scientific output, the arts and fashion, and, as home to the 
          headquarters of the United Nations, international diplomacy.people "
          buttontext="Prepare My Itenary"
        />
        <Destinationdata
          image={Img5}
          heading="Sydney"
          text="Sydney is the largest and most populous city in Australia and the state capital of 
          New South Wales. Sydney is located on Australia's south-east coast of the Tasman Sea. 
          Inhabitants of Sydney are called Sydneysiders, comprising a cosmopolitan and international
          population of people from numerous places around the world."
          buttontext="Prepare My Itenary"
        />
        <Destinationdata
          image={Img6}
          heading="Maldives"
          text="The Maldives is a republic lies south-west of the Indian sub-continent. 
          It is made up of a chain of nearly 1,200 islands, most of them uninhabited. 
          None of the coral islands stand more than 1.8 metres (six feet) above sea level, 
          making the country vulnerable to any rise in sea levels associated with global warming people from numerous places around the world."
          buttontext="Prepare My Itenary"
        />
      </div>
    </div>
  );
}

export default Destination;
