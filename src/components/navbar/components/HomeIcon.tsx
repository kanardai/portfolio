import styled from '@emotion/styled';
import { DivContainerSVG, SVGContent, colorPalette } from '../theme';


export default function HomeIcon() {
    return (
        <DivContainerSVG>
            <SVGContent viewBox='0 0 512 512'>
                <path
                    d='M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212'
                    fill='none'
                    stroke='#f9f7db'
                    strokeLinecap='round'
                    strokeWidth='32'
                />
                <path
                    d='M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69'
                    fill='none'
                    stroke='#f9f7db'
                    strokeLinecap='round'
                    strokeWidth='32'
                />
            </SVGContent>
        </DivContainerSVG>
    );
}
