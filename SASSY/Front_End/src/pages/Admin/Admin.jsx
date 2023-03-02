import React, { useState } from "react"
import { Table } from "../../components"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import "./Admin.scss"

const AdminDashboard = () => {
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
    <div className="section s-wrapper">
      <p className="primary-heading center-text">Admin Dashboard</p>
      <div className="margin-divider-sm" />

      <Tabs
        focusTabOnClick={false}
        disableLeftRightKeys={true}
        disableUpDownKeys={true}
      >
        <TabList>
          <Tab>Front desk operators</Tab>
          <Tab>Data entry operators</Tab>
          <Tab>Doctors</Tab>
          <Tab>Adminstrators</Tab>
        </TabList>

        <div className="margin-divider-sm" />

        <TabPanel>
          <Table
            headers={["Username", "Name", "Date Joined", "Action"]}
            data={users}
            searchKey="username"
            handleClick={removeUser}
            buttonLabel="Remove"
            buttonClass="btn-secondary-sm"
            clickKey="username"
          />
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  )
}

export default AdminDashboard
