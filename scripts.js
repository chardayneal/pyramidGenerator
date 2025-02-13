
//add event listener to go-btn
const goBtn = document.getElementById('go-btn');
goBtn.addEventListener('click', () => {

    let height = document.getElementById('height').value;
    let direction = document.getElementById('direction').value;

    createPyramid(height, direction);
    
});


// begin creating pyramid
function createPyramid(height, direction) {
    let pyramid = document.getElementById('pyramid');

    //reset pyramid
    pyramid.innerHTML = "";
    pyramid.style.transform = "none";

    // generates respective pyramid according to direction
    switch (direction) {
        case 'Regular':
            generateHorizontalPyramid(height);
            break;
        case 'Inverted':
            generateHorizontalPyramid(height);
            pyramid.style.transform = 'rotate(180deg)';
            break
        case 'Start Left':
            generateVerticalPyramid(height);
            pyramid.style.transform = 'rotate(180deg)';
            break;
        case 'Start Right':
            generateVerticalPyramid(height);
            break;
        default:
            break;
    }
}

function generateHorizontalPyramid(height) {
        // 1. determine height for each row
        const root = document.documentElement;
        root.style.setProperty('--height', height);
    
        // 2. calculate columns for pryamid
        let columns = 2 * height - 1;
    
        // 3. calculate width of each column
        root.style.setProperty('--py-columns', columns);
    
        // 4. create amount of rows for regular pyramid
        for (let i = 1; i <= height; i++) {
    
            // a. create a row
            const pyRow = document.createElement('div');
            pyRow.setAttribute('class', 'py-row');
    
            // b. determine spaces and characters
            let spacers = height - i;
            let characters = columns - (2* spacers);
    
            // c. add spacers to left
            generateElements(spacers, "spacer", pyRow);
            // d. add characters to pyramid
            generateElements(characters, "character", pyRow);
            // e. add spacers to right
            generateElements(spacers, "spacer", pyRow);
    
            document.getElementById('pyramid').append(pyRow);
        }
}

function generateVerticalPyramid(height) {
    // 1. determine columns for row
    const root = document.documentElement;
    root.style.setProperty('--py-columns', height);

    // 2. calculate rows for pryamid
    let rows = 2 * height - 1;

    // 3. calculate width of each column
    root.style.setProperty('--height', rows);

    for (let i = 1; i <= rows; i++) {
        // a. create a pyramid row for columns
        const pyRow = document.createElement('div');
        pyRow.setAttribute('class', 'py-row');

        // create top half
        if (i < height) {
            generateElements(i, 'character', pyRow);
            generateElements(height - i, "spacer", pyRow);
        }else {
            generateElements(height - (i - height), 'character', pyRow);
            generateElements(i - height, "spacer", pyRow);
        }

        document.getElementById('pyramid').append(pyRow);
    }
} 

function generateElements(num, attribute, row) {
    // automated creating multiple of same elements
    for (let i = 0; i < num; i++) {
        const spacer = document.createElement('div');
        spacer.setAttribute('class', attribute);
        row.append(spacer);
    }
}


