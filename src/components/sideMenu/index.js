import * as S from './styled';

const SideMenu = (props) => {
    let toggle = props.toggle
    console.log(toggle)
    return(
       <S.container
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
       </S.container>
    )

}
export default SideMenu