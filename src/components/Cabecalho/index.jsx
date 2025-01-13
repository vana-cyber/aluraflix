import Menu from "components/Menu";
import Logo from "../../assets/logo.png"
import {styled} from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: var(--cor-primaria);
    align-items: center;
    padding: 3rem;;
    width: 100vw;

    img {
        max-width: 10rem;
    }
`

export default function Cabecalho() {
    return (
        <>
            <Header>
                <img src={Logo} alt="Logo AluraFlix" />
                <Menu />
            </Header>
        </>
    )
}