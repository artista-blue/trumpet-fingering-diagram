class Note {
    constructor(id, names, octave) {
	this.id = id;
	this.names = names;
	this.octave = octave;
    }

    toString () {
	return `id:${this.id}, octave:${this.octave}, names:[${this.names.join(',')}]`;
    }
}

class Notes {
    static get NUM_NOTES () {
	return 88;
    }

    static get NOTE_NAMES () {
	return [
	    ["C"],
	    ["Db", "C#"],
	    ["D"],
	    ["Eb", "D#"],
	    ["E"],
	    ["F"],
	    ["Gb", "F#"],
	    ["G"],
	    ["Ab", "G#"],
	    ["A"],
	    ["Bb", "A#"],
	    ["B"]
	];
    }
    
    static get NOTES () {
	const notes = [];
	let octave = 0;
	for (let id = 0; id < Notes.NUM_NOTES; id++) {
	    const nameIndex = (id + 9) % 12
	    const names = Notes.NOTE_NAMES[nameIndex];
	    if (names[0] === 'C') {
		octave++;
	    }
	    const note = new Note(id, names, octave);
	    notes.push(note);
	}
	return notes;
    }

    static get ID_NOTE_MAP () {
	const map = {};
	for (const note of Notes.NOTES) {
	    map[note.id] = note;
	}
	return map;
    }

    static getScaleNotes (tonalCenter, intervals) {
	const noteNames = Notes.NOTE_NAMES.concat(Notes.NOTE_NAMES);
	let baseIndex = 0;
	for (; baseIndex < noteNames.length; baseIndex++) {
	    const noteName = noteNames[baseIndex];
	    if (noteName.includes(tonalCenter)) {
		break;
	    }
	}
	const scaleNoteNames = [];
	for (const interval of intervals) {
	    const scaleNoteName = noteNames[baseIndex + interval];
	    let index = 0;
	    if (scaleNoteName.length === 2 && ['G', 'D', 'A', 'E', 'B'].includes(tonalCenter)) {
		index = 1;
	    }
	    scaleNoteNames.push(scaleNoteName[index]);
	}
	return scaleNoteNames;
    }

    static getTonalCenters () {
	const items =  Notes.NOTE_NAMES.map(x => {
	    return x[0];
	});
	return items;
    }

    static shiftNote (note, step) {
	let shiftedId = note.id + step;
	return Notes.NOTES[shiftedId];
    }

    static shift (key, step) {
	const tonalCenters = Notes.getTonalCenters();
	const keyIndex = tonalCenters.indexOf(key);
	const index = (keyIndex + step + 12) % 12;
	const shifted = tonalCenters[index];
	return shifted;
    }
    
    toString () {
	const items = [];
	for (const note of Notes.NOTES) {
	    items.push(note.toString());
	}
	return items.join('\n');
    }
};

class AbstractScale {

    _contains (item, notes) {
	for (const name of item.names) {
	    if (notes.includes(name)) {
		return true;
	    }
	}
	return false;
    }
    
    get (tonalCenter) {
	const notes = Notes.getScaleNotes(tonalCenter, this.intervals);
	const items = Notes.NOTES.filter(item => {
	    return this._contains(item, notes);
	});
	return items;
    }

}
class ChromaticScale {
    get () {
	return Notes.NOTES;
    }
}

class MajorScale extends AbstractScale {
    constructor () {
	super();
	this.intervals = [0, 2, 4, 5, 7, 9, 11];
    }
}

class AlteredScale extends AbstractScale {
    constructor () {
	super();
	this.intervals = [0, 1, 3, 4, 6, 8, 10];
    }
}

class SymmetricDiminishedScale extends AbstractScale {
    constructor () {
	super();
	this.intervals = [0, 1, 3, 4, 6, 7, 9, 10];
    }
}

class Scales {
    static get SCALE_TYPES () {
	return [
	    {
		value: 'chromatic',
		name: 'Chromatic'
	    },
	    {
		value: 'major',
		name: 'Major Scale'
	    },
	    {
		value: 'altered',
		name: 'Altered Scale'
	    },
	    {
		value: 'diminished',
		name: 'Symmetric Diminished Scale'
	    },
	];
    }

    static get(scaleType, tonalCenter) {
	switch (scaleType) {
	case 'chromatic':
	    return new ChromaticScale().get();
	case 'major':
	    return new MajorScale().get(tonalCenter);
	case 'altered':
	    return new AlteredScale().get(tonalCenter);
	case 'diminished':
	    return new SymmetricDiminishedScale().get(tonalCenter);
	default:
	    throw new Error(`scale NOT supported: ${scaleType}`);
	}
    }
}

if (!this.window) {
    exports = {
	Notes: Notes,
	Scales: Scales
    };
};

//console.log(new Notes().toString());
