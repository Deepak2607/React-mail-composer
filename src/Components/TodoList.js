import React, { Component } from 'react';
import TodoItem from './TodoItem';
//import './component.css';

class TodoList extends React.Component {

    render() {
    return (  
        <div>
        {this.props.emails.map(email => (
        <TodoItem id={email.id} status={email.status} email={email.email}
        deleteItem={()=>this.props.deleteItem(email.id)} />
      ))} 
    </div>
        
    );
  } 
}

export default TodoList;

