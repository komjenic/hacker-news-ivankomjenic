import { connect } from 'react-redux';
import actions from '../../store/story/actions';
import { hasMoreStoriesSelector } from '../../store/story/selector';
import App from './App';

const mapStateToProps = state => ({
    layout: state.app.layout,
    theme: state.app.theme,
    stories: state.story.stories,
    page: state.story.page,
    storyIds: state.story.storyIds,
    isFetching: state.story.isFetching,
    hasMoreStories: hasMoreStoriesSelector(state)
});

const mapDispatchToProps = dispatch => ({
    fetchStories: ({ storyIds, page }) =>
        dispatch(actions.fetchStories({ storyIds, page })),
    fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
