import React from 'react';
import PropTypes from 'prop-types';
import {
  IconCodepen,
  IconExternal,
  IconGitHub,
  IconLinkedIn,
  IconUbuntu,
  IconDthree,
  IconHosting,
  IconGatsby,
  IconGit,
  IconHtml,
  IconJavascript,
  IconMongodb,
  IconNode,
  IconPostgresql,
  IconRails,
  IconReact,
  IconRedux,
  IconRuby,
  IconSass,
  IconShopify,
  IconSquarespace,
  IconStyled,
  IconWordpress,
  IconGraphql,
  IconLiquid,
  IconEmail,
  IconResume
} from '@components/icons';

const FormattedIcon = ({ icon }) => {
  switch (icon) {
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'GitHub':
      return <IconGitHub />;
    case 'LinkedIn':
      return <IconLinkedIn />;
    case 'ubuntu':
      return <IconUbuntu />
    case 'dthree':
      return <IconDthree />
    case 'hosting':
      return <IconHosting />
    case 'gatsby':
      return <IconGatsby />
    case 'git':
      return <IconGit />
    case 'html':
      return <IconHtml />
    case 'javascript':  
      return <IconJavascript />
    case 'mongodb':  
      return <IconMongodb />
    case 'node':  
      return <IconNode />
    case 'postgresql':  
      return <IconPostgresql />
    case 'ror':  
      return <IconRails />
    case 'react':  
      return <IconReact />
    case 'redux':  
      return <IconRedux />
    case 'ruby':  
      return <IconRuby />
    case 'scss':  
      return <IconSass />
    case 'shopify':  
      return <IconShopify />
    case 'squarespace':  
      return <IconSquarespace />
    case 'styled':  
      return <IconStyled />
    case 'wordpress':  
      return <IconWordpress />
    case 'liquid':  
      return <IconLiquid />
    case 'graphql':  
      return <IconGraphql />
    case 'email':  
      return <IconEmail />
    case 'resume':  
      return <IconResume />
    default:
      return <IconExternal />;
  }
};

FormattedIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default FormattedIcon;