import React, { Component } from 'react';
import { Segment, Grid, Button ,Modal} from 'semantic-ui-react';
 
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import MenPage from '../pages/menPage';
import BoyPage from '../pages/boyPage';
import SalePage from '../pages/salePage';
import WinterPage from '../pages/winterPage';
import LoginPage from '../pages/loginPage';
import SignUpPage from '../pages/SignUpPage';

class Main extends Component {
    constructor()
    {
        super()
        this.state={
            currentView:''
        }
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                <div>
                <Segment raised>
                    <Grid columns={6}>
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
                            <Grid.Column>
                                <Modal trigger={
                                     
                                    <Button color='red' inverted onClick={()=>{this.setState({currentView:'SIGNUP'})}}>SIGNUP</Button>
                                    
                                }>
                                <Modal.Header>
                                    LOGIN/SIGN UP
                                </Modal.Header>
                                <center><SignUpPage /></center>
                                </Modal>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Switch>
                    <Route path={`/men`} component={MenPage}/>
                    <Route path={`/boy`} component={BoyPage}/>
                    <Route path={`/sale`} component={SalePage}/>
                    <Route path={`/winter`} component={WinterPage}/>
                     
                </Switch>
                </div>
    
 
                
                </BrowserRouter>
            </div>
        );
    }
}

export default Main;