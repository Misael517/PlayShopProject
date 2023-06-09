import { storage } from '../config/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { useQuery } from '@tanstack/react-query';

function useGetImages(queryKey: string, imageUrl: string) {

    const getImages = async (imgsUrl: string) => {
        const imgsFolder = ref(storage, imgsUrl);
        const response = await listAll(imgsFolder);

        const downloadPromises = response.items.map((item) => {
            return getDownloadURL(item);
        });

        const imageUrls = Promise.all(downloadPromises);
        return imageUrls
    };

    return useQuery([queryKey], () => getImages(imageUrl))
}

export default useGetImages