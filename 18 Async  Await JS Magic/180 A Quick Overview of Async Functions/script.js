function getData() {
    const data = axios.get('https://swapi.dev/api/planets/').then((data) => {
        console.log(data); // we will get data
    });
    console.log(data); // pending
}
getData();