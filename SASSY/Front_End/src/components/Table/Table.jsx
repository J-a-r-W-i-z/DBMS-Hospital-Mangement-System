import React, { useState } from "react"
import "./Table.scss"

function Table({ title, headers, data, searchKey, handleClick, ...props }) {
  const [query, setQuery] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  function handleSearch(event) {
    setQuery(event.target.value)
    const filteredData = data.filter((row) =>
      row[searchKey].toLowerCase().includes(event.target.value.toLowerCase())
    )
    setFilteredData(filteredData)
  }

  return (
    <div className="table-container">
      <h1>{title}</h1>
      <table>
        <thead>
          {searchKey && (
            <tr>
              <th colSpan={headers.length}>
                <input
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={handleSearch}
                />
              </th>
            </tr>
          )}

          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}

              {handleClick && (
                <td style={{ paddingTop: 5, paddingBottom: 5 }}>
                  <button
                    className={props.buttonClass || "btn-primary-sm"}
                    onClick={() => handleClick(row[props.clickKey])}
                  >
                    {props.buttonLabel}
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
