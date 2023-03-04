import React from "react"
import { Table } from "../../components"
import "./UserDetails.scss"

const UserDetails = ({ name, userInfo }) => {
  return (
    <div className="user-details-container">
      <Table
        title={`${name}'s details`}
        headers={["Fields", "Values"]}
        data={userInfo}
      />
    </div>
  )
}

export default UserDetails