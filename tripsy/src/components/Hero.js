import Navbar from "../components/Navbar";
import "./HeroStyles.css";
{
  /* <h1>Your Journey Your Story</h1>
          <p>Choose Your favourite Destination</p>
          <a href="/">Travel Plan</a> */
}

function Hero(props) 
{
  return (
    <>
      <div className={props.cName}>
        <img
          alt="HeroImg"
          src={props.heroImg}
        />
        <div className="herotext"></div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.btntext}</a>
      </div>
    </>
  );
}

export default Hero;
