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


export default function ListaSuspensa({ value, onChange }) {
    return (
        <>
            <label>Selecione uma categoria</label>
            <Select value={value} onChange={onChange}>
                <Option value=""></Option>
                <Option value="FRONT-END">Front-end</Option>
                <Option value="BACK-END">Back-end</Option>
                <Option value="MOBILE">Mobile</Option>
            </Select>
        </>
    );
}