import { Parallax } from "react-parallax";
import Library from "../assets/library.jpg";
import Library2 from "../assets/library2.jpg";

import "./Home.css";

const Home = () => {
  const handleClick = () => {
    // handle create Room
  };
  return (
    <div>
      <Parallax strength={600} bgImage={Library}>
        <div className="content">
          <div className="text-content">
            <div className="createRoom">
              <h2>Create Room</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                voluptatem laudantium placeat sed, voluptas obcaecati! 
              </p>
              <button onClick={handleClick}>Create Room</button>
            </div>
          </div>
        </div>
      </Parallax>
      <Parallax strength={300} blur={{ min: -15, max: 15 }} bgImage={Library2}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
