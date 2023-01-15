import "./header.css";
import CTA from "./CTA";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="greeting">Hello, my name is</h5>
        <h1>Shalini C E</h1>
        <h5 className="text-light">I'm a Programmer, Designer and a Learner</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
