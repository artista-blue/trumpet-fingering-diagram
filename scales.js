class Keys {
    static get items() {
	const items = [
	    {
		value: 0,
		name: ["C"]
	    },
	    {
		value: 1,
		name: ["C#", "Db"]
	    },
	    {
		value: 2,
		name: ["D"]
	    },
	    {
		value: 3,
		name: ["D#", "Eb"]
	    },
	    {
		value: 4,
		name: ["E"]
	    },
	    {
		value: 5,
		name: ["F"]
	    },
	    {
		value: 6,
		name: ["F#", "Gb"]
	    },
	    {
		value: 7,
		name: ["G"]
	    },
	    {
		value: 8,
		name: ["G#", "Ab"]
	    },
	    {
		value: 9,
		name: ["A"]
	    },
	    {
		value: 10,
		name: ["A#", "Bb"]
	    },
	    {
		value: 11,
		name: ["B"]
	    }
	];
	return items;
    }

    static getScaleNotes (tonalCenter, intervals) {
	const notes = Keys.items.concat(Keys.items);
	let baseIndex = 0;
	for (; baseIndex < notes.length; baseIndex++) {
	    const note = notes[baseIndex];
	    if (note.name.includes(tonalCenter)) {
		break;
	    }
	}
	const scaleNotes = [];
	for (const interval of intervals) {
	    const scaleNote = notes[baseIndex + interval];
	    scaleNotes.push(scaleNote);
	}
	return scaleNotes;
    }

    static getTonalCenters () {
	const items =  Keys.items.map(x => {
	    const index = x.name.length - 1;
	    return x.name[index];
	});
	return items;
    }

    static shift (key, step) {
	const notes = Keys.items.map(x => {
	    const index = x.name.length - 1;
	    return x.name[index];
	});
	const keyIndex = notes.indexOf(key);
	const index = (keyIndex + step + 12) % 12;
	const shifted = notes[index];
	return shifted;
    }
}

class Pistons {

    static get items() {
	const items = [
	    {
		"names": ["F#", "Gb"],
		"pitch": 3,
		"pistons": [true, true, true]
	    },
	    {
		"names": ["G"],
		"pitch": 3,
		"pistons": [true, false, true]
	    },
	    {
		"names": ["G#", "Ab"],
		"pitch": 3,
		"pistons": [false, true, true]
	    },
	    {
		"names": ["A"],
		"pitch": 3,
		"pistons": [true, true, false]
	    },
	    {
		"names": ["A#", "Bb"],
		"pitch": 3,
		"pistons": [true, false, false]
	    },
	    {
		"names": ["B"],
		"pitch": 3,
		"pistons": [false, true, false]
	    },
	    {
		"names": ["C"],
		"pitch": 4,
		"pistons": [false, false, false]
	    },
	    {
		"names": ["C#", "Db"],
		"pitch": 4,
		"pistons": [true, true, true]
	    },
	    {
		"names": ["D"],
		"pitch": 4,
		"pistons": [true, false, true]
	    },
	    {
		"names": ["D#", "Eb"],
		"pitch": 4,
		"pistons": [false, true, true]
	    },
	    {
		"names": ["E"],
		"pitch": 4,
		"pistons": [true, true, false]
	    },
	    {
		"names": ["F"],
		"pitch": 4,
		"pistons": [true, false, false]
	    },	
	    {
		"names": ["F#", "Gb"],
		"pitch": 4,
		"pistons": [false, true, false]
	    },
	    {
		"names": ["G"],
		"pitch": 4,
		"pistons": [false, false, false]
	    },
	    {
		"names": ["G#", "Ab"],
		"pitch": 4,
		"pistons": [false, true, true]
	    },
	    {
		"names": ["A"],
		"pitch": 4,
		"pistons": [true, true, false]
	    },
	    {
		"names": ["A#", "Bb"],
		"pitch": 4,
		"pistons": [true, false, false]
	    },
	    {
		"names": ["B"],
		"pitch": 5,
		"pistons": [false, true, false]
	    },
	    {
		"names": ["C"],
		"pitch": 5,
		"pistons": [false, false, false]
	    },
	    {
		"names": ["C#", "Db"],
		"pitch": 5,
		"pistons": [true, true, false]
	    },
	    {
		"names": ["D"],
		"pitch": 5,
		"pistons": [true, false, false]
	    },
	    {
		"names": ["D#", "Eb"],
		"pitch": 5,
		"pistons": [false, true, false]
	    },
	    {
		"names": ["E"],
		"pitch": 5,
		"pistons": [false, false, false]
	    },
	    {
		"names": ["F"],
		"pitch": 5,
		"pistons": [true, false, false]
	    },	
	    {
		"names": ["F#", "Gb"],
		"pitch": 5,
		"pistons": [false, true, false]
	    },
	    {
		"names": ["G"],
		"pitch": 5,
		"pistons": [false, false, false]
	    },
	    {
		"names": ["G#", "Ab"],
		"pitch": 5,
		"pistons": [false, true, true]
	    },
	    {
		"names": ["A"],
		"pitch": 5,
		"pistons": [true, true, false]
	    },
	    {
		"names": ["A#", "Bb"],
		"pitch": 5,
		"pistons": [true, false, false]
	    },
	    {
		"names": ["B"],
		"pitch": 5,
		"pistons": [false, true, false]
	    },
	    {
		"names": ["C"],
		"pitch": 6,
		"pistons": [false, false, false]
	    }
	];
	let i = 0;
	for (const item of items) {
	    item.id = i;
	    i++
	}
	// append names
	const namesList = [
	    ["C"],
	    ["C#", "Db"],
	    ["D"],
	    ["D#", "Eb"],
	    ["E"],
	    ["F"],
	    ["F#", "Gb"],
	    ["G"],
	    ["G#", "Ab"],
	    ["A"],
	    ["A#", "Bb"],
	    ["B"]
	];
	let index = 6;
	let realIndex = 4;
	for (const item of items) {
	    item.names = namesList[index];
	    item.realNames = namesList[realIndex];
	    index = (index + 1) % 12;
	    realIndex = (realIndex + 1) % 12;
	    if (['Bb', 'B'].includes(item.realNames[0])) {
		item.pitch = item.pitch - 1;
	    }
	}
	return items;
    }
}

class AbstractScale {
    get (tonalCenter, base) {
	const notes = Keys.getScaleNotes(tonalCenter, this.intervals);
	const items = Pistons.items.filter(function (item) {
	    return Scales.contains(item, notes, base);
	});
	return items;
    }

}
class ChromaticScale {
    get () {
	return Pistons.items
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

    static contains (item, notes, base) {
	const names = base === 'C' ? item.realNames : item.names;
	for (const name of names) {
	    for (const note of notes) {
		if (note.name.includes(name)) {
		    return true;
		}
	    }
	}
	return false;
    }

    static get(scaleType, tonalCenter, base) {
	switch (scaleType) {
	case 'chromatic':
	    return new ChromaticScale().get();
	case 'major':
	    return new MajorScale().get(tonalCenter, base);
	case 'altered':
	    return new AlteredScale().get(tonalCenter, base);
	case 'diminished':
	    return new SymmetricDiminishedScale().get(tonalCenter, base);
	default:
	    throw new Error(`scale NOT supported: ${scaleType}`);
	}
    }
}
