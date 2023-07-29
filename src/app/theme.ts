import styled from '@emotion/styled';
import Image from 'next/image';

export const colorPalette = {
    cyanLight: '#12f3ef',
    greyDark: '#1C1D21',
    greyBrownDark: '#272929',
    greyBlack: 'rgba(15, 16, 16, 1)',
    whiteGrey: '#f9f7db',
    violet: '#7200ca',
    violet70: '#7200ca70',
    yellow: '#ffc800',
    yellow70: '#ffc80070',
    yellow40: '#ffc80040',
};

export const fonts = {
    basic: `'Philosopher', sans-serif;`,
    sizes: {
        normal: '14px',
    },
};

export const mediaSize = {
    mediaMobile: 'max-width: 1000px',
    mediaLaptop: 'min-width: 1001px',
};

export const DivContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colorPalette.greyDark};
`;

export const ImgHeroWrapper = styled(Image)`
    min-height: 540px;
    max-height: 541px;
    width: 950px;
    inset: 0;
    margin: auto;
    border-radius: 2.5vh;
    border: 1vh solid transparent;
    background: linear-gradient(white, white) padding-box,
        linear-gradient(30deg, ${colorPalette.violet}, ${colorPalette.yellow})
            border-box;
    @media (${mediaSize.mediaMobile}) {
        transform: scale(0.5) rotate(-90deg);
    }
`;

export const DivHero = styled.div`
    position: relative;
    border-radius: 1rem;
    animation: showUp 2s;
    @keyframes showUp {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
