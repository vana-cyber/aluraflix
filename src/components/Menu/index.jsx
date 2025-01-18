import { styled } from "styled-components";
import { NavLink } from "react-router";
import MenuItem from "components/MenuItem";

const MenuNav = styled.nav`
    display: flex;
    flex-direction: row;
`;

const Navegacao = styled(NavLink)`
    &.active button {
        color: "#2271D1";
        text-decoration: none; /* Adicione se quiser remover sublinhado */
        transition: all 0.3s ease;
        font-weight: bold;
        border-color: "#2271D1";
        border: 2.5px solid;
        box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    }
    `

const MenuLista = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 2.5rem;
`;


export default function Menu() {
    return (
        <MenuNav>
            <MenuLista>
                <Navegacao to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    <MenuItem>
                        HOME
                    </MenuItem>
                </Navegacao>
                <Navegacao to="/novovideo" className={({ isActive }) => (isActive ? "active" : "")}>
                    <MenuItem>
                        NOVO VÍDEO
                    </MenuItem>
                </Navegacao>
            </MenuLista>
        </MenuNav>
    );
}
