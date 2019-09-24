import styled from 'styled-components';

export const ListWrapper = styled.ul`
    background-color: ${props => props.theme.backgroundSecondary};
    border-radius: 4px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;
