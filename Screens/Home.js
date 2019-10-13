import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Card, CardItem, Image, View, Body, Button, Left, Right, Text, Container } from 'native-base';


export default class Home extends Component {
    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const stylesheet = StyleSheet.create({

})
