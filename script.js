const pyramid = document.getElementById('pyramid');

//pyramid specs
let character = " o ";
let startSpacer = "- ";
let endSpacer = " -";
let spacer = "|"
let rows = [];

// add listener to go btn
const goBtn = document.getElementById('go-btn');
goBtn.addEventListener('click', () => {
    generatePyramid();
});

function generatePyramid() {
    // clears previous pyramid
    resetPyramid();

    // get height selection
    let height = document.getElementById('height').value;
    // get pyramid selection
    let direction = document.getElementById('direction').value;

    switch (direction) {
        case 'Regular':
            createRegPyramid(height);
            break;
        case 'Inverted':
            createInvertedPyramid(height);
            break;
        case 'Start Right':
            createRightPyramid(height);
            break;
        default:
            return;
    }

    // fills rows array with each row and padding
    printPyramid();

}


// create regular pyramid
function createRegPyramid(height) {
    while (rows.length < height) {
        rows.push(padRow(rows.length+1, height));
    }
}

// create inverted pyramid
function createInvertedPyramid(height) {
    for(let i = height; i > 0; i--) {
        rows.push(padRow(i, height));
    }
}

// create pyramid starting on right
function createRightPyramid(height) {
    // create top half of pyramid
    for (let i= 1; i <= height; i++) {
        rows.push(character.repeat(i))
    }
    // create bottom half of pyramid
    for(let i = height - 1; i > 0; i--) {
        rows.push(character.repeat(i));
    }

}

// function to pad rows
function padRow(rowNumber, rowCount) {
    return startSpacer.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + endSpacer.repeat(rowCount - rowNumber);
}

// function to pad columns
function padColumn(columnNumber, columnCount) {
    return ;
}

//print in rows instead of array
function printPyramid() {
    rows.forEach((row) => {
        const newElement = document.createElement('div');
        newElement.innerHTML = row;
        pyramid.append(newElement);
    });
}


function resetPyramid() {
    document.getElementById('pyramid').innerHTML = "";
    rows = [];
}







