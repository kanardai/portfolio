'use client';
import { DivContainer, colorPalette, mediaSize } from '@/app/theme';
import Square from './components/Square';
import styled from '@emotion/styled';
import NavigationBar from '@/components/navbar/NavigationBar';
import Cursor from '@/components/cursor/Cursor';

export default function HoverSquare() {
    const numberOfDivs: number[] = Array.from(
        { length: 10000 },
        (_, index) => index + 1
    );

    return (
        <DivPageContainer>
            
            <NavigationBar />
            {numberOfDivs.map((key) => (
                <Square key={key} />
            ))}
        </DivPageContainer>
    );
}

const DivPageContainer = styled(DivContainer)`
    display: flex;
    flex-wrap: wrap;
    background-image: radial-gradient(
        circle at center,
        ${colorPalette.purpleDark} 60%,
        black 170%,
        black 200%
    );
    overflow: hidden;
    
`;
