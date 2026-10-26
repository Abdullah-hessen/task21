import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import websiteImg from "/website.png";
import scale from "/scale.png";
import security from "/security.png";
import servers from "/servers.png";
import cloud from "/cloud.png";
import Plan from "../../components/plan/Plan";
import support from "/support.png";

export default function Home() {
  const plans = [
    {
      img: scale,
      alt: "Maximum Performance",
      title: "Maximum Performance",
      description: "Sample text. Click to select the Text Element.",
    },
    {
      img: security,
      alt: "Fully Secure Data Centers",
      title: "Fully Secure Data Centers",
      description: "Sample text. Click to select the Text Element.",
    },
    {
      img: servers,
      alt: "DDos Attack Prevention",
      title: "DDos Attack Prevention",
      description: "Sample text. Click to select the Text Element.",
    },
    {
      img: cloud,
      alt: "Get Unmetered Bandwidth",
      title: "Get Unmetered Bandwidth",
      description: "Sample text. Click to select the Text Element.",
    },
  ];

  return (
    <div className="home home-test">
      <Navbar />
      <div className="hero container">
        <div className="content">
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
      <div className="hostingPlan container">
        <h2>Pick your perfect web hosting plan</h2>
        <div className="plans">
          {plans.map((card) => {
            return (
              <Plan
                img={card.img}
                alt={card.alt}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
      </div>
      <div className="whoWeAre">
        <div className="left">
          <h2>20+ Years Experience</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </p>
          <button>Get Started</button>
        </div>

        <div className="right">
          <h2>Who We Are</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="support container">
        <div className="image">
          <img src={support} alt="support" />
        </div>
        <div className="content">
          <h2>24/7/365 Support</h2>
          <p>
            Sample text. Click to select the Text Element. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
