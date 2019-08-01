import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
});
export default function SignIn() {
    function submit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="" />
            <Form onSubmit={submit} schema={schema}>
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />

                <button type="submit">Acessar</button>
                <Link to="/register">Criar conta gratuita</Link>
            </Form>
        </>
    );
}
