import React, { useState, useEffect } from 'react';
import axios from "axios";

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [message, setMessage] = useState('');
    const deleteExercise = (id) => {
        axios.delete(`https://exercise-tracker-blond.vercel.app/exercises/${id}`)
            .then(res => {
                setExercises(exercises.filter(exe => exe._id !== id))
                setMessage(res.data);
                document.getElementById("toast").classList.add("show");
                setTimeout(() => {
                    document.getElementById("toast").classList.remove("show");
                }, 2000);
            })
    }
    const editExercise = (exe) => {
        localStorage.setItem("exercise-details", JSON.stringify(exe))
        window.location = `/exercise-tracker/edit/${exe._id}`;
    }
    useEffect(() => {
        axios.get("https://exercise-tracker-blond.vercel.app/exercises")
            .then(res => {
                setExercises(res.data);

            }).catch(err => {
                setMessage(err.message);
                document.getElementById("toast").classList.add("show");
                console.log(err)
            })
    }, [])
    return (
        <div>
            <h3 className='text-center'>Exercises List</h3>
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
            <div>

                {exercises.map((exe) => {
                    return (
                        <dl className="row border border-secondary border-2 rounded mx-3 " key={exe._id}>
                            <dt className="col-sm-2">username</dt>
                            <dd className="col-sm-10">{exe.username}</dd>
                            <dt className="col-sm-2">Description</dt>
                            <dd className="col-sm-10">{exe.description}</dd>
                            <dt className="col-sm-2">Duration (min)</dt>
                            <dd className="col-sm-10">{exe.duration}</dd>
                            <dt className="col-sm-2">Date</dt>
                            <dd className="col-sm-10">{new Date(exe.date).toDateString()}</dd>
                            <dd className='col-sm-6 text-center'>
                                <h4 onClick={() => deleteExercise(exe._id)}>
                                    <span className="badge bg-danger px-2" role="button">Delete</span>
                                </h4>
                            </dd>
                            <dd className='col-sm-6 text-center'>
                                <h4 onClick={() => editExercise(exe)}>
                                    <span className="badge bg-secondary px-2" role="button">Edit</span>
                                </h4>
                            </dd>
                        </dl>
                    )
                })}

            </div>
        </div>
    )
}

export default ExerciseList