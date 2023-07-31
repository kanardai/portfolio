import { mediaSize } from '@/app/theme';
import useMousePosition from '@/utils/useMousePosition';
import styled from '@emotion/styled';

const Cursor = () => {
    const { x, y } = useMousePosition();
    return <DivArrow x={x} y={y} />;
};

export default Cursor;

type PropsDivArrow = {
    x: number;
    y: number;
};

const DivArrow = styled.div<PropsDivArrow>`
    cursor: none;
    position: fixed;
    left: ${(props) => `${props.x - 10}px`};
    top: ${(props) => `${props.y}px`};

    width: 40px;
    height: 40px;
    background: url('/cursor.png');
    background-size: 100%;
    z-index: 999;
    pointer-events: none;
    @media (${mediaSize.mediaMobile}) {
        background: none;
        cursor: auto;
    }
`;
