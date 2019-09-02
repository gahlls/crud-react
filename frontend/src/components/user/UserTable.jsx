import React from 'react'

export default props => (
    <table className="table mt-4">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.renderRows}
        </tbody>
    </table>
)