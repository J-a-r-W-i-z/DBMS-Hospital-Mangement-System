import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import "./Admin.scss"

const AdminDashboard = () => {
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

        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  )
}

export default AdminDashboard
