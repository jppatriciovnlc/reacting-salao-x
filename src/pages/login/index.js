
import * as S from './styled';
import { LoginForm, Navbar } from '../../components';
import { useContext } from 'react';
import AppContext from '../../vars';

const Login = (props) => {

    const context = useContext(AppContext);


    const handleOnSubmit = (e) => {        
        context.setUser(e.user)    
    }

    return (
        <>
            <S.Container>
                <Navbar 
                    logged={false}
                />
                <LoginForm
                    handleOnSubmit={handleOnSubmit}
                />
            </S.Container>
        
        </>
    )

}
export default Login