import styled from '@emotion/styled';
import { colorPalette } from '../theme';

function Cat() {
    return (
        <Div_Cat>
            <Div_Ear />
        </Div_Cat>
    );
}

export default Cat;

const Div_Cat = styled.div`
    background-color: ${colorPalette.grey};
    height: 140px;
    width: 50px;
    position: absolute;
    bottom: -15px;
    left: 110px;
    border-radius: 40px 40px 0 0;
    ::before {
        content: ' ';
        position: absolute;
        background-color: ${colorPalette.grey};
        height: 80px;
        width: 40px;
        border-radius: 0 80px 80px 0;
        bottom: 0;
        left: 50px;
    }
    ::after {
        content: ' ';
        background-color: ${colorPalette.grey};
        position: absolute;
        bottom: -70px;
        left: 45px;
        height: 80px;
        width: 10px;
        border-radius: 5px;
        transform: rotate(-15deg);
        transform-origin: top;
        animation: tail 4s infinite;
    }
    @keyframes tail {
        50% {
            transform: rotate(20deg);
        }
    }
`;

const Div_Ear = styled.div`
    border-bottom: 40px solid ${colorPalette.grey};
    border-right: 50px solid transparent;
    position: relative;
    bottom: 30px;

    ::before {
        content: ' ';
        border-bottom: 40px solid ${colorPalette.grey};
        border-left: 50px solid transparent;
        position: relative;
        right: -0.7px;
    }
`;
