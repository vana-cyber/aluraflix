import styled from "styled-components"
import Logo from "../../assets/logo.png" 

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    background-color: var(--cor-terciaria);
    padding: 3rem;
    img {
        max-width: 10rem;
    }
`

export default function Rodape() {
    return (
        <>
            <Footer>
                <img src={Logo} alt="Logo AluraFlix" /> 
            </Footer>
        </>
    )

}