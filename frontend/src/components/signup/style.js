import styled,{css} from "styled-components";

export const MainConatiner = styled.div`
    background-color:rgba(0,0,0,0.9);
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family:sans-serif;

`;
export const InnerHolder = styled.section`
    display:flex;
    flex-direction:column;
    width:50%;
    row-gap:5px;

`;
export const FormTypeHolder = styled.div`
    display:flex;
    width:100%;
    flex-wrap:wrap;
    border:1px solid black;
    border-radius:25px;
    

`;
export const FormType = styled.div`
    width:50%;
    background-color:${({ active }) => active ? "green" : "white"};
    cursor:pointer;
    ${({left})=>left&&css`border-top-left-radius:25px;border-bottom-left-radius:25px`};
    ${({right})=>right&&css`border-top-right-radius:25px;border-bottom-right-radius:25px`}
    
`;

export const Name = styled.p`
    text-align:center;
`;

export const FormHolder = styled.form`
    width:98%;
    // background-color:white;
    padding:1%;
    // box-shadow:0px 4px 12px rgba(0,0,0,0.5);
    border-radius:4px;
    min-height:500px
`;
export const FieldHolder = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    column-gap:7px;
    margin-bottom:10px;
    align-items:center;
    justify-content:center;
`;
export const Input = styled.input`
    width:${({ width }) => width};
    padding:1%;
    border-radius:25px;
    border:1px solid black;
`;
export const TextArea = styled.textarea` 
    width:${({ width }) => width};
    padding:1%;
    border-radius:25px;
    border:1px solid black;`
;

export const Button = styled.button`
    width:${({ width }) => width};
    padding:1% 8%;
    border-radius:25px;
    border:1px solid black;
`;