import React, { useEffect } from 'react'
import { getStudents } from '../services/getStudents'
import { Col, Row, Table } from 'antd'
import StudentCard from '../components/StudentCard'
function Students() {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
  ]
  const [students, setStudents] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const handleViewDetails = (studentId) => {
    alert(`Viewing details for student ID: ${studentId}`);
  }
  const handleEditStudent = (studentId) => {

  }
    useEffect(() => {
    const fetchStudents = async () => {
      try {
        var res = await getStudents()
        setStudents(res.result);
        // console.log(res)
        // console.log(students)
      }catch(error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStudents();
  },[])

  return (
    <div>
        <h1>Welcome to the Students Page</h1>
        <div>
          <Row>
            {students.map((student, index) => {
              return (
                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                  <StudentCard key={student.id} name={student.name} email={student.email} id={student.id} onViewDetails={() => handleViewDetails(student.id)} />
                </Col>
              );
            })}
          </Row>
        </div>
        <hr></hr>
        <Table loading = {loading} columns={columns} dataSource={students}
  rowKey="id" pagination= {{pageSize: 10  }} />

    </div>
  )
}

export default Students
