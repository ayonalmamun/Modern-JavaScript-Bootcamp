async function getData() {
    const result = await axios.get('https://swapi.dev/api/planets/');
    console.log(result);
}

getData();
