import React from 'react'
import {FaTimes} from 'react-icons/fa';
import Button from './Button'
import { Link } from 'react-router-dom';

const TaskItem = ({task,onDelete,onToggle}) => {
  return (
    <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={()=>onToggle(task.id)}>
        <h3>{task.text} <FaTimes onClick={()=>onDelete(task.id)} style={{color:'red',cursor:'pointer'}}/></h3>
        <p>{task.date}</p>
        <Link to={`/task/${task.id}`}><p>Details Here</p></Link>
    </div>
  )
}

export default TaskItem