import styled from 'styled-components';

export const CardsCotainer = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    width: 100%;

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

    
    @media(max-width: 600px){
        flex-direction: column;
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

export const CardContent = styled.div `
    .modal{
        background: white;
        border-radius: 5px;
        color: var(--second);
        padding: 20px;
        text-align: center;
        width: 100%;
    }

    .lightbox{
        background: rgba(0, 0, 0, 0.6);
        display: none;
        height: 100vh;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;
    }

    @media(max-width: 800px){
        align-items: center;
        display: flex;
        justify-content: center;

        .modal{
            top: 40%;
            position: fixed;
            width: 90%;
            z-index: 999;
        }

        .lightbox{
            display: block;
        }
    }
`