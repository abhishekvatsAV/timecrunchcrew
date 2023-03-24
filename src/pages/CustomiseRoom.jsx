import React, { useState } from "react";
import styled from "styled-components";
import { Button, Checkbox, Form, Input, Space, Modal } from "antd";
// import {
//     PlusCircleOutlined
//   } from '@ant-design/icons';

const CustomiseRoom = () => {
  const [startTime, setStartTime] = useState(null);
  const [data, setData] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const addSubjectHandler = () => {
    setSubjects([...subjects, ""]);
    console.log(subjects);
  };

  return (
    <FormContainer>
      <div className="form">
        <h1>Form</h1>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Start Time"
            name="startTime"
            rules={[
              {
                required: true,
                message: "Please input Start Time!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {subjects.map((subject, index) => {
            return (
              <>
                <Form.Item name={`subject` + index}>
                  <Input placeholder="Enter Subject Name" />
                </Form.Item>
                <Button onClick={showModal} className="btn">
                  Add Test
                </Button>
              </>
            );
          })}

          <Modal
            title="Basic Modal"
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

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Create Room
                </Button>
              </Form.Item>
            </Form>
          </Modal>

          {/* <Form.Item
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
          </Form.Item> */}
          <Form.Item
            wrapperCol={{
              span: 16,
            }}
          >
            <Button onClick={addSubjectHandler}>Add Subject </Button>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Create Room
            </Button>
          </Form.Item>
        </Form>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 600px;
  }
  .subject {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .btn {
    margin-bottom: 20px;
  }
`;

export default CustomiseRoom;
