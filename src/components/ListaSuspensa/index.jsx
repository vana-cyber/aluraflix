import styled from "styled-components"

const Select = styled.select`
    display: flex;
    width: 30rem;
    border-radius: 0.7rem;
    padding: 1rem;
    background-color: transparent;
`

const Option = styled.option`
    color: var(--cor-fonte-1);
`


export default function ListaSuspensa() {
    return (
        <>
            <label>Selecione uma categoria</label>
            <Select>
                <Option>

                </Option>
                <Option>
                    Front-end
                </Option>
                <Option>
                    Back-end
                </Option>
                <Option>
                    Mobile
                </Option>
            </Select>
        </>
    )
}