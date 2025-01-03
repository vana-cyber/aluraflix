import MenuLink from "../MenuLink"
import { styled } from "styled-components";

const MenuNav = styled.nav`
    .navegacao {
        display: flex;
        flex-direction: row;
}
`
const MenuLista = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 2.5rem;
`

const MenuItem = styled.li`
    li {
        margin-left: 20px;
    }
`

export default function Menu({ ativo = false}) {
    return (
        <>
            <MenuNav>
                <MenuLista>
                    <MenuItem>
                        <MenuLink to="/" ativo={true}>
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