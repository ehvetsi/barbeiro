import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function submit({ email, password }) {
        dispatch(signInRequest(email, password));
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

                <button type="submit">
                    {loading ? 'Carregando...' : 'Acessar'}
                </button>
                <Link to="/register">Criar conta gratuita</Link>
            </Form>
        </>
    );
}
