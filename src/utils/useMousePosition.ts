import { useEffect, useState } from 'react';

export default function useMousePosition() {
    type Position = {
        x: number;
        y: number;
    };
    const [mousePosition, setMousePosition] = useState<Position>({
        x: -50,
        y: -50,
    });

    useEffect(() => {
        const mouseMoveHandler = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };
        document.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return mousePosition;
}
