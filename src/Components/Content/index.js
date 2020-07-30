import React, { Component } from 'react';
import { Title, FontText, ColorsText } from './styles';
import { Container } from '../../generalComponents';

export default class Content extends Component{
    render(){
        return(
            <section>
                <Container >
                    <Title >
                        Crie este site <strong> responsivo </strong> com <strong> REACT </strong> <br /> utilizando <strong> styled-components </strong>
                    </Title>
    
                    <FontText >
                        A fonte utilizada é a Open Sans de 300 a 800. <br />
                        exemplo: "Open Sans", Helvetica, sans-serif, arial; <br />
                        Já as cores são: <br />
                        <ColorsText className="primary" />#007F56,
                        <ColorsText className="second" /> #868686,
                        <ColorsText className="red" /> #FE9481,
                        <ColorsText className="yellow" /> #FCDA92 e
                        <ColorsText className="purple" /> #9C89CB9
                    </FontText>
                </Container>
            </section>
        )
    }
}