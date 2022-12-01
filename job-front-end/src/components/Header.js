import "./ComponentStyles.css";
import headerImg from "src/images/extch.png";

const Header = () => {
  return (
    <div>
      <center>
        <img class="img" src={headerImg} alt="ExTech logo" width={300}></img>
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
          <p>The best tech job searching platform on the internet.</p>
        </center>
      </div>
    </div>
  );
}

export default Header;