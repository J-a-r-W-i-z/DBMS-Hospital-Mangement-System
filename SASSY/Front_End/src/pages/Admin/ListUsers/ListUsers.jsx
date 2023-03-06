import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Table, Modal, UserDetails } from "../../../components"
import { handleListUsers, handleDeleteUser } from "../../../actions"

import { AnimatePresence } from "framer-motion"
import "./ListUsers.scss"

const ListUsers = ({ title, userType }) => {
  const [users, setUsers] = useState([
    {
      username: "johnsnow",
      name: "John Snow",
      date_joined: "2021-01-01",
      something: "no",
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

  const location = useLocation()

  useEffect(() => {
    // handleListUsers(userType, setUsers)
    // console.log("useEffect", users)
  }, [location])

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

  function limitedData(users) {
    users = Array.from(users)

    return users.map((user) => ({
      username: user.username,
      name: user.name,
      date_joined: user.date_joined,
    }))
  }

  function deleteAndFetch(key) {
    const status = async () => {
      const response = await handleDeleteUser(key)
      if (!response) return

      await handleListUsers(userType, setUsers)
    }

    status()
  }

  return (
    <>
      <div className="table-container">
        <Table
          title={title}
          headers={["Username", "Name", "Date Joined", "Action"]}
          data={limitedData(users)}
          searchKey="username"
          handleAction={(key) => deleteAndFetch(key)}
          getInfo={(user) => setUserROI(user)}
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
