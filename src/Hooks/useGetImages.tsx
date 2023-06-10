import { useQuery } from '@tanstack/react-query';

function useGetImages(queryKey: string, imagesDirectory: string, name: string, format: string, numb: number) {

    const getImages = () => {
        const images: string[] = []
        for (let i = 1; i <= numb; i++) {
            const url: string =`${imagesDirectory}${name}${i}${format}`
            
            images.push(url)
          }

      return images;
    };
  

    return useQuery([queryKey], () => getImages());
  }
  
  export default useGetImages;