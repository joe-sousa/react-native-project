import React from "react";
import Rating from "./components/Rating";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card, CardItem, Text, Left, Body, Center } from "native-base";

export default function ProductCard(props) {
    return (
        <Card style={{ flex: 0 }}>
            <CardItem>
                <Left>
                    <Body style={{ flexDirection: "row" }}>
                        <Icon name="user" size={18} color="#000" style={{ marginRight: 5 }} />
                        <Text>{props.data.author}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Left>
                    <Body style={{ flexDirection: "row" }}>
                        <Icon name="book" size={18} color="#000" style={{ marginRight: 5 }} />
                        <Text>{props.data.title}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Left>
                    <Body style={{ flexDirection: "row" }}>
                        <Icon name="link" size={18} color="#000" style={{ marginRight: 5 }} />
                        <Text note>{props.data.url}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Left>
                    <Rating rating={props.data.rating} />
                </Left>
            </CardItem>
        </Card>
    );
}



