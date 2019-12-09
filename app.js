class Keys {

    static get items() {
	const items = [
	    {
		value: 0,
		name: ["C"]
	    },
	    {
		value: 0,
		name: ["C#", "Db"]
	    },
	    {
		value: 0,
		name: ["D"]
	    },
	    {
		value: 0,
		name: ["D#", "Eb"]
	    },
	    {
		value: 0,
		name: ["E"]
	    },
	    {
		value: 0,
		name: ["F"]
	    },
	    {
		value: 0,
		name: ["F#", "Gb"]
	    },
	    {
		value: 0,
		name: ["G"]
	    },
	    {
		value: 0,
		name: ["G#", "Ab"]
	    },
	    {
		value: 0,
		name: ["A"]
	    },
	    {
		value: 0,
		name: ["A#", "Bb"]
	    },
	    {
		value: 0,
		name: ["B"]
	    }
	];
	return items;
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

class Scales {

    static contains (item, notes) {
	const realNames = item.realNames;
	for (const realName of realNames) {
	    if (notes.includes(realName)) {
		return true;
	    }
	}
	return false;
    }
    
    static getNotes (scaleType, key) {
	const ret = [];
	const items = Pistons.items;
	const notes = ["C", "D", "E", "F", "G", "A", "B"];
	for (const item of items) {
	    if (!Scales.contains(item, notes)) {
		continue;
	    }
	    ret.push(item);
	}
	return ret;
    }
    
    static getMajorScale(key) {
	const notes = Scales.getNotes('major', key);
	return notes;
    }

}

Vue.component('piston-view', {
    props: ['index', 'state'],
    template: `
      <span v-if="state===true">{{index}}</span>
      <span v-else>-</span>
`
});

Vue.component('pistons-view', {
    props: ['item'],
    template: `
      <span>
          {{item.names[1] || item.names[0]}} {{item.pitch}} ({{item.realNames[1] || item.realNames[0]}} {{item.pitch}}):
          <piston-view :index="1" :state="item.pistons[0]"></piston-view>
          <piston-view :index="2" :state="item.pistons[1]"></piston-view>
          <piston-view :index="3" :state="item.pistons[2]"></piston-view>
      </span>
`
});


const app =  new Vue({
    el: '#app',
    data: {
	items: null,
	c_major_items: null,
	scaleTypes: [
	    {
		value: 0,
		name: 'Chromatic'
	    },
	    {
		value: 1,		
		name: 'major'
	    }
	],
	scaleType: null,
	keys: Keys.items,
	key: null
    },
    watch : {
	'scaleType': function (nv, ov) {
	    switch (this.scaleType) {
	    case 1:
		this.items = Scales.getMajorScale('C');
		break;
	    default:
		this.items = Pistons.items
	    }
	}
    },
    mounted () {
	//this.c_major_items = Scales.getMajorScale('C');
    }
});
