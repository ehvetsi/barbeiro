import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    password: Yup.string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('Campo obrigatório'),
    name: Yup.string().required('Campo obrigatório'),
});

export default function SignUp() {
    function submit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="" />
            <Form onSubmit={submit} schema={schema}>
                <Input name="name" type="text" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho conta</Link>
            </Form>
        </>
    );
}
