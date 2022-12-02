import "./ComponentStyles.css";
import Footerimg from "./images/footer.png";

const Footer = () => {
  return (
    <div>
      <center>
        <img
          class="img"
          src={Footerimg}
          alt="ExTech Job Search Logo"
          width={300}
        ></img>
      </center>
    </div>
  );
};

export default Footer;