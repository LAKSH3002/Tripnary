import { Component } from "react";
import "./Tripstyles.css";

class TripData extends Component {
  render() {
    return (
      <>
        <div className="trip">
          <div className={this.props.className}>
            <div className="trip-text">
              <h2>{this.props.heading}</h2>
              <p><b>Day 1: </b>{this.props.text}</p>
              <p><b>Day 2: </b>{this.props.text2}</p>
              <p>{this.props.text6}</p>
            </div>

            <div className="images-trip">
              <img alt="image" src={this.props.img1} />
              <img alt="image" src={this.props.img2} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TripData;
