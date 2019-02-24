import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';

class App extends Component {
  
    constructor(){
        super();
        
        this.state={
            value:"",
            emails:[],
            cc:"",
            subject:"",
            message:"",
            showCc:false
        }
        
        this.handleInput=(event)=>{
            
            this.setState({
                    value:event.target.value
            })        
        }
        
        this.handleSubmit1=(event)=>{
            this.setState({
                cc:event.target.value,
            }) 
        }
        
        
        this.handleSubmit2=(event)=>{
            this.setState({
                subject:event.target.value,
            })
        }
        
        this.handleSubmit3=(event)=>{
            this.setState({
                message:event.target.value,
            })
             
        }
        
        this.toggleShowCc=()=>{ 
            this.setState(
                { showCc: !this.state.showCc}
            )
        } 
        
        this.handleAddItem=(event)=>{
            event.preventDefault();
            
            if(this.state.value===""){
                alert('Enter Email.');
                return;
            }
                
            
            if(this.state.value!=="" && /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.state.value))
            {
               const newEmail={
                    email:this.state.value,
                    id: Date.now(),
                    status:false
                }

                this.setState( (prevState)=>({
                    emails:prevState.emails.concat(newEmail),
                    value: "",

                }))   
            }else{
                alert('Please enter a valid Email.');
                return;
            } 
        }

 
        this.handleDeleteItem=(emailId)=>{
            
            const updatedEmails=this.state.emails.filter(email=>{
                return email.id!==emailId    
            })
            
            this.setState({
                emails:[].concat(updatedEmails)
            })
        }
        
        
        this.submit=(event)=>{
            event.preventDefault();
 
            
            if(this.state.emails===[] || this.state.subject==="" || this.state.message==="")
            {
                alert('All fields are required.');
                return;
            }
            
            if(this.state.cc==="" || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.state.cc))
            {
                 console.log(this.state);
            
                    this.setState({
                        value: "",
                        cc: "",
                        subject: "",
                        message: "",
                        emails:[]
                    })
                
            }else{
                alert('Please enter a valid Cc.');
                return;
            }
        }
    }
    
    render() {
        
      let cc=null;
      if(this.state.showCc)
      {
          cc=
             (  
              <div className="container">
              <input type="text" placeHolder="Cc" className="form-control" onChange={this.handleSubmit1} value={this.state.cc} required />
              
              {this.state.cc==="" ? "" : (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.state.cc))   ? <p style={{color:"green",fontWeight:"bold"}}>  Valid Email </p> :
                     <p style={{color:"red",fontWeight:"bold"}}> Please enter a valid Email </p>
                      }
              </div>
          )
      }
        
        
    return (
        <div className="container-fluid">

        <div className="modal-dialog">
          <div className="modal-content">
        
              <div className="modal-header">
                  <h4 className="modal-title">Compose mail</h4>
              </div>
        
              <div className="modal-body">
                  <form role="form" className="form-horizontal">
        
                  <div className="form-group">
                  <label className="col-lg-2 control-label">To</label>
                      
                    <div className="row">
                    <div className="col-md-10">
                    <input type="email" className="form-control" placeHolder="Add Email" onChange={this.handleInput} value={this.state.value} required />
                    </div>
                    <div className="col-md-2">
                    <button type="submit" className="btn btn-primary btn-md" onClick={this.handleAddItem}>Add</button>
                    </div>
                    </div>
        
        
                    {this.state.value==="" ? "" :(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.state.value))  ? <p style={{color:"green",fontWeight:"bold"}}>  Valid Email </p> :
                     <p style={{color:"red",fontWeight:"bold"}}> Please enter a valid Email </p>
                      }
            
                    <TodoList emails={this.state.emails} deleteItem={this.handleDeleteItem}/>
                  </div>
        
                  <div className="form-group">
                   <label className="col-lg-2 control-label" style={{cursor:"pointer"}} onClick={this.toggleShowCc}>Cc (toggle to enter cc)</label>
            
                     {cc}

                  </div>
        
                  <div className="form-group">
                      <label className="col-lg-2 control-label">Subject</label>
                      <input type="text" placeHolder="Add Subject" className="form-control" onChange={this.handleSubmit2} value={this.state.subject} required />
                  </div>
        
                  <div className="form-group">
                      <label className="col-lg-2 control-label">Message</label>
                        <textarea rows="10" cols="30" className="form-control" placeHolder="Message"  onChange={this.handleSubmit3} value={this.state.message} required></textarea>
                  </div>

                  <div className="form-group">
                      <div className="col-lg-offset-2 col-lg-10">
                          <button type="submit" className="btn btn-success btn-md" onClick={this.submit}>Send</button>
                      </div>
                  </div>
        
              </form>
          </div>
      </div>
  </div>
</div>
        
    );
  }
}

export default App;



