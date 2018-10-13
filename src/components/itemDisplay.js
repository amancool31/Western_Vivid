import React, { Component } from 'react';
import {Card,Grid,Button} from 'semantic-ui-react';

class ItemDisplay extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            items:this.props.content,
            cart:[],
            sortedItems:[]
        }
    }

    pushToCart(item,index)
    {
        let cartitems=this.state.cart;
        let itemsList=this.state.items;
        itemsList[index].cart=true;
         
        cartitems.push(item)
        
        this.setState({items:itemsList,cart:cartitems});
        console.log(this.state.cart)
    }
    removeFromCart(index)
    {
        let cartitems=this.state.cart;
        let itemsList=this.state.items;
        
         
        cartitems.splice(index,1)
        itemsList[index].cart=false;
        this.setState({items:itemsList,cart:cartitems});
        console.log(this.state.cart)
    }

    render() {
        return (
            <div>
            <Grid>
                {/* Unsorted */}
                 <Grid.Row  columns={4}>
                 {this.state.items.map((i,j)=>{
                return(
                   <Grid.Column key={j}> <Card  fluid style={{margin: 5}}>
                    <Card.Header>
                        {i.brandName}
                    </Card.Header>
                    <Card.Content>
                        <p>{i.name}</p>
                        <img  width='100%' src='https://picsum.photos/200' />
                        <h2>₹ {i.price}</h2>
                        <h3>{i.size}</h3>
                        {
                            i.cart==false?
                            <Button fluid onClick={()=>{this.pushToCart(i,j)}} inverted color='red'>ADD TO CART</Button>
                            :
                            <Button fluid onClick={()=>{this.removeFromCart(j)}}   color='red'>REMOVE FROM CART</Button>
                        }
                    </Card.Content>
               </Card>  </Grid.Column>
                )
            })} 
            
                 </Grid.Row>
                  
            </Grid>
            </div>
        );
    }
}

export default ItemDisplay;