import { mediaSize } from '@/app/theme';
import styled from '@emotion/styled';

export const colorPalette = {
    white: '#f9f7db',
};

export const zIndex = {
    menu: 10,
    icons: 9,
};

type PropsDivNavIcon = {
    isActive: boolean;
    xAxis: number;
};

export const DivNavIcon = styled.div<PropsDivNavIcon>`
    position: absolute;
    z-index: ${zIndex.icons};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.8s ease;
    transform: ${(props) => props.isActive && `translateX(${props.xAxis}px)`};
    box-shadow: 0.4px 0.2px 0.5px #1c1d2160, 2.4px 1.4px 3.1px -0.4px #1c1d2160,
        4.5px 2.6px 5.8px -0.7px #1c1d2160;
`;

export const DivContainerSVG = styled.div`
    width: 50px;
    height: 50px;
    background-color: #1c1d21;
    border: 2px solid ${colorPalette.white};
    border-radius: 50%;
    color: ${colorPalette.white};
    display: flex;
    justify-content: center;
    align-items: center;
    @media (${mediaSize.mediaMobile}) {
        transform: rotate(-90deg)
    }
`;

export const SVGContent = styled.svg`
    position: absolute;
    width: 50%;
    height: 50%;
    inset: 0;
    margin: auto;
`;
