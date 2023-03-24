import { Parallax } from "react-parallax";
import Library from "../assets/library.jpg";
import Library2 from "../assets/library2.jpg";
import { Button } from "antd";

import "./Home.css";

const Home = () => {
  const handleCreate = () => {
    // handle create Room
  };

  const handleJoin = () => {
    // handle room joining
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
              <Button type="primary" onClick={handleCreate}>
                Create Room
              </Button>
            </div>
          </div>
        </div>
      </Parallax>
      <Parallax strength={300} blur={{ min: -15, max: 15 }} bgImage={Library2}>
        <div className="content">
          <div className="text-content">
            <div className="joinRoom">
              <h2>Join Room</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                voluptatem laudantium placeat sed, voluptas obcaecati!
              </p>
              <Button type="primary" onClick={handleClick}>
                Join Room
              </Button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
