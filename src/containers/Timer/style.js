import styled from 'styled-components';
import { rem } from '../../helpers/helpers';
import Fab from '@material-ui/core/Fab';

const TimerStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 30%;
    padding: ${rem(10)};
`;

const Right = styled.div`
    width: 70%;
    padding: ${rem(10)};
`;

const Title = styled.h4`
    font-size: ${rem(18)};
    margin: 0;
`;

const FabFixed = styled(Fab)`
    position: fixed!important;
    right: ${rem(50)};
    bottom: ${rem(50)};
    z-index: 999;
`;

TimerStyle.Left = Left;
TimerStyle.Right = Right;
TimerStyle.Title = Title;

export { TimerStyle, FabFixed }