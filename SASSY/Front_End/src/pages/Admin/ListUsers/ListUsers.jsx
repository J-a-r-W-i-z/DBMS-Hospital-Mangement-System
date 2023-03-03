import React, { useState } from "react"
import { Table } from "../../../components"
import { handleListUsers } from "../../../actions"
import "./ListUsers.scss"

const ListUsers = ({ userType }) => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function removeUser(username) {
    setUsers(users.filter((user) => user.username !== username))
  }

  function fetchUsers() {
    setLoading(true)
    setUsers(handleListUsers(userType))
    setLoading(false)
  }

  return (
    <div className="table-container">
      <Table
        headers={["Username", "Name", "Date Joined", "Action"]}
        rows={users}
        removeUser={removeUser}
      />
    </div>
  )
}

export default ListUsers
