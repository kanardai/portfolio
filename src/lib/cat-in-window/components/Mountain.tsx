import styled from '@emotion/styled';
import { colorPalette } from '../theme';

function Mountain() {
    return <Div_Mountain1 />;
}

export default Mountain;

const Div_Mountain1 = styled.div`
    border-bottom: 60px solid ${colorPalette.purpleDark};
    border-right: 20px solid transparent;
    border-left: 10px solid transparent;
    position: absolute;
    bottom: 0;
    left: 5px;

    ::after {
        content: ' ';
        position: absolute;
        left: 10px;
        bottom: -60px;
        border-bottom: 80px solid ${colorPalette.purpleDark};
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;
    }
`;
