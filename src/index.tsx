import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

interface IProjectsProps {
  project: {
    id: number
    title: string
    category: string
    status: string
    timeStart: string
    label: string[]
    message?: string[]
  }[]
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
