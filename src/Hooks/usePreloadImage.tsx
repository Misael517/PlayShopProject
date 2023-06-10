import { useEffect } from 'react';

function usePreloadImages(img: string[] | undefined) {
    useEffect(() => {      
            img?.forEach((imgURL) => {
                const imgElement = new Image();
                imgElement.src = imgURL
            })
    }, [img])

    return null
}

export default usePreloadImages