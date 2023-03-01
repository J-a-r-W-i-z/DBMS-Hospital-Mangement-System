import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import Router from "./routes.js"
import { Navbar } from "./components"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Router />
      </div>
    </BrowserRouter>
  </HelmetProvider>
)
