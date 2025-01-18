import { styled } from "styled-components";

const Item = styled.button`
    background-color: transparent; 
    cursor: pointer;
    margin-left: 20px;
     padding: 1rem;
     width: 9rem;
     border: 2.5px solid;
     border-radius: 0.5rem;
     text-align: center;
     color: "#F5F5F5";
     border-color: "#F5F5F5";
     box-shadow: 0px 0px 0.75rem 0.25rem #F5F5F5 inset;

     
  &.active {
    background: transparent;
    border: 0.125rem solid #2271d1;
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }
`;

export default function MenuItem ({ children }) {
    return (
    <Item>
        {children}
    </Item>

    )
}