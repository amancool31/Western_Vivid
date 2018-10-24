import React, { Component} from 'react';
import {Card,Grid,Button,Image } from 'semantic-ui-react';
import firebase from 'firebase';
import {Link,Route} from 'react-router-dom';
import Page from '../pages/Page';
  
class ItemDisplay extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            items:[], //this.props.content,
            cart:[],
            sortedItems:[],
            
            searchResult:'',
            loggedIn:false
        }
    }
    componentDidMount()
    {
        fetch('https://amancool31.github.io/WV/Data.json')
        .then((response) => response.json())
        .then((findresponse)=> {
            // console.log(findresponse);
        this.setState({
            items:findresponse.shirt,
        });
        })

        firebase.auth().onAuthStateChanged((user)=>{
            if(user)
            {
                 
                this.setState({loggedIn:true})
                console.log('Welcome Back '+user.email)
            }
            else
            {
                 
                this.setState({loggedIn:false})
            }
        })
         
    }
    pushToCart(item,index)
    {
        
        console.log(this.state.loggedIn); 
        let cartitems=this.state.cart;
        let itemsList=this.state.items;
        cartitems.push(item)
        itemsList[index].cart=true;
        this.setState({items:itemsList,cart:cartitems});
          

         
    }
    removeFromCart(item,index)
    {
        let cartitems=this.state.cart;
        let itemsList=this.state.items;
        cartitems.splice(cartitems.indexOf(item),1)
        itemsList[index].cart=false;
        this.setState({items:itemsList,cart:cartitems});
        // console.log(this.state.cart)
    }
    // onModify()
    // {
    //     this.setState({priceMin:this.state.dummyPriceMin,priceMax:this.state.dummyPriceMax})
    // }
    render() {
        return (
            <div>
                <center>
                <Grid celled='internally'>
             
            <Grid.Row  centered style={{marginBottom: 10}}>
            {
                    this.state.cart.length!=0 && this.state.loggedIn==true?
                     <Button color='green'>PROCEED TO CHECKOUT</Button>  
                    :
                    null
                } 
             
            </Grid.Row> 
        
       
                 

                <Grid.Row  columns={3}>
                <br/><br/>
                  
                  {this.state.items.map((i,j)=>{
                 return(
                          <Grid.Column key={j}> 
                            <Link to={`/product/${i.code}`}>
                            <Card>    
                             <Card.Content>
                               <h2>{i.title}</h2>
                               <Image src={i.img} height="300px"/>
                               <h3>₹ {i.code}</h3>
                               <h4>{i.fit}</h4>
                               {
                                   this.state.loggedIn===true && firebase.auth().currentUser.emailVerified===true?
                                   <div>
                               {
                                   i.cart===false?
                                   <Button   onClick={()=>{this.pushToCart(i,j)}} inverted color='red'>ADD TO CART</Button>
                                   :
                                    
                                   <Button  onClick={()=>{this.removeFromCart(i,j)}}   color='red'>REMOVE FROM CART</Button>
                                    
                               }
                               </div>
                               :
                               <Button  onClick={()=>{
                               if(this.state.loggedIn===false)
                               {
                                   alert('Please Log In')
                               }
                               else if(this.state.loggedIn===true && firebase.auth().currentUser.emailVerified===false)
                               {
                                   alert('Your account is not verified . A verification link has been sent to your inbox at '+firebase.auth().currentUser.email)
                               }    
                               }} inverted color='red'>ADD TO CART</Button>
                               }
                           </Card.Content>
                      </Card> </Link> </Grid.Column>
                        
                 )
             })} 
                   
                  </Grid.Row>
                
                 
                {/* <Grid.Column width={1} floated='right'><Card  >sfdfdsfd</Card></Grid.Column> */}
     
                 
                   
                   
            </Grid>
                    </center> 
                    
                
           <br/><br/>
            {
                    this.state.cart.length!==0?
                    <Button color='green'>PROCEED TO CHECKOUT</Button>
                    :
                    null
                }
                
            </div>
        );
    }
}

export default ItemDisplay;