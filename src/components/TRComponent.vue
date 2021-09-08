<script>
import VBtn from './VBtn'
import { dotFormatNums } from '../util/index'
import minus from '../assets/images/icons/minus-square-solid.svg'
import plus from '../assets/images/icons/plus-square-solid.svg'

export default {
  name: 'TRComponent',
	components: {
    VBtn
  },
  props: {
    rows: {
      type: Object
    }
  },

  methods: {
    toggle(id) {
      this.$store.dispatch('toggleAction', id)
		},
		removeCount(id) {
      this.$store.dispatch('removeAction', id)
		},
		addCount(id) {
      this.$store.dispatch('addAction', id)
		}
  },
	emits: ['handler'],
  render(h) {
    let imgProps = {
      attrs: {src: this.rows.isOpen ? minus : plus}
    },
			btnRemove = {
        props: {
          typeButton: 'danger',
					colorText: 'light'
				},
        class: 'mr-1',
        on: {
          handler: ()=>this.removeCount(this.rows.id)
        }
      },
      btnAdd ={
        props: {
          typeButton: 'primary',
          colorText: 'light'
				},
        on: {
          handler: ()=> this.addCount(this.rows.id)
        }
      },
			align = { staticClass: 'd-flex align-items-center' }

    return this.rows && h('tr', [
      h('td', [
        h('table', [
					h('tr', [
            h('td', align, [
              h(VBtn, {
                staticClass: 'button',
								on:{
									handler: () => this.toggle (this.rows.id)
								}
							}, [
                h(this.rows.children ?  'img': '', imgProps),
              ]),
              h('strong', dotFormatNums(this.rows.id)),
						]),
            	h('td', this.rows.title),
            	h('td', this.rows.price),
            	h('td', this.rows.count),
            	h('td', this.rows.cost),
            	h('td', [
                h(VBtn, btnRemove, 'Удалить'),
                h(VBtn, btnAdd, 'Добавить'),
							]),
          ]),
          this.rows.children
					&& this.rows.children.map(rows =>
            this.rows.isOpen
							? <TRComponent rows={rows} key={rows.id} />
							: null
					)
				])
			])
		])
	}
}
</script>
