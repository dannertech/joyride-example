import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import { Card, CardItem, View, Body, Button, Left, Right, Text, Container, Content } from 'native-base';
const firstWine = require('../Images/first-wine.png');
const secondWine = require('../Images/second-wine.png');
const profilePicture = require('../Images/profile-pic.png');


export default class Home extends Component {
    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image source={secondWine} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardBody>
                            <Image source={firstWine} style={{height: 150, width: null, flex: 1}}/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const stylesheet = StyleSheet.create({

})
