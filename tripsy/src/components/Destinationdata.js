import { Component } from "react";
import "./DestStyles.css";
import park1 from "../Assets/Dineyland.jpeg";
import park2 from "../Assets/Disney2.jpeg";

class DestinationData extends Component{
    render(){
        return(
            <>
            <div className="Destination">
      <div className="first-dest">
        <div className="Desc-text">
          <h2>{this.props.heading}</h2>
          <p>
            Disneyland Park is a theme park in Anaheim, California, United
            States. It is the first Disneyland. It was opened on July 17, 1955,
            by Walt Disney, the man who invented Mickey Mouse. It is one of the
            most popular theme parks in the world. Disneyland Park celebrated
            its 67th anniversary on July 17, 2022. Disneyland Park consists of
            nine themed "lands" and a number of concealed backstage areas, and
            occupies over 100 acres (40 ha) with the new addition of Mickey and
            Minnie's Runaway Railway that came to Mickey's Toontown in 2023
          </p>
        </div>

        <div className="images-dest">
          <img alt="img" src={park1} />
          <img alt="img" src={park2} />
        </div>
      </div>
    </div>
            </>
        )
    }
}

export default DestinationData