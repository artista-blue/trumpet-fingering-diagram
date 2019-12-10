Vue.component('piston-view', {
    props: ['index', 'state'],
    template: `
      <span v-if="state===true" class="piston-on">{{index}}</span>
      <span v-else class="piston-off">-</span>`
});

Vue.component('pistons-view', {
    props: ['item', 'base'],
    template: `
      <div>
          <span class="note">
              <span v-if="base === 'C'">
                  <span>{{item.realNames[1] || item.realNames[0]}}</span>
                  <span>{{item.pitch}}</span>
              </span>
              <span v-else>
                  <span>{{item.names[1] || item.names[0]}}</span>
                  <span> {{item.pitch}}</span>
              </span>
          </span>
          <piston-view :index="1" :state="item.pistons[0]"></piston-view>
          <piston-view :index="2" :state="item.pistons[1]"></piston-view>
          <piston-view :index="3" :state="item.pistons[2]"></piston-view>
      </div>`
});

const app =  new Vue({
    el: '#app',
    data: {
	items: [],
	c_major_items: null,
	scaleTypes: Scales.SCALE_TYPES,
	scaleType: Scales.SCALE_TYPES[0].value,
	tonalCenters: Keys.getTonalCenters(),
	tonalCenter: Keys.getTonalCenters()[0],
	base: 'C'
    },
    methods: {
	getItems: function () {
	    this.items = Scales.get(this.scaleType, this.tonalCenter, this.base);
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
	base: function () {
	    this.getItems();
	}
    },
    mounted () {
	this.getItems();
    }
});
