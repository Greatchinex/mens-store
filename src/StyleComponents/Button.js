import styled from 'styled-components';

export const Button = styled.button`
    border: 0.05em solid var(--lightAccent);
    font-size: 1.4em;
    background: transparent;
    border-radius: 0.5em;
    padding: 0.2em 0.5em;
    color: var(--lightAccent)
    cursor: pointer;
    margin: 0.2em 0.5em 0.2em 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: var(--lightAccent);
        color: var(--mainWhite);
    }
    &:focus {
        outline: none;
    }
`