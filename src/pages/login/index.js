
import * as S from './styled';
import { LoginForm, Navbar } from '../../components';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../../vars';

const Login = (props) => {

    const context = useContext(AppContext);


    const handleOnSubmit = (e) => {   
        context.setUser(e.user);
        context.setLogged(true);  
    }

    if (context.logged) {
        return <Redirect to='/resumo' />
    }

    return (
        <>
            <S.Container>
                <Navbar 
                    logged={context.logged}
                />
                <LoginForm
                    handleOnSubmit={handleOnSubmit}
                />
            </S.Container>
        
        </>
    )

}
export default Login