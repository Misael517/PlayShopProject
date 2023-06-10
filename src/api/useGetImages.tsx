

function useGetImages() {

    // const accessToken = 'c0150eab9ba190058b6ef257ee733459b9a5201b';
    const clientID = '47be2fe88450e2e';
    const galleryHash = 'YqvbQXb';

    return (

        fetch(`https://api.imgur.com/3/gallery/album/${galleryHash}`, {
            method: 'GET',
            headers: {
                Authorization: `Client-ID ${clientID}`
            }
        }).then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    )
}

export default useGetImages