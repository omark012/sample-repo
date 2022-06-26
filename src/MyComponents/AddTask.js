import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const defaultData={
        text: '',
        date: '',
        reminder: false,
    };

    const [data, setData] = useState(defaultData);


    const handleInput = (e) => {
        const { name, value } = e.target;

        if (name === "reminder") {
            setData((prevData) => ({
                ...prevData,
                reminder: !prevData.reminder
            }))
        }

        else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }))
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(data);
        setData(defaultData);
    }

    return (
        <>
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <input
                        required
                        type="text"
                        placeholder='Add Task Here'
                        value={data.text}
                        onChange={handleInput}
                        name='text'
                    />
                </div>
                <div className="form-control">
                    <input
                        required
                        type="text"
                        placeholder='Add Day and Time'
                        value={data.date}
                        onChange={handleInput}
                        name='date'
                    />
                </div>
                <div className="form-control form-control-check">
                    <label htmlFor="">Set Reminder</label>
                    <input
                        type='checkbox'
                        onChange={handleInput}
                        name='reminder'
                        checked={data.reminder}
                    />
                </div>
                <button className='btn btn-block'>Save Task</button>

            </form>
        </>
    )
}

export default AddTask

