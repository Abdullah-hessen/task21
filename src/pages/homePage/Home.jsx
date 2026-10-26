import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import websiteImg from "/website.png";

export default function Home() {
  return (
    <div className="home home-test">
      <Navbar />
      <div className="hero container">
        <div className="content">
          <div
            style={{ backgroundColor: "red", border: "5px solid yellow" }}
          ></div>
          <p className="dont-miss">
            <span>🔥Don't miss limited-time savings:</span> Savings 20%
          </p>
          <h1>Everything for Your Site to Succeed</h1>
          <div className="getStarted">
            <button>Get Started</button>
            <p>
              <span>Starting at only</span> $4.75/mo*
            </p>
          </div>
        </div>
        <div className="image">
          <img src={websiteImg} alt="website" />
        </div>
      </div>
      <div className="planingHost"></div>
    </div>
  );
}
