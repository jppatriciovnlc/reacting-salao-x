import * as S from './styled';
import { Logo } from '../index';
import { useState } from 'react';
import { SideMenu } from '../index';


const Navbar = (props) => {

    const [toggle, setToggle] = useState(false);

    const toggleSideMenu = () => {
        setToggle(!toggle)
        
    }

    console.log(toggle)


        return(
            <>
                <S.Nav>
                    <S.Section1>
                        <Logo
                    
                        />
                    </S.Section1>
                    <S.Section2>
                        <S.UL>
                            <S.LI>
                                <S.StyledLink to="/resumo">Resumos</S.StyledLink>
                            </S.LI>
                            <S.LI>
                                <S.StyledLink to="/agendamento">Agendamentos</S.StyledLink>
                            </S.LI>
                        </S.UL>
                        
                    </S.Section2>
                    <S.Section3
                        onClick={() => toggleSideMenu()}
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