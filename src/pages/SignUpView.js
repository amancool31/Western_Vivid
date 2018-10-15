import React,{Component} from "react";
import {Input,Button} from 'semantic-ui-react';

// const SignUpView = ({ onSubmit} ) => {
//   return (
//     <div>
       
//       <form onSubmit={onSubmit}>
       
//           <Input fluid label='Username'
//             name="name"
//             type="text"
//             placeholder="Enter your Username"
//           />
//        <br/>
          
//           <Input label='Phone No.' fluid
//             name="Phno"
             
//             placeholder="Enter your 10 digit Phone no."
//           />
//          <br/>
       
         
//           <Input label='Email' fluid
//             name="email"
//             type="email"
//             placeholder="Enter your Email"
//           /><br/>
         
      
//           <Input label='Password'  fluid
//             name="password"
//             type="password"
//             placeholder="Enter a Password"
//           />
           
//         <br/>
//         <Button color='red' inverted type="submit">Sign Up</Button>
//       </form>
//     </div>
//   );
// };

 

class SignUpView extends Component {
  
  
  render() {
    return (
       
         <div>
       
            <form onSubmit={this.props.onSubmit}>
              
               <Input fluid label='Username'
                 name="name"
                type="text"
               placeholder="Enter your Username"
              />
            <br/>
                 
             <Input label='Phone No.' fluid
                name="Phno"
                    
              placeholder="Enter your 10 digit Phone no."
             />
            <br/>
              
                
              <Input label='Email' fluid
              name="email"
                   type="email"
                   placeholder="Enter your Email"
                /><br/>
                
             
               <Input label='Password'  fluid
                name="password"
                  type="password"
                  placeholder="Enter a Password"
                 />
                  <p style={{fontWeight: 600}}>
                    {this.props.message.toString()}</p> 
             <br/>
             <Button color='red' inverted type="submit">Sign Up</Button>
            </form>
         </div>
      
    );
  }
}

 


export default SignUpView;