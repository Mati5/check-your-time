import styled from 'styled-components';
import { rem } from '../../helpers/helpers';


const TaskListStyle = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding: ${rem(10)};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export { TaskListStyle };