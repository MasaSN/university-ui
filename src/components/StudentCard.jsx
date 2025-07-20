import React, { use } from 'react'
import { Button, Card , message, Popconfirm} from 'antd';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import { useEffect } from 'react';
import { deleteStudent } from '../services/getStudents';

const { Title, Text } = Typography;
const StudentCard = (props) => {
  // console.log("StudentCard props:", props);
  const navigate = useNavigate();

  const handleDelete = async () => {
  try {
    await deleteStudent(props.id);
    message.success("Student deleted successfully");
  } catch (err) {
    message.error("Failed to delete student");
  }
};

  return (
    <Card style={{width: 300, margin: 16}}
    hoverable={true}
    actions = {[
        <Button type="primary" onClick={props.onViewDetails}>
            View Details
        </Button>,
        <Button type="primary" onClick={navigate.bind(null, `/edit-student/${props.id}`)}>
            Edit Details
        </Button>,
        <Popconfirm
          title="Are you sure you want to delete this student?"
          onConfirm={handleDelete}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>

      ]}
    >
        <Title level = {4}>{props.name}</Title>
        <Text type="secondary">{props.email}</Text>

    </Card>
  )
}

export default StudentCard
