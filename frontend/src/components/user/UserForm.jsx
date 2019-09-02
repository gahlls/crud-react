import React from 'react'

export default props => (
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"
                        name="name"
                        value={props.user.name}
                        onChange={props.updateField}
                        placeholder="Enter name..." />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control"
                        name="email"
                        value={props.user.email}
                        onChange={props.updateField}
                        placeholder="Enter email..." />
                </div>
            </div>
        </div>

        <hr />
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary"
                    onClick={props.save}>
                    Save
                </button>

                <button className="btn btn-secondary ml-2"
                    onClick={props.clear}>
                    Cancel
                </button>
            </div>
        </div>
    </div>
) 

