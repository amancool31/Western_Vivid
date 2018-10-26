import React, { Component } from 'react'
import {  Grid,Image ,Loader ,Dimmer ,Card ,Label, Input , Table,Button ,Icon ,Popup} from 'semantic-ui-react'
// import styled from 'styled-components';

// const Div = styled.div`
//   &:hover {   
//    transform: translateX(+50%);
//  }`;

 class Basicintro extends Component {
    constructor() {
      super();
      this.state = {
        titleText: "Bird's Nest",
        bodyText: 'This is not really a bird nest.',
         
      };
    }

    componentDidMount(){
      
      console.log(this.props.img)
        fetch('https://amancool31.github.io/WV/Data.json')
        .then((response) => response.json())
        .then((findresponse)=> {
             
        this.setState({
            data:findresponse.shirt,
        });
        })
    }
  
    render() {
         
      return (
        
       <div>
         <br/> 
        <Grid centered>
      <Grid.Column width={6} >
         
         
         
         
         <Image  fluid src={this.props.data.img} size='large'   rounded 
          
         />
          
          
        </Grid.Column>
        <Grid.Column width={7}>
        
        <h1>{this.props.data.title} 
          <Popup 
          trigger={<Button icon='heart outline' inverted floated='right'   color='red' />}
          content='Add to your wishlist'
          />
        </h1>
        <Label size='tiny' color='red'>25% OFF</Label><br/> 
        <h2>₹ {this.props.data.price}</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
         Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
         Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        
        {/* <Label >Choose Quantity <Input inverted type='number'  /></Label> */}
         <Button fluid color='blue'>
         <Icon name='shopping cart'/>
           ADD TO CART
         </Button><br/>
         <Button fluid color='red'>
           BUY NOW
         </Button>
        
                
             </Grid.Column>  
             </Grid>
             <br/><br/><br/><br/>
         <Grid>
           <h2>
             ITEM DETAILS
           </h2><br/><br/>
          <Table definition>
           

          <Table.Body>
      <Table.Row>
        <Table.Cell>Product Code</Table.Cell>
        <Table.Cell>Price</Table.Cell>
        <Table.Cell>Size</Table.Cell>
        <Table.Cell>Fit</Table.Cell>
        <Table.Cell>Colors</Table.Cell>
        



      </Table.Row>
      <Table.Row>
      <Table.Cell>{this.props.data.code}</Table.Cell>
        <Table.Cell>₹ {this.props.data.price}</Table.Cell>
        <Table.Cell>L</Table.Cell>
        <Table.Cell>{this.props.data.fit}</Table.Cell>
        <Table.Cell>Blue,Red,Black</Table.Cell>
         
      </Table.Row>
    </Table.Body>
          </Table>
         </Grid><br/>
         <br/>
       </div>
             
        
  
    //   /*{ <Grid.Row columns={6}>
    //     <Grid.Column width={3}>
    //       <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    //     </Grid.Column>
    //     <Grid.Column width={10}>
    //       <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    //     </Grid.Column>
    //     <Grid.Column width={3}>
    //       <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    //     </Grid.Column>
    //   </Grid.Row> */}
    // </Grid>
      );
    }
  }
// const GridExampleCelled = () => (
    
//   )
export default class Page extends Component {
  constructor()
  {
    super()
    this.state={
      data:[]
    }
  }
  
  componentDidMount()
  {
    fetch('https://amancool31.github.io/WV/Data.json')
    .then((response) => response.json())
    .then((findresponse)=> {
        for(var i=0;i<findresponse.shirt.length;i++)
        {
          if(findresponse.shirt[i].code==this.props.match.params.id)
          {
            this.setState({data:findresponse.shirt[i]})
            break;
          }
           
        }
     console.log(this.state.data)
    })
  }
  render() {
    return (
      <div >
           
          
         
          <Basicintro  data={this.state.data}/>
          
           
          
      </div>
    )
  }
}
