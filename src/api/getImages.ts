import { storage } from '../config/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const getImages = async (imgsUrl: string) => {
    const imgsFolder = ref(storage, imgsUrl);
    const response = await listAll(imgsFolder);

    const downloadPromises = response.items.map((item) => {
        return getDownloadURL(item);
    });

    const imageUrls = await Promise.all(downloadPromises);
    return imageUrls
}