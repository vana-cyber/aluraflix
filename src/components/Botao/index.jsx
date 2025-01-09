import {styled} from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    border-color: var(--white);
    border-radius: 0.7rem;
    color: var(--white);
    font-size: 1rem;
    padding: 0.8rem;
    text-transform: uppercase;
    width: 10rem;
    font-weight: bold;

    &:hover {
        border-color: var(--cor-secundaria);
        color: var(--cor-secundaria);
    }
`

export default function Botao({ tipo, descricao, texto}) {
    return (
        <>
            <Button type={tipo} aria-label={descricao}>
                {texto}
            </Button>
        </>
    )
}