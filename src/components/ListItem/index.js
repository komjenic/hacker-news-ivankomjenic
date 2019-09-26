import React from 'react';
import { format } from 'timeago.js';
import getSiteHostname from '../../utils/getSiteHostname';
import getArticleLink, { HN_ITEM, HN_USER } from '../../utils/getArticleLink';

import {
    Item,
    Title,
    Host,
    ExternalLink,
    Description,
    CommentLink
} from './styles';

const LINK_REL = 'noopener noreferrer nofollow';

const ListItem = ({ by, score, kids = [], title, url, time, id }) => {
    const site = getSiteHostname(url) || 'news.ycombinator.com';
    const link = getArticleLink({ url, id });
    const commentUrl = `${HN_ITEM}${id}`;
    const userUrl = `${HN_USER}${by}`;
    return (
        <Item>
            <ExternalLink href={link} rel={LINK_REL} target='_blank'>
                <Title>
                    {title} <Host>({site})</Host>{' '}
                </Title>
            </ExternalLink>
            <Description>
                {score} points by{' '}
                <CommentLink href={userUrl} rel={LINK_REL} target='_blank'>
                    {by}{' '}
                </CommentLink>
                {format(new Date(time * 1000).toISOString())}
                {' | '}
                <CommentLink href={commentUrl} rel={LINK_REL} target='_blank'>
                    {kids.length} Comments
                </CommentLink>
            </Description>
        </Item>
    );
};

export default ListItem;
