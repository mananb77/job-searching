import "./ComponentStyles.css";
import headerImg from "./images/extch.png";

const Header = () => {
  return (
    <div>
      <center>
        <img
          class="img"
          src={headerImg}
          alt="ExTech Job Search Logo"
          width={300}
        ></img>
      </center>
      <div class="header">
        <center>
          <h1>Exemplify tech. Job searching. Simplified.</h1>
        </center>
        <center>
          <h3>
            With the company roles, dates, and apply links, we strive to
            simplify
            <br></br> the job searching & filtering process, catered towards
            your needs.
          </h3>
          <br></br>
          <p>
            Our platform constantly searches the web for current openings across
            the realm of tech.<br></br>
            By doing so, we are able to keep users updated (daily) with
            internships and full time offerings.<br></br>
            ExTech allows for users to search a job description, title,
            location, and/or name and they will be <br></br>
            greeted with various job opportunities of the same nature or jobs
            that satisfy the user's search request.
            <br></br>
            <br></br>
            Try it out below!
          </p>
        </center>
      </div>
    </div>
  );
};

export default Header;
