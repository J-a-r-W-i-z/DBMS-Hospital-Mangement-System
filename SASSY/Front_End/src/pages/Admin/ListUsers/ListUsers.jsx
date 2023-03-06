import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Table, Modal, UserDetails } from "../../../components"
import { handleListUsers, handleDeleteUser } from "../../../actions"

import { AnimatePresence } from "framer-motion"
import "./ListUsers.scss"

const ListUsers = ({ title, userType }) => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [userROI, setUserROI] = useState(-1)

  const location = useLocation()

  useEffect(() => {
    handleListUsers(userType, setUsers, setLoading)
  }, [location])

  function deleteAndFetch(key) {
    const status = async (user) => {
      const response = await handleDeleteUser(
        user.EmployeeId_id,
        user.user_type
      )
      if (!response) return

      handleListUsers(userType, setUsers, setLoading)
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
