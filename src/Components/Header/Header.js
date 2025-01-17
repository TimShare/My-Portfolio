import "./Style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Timur</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>Eager to explore, learn, and build.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
