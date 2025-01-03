import Menu from "components/Menu";
import Logo from "../../assets/logo.png"
import {styled} from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #353535;
    align-items: flex-start;
    padding: 5rem;
    padding-left: 10rem;
    gap: 20rem;
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