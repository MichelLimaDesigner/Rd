import styled from 'styled-components';

export const CardsCotainer = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    width: 100%;

    @media(max-width: 600px){
        flex-direction: column;
    }

    .card{
        margin: 20px auto;
        width: 30%;

        @media(max-width: 600px){
            width: 100%;
        }
    }

    .card__img{
        padding: 20px 0px;
        text-align: center;

        @media(max-width: 850px){
            img{
                width: 150px;
            }   
        }

        h3{
            color: white;
            font-size: 1.6em;
            font-weight: 300;
            margin: 10px auto;
        }
    }

    .red{
        background: var(--red);
        }

    .yellow{
        background: var(--yellow);
    }

    .purple{
        background: var(--purple);
    }

    .card__body{
        background: white;
        color: var(--second);
        font-weight: 300;
        padding: 15px;
        text-align: right;

        p{
            text-align: left;
        }

        button{
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1em;
            margin: 10px 0px;
            padding: 10px;
        }
    }
`