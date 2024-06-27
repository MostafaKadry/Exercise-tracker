import React, { useState } from 'react'
import axios from "axios";
const CreateUser = () => {
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState("");
    const handleChange = ({ target }) => {
        setUsername({ [target.id]: target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        axios
            .post("https://exercise-tracker-blond.vercel.app/users/add", username)
            .then(res => {
                setMessage(res.data);
                document.getElementById("toast").classList.add("show");
                console.log(res)
                setTimeout(() => {
                    window.location = '/';
                }, 2000);
            })
            .catch(err => {
                setMessage(err.message);
                document.getElementById("toast").classList.add("show");
                console.log(err);
            });
    };
    return (
        <div className='container' >
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
            <form >
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input onChange={handleChange} type="text" className="form-control" id="username" placeholder="User Name" />
                </div>
            </form>


            <button onClick={handleSubmit} className="btn btn-primary my-4 w-100">Submit</button>
        </div>
    )
}

export default CreateUser;