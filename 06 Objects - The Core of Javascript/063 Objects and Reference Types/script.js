// objects are reference types too. 

const palette = {
    red : '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};

const palette2 = palette;

palette2.green = ' #aaf900';

console.log(palette);

// after adding green in palette2, it appears in palette object too!