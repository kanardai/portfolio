'use client';
import { colorPalette, fonts, mediaSize } from '@/app/theme';
import styled from '@emotion/styled';

export default function Welcome() {
    return (
        <DivContainer>
            <SpanLetter>w</SpanLetter>
            <SpanLetter>e</SpanLetter>
            <SpanLetter>l</SpanLetter>
            <SpanLetter>c</SpanLetter>
            <SpanLetter>o</SpanLetter>
            <SpanLetter>m</SpanLetter>
            <SpanLetter>e</SpanLetter>
        </DivContainer>
    );
}

const DivContainer = styled.div`
    position: absolute;
    height: 200px;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (${mediaSize.mediaMobile}) {
        transform: scale(0.7) rotate(-90deg);
        top: 380px;
        left: 333px;
    }
`;

const SpanLetter = styled.span`
    font-size: 140px;
    animation: letterShow 2s ease-in-out;
    font-family: ${fonts.basic};
    font-weight: 700;
    color: ${colorPalette.greyDark};

    @keyframes letterShow {
        55% {
            -webkit-text-stroke: 3px #ffffff20;
        }
        60% {
            text-shadow: -10px 10px 40px ${colorPalette.violet},
                10px -10px 40px ${colorPalette.yellow};
        }
    }
    :nth-of-type(1) {
        animation-delay: 1s;
    }
    :nth-of-type(2) {
        animation-delay: 1.3s;
    }
    :nth-of-type(3) {
        animation-delay: 1.5s;
    }
    :nth-of-type(4) {
        animation-delay: 1.8s;
    }
    :nth-of-type(5) {
        animation-delay: 2.1s;
    }
    :nth-of-type(6) {
        animation-delay: 2.4s;
    }
    :nth-of-type(7) {
        animation-delay: 2.7s;
    }
`;
