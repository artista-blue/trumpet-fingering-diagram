class Fingering {
    constructor (p1, p2, p3) {
	this.p1 = p1
	this.p2 = p2
	this.p3 = p3
    }
}

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
		"fingerings": [
		    new Fingering(true, true, true)
		]
	    },
	    {
		"id": 32,
		"fingerings": [
		    new Fingering(true, false, true)
		]
	    },
	    {
		"id": 33,
		"fingerings": [
		    new Fingering(false, true, true)
		]
	    },
	    {
		"id": 34,
		"fingerings": [
		    new Fingering(true, true, false),
		    new Fingering(false, false, true)
		]
	    },
	    {
		"id": 35,
		"fingerings": [
		    new Fingering(true, false, false)
		]
	    },
	    {
		"id": 36,
		"fingerings": [
		    new Fingering(false, true, false)
		]
	    },
	    {
		"id": 37,
		"fingerings": [
		    new Fingering(false, false, false)
		]  // C in Bb score
	    },
	    {
		"id": 38,
		"fingerings": [
		    new Fingering(true, true, true)
		]
	    },
	    {
		"id": 39,
		"fingerings": [
		    new Fingering(true, false, true)
		]  // C4 in concert key
	    },
	    {
		"id": 40,
		"fingerings": [
		    new Fingering(false, true, true)
		]
	    },
	    {
		"id": 41,
		"fingerings": [
		    new Fingering(true, true, false),
		    new Fingering(false, false, true)
		]
	    },
	    {
		"id": 42,
		"fingerings": [
		    new Fingering(true, false, false)
		]
	    },	
	    {
		"id": 43,
		"fingerings": [
		    new Fingering(false, true, false)
		]
	    },
	    {
		"id": 44,
		"fingerings": [
		    new Fingering(false, false, false),
		    new Fingering(true, false, true)
		]
	    },
	    {
		"id": 45,
		"fingerings": [
		    new Fingering(false, true, true)
		]
	    },
	    {
		"id": 46,
		"fingerings": [
		    new Fingering(true, true, false),
		    new Fingering(false, false, true)
		]
	    },
	    {
		"id": 47,
		"fingerings": [
		    new Fingering(true, false, false)
		]
	    },
	    {
		"id": 48,
		"fingerings": [
		    new Fingering(false, true, false)
		]
	    },
	    {
		"id": 49,
		"fingerings": [
		    new Fingering(false, false, false),
		    new Fingering(false, true, true)
		]
	    },
	    {
		"id": 50,
		"fingerings": [
		    new Fingering(true, true, false)
		]
	    },
	    {
		"id": 51,
		"fingerings": [
		    new Fingering(true, false, false),
		    new Fingering(true, false, true)
		]
	    },
	    {
		"id": 52,
		"fingerings": [
		    new Fingering(false, true, false),
		    new Fingering(false, true, true)
		]
	    },
	    {
		"id": 53,
		"fingerings": [
		    new Fingering(false, false, false),
		    new Fingering(true, true, false),
		    new Fingering(false, false, true)
		]
	    },
	    {
		"id": 54,
		"fingerings": [
		    new Fingering(true, false, false)
		]
	    },	
	    {
		"id": 55,
		"fingerings": [
		    new Fingering(false, true, false)
		]
	    },
	    {
		"id": 56,
		"fingerings": [
		    new Fingering(false, false, false),
		    new Fingering(true, false, true)
		]
	    },
	    {
		"id": 57,
		"fingerings": [
		    new Fingering(false, true, true)
		]
	    },
	    {
		"id": 58,
		"fingerings": [
		    new Fingering(true, true, false),
		    new Fingering(false, false, true)
		]
	    },
	    {
		"id": 59,
		"fingerings": [
		    new Fingering(true, false, false)
		]
	    },
	    {
		"id": 60,
		"fingerings": [
		    new Fingering(false, true, false)
		]
	    },
	    {
		"id": 61,
		"fingerings": [
		    new Fingering(false, false, false)
		]
	    }
	];
	return items;
    }
}

if (!this.window) {
    module.exports = {
	Fingering: Fingering,
	TrumpetFingerings: TrumpetFingerings
    };
}
