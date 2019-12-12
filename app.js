Vue.component('piston-view', {
    props: ['index', 'state'],
    template: `
      <span v-if="state===true" class="piston-on">{{index}}</span>
      <span v-else class="piston-off">-</span>`
});

Vue.component('pistons-view', {
    props: ['item', 'base'],
    template: `
      <div style="height:40px;">
          <span class="note">
              <span v-if="base === 'C'">
                  <span>{{item.names[0] || item.names[1]}}</span>
                  <span>{{item.octave}}</span>
              </span>
              <span v-else>
                  <span>{{Notes.shift(item.names[0], 2) || Notes.shift(item.names[1], 2)}}</span>
                  <span> {{item.octave}}</span>
              </span>
          </span>
          <span style="vertical-align:bottom">
              <piston-view :index="1" :state="item.pistons[0]"></piston-view>
              <piston-view :index="2" :state="item.pistons[1]"></piston-view>
              <piston-view :index="3" :state="item.pistons[2]"></piston-view>
          </span>
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
		scaleNote.pistons = fingering.pistons;
	    }
	    const tpScaleNotes = scaleNotes.filter(x => { return x.pistons });
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
