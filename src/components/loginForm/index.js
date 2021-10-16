import * as S from './styled';
import { Input, LoginButton, Logo } from '../index';
import React, { useState } from 'react';

const LoginForm = (props) => {

    const [ user, setUser] = useState('');
    const [ pass, setPass] = useState('');


    const handleOnSubmit = () => {
        let passport = {
            user: user,
            pass: pass

        }
        props.handleOnSubmit(passport)     
    }

    const handleOnChangeUser = (e) => {
        setUser(e)       
    }

    const handleOnChangePass = (e) => {
        setPass(e)       
    }



    return (
        <>
            <S.Container>
                <Logo/>
                <S.Title> Manicure e Podóloga </S.Title>
                <S.Subtitle>Cuidando bem de você</S.Subtitle>
                <Input
                    type="text"
                    placeholder="Usuário ou Email"
                    onChange={handleOnChangeUser}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    onChange={handleOnChangePass}
                />
                <LoginButton
                    handleClick={handleOnSubmit}
                />
            </S.Container>
        
        </>
    )

}
export default LoginForm