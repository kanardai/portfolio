import { colorPalette } from '@/app/theme';
import styled from '@emotion/styled';

type PropsSeparator = {
    triggerAnimation: boolean;
};

export default function Separator({ triggerAnimation }: PropsSeparator) {
    return (
        <DivSeparator data-name='DivSeparator' animation={triggerAnimation} />
    );
}

type PropsDivSeparator = {
    animation: boolean;
};

const DivSeparator = styled.div<PropsDivSeparator>`
    z-index: 10;
    grid-area: 'separator';
    border-right: 5px solid;
    height: 270px;
    border-image: linear-gradient(
        to bottom,
        ${colorPalette.yellow},
        ${colorPalette.violet}
    );
    border-image-slice: 1;
    animation: shadowLight 1.5s linear infinite;
    width: 0;
    background: linear-gradient(
        #1b1b1d 5%,
        #1b1b1c 20%,
        #18171a 70%,
        #18151a 90%,
        #16141a 100%
    );
    animation: ${(props) => props.animation && 'resizeAnimation 0.7s ease'};
    @keyframes resizeAnimation {
        0% {
            width: 0;
            box-shadow: none;
        }
        50% {
            width: 380px;
            box-shadow: none;
        }
        100% {
            width: 0;
            box-shadow: none;
        }
    }
    @keyframes shadowLight {
        0% {
            box-shadow: none;
        }
        70% {
            box-shadow: 0px 5px 10px ${colorPalette.yellow70},
                0px -5px 15px ${colorPalette.yellow70},
                -2px -10px 10px ${colorPalette.yellow40},
                -2px 10px 10px ${colorPalette.violet70},
                0px 5px 10px ${colorPalette.violet};
        }
        100% {
            box-shadow: none;
        }
    }
`;
