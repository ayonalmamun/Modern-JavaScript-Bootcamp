const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
};

// function print(person) {
//     const {
//         first,
//         last,
//         country
//     } = person;
//     console.log(`${first} ${last} from ${country}`);
// } 

// shorten out code

function print({
    first,
    last,
    country
}) {
    console.log(`${first} ${last} from ${country}`);
} 

print(runner);

// for array

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
];

function parseResponse([protocol, statusCode, contentType]) {
    console.log(statusCode);
};

parseResponse(response);

// destructure array elements

function parseResponse2([, , contentType]) {
    console.log(contentType);
};

parseResponse2(response);