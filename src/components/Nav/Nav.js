import React from 'react';
import { layouts, themes } from '../../store/app/utils';

import {
    Header,
    Spacer,
    NavSection,
    Content,
    Icon,
    Logo,
    ExternalLink
} from './styles';

const Nav = ({ layout, theme, setLayout, setTheme }) => (
    <div>
        <Header>
            <Content>
                <NavSection>
                    <ExternalLink
                        href='https://github.com/komjenic/hacker-news-ivankomjenic'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Logo src='./logo192.png' alt='logo' /> Ivan Komjenic
                        Source Code
                    </ExternalLink>
                </NavSection>
                <NavSection>
                    {layout === layouts.list ? (
                        <Icon onClick={() => setLayout(layouts.grid)}>
                            <i className='fas fa-th-large' />
                        </Icon>
                    ) : (
                        <Icon onClick={() => setLayout(layouts.list)}>
                            <i className='fas fa-th-list' />
                        </Icon>
                    )}
                    {theme === themes.light ? (
                        <Icon onClick={() => setTheme(themes.dark)}>
                            <i className='fas fa-moon' />
                        </Icon>
                    ) : (
                        <Icon onClick={() => setTheme(themes.light)}>
                            <i className='fas fa-sun' />
                        </Icon>
                    )}
                </NavSection>
            </Content>
        </Header>
        <Spacer />
    </div>
);

export default Nav;
