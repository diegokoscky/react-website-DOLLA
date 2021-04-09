import React from 'react'
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Text
} from './EntrarElements'

const Entrar = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Entrar na sua conta</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required/>
                            <FormLabel htmlFor="for">Senha</FormLabel>
                            <FormInput type="password" required/>
                            <FormButton type="submit">Entrar</FormButton>
                            <Text>Esqueci a senha</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Entrar
