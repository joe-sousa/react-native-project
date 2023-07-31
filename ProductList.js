import React, { useEffect, useState } from "react";
import { Button, Container, Header, Content, H1, List, ListItem, Text } from "native-base";
import ProductCard from "./ProductCard";
import api from "./services/api";

export default function ProductList({ searchTerm }) {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await api.get("/api/v1/search?query=");
                setBooks(response.data.hits);
            } catch (err) {
                console.log("Deu ruim!");
            }
        }
        getBooks();
    }, []);

    const searchedBooks = searchTerm.length > 0 ? books.filter(book => book.author.toLowerCase().includes(searchTerm.toLowerCase()))
        : books;

    console.log(searchedBooks);

    return (
        <Content>
            {
                searchedBooks.length > 0 ? (searchedBooks.map((book) =>
                    (<ProductCard key={book.objectID} data={book} />))
                ) :
                    (
                        <Content>
                            <H1>No books available</H1>           
                        </Content>
                    )
            }


        </Content>
    );
}