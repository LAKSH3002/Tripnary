import { Component } from "react";
import "./DestStyles.css";
import park1 from "../Assets/Dineyland.jpeg";
import park2 from "../Assets/Disney2.jpeg";

class DestinationData extends Component {
  render() {
    return (
      <>
        <div className="Destination">
          <div className={this.props.className}>
            <div className="Desc-text">
              <h2>{this.props.heading}</h2>
              <p>{this.props.text}</p>
            </div>

            <div className="images-dest">
              <img alt="img" src={this.props.img1} />
              <img alt="img" src={this.props.img2} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DestinationData;
