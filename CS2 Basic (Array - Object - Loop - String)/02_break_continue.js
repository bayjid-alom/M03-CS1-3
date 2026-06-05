console.log("CS2 Basic (Array - Object - Loop - String)")

// break 

for (i = 10; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
        if (i > 15) {
            break;
        }
    }
}



// continue - skip this

for (i = 55; i <= 65; i++) {
    if (i == 65) {
        continue;
    }
    console.log(i)
}

for (x = 0; x <= 10; x++) {
    console.log("Sorry...")
    if (x == 5) {
        break;
    }
}

// skip even numbers

for (i = 100; i <= 110; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i)
}