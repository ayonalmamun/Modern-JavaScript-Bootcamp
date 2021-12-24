async function getData() {
    try {
        const result = await axios.get('https://swapi.dev/api/planets/');
        // const result = await axios.get('https://swapi.dev/api/planetsassa/'); // err
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}

getData();