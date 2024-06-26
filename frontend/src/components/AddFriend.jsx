import React, { useState } from 'react';
import axios from 'axios'
import Friend from '../routes/Friend';

export const AddFriend = ({ darkMode }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [gender, setGender] = useState('Male');
    const handleSubmit = async () => {
        const img_url = `https://avatar.iran.liara.run/public/${gender === 'Male' ? "boy" : "girl"}/?username=${name}`
        const newFriend = { name, role, description, gender, img_url };
        console.log(newFriend);
        try {
            const res = await Friend.addFriend(newFriend)
            console.log(res)
        }
        catch (e) {
            console.log(e);
        }
        // Handle saving the new friend data, e.g., send it to an API or update the parent component's state
    };

    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {darkMode ? <i className="fa-solid fa-plus" style={{ color: "#fff" }}></i> : <i className="fa-solid fa-plus" style={{ color: "#000" }}></i>}
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundColor: darkMode ? '#343a40' : '#fff' }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Connect with a Buddy</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ color: darkMode ? '#343a40' : '#fff' }}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className='d-flex' style={{ gap: "30px" }}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className={`form-control ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                                            id="name"
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="role" className="form-label">Role</label>
                                        <input
                                            type="text"
                                            className={`form-control ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                                            id="role"
                                            placeholder="Developer"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className={`form-control ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                                        id="description"
                                        rows="3"
                                        placeholder="Experienced full-stack developer."
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select
                                        className={`form-select ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                                        id="gender"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};