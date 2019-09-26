import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from '../../styles/palette';
import List from '../List/index';
import Loader from '../Loader/index';

import { Wrapper, Title } from './styles';

class App extends React.Component {
    static defaultProps = {
        stories: []
    };

    static propTypes = {
        stories: PropTypes.array.isRequired,
        page: PropTypes.number.isRequired,
        storyIds: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        hasMoreStories: PropTypes.bool.isRequired,
        fetchStories: PropTypes.func.isRequired,
        fetchStoriesFirstPage: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchStoriesFirstPage();
        console.log(this.props);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(this.props);
    }

    fetchStories = () => {
        const { storyIds, page, fetchStories, isFetching } = this.props;
        if (!isFetching) {
            fetchStories({ storyIds, page });
        }
    };

    render() {
        const { stories, hasMoreStories } = this.props;
        return (
            <ThemeProvider theme={colorsDark}>
                <div>
                    <Wrapper>
                        <Title>Hacker News Ivan Komjenic</Title>
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
                            <List stories={stories} />
                        </InfiniteScroll>
                    </Wrapper>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
