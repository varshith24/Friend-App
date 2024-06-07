import React from 'react';
// Assuming you add your CSS here

export const Card = ({ darkMode, data }) => {
    return (
        <div className={`card mb-3 bg-${darkMode ? "dark" : "light"} text-${!darkMode ? "dark" : "light"} shadow`}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://avatar.iran.liara.run/public/${data.gender == 'male' ? "boy" : "girl"}/?username=${data.name}`} className="img-fluid rounded-start" alt={data.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{data.role}</h6>
                        <p className="card-text">{data.description}</p>
                        <p className="card-text"><strong>Gender: </strong>{data.gender}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
