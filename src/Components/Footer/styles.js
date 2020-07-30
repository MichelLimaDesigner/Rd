import styled from 'styled-components';

export const FooterContent = styled.footer `
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
    width: 100%;

    figure{
        align-items: center;
        display: flex;

        p{
            color: var(--second);
            font-size: 0.9em;
            margin-right: 50px;
        }

        img{
            margin: 10px;
        }

        @media(max-width: 800px){
            display: block;

            img{
                display: inline-block;
            }

            p{
                margin-right: 0px;
            }

        }
    }

    @media(max-width: 600px){
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 50px;
        text-align: center;
    }


`