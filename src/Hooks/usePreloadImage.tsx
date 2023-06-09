import { useEffect } from 'react';

function usePreloadImages(img: string[] | undefined) {
    useEffect(() => {
        function handlePreload() {
            img?.forEach((imgURL) => {
                const imgElement = new Image();
                imgElement.src = imgURL
            })
        }

        window.addEventListener('mousemove', handlePreload)

        return () => window.removeEventListener('mousemove', handlePreload)
    })

    return null
}

export default usePreloadImages