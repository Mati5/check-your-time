import styled from 'styled-components';
import { rem } from '../../helpers/helpers';

const ManageTaskFormStyle = styled.div`
    
`;

const FormRow = styled.div`
    /* margin: ${rem(5)} 0; */
`;

const FormActions  = styled.div`
    text-align: right;
    border-top: ${rem(1)} solid #ccc;
    padding: 0 ${rem(16)};
    padding-top: ${rem(15)};
    margin: 0 ${rem(-23)};
    margin-top: ${rem(30)};
`;

const Input = styled.input`

`;

export { ManageTaskFormStyle, FormRow, Input, FormActions };
