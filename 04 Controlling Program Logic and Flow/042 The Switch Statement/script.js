let day = 7;

switch(day) {
    case 1: 
        console.log('Saturday');
        break;
    case 2: 
        console.log('Sunday');
        break;
    case 3: 
        console.log('Monday');
        break;
    case 4: 
        console.log('Tuesday');
        break;
    case 5: 
        console.log('Wednesday');
        break;
    case 6: 
        console.log('Thursday');
        break;
    case 7: 
        console.log('Friday');
        break;
    default:
        console.log('Invalid Input');
        break;
}

let emoji = 'super happy';

switch(emoji) {
    case 'super happy':
    case 'happy':
        console.log('Yellow');
        break;
    case 'angry':
        console.log('Red');
        break;
    case 'sad':
        console.log('Black');
        break;
    default:
        console.log('Cannot understand!');
        break;                      
}

// whenever a case matches,
// compiler starts to compile every single line after that match. 
// so it will continue to execute until it finds a break.