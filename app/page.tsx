"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import {useState, useTransition} from "react";

export default function Home() {
  const [state, setState] = useState<boolean>(true)
  let sidebar = "none";
  if (state) {
    sidebar = "display"
  } else {
    sidebar = "none";
  };
  return <header>
    <nav>
      <input checked={state} onChange={e => {
        setState(e.target.checked)
      }} type={"checkbox"} id={"menu"} style={{display: "none"}}/>
      <label htmlFor={"menu"}>
        <FontAwesomeIcon icon={faGripLines} className={"nav-icon"}/>
          <div className={`menu ${sidebar}`}>
            <span>Edit</span>
            <span>Setting</span>
          </div>
      </label>
    </nav>
  </header>
}
