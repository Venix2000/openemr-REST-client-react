import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostAuth} from './RestController';

class Login extends Component{
	constructor(){
		super();

		this.state = {
		grant_type: 'password',
		 username: '',
		 password: '',
		 scope: 'default',
		 redirectToReferrer: false
		};

		this.login = this.login.bind(this);
		this.onChange = this.onChange.bind(this);
  }

  

  login() {
    if(this.state.username && this.state.password){ //if username password exists
      PostAuth('login',this.state).then((result) => {
       let responseJson = result;
	   
	   //Store session data for user upon login
       if(responseJson.userData){         
         sessionStorage.setItem('userData',JSON.stringify(responseJson));
         this.setState({redirectToReferrer: true}); 
		 //Redirects to pages. In this case, go to homepage on successful login, see render comments
       }
       
      });
    }
    
   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }

  
  

  render() {

	//If the redirect is TRUE, go to home
     if (this.state.redirectToReferrer) {
		 console.log("aaaaaaa");
      return (<Redirect to={'/home'}/>)
    }
   
    if(sessionStorage.getItem('userData')){
		 console.log("bbbbbbb");
      return (<Redirect to={'/home'}/>)
    }

     return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
        <h4>Login</h4>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        <input type="submit" className="button success" value="Login" onClick={this.login}/>
        </div>
      </div>
    );
  }
}

export default Login;