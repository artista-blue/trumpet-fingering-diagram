Vue.component('piston-view', {
    props: ['index', 'state'],
    template: `
      <span v-if="state===true" class="piston-on">{{index}}</span>
      <span v-else class="piston-off">-</span>`
});

Vue.component('fingering-view', {
    props: ['fingering'],
    template: `
      <span class="fingering-view">
          <piston-view :index="1" :state="fingering.p1"></piston-view>
          <piston-view :index="2" :state="fingering.p2"></piston-view>
          <piston-view :index="3" :state="fingering.p3"></piston-view>
      </span>`
});

Vue.component('fingerings-view', {
    props: ['item', 'base'],
    template: `
      <div>
          <div class="note">
              <span>{{item.displayName}}</span>
          </div>
          <div class="row" style="padding-left:0px;">
              <span v-for="fingering in item.fingerings">
                  <fingering-view :fingering="fingering"></fingeirng-view>
              </span>
          </div>
      </div>`
});

const app =  new Vue({
    el: '#app',
    data: {
	items: [],
	c_major_items: null,
	scaleTypes: Scales.SCALE_TYPES,
	scaleType: Scales.SCALE_TYPES[1].value,
	tonalCenters: Notes.getTonalCenters(),
	tonalCenter: Notes.getTonalCenters()[0],
	base: 'C'
    },
    methods: {
	getItems: function () {
	    const shiftedTonalCenter = this.base === 'C' ? this.tonalCenter : Notes.shift(this.tonalCenter, -2);
	    const scaleNotes = Scales.get(this.scaleType, shiftedTonalCenter);
	    const fingeringMap =  TrumpetFingerings.ID_FINGERING_MAP;
	    for (const scaleNote of scaleNotes) {
		const fingering =fingeringMap[scaleNote.id];
		if (!fingering) {
		    continue;
		}
		scaleNote.fingerings = fingering.fingerings;
		const step = this.base == 'C' ? 0 : 2;
		const shiftedNote = Notes.shiftNote(scaleNote, step);
		let shiftedNoteName;
		if (shiftedNote.names.length === 2 &&
		    ['G', 'D', 'A', 'E', 'B'].includes(this.tonalCenter)) {
		    shiftedNoteName = shiftedNote.names[1];
		} else {
		    shiftedNoteName = shiftedNote.names[0];
		}
		scaleNote.displayName = shiftedNoteName + shiftedNote.octave;
	    }
	    const tpScaleNotes = scaleNotes.filter(x => { return x.fingerings });
	    this.items = tpScaleNotes;
	}
    },
    watch: {
	scaleType: function () {
	    if (this.scaleType !== 'chromatic' && !this.tonalCenter) {
		this.tonalCenter = this.tonalCenters[0]; // default tonal center
	    }
	    this.getItems();
	},
	tonalCenter: function () {
	    this.getItems();
	},
	base: function (nv, ov) {
	    if (nv === 'Bb' && ov === 'C') {
		this.tonalCenter = Notes.shift(this.tonalCenter, +2);
	    } else if (nv === 'C' && ov === 'Bb') {
		this.tonalCenter = Notes.shift(this.tonalCenter, -2);
	    }
	    this.getItems();
	}
    },
    mounted () {
	this.getItems();
    }
});
