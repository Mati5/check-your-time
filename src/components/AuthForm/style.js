import styled from 'styled-components';
import { rem } from '../../helpers/helpers';

const AuthForm = styled.form`
    width: 100%;
    padding: 0 ${rem(25)};

    @media(min-width: 768px) {
        max-width: 50%;
        padding: 0;
    }
`;

const FormTitle = styled.h2`
    text-align: center;
    margin-bottom: ${rem(25)};
`;

const FormRow = styled.div`
    margin-bottom: ${rem(25)};
`;

const FormButtons = styled.div`
    margin: ${rem(10)} 0;
`;

const ErrorText = styled.div`
    color: #ff0000;
    font-size: ${rem(14)};
`;

AuthForm.Title = FormTitle;
AuthForm.Row = FormRow;
AuthForm.Buttons = FormButtons;
AuthForm.ErrorText = ErrorText;

export { AuthForm };