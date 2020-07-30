import styled from 'styled-components';

export const Title = styled.h1 `
    color: var(--primary);
    font-size: 3em;
    font-weight: 300;
    margin: 30px auto;
    text-align: center;

    strong{
        font-weight: 800;
    }

    @media(max-width: 600px){
        font-size: 2em;
    }
`

export const FontText = styled.p `
    color: var(--second);
    font-size: 1.6em;
    font-weight: 300;
    margin: 30px auto 0px auto;
    text-align: center;

    @media(max-width: 600px){
        font-size: 1.2em;
    }
`

export const ColorsText = styled.span `
    border-radius: 50%;
    display: inline-block;
    height: 15px;
    margin: 3px;
    width: 15px;

    &.primary{
        background: var(--primary);
    }

    &.second{
        background: var(--second);
    }

    &.red{
        background: var(--red);
    }

    &.yellow{
        background: var(--yellow);
    }

    &.purple{
        background: var(--purple);
    }
`