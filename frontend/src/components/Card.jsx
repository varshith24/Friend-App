import React from 'react';
import { EditFriend } from './EditFriend';
import axios from 'axios';
import Friend from '../routes/Friend';

export const Card = ({ darkMode, data, index }) => {

    const handleDelete = async (id) => {
        try {
            const res = Friend.deleteFriend(id)
            console.log(res)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <div className={`card mb-3 bg-${darkMode ? "dark" : "light"} text-${!darkMode ? "dark" : "light"} shadow`} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={data.img_url} className="img-fluid rounded-start" alt={data.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex justify-content-between align-items-start">
                            <div>
                                <h5 className="card-title">{data.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{data.role}</h6>
                                <p className="card-text"><strong>Gender: </strong>{data.gender}</p>
                            </div>
                            <div>
                                <EditFriend darkMode={darkMode} data={data} index={index} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body d-flex flex-column" style={{ marginTop: "-30px" }}>
                    <div>
                        <p className="card-text data">{data.description}</p>
                    </div>
                    <a className="btn btn-danger align-self-end"

                        onClick={() => {
                            handleDelete(data.id)
                        }}

                    ><i className="fa-solid fa-trash" style={{ color: darkMode ? '#fff' : '#000' }}></i></a>
                </div>
            </div>
        </div>
    );
};
