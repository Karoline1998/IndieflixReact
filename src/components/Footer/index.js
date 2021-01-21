import React from 'react';
import { FooterBase } from './styles';
import GitHub from '../../assets/img/GitHub.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/">
       <img src={GitHub} alt="Logo Github" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/Karoline1998">
          Karoline Leite
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
