"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

export default function Home() {
  const [state, setState] = useState<boolean>(false)
  let sidebar = "none";
  if (state) {
    sidebar = "display"
  }
  return <header>
    <nav>
      <input checked={state} onChange={e => {
        setState(e.target.checked)
      }} type={"checkbox"} id={"menu"} style={{display: "none"}}/>
      <label htmlFor={"menu"}>
        <FontAwesomeIcon icon={faGripLines} className={"nav-icon"}/>
        {state && <div className={"overlay"}></div>}
      </label>
      <div className={`menu ${sidebar}`}>
        <span>Edit</span>
        <span>Setting</span>
      </div>
    </nav>
  </header>
}
