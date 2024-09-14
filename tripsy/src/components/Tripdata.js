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
              <p>{this.props.text}</p>
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
