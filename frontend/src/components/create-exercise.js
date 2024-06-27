import React, { useState, useEffect } from 'react'
import axios from "axios";
const CreateExercise = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [exercise, setExercise] = useState({
        username: '',
        description: '',
        duration: 0,
        date: '',
    });
    const handleChange = ({ target }) => {
        setExercise({ ...exercise, [target.id]: target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(exercise);
        axios
            .post("https://exercise-tracker-blond.vercel.app/exercises/add", exercise)
            .then(res => {
                setMessage(res.data);
                document.getElementById("toast").classList.add("show");
                console.log(res);
                setTimeout(() => {
                    window.location = '/exercise-tracker';
                }, 2000);
            })
            .catch(err => console.log(err));
    };
    useEffect(() => {
        axios
            .get("https://exercise-tracker-blond.vercel.app/users")
            .then((allUsers) => {
                console.log(allUsers.data)
                setUsers(allUsers.data);
            })
            .catch((err) => console.log(err));
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center'>Create New Exercise</h3>
            {/* alert */}
            <div className="toast" id="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <div className="rounded me-2"></div>
                    <strong className="me-auto">Message</strong>
                    <small>jsut now!</small>

                </div>
                <div className="toast-body">
                    {message}
                </div>
            </div>
            {/* Form of Create new exercise */}

            <form >
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <select className="form-control" value={exercise.username} onChange={handleChange} id="username" placeholder="Enter username">
                        <option defaultValue={true}>Choose username</option>
                        {users.map(user => {
                            return (<option key={user.username} value={user.username}>{user.username}</option>)
                        }
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description </label>
                    <textarea value={exercise.description} onChange={handleChange} className="form-control" id="description" rows="1" aria-describedby="descriptionHelp" placeholder="Enter Description"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration </label>
                    <input value={exercise.duration} onChange={handleChange} type="number" className="form-control" id="duration" placeholder="Enter Duration" />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date </label>
                    <input value={exercise.date} onChange={handleChange} type="date" className="form-control" id="date" placeholder="Enter Date" />
                </div>

                <button onClick={handleSubmit} type="submit" className="btn btn-primary my-4 w-100">Submit</button>
            </form>
        </div >
    )
}

export default CreateExercise;