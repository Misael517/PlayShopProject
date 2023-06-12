import { useEffect } from "react";

const usePreloadImages = (images: string[] | undefined) => {
    useEffect(() => {

        const imgURL = images?.map((src) => {
            const img = new Image();
            img.src = src;
            return img
        });

        return () => {
            imgURL?.forEach((element) => {
                element.src = ''
                element.onload = null;
                element.onerror = null;
                element.onabort = null;
                element.remove();
            })
        }

    });

    return null;
};

export default usePreloadImages;