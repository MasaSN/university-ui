import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStudentById } from '../services/getStudents';
import StudentForm from '../components/StudentForm'
import { Card , App, Spin} from 'antd';
import { useParams } from 'react-router-dom';

function EditStudent() {
    const { message } = App.useApp();
    const { studentId } = useParams();
    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate();
    const onSuccess = (values) => {
        console.log(values);
        message.success("Student updated successfully");
        navigate('/students'); // Redirect to students page after successful update
    }
    const onCancel = () => {
        navigate('/students'); // Redirect to students page on cancel
    }
    const [initialValues, setInitialValues] = React.useState({});
    useEffect(() => {
        const initvals = async () => {
            try {
            const res = await getStudentById(studentId);
            setInitialValues(res.result);
            console.log("Initial Values:", res.result);
            } catch (error) {
            message.error("Failed to load student data.");
            } finally {
            setLoading(false); // ✅ Ensure loading is turned off
            }
        };
        initvals();
        }, [studentId]);

  return (
    <div>
        {loading ? (<Spin/>): 
        <Card title="Edit Student">
        <StudentForm
        studentId={studentId}
          mode="edit"
          initialValues={initialValues}
          onSuccess={onSuccess}
          onCancel={onCancel}
        />
      </Card>}
      
    </div>
  )
}
export default EditStudent
