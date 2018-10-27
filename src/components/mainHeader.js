import React, { Component } from 'react';
import { Segment,Header, Grid, Button ,Modal,Image,  Input} from 'semantic-ui-react';
import firebase from 'firebase';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import MenPage from '../pages/menPage';
import BoyPage from '../pages/boyPage';
import SalePage from '../pages/salePage';
import WinterPage from '../pages/winterPage';
import LoginContainer from '../pages/loginPage';
import SignUpContainer from '../pages/SignUpPage';
import Page from '../pages/Page';

class ImgModal extends Component {
    render() {
        return (
            <div>
               <Modal trigger={<Image src={this.props.imgsrc}  centered size='mini'/>}>
               <Segment   color='red' size='huge'>
               <center>{this.props.username} </center>
               </Segment >
                <Grid >
                    <Grid.Row columns={2}>
                <Grid.Column>
                <Image circular   src={this.props.imgsrc}/>
                </Grid.Column>
                 
                    <Grid.Column>
                    
                    <Input fluid  label='Phone No.' /><br/><br/>
                    <Input fluid  label='Address Line 1' /><br/><br/>
                    <Input fluid label='Address Line 2' /><br/><br/>
                    <Input fluid label='City' /><br/><br/>
                    <Input fluid label='State' /><br/><br/>
                    <Input fluid label='Pincode' /><br/><br/>


                    </Grid.Column>
                    </Grid.Row>
                    </Grid>
                    <center><Button color='red' inverted>SAVE CHANGES</Button></center><br/>
            </Modal> 
            </div>
        );
    }
}
 

class Main extends Component {
    constructor()
    {
        super()
        this.state={
            currentView:'',
            modalView:'login',
            showSignOut:false ,
            photoURL:'',
            data:[],
            username:''
             
        }
        
    }
    componentDidMount()
    {
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user)
            {
                this.setState({showSignOut:true,photoURL:user.photoURL,username:user.email})
                 
            }
            else
            {
                this.setState({showSignOut:false,photoURL:'',username:''})
            }
        })
    }
    onSignOut()
    {
        firebase.auth().signOut().then(
            ()=>{alert('You have been logged out')}
        )
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                <div>
                 
                <Segment raised>
                    <Grid columns={7}>
                        <Grid.Row>
                            <Grid.Column>

                            </Grid.Column>

                            <Grid.Column>
                                <Link to='/men'>
                                    <Button   color='red' inverted>MEN</Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column>
                                <Link to='/boy'>
                                <Button color='red' inverted onClick={()=>{this.setState({currentView:'BOY'})}}>BOY</Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column>
                                <Link to='/sale'>
                                <Button color='red' inverted onClick={()=>{this.setState({currentView:'SALE'})}}>SALE</Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column>
                                <Link to='/winter'>
                                <Button color='red' inverted onClick={()=>{this.setState({currentView:'WINTER'})}}>WINTER</Button>
                                </Link>
                            </Grid.Column>
                            {
                                this.state.showSignOut==true?
                                <Grid.Column>
                                    <ImgModal username={this.state.username} imgsrc={this.state.photoURL}/>
                                </Grid.Column>
                                :null
                            }
                            {
                                this.state.showSignOut==false?
                                <Grid.Column>
                              <Modal trigger={ 
                                    // <Link to='/login'>
                                    
                                     
                                    
                                      
                                     
                                    <Button color='blue' fluid inverted onClick={()=>{this.setState({currentView:'Login'})}}>LOGIN</Button>
                                    // </Link>
                              }>
                              <br/><br/>
                                {
                                    this.state.modalView=='login'?
                                    <div>
                                        <Modal.Content>
                                    
                                   <center>
                                   
                                   <Grid columns={2}>
                                  <Grid.Row>
                                      <Grid.Column>
                                      <Button fluid inverted color='blue' onClick={()=>{this.setState({modalView:'login'})}}>LOGIN</Button>
                                
                                      </Grid.Column>
                                      <Grid.Column>
                                      <Button fluid inverted color='red' onClick={()=>{this.setState({modalView:'signup'})}}>SIGNUP</Button>
                                      </Grid.Column>
                                  </Grid.Row>
                                   </Grid>
                                   <br/>
                                    
                                   </center>
                             </Modal.Content><br/><br/>
                                <Modal.Content><center><LoginContainer />
                                
                                </center></Modal.Content>
                                    </div>
                                :
                                <div>
                                        <Modal.Content>
                                    
                                  <center>
                                  <Grid columns={2}>
                                    <Grid.Row>
                                        <Grid.Column>
                                        <Button fluid inverted color='blue' onClick={()=>{this.setState({modalView:'login'})}}>LOGIN</Button>
                                    
                                        </Grid.Column>
                                        <Grid.Column>
                                        <Button fluid inverted color='red' onClick={()=>{this.setState({modalView:'signup'})}}>SIGNUP</Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                   </Grid>
                                  </center>
                             </Modal.Content><br/><br/>
                                <Modal.Content><center><SignUpContainer />
                                
                                </center></Modal.Content>
                                    </div>
                                } 
                                <br/><br/>
                                </Modal>
                            </Grid.Column>
                            :null
                            }
                            {
                                this.state.showSignOut?
                                <Grid.Column>
                                <Button fluid  color='blue' onClick={()=>{this.onSignOut()}}>SIGN OUT</Button>
                            </Grid.Column>
                            :
                            null
                            }
                        </Grid.Row>
                    </Grid>
                </Segment>
                
                <Switch>
                    <Route path={`/men`} component={MenPage}/>
                    <Route path={`/boy`} component={BoyPage}/>
                    <Route path={`/sale`} component={SalePage}/>
                    <Route path={`/winter`} component={WinterPage}/>
                    <Route path={`/product/:id`} component={Page} />
                    <Route path={`/signup`} component={SignUpContainer}/>
                    
                </Switch>
                </div>
    
 
                
                </BrowserRouter>
            </div>
        );
    }
}

 

 
export default Main;