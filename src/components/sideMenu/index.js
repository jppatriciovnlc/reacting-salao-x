import * as S from './styled';

const SideMenu = (props) => {
    let toggle = props.toggle
    return(
       <S.Container
        toggle = {toggle}
       >
           <S.UL>
                <S.LI>
                    <S.StyledLink to="/resumo">Resumos</S.StyledLink>
                </S.LI>
                <S.LI>
                    <S.StyledLink to="/agendamento">Agendamentos</S.StyledLink>
                </S.LI>
            </S.UL>
       </S.Container>
    )

}
export default SideMenu