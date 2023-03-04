import React, { useState } from "react"
import { Table } from "../../../components"
import { handleListUsers } from "../../../actions"
import "./ListUsers.scss"

const ListUsers = ({ title, userType }) => {
  const [users, setUsers] = useState([
    {
      username: "johnsnow",
      name: "John Snow",
      date_joined: "2021-01-01",
    },
    {
      username: "janesmith",
      name: "Jane Smith",
      date_joined: "2021-01-01",
    },
    {
      username: "bobjohnson",
      name: "Bob Johnson",
      date_joined: "2021-01-01",
    },
  ])

  function removeUser(username) {
    setUsers(users.filter((user) => user.username !== username))
  }

  return (
    <div className="table-container">
      <Table
        title={title}
        headers={["Username", "Name", "Date Joined", "Action"]}
        data={users}
        searchKey="username"
        handleClick={removeUser}
        buttonLabel="Remove"
        buttonClass="btn-secondary-sm"
        clickKey="username"
      />
    </div>
  )
}

export default ListUsers
