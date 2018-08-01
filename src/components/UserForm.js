import React from "react"

export const UserForm = ({...props}) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
    props.createUser(e.target.username.value);
    e.target.username.value = '';
  }
  let status = 'Select Player 1';
  if (props.players[0] !== null){
    status = "Select Player 2";
  } else if (props.players[1] !== null){
    status = "Done!";
  }
  return (
    <React.Fragment>
    <div className="mui-panel">
      <h3>{status}</h3>
      <div className="btn-group--vertical">
        {props.users.map(item => <button onClick={() => props.chooseThisPlayer(item)}className="mui-btn mui-btn--primary" key={item.id}>{item.username}</button>)}
      </div>
    </div>
    <div className="mui-panel">
      <form className="mui-form--inline" onSubmit={(e) => {onSubmitForm(e)}}>
          <div className="mui-textfield mui-textfield--float-label">
            <input type="text" name="username" />
            <label>New User</label>
          </div>
         <button className="mui-btn mui-btn--primary" type="submit" name="create-user">Create User</button>
      </form>
      <div className="btn-group--vertical">
        {props.users.map(item => <button key={item.id} className="mui-btn mui-btn--danger"
        onClick={() => props.deleteUser(item.id)}>{item.username}</button>)}
      </div>
    </div>
    </React.Fragment>
  );
}