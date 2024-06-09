import React from 'react'

export const AddFriend = ({ darkMode }) => {
    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">

                {darkMode ? <i class="fa-solid fa-plus" style={{ color: "#fff" }}></i> : <i class="fa-solid fa-plus" style={{ color: "#000" }}></i>}

            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style={{ backgroundColor: darkMode ? '#343a40' : '#fff' }}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Connect with a Buddy</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ Color: darkMode ? '#343a40' : '#fff' }}></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className='d-flex' style={{ gap: "30px" }}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className={`form-control ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} id="name" placeholder="John Doe" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="role" className="form-label">Role</label>
                                        <input type="text" className={`form-control ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} id="role" placeholder="Developer" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className={`form-control ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} id="description" rows="3" placeholder="Experienced full-stack developer."></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select className={`form-select ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} id="gender">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
