import styled from 'styled-components';

export const Menu = styled.header `
    border-bottom: solid 1px var(--second);
    display: flex;
    padding: 10px 0px;
    width: 100%;

    nav{
        align-items: center;
        color: var(--primary);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    ul{
        display: flex;
    }

    li{
        margin: 0px 10px;
    }

    a{
        color: inherit;
    }

    @media( max-width: 600px){
        nav{
            justify-content: center;
        }

        ul{
            background: var(--primary);
            bottom: 0px;
            color: aliceblue;
            font-size: 0.9em;
            justify-content: space-between;
            left: 0;
            right: 0;
            padding: 15px;
            position: fixed;
        }

        img{
            width: 100px;
        }
    }
`