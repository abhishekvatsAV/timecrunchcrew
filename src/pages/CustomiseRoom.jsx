import React, { useState } from "react";
import styled from "styled-components";
import { Button, Checkbox, Form, Input } from "antd";

const CustomiseRoom = () => {
  const [startTime, setStartTime] = useState(null);
  const [data, setData] = useState([]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FormContainer>
      <div className="form">
        <h1>Form</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
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
`;

export default CustomiseRoom;
