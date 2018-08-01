import React from "react"
import "muicss/dist/css/mui-noglobals.css"

export const UserForm = ({...props}) => {
// <input className="mui-textfield" type="text"  placeholder="username" />
  return (
    <div>
      <form className="mui-form--inline" onSubmit={(e) => {
          e.preventDefault()
          props.createUser(e.target.username.value)}}>
          <div className="mui-textfield mui-textfield--float-label">
            <input type="text" name="username" />
            <label>New User</label>
          </div>
         <input className="mui-btn mui-btn--primary" type="submit" name="create-user" />
      </form>
      <ul>
        {props.users.map(item => <li key={item.id}>{item.username}<button
        onClick={() => props.deleteUser(item.id)}>x</button></li>)}
      </ul>
    </div>
  );
}