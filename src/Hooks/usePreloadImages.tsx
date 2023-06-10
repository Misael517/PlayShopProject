import { useEffect } from "react";

function usePreloadImages(img: string[] | undefined) {

    useEffect(() => {
        const preloadedImages: HTMLImageElement[] = [];

        if (img) {
            img.forEach((imgURL) => {
                const imgElement = new Image();
                imgElement.src = imgURL;
                preloadedImages.push(imgElement);
            });
        }

        return () => {
            preloadedImages.forEach((imgElement) => {
                imgElement.src = ''; // Reset the image source to release memory
            });
        };
    }, [img]);
}

export default usePreloadImages