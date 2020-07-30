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
`

export const FontText = styled.p `
    color: var(--second);
    font-size: 1.6em;
    font-weight: 300;
    margin: 30px auto 0px auto;
    text-align: center;
`

export const ColorsText = styled.div `
    border-radius: 50%;
    height: 15px;
    width: 15px;
    display: inline-block;
    margin: 3px;

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