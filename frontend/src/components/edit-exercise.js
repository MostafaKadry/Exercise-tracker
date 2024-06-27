import React, { useState } from 'react';
import axios from "axios";

const EditExercise = () => {
    const [message, setMessage] = useState('');
    const [exercise, setExercise] = useState(JSON.parse(localStorage.getItem("exercise-details")));

    const handleEditExercise = (exe) => {
        axios.post(`https://exercise-tracker-blond.vercel.app/exercises/update/${exe._id}`, exe)
            .then(res => {
                setMessage(res.data);
                document.getElementById("toast").classList.add("show");
                setTimeout(() => {
                    document.getElementById("toast").classList.remove("show");
                    window.location = "/";
                }, 2000)
            })
            .catch(err => console.log(err));
    }
    const handleChange = ({ target }) => {
        setExercise({ ...exercise, [target.id]: target.value });
    };
    return (
        <div>
            <h3 className='text-center'>
                Edit Exercise
            </h3>
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

            <dl className="row border border-secondary border-2 rounded mx-3 " key={exercise._id}>
                <dt className="col-sm-2">username</dt>
                <dd className="col-sm-10">{exercise.username}</dd>
                <dt className="col-sm-2">Description</dt>
                <dd className="col-sm-10">
                    <textarea value={exercise.description} onChange={handleChange} className="form-control" id="description" rows="1" aria-describedby="descriptionHelp" placeholder="Enter Description"></textarea>

                </dd>
                <dt className="col-sm-2">Duration</dt>
                <dd className="col-sm-10">
                    <input value={exercise.duration} onChange={handleChange} type="number" className="form-control" id="duration" placeholder="Enter Duration" />
                </dd>
                <dt className="col-sm-2">Date</dt>
                <dd className="col-sm-10">
                    {/* {new Date(exercise.date).toDateString()} */}

                    <input value={new Date(exercise.date).toISOString().split('T')[0]} onChange={handleChange} type="date" className="form-control" id="date" placeholder="Enter Date" />

                </dd>
                <dd className="col-sm-12"><button onClick={() => handleEditExercise(exercise)} className="btn btn-primary my-4 w-100">Submit</button></dd>
            </dl>

        </div>
    )
}

export default EditExercise