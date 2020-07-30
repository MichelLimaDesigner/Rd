import styled from 'styled-components';

export const CardsCotainer = styled.div `
    margin: 30px auto;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .card{
        width: 30%;
    }

    .card__img{
        padding: 20px 0px;
        text-align: center;

        h3{
            font-size: 1.6em;
            font-weight: 300;
            color: white;
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
        font-weight: 300;
        padding: 15px;
        color: var(--second);
        text-align: right;

        p{
            text-align: left;
        }

        button{
            border: none;
            color: white;
            margin: 10px 0px;
            padding: 10px;
            font-size: 1em;
            cursor: pointer;
        }
    }
`