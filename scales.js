class TrumpetFingerings {

    static get ID_FINGERING_MAP () {
	const map = {};
	for (const item of TrumpetFingerings.items) {
	    map[item.id] = item;
	}
	return map;
    }

    static get items() {
	const items = [
	    {
		"id": 31,
		"pistons": [true, true, true]
	    },
	    {
		"id": 32,
		"pistons": [true, false, true]
	    },
	    {
		"id": 33,
		"pistons": [false, true, true]
	    },
	    {
		"id": 34,
		"pistons": [true, true, false]
	    },
	    {
		"id": 35,
		"pistons": [true, false, false]
	    },
	    {
		"id": 36,
		"pistons": [false, true, false]
	    },
	    {
		"id": 37,
		"pistons": [false, false, false]  // C in Bb score
	    },
	    {
		"id": 38,
		"pistons": [true, true, true]
	    },
	    {
		"id": 39,
		"pistons": [true, false, true]  // C4 in concert key
	    },
	    {
		"id": 40,
		"pistons": [false, true, true]
	    },
	    {
		"id": 41,
		"pistons": [true, true, false]
	    },
	    {
		"id": 42,
		"pistons": [true, false, false]
	    },	
	    {
		"id": 43,
		"pistons": [false, true, false]
	    },
	    {
		"id": 44,
		"pistons": [false, false, false]
	    },
	    {
		"id": 45,
		"pistons": [false, true, true]
	    },
	    {
		"id": 46,
		"pistons": [true, true, false]
	    },
	    {
		"id": 47,
		"pistons": [true, false, false]
	    },
	    {
		"id": 48,
		"pistons": [false, true, false]
	    },
	    {
		"id": 49,
		"pistons": [false, false, false]
	    },
	    {
		"id": 50,
		"pistons": [true, true, false]
	    },
	    {
		"id": 51,
		"pistons": [true, false, false]
	    },
	    {
		"id": 52,
		"pistons": [false, true, false]
	    },
	    {
		"id": 53,
		"pistons": [false, false, false]
	    },
	    {
		"id": 54,
		"pistons": [true, false, false]
	    },	
	    {
		"id": 55,
		"pistons": [false, true, false]
	    },
	    {
		"id": 56,
		"pistons": [false, false, false]
	    },
	    {
		"id": 57,
		"pistons": [false, true, true]
	    },
	    {
		"id": 58,
		"pistons": [true, true, false]
	    },
	    {
		"id": 59,
		"pistons": [true, false, false]
	    },
	    {
		"id": 60,
		"pistons": [false, true, false]
	    },
	    {
		"id": 61,
		"pistons": [false, false, false]
	    }
	];
	/**
	// append note
	const noteMap = Notes.ID_NOTE_MAP;
	for (const item of items) {
	    item.note = noteMap[item.id];
	}
	console.log(items);
	*/
	return items;
    }
}
