import React from "react";
import { useState } from "react";
import { Content, Form, Item, Input, Text, Button } from "native-base";
import { Badge } from 'native-base';

export default function MyForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = () => {
        var emailValid = false;
        if (email.length == 0) {
            setEmailError("Email is required");
        } else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        } else if (email.indexOf('') > 0) {
            setEmailError("Email cannot contain spaces");
        }
        else {
            setEmailError("");
            emailValid = true;
        }

        if (emailValid) {
            alert("Email " + email + "\nPassword " + password);
            setEmail("");
            setPassword("");
        }
    }

    return (
        <Content>
            <Form>
                <Item>
                    <Input placeholder="Enter email" onChangeText={text => setEmail(text)} value={email} />
                </Item>
                {emailError.length > 0 &&
                    <Badge danger>
                        <Text>{emailError}</Text>
                    </Badge>}
                <Item last>
                    <Input placeholder="Enter password" onChangeText={text => setPassword(text)} value={password} />
                </Item>
                <Button onPress={handleSubmit}>
                    <Text>Submit</Text>
                </Button>
            </Form>
            <Text>
                Email digitado {email}
            </Text>
            <Text>
                Senha digitada {password}
            </Text>
        </Content>
    );
}