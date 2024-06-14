import React from 'react';
import { EditFriend } from './EditFriend';

export const Card = ({ darkMode, data, index }) => {
    return (
        <div>
            <div className={`card mb-3 bg-${darkMode ? "dark" : "light"} text-${!darkMode ? "dark" : "light"} shadow`}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://avatar.iran.liara.run/public/${data.gender === 'Male' ? "boy" : "girl"}/?username=${data.name}`} className="img-fluid rounded-start" alt={data.name} />
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
                <div className="card-body d-flex flex-column">
                    <div>
                        <p className="card-text data">{data.description}</p>
                    </div>
                    <a href="#" className="btn btn-danger align-self-end" data-bs-toggle="modal" data-bs-target={`#deleteModal-${index}`}><i className="fa-solid fa-trash" style={{ color: darkMode ? '#fff' : '#000' }}></i></a>
                </div>

                {/* Modal */}
                <div className="modal fade" id={`deleteModal-${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* Modal content goes here */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/* Additional modal buttons can go here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
