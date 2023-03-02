import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Table } from "../../components"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import "./Admin.scss"

const AdminDashboard = ({ createUserPaths }) => {
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

  // function combineName(user) {
  //   setUsers(
  //     users.map((user) => {
  //       user.name = user.first_name + " " + user.last_name
  //       delete user.first_name
  //       delete user.last_name
  //       return user
  //     })
  //   )

  //   console.log(users)
  // }

  function removeUser(username) {
    setUsers(users.filter((user) => user.username !== username))
    // TODO: Remove user from database
  }

  return (
    <>
      <Tabs focusTabOnClick={false}>
        <TabList>
          {createUserPaths.map((path, index) => (
            <Tab key={index}>{path.breadcrumb}</Tab>
          ))}
        </TabList>

        <Link to="create-user">
          <button className="btn-primary-sm create-user-btn">
            Create new user
          </button>
        </Link>

        {createUserPaths.map((index) => (
          <TabPanel>
            <Table
              key={index}
              headers={["Username", "Name", "Date Joined", "Action"]}
              data={users}
              searchKey="username"
              handleClick={removeUser}
              buttonLabel="Remove"
              buttonClass="btn-secondary-sm"
              clickKey="username"
            />
          </TabPanel>
        ))}
      </Tabs>
    </>
  )
}

export default AdminDashboard
