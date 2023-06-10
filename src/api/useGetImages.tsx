

function useGetImages() {

    // const accessToken = 'c0150eab9ba190058b6ef257ee733459b9a5201b';
    const myKey = 'e058d628bcbd4d968e31068a9c01c732';

    return (

        fetch(`https://api.rawg.io/api/games?key=${myKey}`, {
            method: 'GET',
        }).then((response) => response)
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    )
}

export default useGetImages