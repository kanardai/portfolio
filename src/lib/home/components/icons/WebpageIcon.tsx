'use client'
import webpage from '../../images/webpage.png';
import Image from 'next/image';
import { DivIconWrapper } from '../../theme';
import Link from 'next/link';

type PropsWebpageIcon = {
    webpageUrl: string;
};

export default function WebpageIcon({ webpageUrl = '' }: PropsWebpageIcon) {
    return (
        <Link href={webpageUrl}>
            <DivIconWrapper>
                <Image src={webpage} alt='webpageIcon' height='35'/>
            </DivIconWrapper>
        </Link>
    );
}
