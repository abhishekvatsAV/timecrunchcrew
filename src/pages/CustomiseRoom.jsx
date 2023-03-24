import React, { useState } from "react";
import styled from "styled-components";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
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
        {/* <Form
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
                label="que"
                name="que"
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
                label="Option 1"
                name="o1"
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
                label="Option 2"
                name="o2"
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
                label="Option 3"
                name="o3"
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
                label="Option 4"
                name="o4"
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
                label="Answer"
                name="ans"
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
                  Set test
                </Button>
              </Form.Item>
            </Form>
          </Modal>

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
        </Form> */}
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          autoComplete="off"
        >
          <Form.List name="subjects">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "subject"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Subject" />
                    </Form.Item>

                    <div style={{width:"100%"}} className="div">
                      <Form.Item
                        {...restField}
                        name={[name, "question"]}
                        rules={[
                          { required: true, message: "Missing Question" },
                        ]}
                      >
                        <Input placeholder="Question" />
                      </Form.Item>

                      <div style={{width:"100%", display:"flex",justifyContent:"space-evenly", gap:"10px"}}>
                        <Form.Item
                          {...restField}
                          name={[name, "option1"]}
                          rules={[
                            { required: true, message: "Missing Option 1" },
                          ]}
                        >
                          <Input placeholder="Option 1" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "option2"]}
                          rules={[
                            { required: true, message: "Missing Option 2" },
                          ]}
                        >
                          <Input placeholder="Option 2" />
                        </Form.Item>
                      </div>


                      <div style={{width:"100%", display:"flex",justifyContent:"space-evenly", gap:"10px"}}>
                        <Form.Item
                          {...restField}
                          name={[name, "option3"]}
                          rules={[
                            { required: true, message: "Missing Option 3" },
                          ]}
                        >
                          <Input placeholder="Option 3" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "option4"]}
                          rules={[
                            { required: true, message: "Missing Option 4" },
                          ]}
                        >
                          <Input placeholder="Option 4" />
                        </Form.Item>
                      </div>
                    </div>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Subject
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.div`
overflow-x: hidden;
min-height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    margin:30px;
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
