import React, { Component } from 'react'
import {  Grid,Image ,Loader ,Dimmer} from 'semantic-ui-react'
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
        <Grid >
      <Grid.Row columns={2}>
        <Grid.Column width={5}>
         
         
          <Image src={this.props.data.img} size='large'  rounded />
       
        </Grid.Column>
        <Grid.Column width={11}>
          {/* <Basictext /> */}
        </Grid.Column>
      </Grid.Row>
  
      <Grid.Row columns={6}>
        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column width={10}>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
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
