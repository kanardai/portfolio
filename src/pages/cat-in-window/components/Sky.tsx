import styled from '@emotion/styled';
import { colorPalette } from '../theme';

const { yellow } = colorPalette;

function Sky() {
    return (
        <>
            <Div_Moon />
            <Div_Star />
        </>
    );
}

export default Sky;

const Div_Moon = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: -20px 8px 0 1px ${yellow};
    position: absolute;
    left: 60px;
    top: 40px;
`;

const Div_Star = styled.div`
    background-color: ${yellow};
    height: 6px;
    width: 6px;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    left: 140px;
    box-shadow: 80px 65px ${yellow}, -120px 150px ${yellow},
        -80px 260px ${yellow}, 70px 235px ${yellow}, 30px 135px ${yellow};
    animation: twinkle 2s infinite;
    @keyframes twinkle {
        30% {
            opacity: 0.4;
        }
        70% {
            opacity: 0.1;
        }
    }
`;
