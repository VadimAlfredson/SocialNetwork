import React from 'react';
import s from './Header.module.css';

const Header = () => {
return <header className={s.header}>
<img src='https://marketplace.canva.com/EAE4gudi2bc/1/0/1600w/canva-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9-%D0%BC%D0%B8%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8B-%D1%88%D1%80%D0%B8%D1%84%D1%82%D0%BE%D0%B2%D0%BE%D0%B9-BpbVJewDMYc.jpg' />
<h2 className={s.h2}>Social Void</h2>
</header>;
}

export default Header