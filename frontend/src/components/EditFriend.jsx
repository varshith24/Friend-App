import React, { useEffect, useState } from 'react';

export const EditFriend = ({ darkMode, data, index }) => {
    const [name, setName] = useState(data.name);
    const [role, setRole] = useState(data.role);
    const [description, setDescription] = useState(data.description);
    const [gender, setGender] = useState(data.gender);

    useEffect(() => {
        setName(data.name);
        setRole(data.role);
        setDescription(data.description);
        setGender(data.gender);
    }, [data]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'name') setName(value);
        if (id === 'role') setRole(value);
        if (id === 'description') setDescription(value);
        if (id === 'gender') setGender(value);
    };

    const handleSave = () => {
        // Handle save logic here
        // Possibly send updated data to parent component or server
        console.log({ name, role, description, gender });
    };

    return (
        <div>
            <button
                type="button"
                className="btn align-self-start"
                data-bs-toggle="modal"
                data-bs-target={`#editModal-${index}`}
                data-bs-whatever="modal"
            >
                <i className="fa-solid fa-pen" style={{ color: darkMode ? '#fff' : '#000' }}></i>
            </button>
            <div className="modal fade" id={`editModal-${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundColor: darkMode ? '#343a40' : '#fff' }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Friend</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                style={{ filter: darkMode ? 'invert(1)' : 'none' }}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="d-flex" style={{ gap: '30px' }}>
                                    <div className="mb-3">
                                        <label htmlFor={`name-${index}`} className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className={`form-control ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                                            id={`name-${index}`}
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor={`role-${index}`} className="form-label">Role</label>
                                        <input
                                            type="text"
                                            className={`form-control ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                                            id={`role-${index}`}
                                            placeholder="Developer"
                                            value={role}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor={`description-${index}`} className="form-label">Description</label>
                                    <textarea
                                        className={`form-control ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                                        id={`description-${index}`}
                                        rows="3"
                                        placeholder="Experienced full-stack developer."
                                        value={description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor={`gender-${index}`} className="form-label">Gender</label>
                                    <select
                                        className={`form-select ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                                        id={`gender-${index}`}
                                        value={gender}
                                        onChange={handleChange}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
