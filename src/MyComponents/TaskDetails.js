import React from 'react'
import Button from './Button';
import { useParams,Link,useNavigate,useLocation } from 'react-router-dom';

const TaskDetails = ({ tasks }) => {

    const { id } = useParams();
    const navigate=useNavigate();
    const location=useLocation();
    return (
        <div className='task'>
            {tasks.filter((task) => task.id == id)
                .map(task => (
                    <>
                        <h2>{location.pathname}</h2>
                        <h2>{task.text}</h2>
                        <h3>{task.date}</h3>
                    </>
                ))
            }
            {/* <Link to='/'>Homepage</Link> */}
        <Button text={"Go Back"} onClick={()=>navigate(-1)}/>


        </div>
    )
}

export default TaskDetails