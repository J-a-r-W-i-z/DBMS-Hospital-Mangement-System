import React from 'react'
import ReactDOM from 'react-dom'
import FrontDeskOperator from './components/FrontDeskPage/FrontDeskOperator/FrontDeskOperator'
import DataEntryOperator from './components/DataEntryPage/DataEntryOperator'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// <DataEntryOperator />
	<FrontDeskOperator />
)
