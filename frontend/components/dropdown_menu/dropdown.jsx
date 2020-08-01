import React from 'react'

function Dropdown(props) {
  return (
    <nav className="dropdown">
      <ul className="dropdown-drop">{props.children}</ul>
    </nav>
  );
}

function DropdownItem(props){
  return (
    <li className="dropdown-items">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  )
}