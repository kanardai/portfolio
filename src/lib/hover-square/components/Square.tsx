'use client';
import { colorPalette } from '@/app/theme';
import styled from '@emotion/styled';
import { useState } from 'react';

export default function Square() {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    function hoverHandler() {
        setIsHovered(true);
        setTimeout(() => {
            setIsHovered(false);
        }, 1000);
    }

    return <DivSquare isHovered={isHovered} onMouseLeave={hoverHandler} />;
}

type PropsDivSquare = {
    isHovered: boolean;
};

const DivSquare = styled.div<PropsDivSquare>`
    width: 11px;
    height: 11px;
  
    background-color: ${colorPalette.greyDark};
    margin: 1.7px;
    transition: all 0.6s ease-in;
    :hover {
        background-color: ${colorPalette.whiteGrey};
        box-shadow: 0 0 20px ${colorPalette.whiteGrey};
    }

    ::before {
        content: ' ';
        position: absolute;
        height: 11px;
        width: 11px;
        opacity: ${(props) => (props.isHovered ? '1' : '0')};
        transition: opacity 1.5s cubic-bezier(0.22, 0.68, 0, 1.71);
        background-color: ${colorPalette.whiteGrey};
        box-shadow: 0px 0 10px ${colorPalette.whiteGrey};
    }
`;
