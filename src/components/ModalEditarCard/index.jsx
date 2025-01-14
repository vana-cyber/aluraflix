import FormularioCard from "components/FormularioCard";
import { styled } from "styled-components";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

export default function ModalEditarCard() {
    return (
        <>
            <Overlay />
            <dialog>
                <form method="dialog">
                    <p>olá</p>
                </form>
                {/* <FormularioCard formMethod="dialog"/> */}
            </dialog>
        </>
    )
}