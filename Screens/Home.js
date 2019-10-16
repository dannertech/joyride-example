import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import { Icon, Card, CardItem, View, Body, Button, Left, Right, Text, Container, Content } from 'native-base';
const firstWine = require('../Images/first-wine.png');
const secondWine = require('../Images/second-wine.png');
const thirdWine = require('../Images/third-wine.png');
const profilePicture = require('../Images/profile-pic.png');
const addButton = require('../Images/add-button.png');
const cartButton = require('../Images/cart-button.png');

import { Coachmark, CoachmarkComposer } from 'react-native-coachmark';



export default class Home extends Component {
    constructor(props){
        super(props);
        this.coachmark1 = React.createRef();
        this.coachmark2 = React.createRef();
        this.coachmark3 = React.createRef();
        
    }
    componentDidMount(){
        const composer = new CoachmarkComposer([
            this.coachmark1,
            this.coachmark2,
            this.coachmark3
        ])
        composer.show();
    }
    render(){
        return(
            <Container>
                <View style={{paddingTop: 50, flexWrap: "wrap", flexDirection: "row"}}> 
                <Coachmark ref={this.coachmark1} message="Click here to save your page!">
                <Image source={profilePicture}/>
                </Coachmark>
                <Text style={{fontSize: 20, fontWeight: "bold", paddingTop: 40}}>Rebecca's Picks</Text>
                </View>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image source={secondWine} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontStyle: 'italic'}}>Muller</Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Image source={addButton} />
                                </Button>
                                <Coachmark ref={this.coachmark2} message="Click here to shop!">
                                <Button transparent>
                                    <Image source={cartButton}/>
                                </Button>
                                </Coachmark>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardbody>
                            <Image source={thirdWine} style={{height: 105, width: null, flex: 1}}/>    
                        </CardItem>
                        <CardItem>
                            <Text style={{fontStyle: 'italic'}}>French and Bubbly</Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Image source={addButton} />
                                </Button>
                                <Button transparent>
                                    <Image source={cartButton}/>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardBody>
                            <Image source={firstWine} style={{height: 125, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontStyle: 'italic'}}>First Pois</Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Image source={addButton} />
                                </Button>
                                <Coachmark ref={this.coachmark3} message="Click here to add to your favorites!">
                                <Button transparent>
                                    <Image source={cartButton}/>
                                </Button>
                                </Coachmark>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const stylesheet = StyleSheet.create({

})


