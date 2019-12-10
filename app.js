Vue.component('piston-view', {
    props: ['index', 'state'],
    template: `
      <span v-if="state===true">{{index}}</span>
      <span v-else>-</span>
`
});

Vue.component('pistons-view', {
    props: ['item', 'base'],
    template: `
      <span>
          <span v-if="base === 'C'">
              {{item.realNames[1] || item.realNames[0]}} {{item.pitch}}:
          </span>
          <span v-else>
              {{item.names[1] || item.names[0]}} {{item.pitch}}:
          </span>
          <piston-view :index="1" :state="item.pistons[0]"></piston-view>
          <piston-view :index="2" :state="item.pistons[1]"></piston-view>
          <piston-view :index="3" :state="item.pistons[2]"></piston-view>
      </span>
`
});


const app =  new Vue({
    el: '#app',
    data: {
	items: [],
	c_major_items: null,
	scaleTypes: [
	    {
		value: 'chromatic',
		name: 'Chromatic'
	    },
	    {
		value: 'major',
		name: 'Major Scale'
	    }
	],
	scaleType: null,
	tonalCenters: Keys.getTonalCenters(),
	tonalCenter: null,
	base: 'C'
    },
    methods: {
	getItems: function () {
	    this.items = Scales.get(this.scaleType, this.tonalCenter, this.base);
	}
    }
});
