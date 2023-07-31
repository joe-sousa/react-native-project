import React from "react";
import { Button, Text } from "native-base";

export default function Buttom() {
    const isValid = false;
    return (
            <Button disabled={!isValid}>
                <Text>Clique aqui</Text>
            </Button>
    );
}