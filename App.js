import React, { useState } from 'react';
import { Container, Header, Content, H1, Text, View, Button, Body, Title, Input, Item } from 'native-base';
import Rating from './components/Rating';
import ProductList from './ProductList';
import ProductCard from './ProductCard';
import MyForm from './MyForm';
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";


export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (text) => {
    setSearchTerm(text);
  };

  return (
    <Container>
      <Header>
        <Body>
          <Title>Lista de Livros</Title>
        </Body>
      </Header>
      <Content stickyHeaderIndices={[0]} style={{ paddingTop: 0, backgroundColor: "#cccccc" }}>
        <Item style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#cccccc", padding: 5 }}>
          <Input
            placeholder="Digite um autor"
            value={searchTerm}
            onChangeText={handleChange}
            style={{ backgroundColor: "#f0f0f0" }} />
          <Icon name="search" size={18} color="#000" style={{ marginRight: 5 }} />
        </Item>
        <ProductList searchTerm={searchTerm} />
      </Content>
    </Container>
  );
}