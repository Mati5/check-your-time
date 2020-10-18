import styled from 'styled-components';
import { rem } from '../../helpers/helpers';
import LoginBg from '../../assets/images/loginPage/login_ bg.jpg';

const AuthPageStyle = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    @media(min-width: 768px) {
        display: flex;
    }
`;

const LeftPage = styled.div`
    width: 35%;
    height: 100vh;
    background-image: url('${LoginBg}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-right: 4px solid #323232;
    position: relative;
    display: none;

    @media(min-width: 768px) {
        display: block;
    }

    &:after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.2;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const Logo = styled.div`
    width: ${rem(160)};
    height: ${rem(160)};
    background-color: #fff;
    border: 4px solid #323232;;
    border-radius: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: ${rem(-80)};
    z-index: 1;
    transform: translateY(-50%);

    img {
        max-width: 100%;
    }
`;

const LogoMobile = styled(Logo)`
    width: ${rem(120)};
    height: ${rem(120)};
    padding: ${rem(20)};
    margin: ${rem(50)} auto;
    margin-bottom: ${rem(25)};
    position: static;
    top: unset;
    right: unset;
    transform: unset;

    @media(min-width: 768px) {
        display: none;
    }
`;

const RightPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 768px) {
        width: 60%;
       
    }
`;

const Form = styled.form`
    width: 100%;
    padding: 0 ${rem(25)};

    @media(min-width: 768px) {
        max-width: 50%;
        padding: 0;
    }
`;

const FormRow = styled.div`
    margin-bottom: ${rem(25)};
`;

const FormButtons = styled.div`
    margin-bottom: ${rem(10)};
`;

AuthPageStyle.Left = LeftPage;
AuthPageStyle.LogoMobile = LogoMobile;
AuthPageStyle.Logo = Logo;
AuthPageStyle.Right = RightPage;
AuthPageStyle.Form = Form;
AuthPageStyle.Form.Row = FormRow;
AuthPageStyle.Form.Buttons = FormButtons;

export { AuthPageStyle };