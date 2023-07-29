import { useEffect } from 'react';

export default function imgCache(imagesUrls: string[]) {
    useEffect(() => {
        cacheImages(imagesUrls);
    }, []);

    const cacheImages = async (srcArray: string[]) => {
        const promises = await srcArray.map((src) => {
            return new Promise(function () {
                const img = new Image();
                img.src = src;
            });
        });
    };
}
