import React, { Component } from 'react';
import './component.css';

class TodoItem extends Component {

    render() {
        const itemClass = "isItemCompleted-" + (this.props.status ? "done" : "undone");
     
    return (
        <div className="container-fluid">
        <div className="item">
        

        <span className={itemClass}> {this.props.email} </span> 
        <button style={{float:'right', marginTop:"-4px"}} type="button" className="btn btn-danger btn-sm" onClick={this.props.deleteItem}>x</button>
        
        </div>
        </div>
    );
  }   
}

export default TodoItem;