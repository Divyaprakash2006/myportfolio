import React from 'react';
import { ReactComponent as SvgLogo } from '../assets/logo_final.svg';

const Logo = () => {
    return (
        <SvgLogo style={{ height: '70px', width: 'auto', shadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
    );
};

export default Logo;
