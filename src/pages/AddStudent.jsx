import React from 'react'
import StudentForm from '../components/StudentForm'
import {Card} from 'antd'
import { useNavigate } from 'react-router-dom'
function AddStudent() {
  const navigate = useNavigate();

  const onSuccess = (values) => {
    // console.log(values)
    alert("Student added successfully");
    navigate('/students'); // Redirect to students page after successful addition
  }

  const onCancel = () => {
    navigate('/students'); // Redirect to students page on cancel
  }

  return (
    <div>
      <Card title="Add Student">
        <StudentForm onSuccess={onSuccess} onCancel={onCancel} />
      </Card>
    </div>
  )
}

export default AddStudent

