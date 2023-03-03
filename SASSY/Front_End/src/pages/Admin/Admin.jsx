import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Table } from "../../components"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import "./Admin.scss"

const AdminDashboard = ({ childrenRoutes }) => {
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
    // TODO: Remove user from database
  }

  return (
    <>
      <Tabs focusTabOnClick={false}>
        <TabList>
          {childrenRoutes.map((path, index) => (
            <Tab key={index}>{path.breadcrumb}</Tab>
          ))}
        </TabList>

        {childrenRoutes.map((path, index) => (
          <>
            <TabPanel>
              <Link to={path.path}>
                <button className="btn-primary-sm create-user-btn">
                  Create new user
                </button>
              </Link>
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
          </>
        ))}
      </Tabs>
    </>
  )
}

export default AdminDashboard
