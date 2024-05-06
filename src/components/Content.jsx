import maincontent from "../assets/maincontent.png"
import "../styles/content.css"

function Content() {
    return (
      <>
        <div className="responsive-content">
          <div className="responsive-content-image">
            <div>
              <img src={maincontent} alt="" />
            </div>
          </div>
          <div className="responsive-content-text">
              <div className="heading">
                  <h1>Learn Without Limits</h1>
              </div>
              <div className="content-paragraph">
              <p >
              Start, switch, or advance your career with more than 5,800 courses,
              Professional Certificates, and degrees from world-class universities
              and companies.
            </p>
              </div>
          </div>
        </div>
        <div className="main-content">
          <div className="content">
            <h1 className="content-heading">Learn without limits</h1>
            <p className="content-paragraph">
              Start, switch, or advance your career with more than 5,800 courses,
              Professional Certificates, and degrees from world-class universities
              and companies.
            </p>
          </div>
          <div className="main-content-image">
            <img src={maincontent} alt="" className="content_image" />
          </div>
        </div>
      </>
    );
  }
  
  export default Content;
  