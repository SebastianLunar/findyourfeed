import styled from 'styled-components'

export const Boton = styled.button`
    background-color: #2BE7E8;
    border-radius: 35px;
    font-size: 18px;
    width: 300px; height: 44px;
    margin: 0 auto;
    border: none;
    color: white;
`;

export const SOCIAL = styled.div`
    display: flex; margin: 0 auto;
    width: 72px; height: 29px;
    justify-content: space-between; align-items: center;
    margin-bottom: 89px;
`;
export const REGISTER = styled.div`
    text-align: center;
    border-radius: 25px;
    width: 56%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`;
export const DIVInput = styled.div`
    display: grid;
    border-bottom: solid #A7A7A7 1px;
    margin: 1rem;
`;
export const Input = styled.input`
    display: inline-block;
    width: 85%;
    height: 30px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    border: 0;
    font-size: 18px;
    padding: 5px;
    margin: 7px 15px;
    text-align: center;
    :focus{
        outline-color: none;
    }
`