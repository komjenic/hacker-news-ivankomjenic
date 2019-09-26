import React, { Component } from 'react';
import GridItem from '../GridItem';

import { GridWrapper } from './styles';

class Grid extends Component {
    render() {
        return (
            <GridWrapper>
                {this.props.stories.map(story => (
                    <GridItem key={story.id} {...story} />
                ))}
            </GridWrapper>
        );
    }
}

export default Grid;
