let password = 'PokemonBad';
// let password = 'Pokemon Bad';
// let password = 'Bad';

if(password.length >= 6) {
    if(password.indexOf(' ') === -1){  // -1 means not found
        console.log('Valid Password');
    } else {
        console.log('Password is okay but cannot contain space!');
    }
} else {
    console.log('Password must be longer');
}