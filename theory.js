
let notes = [];

function getNoteName(notes, acc) {
    theNote = null
    switch (notes % 7) {
        case 0:
            theNote = "C";
            break;
        case 1:
            theNote = "D";
            break;
        case 2:
            theNote = "E";
            break;
        case 3:
            theNote = "F";
            break;
        case 4:
            theNote = "G";
            break;
        case 5:
            theNote = "A";
            break;
        case 6:
            theNote = "B";
            break;
    }
    if (acc == 0) {
        return theNote
    } else if (acc == -1) {
        return theNote + " flat"
    } else if (acc == -2) {
        return theNote + " double flat"
    } else if (acc == 1) {
        return theNote + " sharp"
    } else {
        return theNote + " double sharp"
    }
}

function generateAccidentals(note, acc) {
    switch (note) {
        case 0:
            if (acc == 0) {
                return [0, 0, 0, 0, 0, 0, 0]
            } else if (acc == 1) {
                return [1, 1, 1, 1, 1, 1, 1]
            } else {
                return [-1, -1, -1, -1, -1, -1, -1]
            }
        case 1:
            if (acc == 0) {
                return [0, 0, 1, 0, 0, 0, 1]
            } else if (acc == 1) {
                return [1, 1, 2, 1, 1, 1, 2]
            } else {
                return [-1, -1, 0, -1, -1, -1, 0]
            }
        case 2:
            if (acc == 0) {
                return [0, 1, 1, 0, 0, 1, 1]
            } else if (acc == 1) {
                return [1, 2, 2, 1, 1, 2, 2]
            } else {
                return [-1, 0, 0, -1, -1, 0, 0]
            }
        case 3:
            if (acc == 0) {
                return [0, 0, 0, -1, 0, 0, 0]
            } else if (acc == 1) {
                return [1, 1, 1, 0, 1, 1, 1]
            } else {
                return [-1, -1, -1, -2, -1, -1, -1]
            }
        case 4:
            if (acc == 0) {
                return [0, 0, 0, 0, 0, 0, 1]
            } else if (acc == 1) {
                return [1, 1, 1, 1, 1, 1, 2]
            } else {
                return [-1, -1, -1, -1, -1, -1, 0]
            }
        case 5:
            if (acc == 0) {
                return [0, 0, 1, 0, 0, 1, 1]
            } else if (acc == 1) {
                return [1, 1, 2, 1, 1, 2, 2]
            } else {
                return [-1, -1, 0, -1, -1, 0, 0]
            }
        case 6:
            if (acc == 0) {
                return [0, 1, 1, 0, 1, 1, 1]
            } else if (acc == 1) {
                return [1, 2, 2, 1, 2, 2, 2]
            } else {
                return [-1, 0, 0, -1, 0, 0, 0]
            }
    }
}

function getScale(noted, acc) {
    scale = ""
    accidentals = generateAccidentals(noted, acc)
    console.log(accidentals)
    for (let i = noted; i <= noted + 7; i++) {
        scale = scale + " " + getNoteName(i, accidentals[i % 7]) 
    }
    return scale
}

console.log(getScale(1, 0))