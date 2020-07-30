import React, { Component } from 'react';
import { Menu } from './styles';
import { Container } from '../../generalComponents';
import Logo from '../../assets/logos/rd.png';

export default class Header extends Component{
    render(){
        return(
            <Menu >
                <Container >
                    <nav>
                        <figure>
                            <img src={Logo} alt="Rd"/>
                        </figure>
    
                        <ul>
                            <li> <a href="/"> HTML5 </a></li>
                            <li> <a href="/"> CSS3 </a></li>
                            <li> <a href="/"> JAVASCRIPT </a></li>
                            <li> <a href="/"> REACT </a></li>
                            <li> <a href="/"> REDUX </a></li>
                        </ul>
                    </nav>
                </Container>
            </Menu>
        )
    }
}