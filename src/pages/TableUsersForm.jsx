import React from "react"
import { connect } from "react-redux"
import '../App.css'

const TableUsersForm = ({ users }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Email</th>
                <th>Пароль</th>
            </tr>
            </thead>
            <tbody>
            {users && users.map((user, index) => {
                return (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(TableUsersForm)
