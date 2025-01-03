import MenuLink from "../MenuLink"
import { styled } from "styled-components";
import Logo from "/assets/logo.png"

const MenuNav = styled.nav`
    .navegacao {
        display: flex;
        flex-direction: row;
}
`
const MenuLista = styled.ul`
    display: flex;
    flex-direction: row;
`

const MenuItem = styled.li`
    .menu li {
    list-style-type: none;
}
`

export default function Menu() {
    return (
        <>
            <img src={Logo} alt="Logo AluraFlix" />
            <MenuNav>
                <MenuLista>
                    <MenuItem>
                        <MenuLink to="/">
                            HOME
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/novovideo">
                            NOVO VÍDEO
                        </MenuLink>
                    </MenuItem>
                </MenuLista>
            </MenuNav>
        </>
    )
}