import * as S from './styled';
import { Logo } from '../index';
import { useState } from 'react';
import { SideMenu } from '../index';

import { useContext } from 'react';
import AppContext from '../../vars';
import { Redirect } from 'react-router-dom';


const Navbar = (props) => {

    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('');

    const context = useContext(AppContext);

    const toggleSideMenu = () => {
        setToggle(!toggle)        
    }

    if(props.active !== active){        
        setActive(props.active)
    }

    if(props.logged !== true){
        return <Redirect to='/' />
    }


        return(
            <>
                <S.Nav>
                    <S.Section1>
                        <Logo />                        
                    </S.Section1>
                    <S.Section2
                        logged={props.logged}
                    >
                        <S.UL>
                            <S.LI
                                active={active === 'resumos'? true : false}
                            >
                                <S.StyledLink to="/resumo">Resumos</S.StyledLink>
                            </S.LI>
                            <S.LI
                                active={active === 'agendamentos'? true : false}
                            >
                                <S.StyledLink to="/agendamento">Agendamentos</S.StyledLink>
                            </S.LI>
                        </S.UL>
                        
                    </S.Section2>
                    <S.Section3
                        onClick={() => toggleSideMenu()}
                        logged={props.logged}
                    >
                        <S.Icon/>
                    </S.Section3>
                </S.Nav>
                <SideMenu
                    toggle={toggle}
                />

            </>
        )


}
export default Navbar