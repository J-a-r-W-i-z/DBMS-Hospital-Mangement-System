import React, { useState, useEffect } from "react"
import { Table, Modal, UserDetails } from "../../../components"
import { handleListUsers } from "../../../actions"

import { AnimatePresence } from "framer-motion"
import "./ListUsers.scss"

const ListUsers = ({ title }) => {
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
  const [userROI, setUserROI] = useState(-1)

  function tableData() {
    return [
      {
        key: "Username",
        value: users[userROI].username,
      },
      {
        key: "Name",
        value: users[userROI].name,
      },
      {
        key: "Date Joined",
        value: users[userROI].date_joined,
      },
      {
        key: "Email",
        value: users[userROI].email,
      },
    ]
  }

  return (
    <>
      <div className="table-container">
        <Table
          title={title}
          headers={["Username", "Name", "Date Joined", "Action"]}
          data={users}
          searchKey="username"
          // handleAction={removeUser}
          getInfo={(user) => {
            setUserROI(user)
            console.log(user)
          }}
          buttonLabel="Remove"
          buttonClass="btn-secondary-sm"
          clickKey="username"
        />
      </div>
      <AnimatePresence>
        {userROI !== -1 && (
          <Modal
            element={
              <UserDetails name={users[userROI].name} userInfo={tableData()} />
            }
            handleClick={() => setUserROI(-1)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default ListUsers
