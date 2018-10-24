import React, { Component } from 'react'
import {  Grid,Image } from 'semantic-ui-react'
import styled from 'styled-components';

const Div = styled.div`
  &:hover {   
   transform: translateX(+50%);
 }`;

 class Basicintro extends Component {
    constructor(props) {
      super(props);
      this.state = {
        titleText: "Bird's Nest",
        bodyText: 'This is not really a bird nest.',
        data:[]
      };
    }

    componentDidMount(){
        fetch('https://amancool31.github.io/WV/Data.json')
        .then((response) => response.json())
        .then((findresponse)=> {
            console.log(findresponse);
        this.setState({
            data:findresponse.shirt,
        });
        })
    }
  
    render() {
        const Basictext= () => (
            <div>
                <h1><ul>{this.state.data.map((item,key) => <li>{item.title}</li>)} </ul></h1>
              <h2>{this.state.titleText}</h2>
              {this.state.bodyText}
            </div>

        )
      return (
        <Grid >
      <Grid.Row columns={2}>
        <Grid.Column width={5}>
        <Image src='https://firebasestorage.googleapis.com/v0/b/western-vivid-efd88.appspot.com/o/pics%2Fshirts%2FWV-2121.jpg?alt=media&token=d0e81293-a091-4ffe-9696-b5ea41c462c2' size='large'  rounded />
        </Grid.Column>
        <Grid.Column width={11}>
          <Basictext />
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
  render() {
    return (
      <div >
          {/* <Div> */}
        <Basicintro />
          {/* </Div> */}
          
      </div>
    )
  }
}
