import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from '../../helpers/helpers';

const SimpleTileStyle = styled.div`
    background-color: #fff;
    color: #222222;
    border: 1px solid #dfdfdf;
    border-radius: ${rem(12)};
    overflow: hidden;
    display: flex;
    align-items: center;
    transition: opacity ease-in-out 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const TileLink = styled(Link)`

    &:hover {
        text-decoration: none;
    }
`;

const Title = styled.h3`
    font-weight: 600;
    font-size: ${rem(24)};
    padding-left: 15px;
    margin: 0;
`;

const Icon = styled.div`
    width: ${rem(85)};
    height: ${rem(85)};
    background-color: #4c5caf;
    padding: ${rem(15)};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
    }
`;

SimpleTileStyle.Link = TileLink;
SimpleTileStyle.Title = Title;
SimpleTileStyle.Icon = Icon;

export { SimpleTileStyle };