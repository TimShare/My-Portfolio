import { Fade } from "react-awesome-reveal";

import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <Fade>
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Frontend</h2>
                <p>JavaScript, ReactJS, HTML, CSS, NPM</p>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Backend</h2>
                <p>NodeJS, MySQL, Python, C#</p>
              </li>
            </ul>
          </Fade>
        </div>
      </main>
    </>
  );
};

export default Home;
