import styled from 'styled-components';
import { rem } from '../../../helpers/helpers';


const TaskStyle = styled.div`
    width: 20%;
    min-width: ${rem(370)};
    background-color: #fff;
    border: ${rem(1)} solid #ccc;
    border-radius: ${rem(6)};
    /* padding: ${rem(10)}; */
    margin: 0 ${rem(5)};
    margin-bottom: ${rem(10)};
`;

const Header = styled.div`
    background-color: #eee;
    color: #222;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    padding: ${rem(8)};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h4`
    margin: 0;
`;

const Content = styled.div`
    width: 100%;
    /* padding: ${rem(10)}; */
    display: flex;
    justify-content: space-between;
`;

const ActionButton = styled.button`
    background-color: red;
    width: ${rem(50)};
    height: ${rem(50)};
    color: #fff;
    border: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

const Controls = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Details = styled.div`
    /* width: 70%; */
`;

const ControlsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const Element = styled.li`
    margin-right: ${rem(10)};

    :last-child {
        margin-right: 0;
    }
`;

const CurrentTime = styled.div`

`;

TaskStyle.Header = Header;
TaskStyle.Title = Title;
TaskStyle.Content = Content;
TaskStyle.ActionButton = ActionButton;
TaskStyle.Controls = Controls;
TaskStyle.Details = Details;
TaskStyle.ControlsList = ControlsList;
TaskStyle.ControlsList.Element = Element;
TaskStyle.CurrentTime = CurrentTime;

export { TaskStyle }