import { useQuery } from "@tanstack/react-query";

function useGetImages(
  queryKey: string,
  imagesDirectory: string,
  name: string,
  format: string,
  numb: number
) {
  function getImages() {
    const images: string[] = [];
    for (let i = 1; i <= numb; i++) {
      const url = `${imagesDirectory}${name}${i}${format}`;

      images.push(url);
    }

    return images;
  }

  return useQuery({ queryKey: [queryKey], queryFn: getImages });
}

export default useGetImages;
