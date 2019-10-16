import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import { Icon, Card, CardItem, View, Body, Button, Left, Right, Text, Container, Content } from 'native-base';
const firstWine = require('../Images/first-wine.png');
const secondWine = require('../Images/second-wine.png');
const thirdWine = require('../Images/third-wine.png');
const profilePicture = require('../Images/profile-pic.png');
const addButton = require('../Images/add-button.png');
const cartButton = require('../Images/cart-button.png');



export default class Home extends Component {
    render(){
        return(
            <Container>
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
                                <Button transparent>
                                    <Image source={cartButton}/>
                                </Button>
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
                                <Button transparent>
                                    <Image source={cartButton}/>
                                </Button>
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
