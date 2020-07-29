import styled from 'styled-components';

export const Menu = styled.header `
    width: 100%;
    padding: 10px 0px;
    display: flex;
    border-bottom: solid 1px var(--second);

    nav{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: var(--second);
    }

    ul{
        display: flex;
    }

    li{
        margin: 0px 10px;
    }

    @media( max-width: 600px){
        nav{
            justify-content: center;
        }

        ul{
            position: fixed;
            bottom: 0px;
            font-size: 0.9em;
            background: var(--primary);
            color: aliceblue;
            left: 0;
            right: 0;
            padding: 15px;
            justify-content: space-between;
        }

        img{
            width: 100px;
        }
    }
`