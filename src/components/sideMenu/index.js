import * as S from './styled';

const SideMenu = (props) => {

    return(
       <S.container
        toggle = {props.toggle}
       >
           <S.UL>
                <S.LI>
                    <S.StyledLink to="/resumo">Resumos</S.StyledLink>
                </S.LI>
                <S.LI>
                    <S.StyledLink to="/agendamento">Agendamentos</S.StyledLink>
                </S.LI>
            </S.UL>
       </S.container>
    )

}
export default SideMenu