import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Table, Modal, UserDetails } from "../../../components"
import { handleListUsers, handleDeleteUser } from "../../../actions"

import { AnimatePresence } from "framer-motion"
import "./ListUsers.scss"

const ListUsers = ({ title, userType }) => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([
    {
      username: "admin",
      name: "Admin",
      date_joined: "2021-05-01",
      EmployeeId_id: 4,
      user_type: 1,
    },
    {
      username: "user",
      name: "User",
      date_joined: "2021-05-01",
      EmployeeId_id: 6,
      user_type: 1,
    },
    {
      username: "user1",
      name: "User1",
      date_joined: "2021-05-01",
      EmployeeId_id: 7,
      user_type: 1,
    },
  ])
  const [userROI, setUserROI] = useState(-1)

  const location = useLocation()

  useEffect(() => {
    listusers(userType)
  }, [location])

  const listusers = async (userType) => {
    setLoading(true)
    const response = await handleListUsers(userType)
    setLoading(false)
    setUsers(response.List)
  }

  function deleteAndFetch(key) {
    const status = async (user) => {
      const response = await handleDeleteUser(
        user.EmployeeId_id,
        user.user_type
      )
      if (!response) return

      listusers(userType)
    }

    const filteredUser = users.filter((user) => user.username === key)[0]
    status(filteredUser)
  }

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
    console.log(users)

    return users.map((user) => ({
      id: user.EmployeeId_id,
      username: user.username,
      name: user.Name,
      email: user.Email,
    }))
  }

  return (
    <>
      {!loading && (
        <>
          <div className="table-container">
            <Table
              title={title}
              headers={[
                "Employee ID",
                "Username",
                "Name",
                "Email ID",
                "Action",
              ]}
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
                  <UserDetails
                    name={users[userROI].name}
                    userInfo={tableData()}
                  />
                }
                handleClick={() => setUserROI(-1)}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  )
}

export default ListUsers
