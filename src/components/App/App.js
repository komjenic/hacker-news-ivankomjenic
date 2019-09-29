import React from 'react';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import List from '../List/index';
import Loader from '../Loader/index';
import Nav from '../Nav/index';
import Grid from '../Grid/index';

import { layouts, themes } from '../../store/app/utils';
import { colorsDark, colorsLight } from '../../styles/palette';
import { Wrapper, Title } from './styles';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchStoriesFirstPage();
    }
    componentDidUpdate(prevProps, prevState) {
        this.setBodyBackgroundColor();
    }

    setBodyBackgroundColor() {
        if (this.props.theme === themes.light) {
            document.body.style = `background-color: ${colorsLight.background};`;
        } else {
            document.body.style = `background-color: ${colorsDark.background};`;
        }
    }

    fetchStories = () => {
        const { storyIds, page, fetchStories, isFetching } = this.props;
        if (!isFetching) {
            fetchStories({ storyIds, page });
        }
    };

    render() {
        const { stories, layout, hasMoreStories, theme } = this.props;
        return (
            <ThemeProvider
                theme={theme === themes.light ? colorsLight : colorsDark}
            >
                <div>
                    <Nav />
                    <Wrapper>
                        <Title>Hacker News</Title>
                        <InfiniteScroll
                            dataLength={stories.length}
                            next={this.fetchStories}
                            hasMore={hasMoreStories}
                            loader={<Loader />}
                            style={{
                                height: '100%',
                                overflow: 'visible'
                            }}
                        >
                            {layout === layouts.list ? (
                                <List stories={stories} />
                            ) : (
                                <Grid stories={stories} />
                            )}
                        </InfiniteScroll>
                    </Wrapper>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
