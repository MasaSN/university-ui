import {Form, Input,  Button, App } from 'antd';
import { useEffect } from 'react';
import { createStudent, updateStudent } from '../services/getStudents';

const StudentForm = ({mode= 'create', initialValues= {}, onSuccess, onCancel, studentId = null}) => {
    const {message} = App.useApp();
    const[form] = Form.useForm();
    console.log("student id ", studentId)
  useEffect(() => {
    if (mode === 'edit') {
      form.setFieldsValue(initialValues);
    }
  }, [mode, initialValues, form]);

  const handleSubmit = async (values) => {
        try {
            if (mode === 'create') {
                await createStudent(values);
                message.success('Student created successfully');
            }else{
                console.log("coming values to update", studentId);
                await updateStudent(studentId, values);
                message.success('Student updated successfully');
            }
            form.resetFields();
            onSuccess();
          } catch (error) {
            message.error('Failed to submit the form');
          }
  }
    return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter the student name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please enter the student email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {mode === 'create' ? 'Create Student' : 'Update Student'}
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={onCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default StudentForm
