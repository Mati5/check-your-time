import styled from 'styled-components';
import { rem } from '../../../helpers/helpers';


const TimerStyle = styled.div`
    width: 100%;
    background-color: #fff;
    border: ${rem(1)} solid #ccc;
    border-radius: ${rem(6)};
    /* padding: ${rem(10)}; */
    margin: 0 ${rem(5)};
    margin-bottom: ${rem(20)};

    @media(min-width: 768px) {
        width: 20%;
        max-width: unset;
        min-width: ${rem(370)};
    }
`;

const Header = styled.div`
    background-color: #eee;
    min-height: ${rem(40)};
    color: #222;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    /* padding: 0 ${rem(8)}; */
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`;

const HeaderRight = styled.div`
    flex-shrink: 0;
    display: flex;
    overflow: hidden;
`;

const HeaderControlBtn = styled.button`
    background-color: #e0e0e0;
    color: #7d7d7d;
    font-size: ${rem(18)};
    border: 0;
    border-right: ${rem(1)} solid rgba(125, 125, 125, 0.15);;
    padding: 0 ${rem(8)};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s opacity ease-in-out;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: 0;
    }

    &:last-child {
        border-right: 0;
    }

    svg {
        font-size: inherit;
    }
`;

const Title = styled.h4`
    font-size: ${rem(18)};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    align-self: center;
    padding: 0 ${rem(8)};
    padding-right: ${rem(25)};
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

    button {

        &:focus, &:hover {
            outline: 0;
        }
    }
`;

const CurrentTime = styled.div`

`;

TimerStyle.Header = Header;
TimerStyle.Header.Right =  HeaderRight;
TimerStyle.Header.Btn = HeaderControlBtn;
TimerStyle.Title = Title;
TimerStyle.Content = Content;
TimerStyle.ActionButton = ActionButton;
TimerStyle.Controls = Controls;
TimerStyle.Details = Details;
TimerStyle.ControlsList = ControlsList;
TimerStyle.ControlsList.Element = Element;
TimerStyle.CurrentTime = CurrentTime;

export { TimerStyle }