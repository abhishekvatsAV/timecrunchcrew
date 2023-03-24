import { Parallax } from "react-parallax";
import Library from "../assets/library.jpg";
import Library2 from "../assets/library2.jpg";
import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";

import "./Home.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useState
  const handleCreate = () => {
    setIsModalOpen(true);
  };

  const handleJoin = () => {
    setIsModalOpen(true);
  };
  const handleOk1 = () => {
    setIsModalOpen(false);
  };
  const handleOk2 = () => {
    setIsModalOpen(false);
  };

  // MODAL
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
              <Button onClick={showModal} type="primary">
                Create Room
              </Button>
              {isModalOpen && (
                <Modal
                  open={isModalOpen}
                  onOk={handleOk1}
                  onCancel={handleCancel}
                >
                  <p>Username : </p>
                  <Input />
                </Modal>
              )}
              <Modal
                title="Create New Room"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Form>
              </Modal>
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
              <Button type="primary" onClick={handleJoin}>
                Join Room
              </Button>
              {isModalOpen && (
                <Modal
                  open={isModalOpen}
                  onOk={handleOk2}
                  onCancel={handleCancel}
                >
                  <p>Username : </p>
                  <Input />
                </Modal>
              )}
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
