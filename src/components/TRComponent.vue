<template v-if="rows">
	<tr>
		<td>
			<table>
				<tr>
					<td class="d-flex align-items-center">
						<VBtn
							class="button"
							@handler="toggle(rows.id)"
						>
							<img
								v-if="rows.children"
								:src="setImageIcon"
							>
						</VBtn>
						<strong>{{ getDotFormatNums }}</strong>
					</td>
					<td>{{ rows.title }}</td>
					<td>{{ rows.price }}</td>
					<td>{{ rows.count }}</td>
					<td>{{ countMultiplePrice }}</td>
					<td>
						<VBtn
							class='mr-1'
							typeButton='primary'
							colorText= 'light'
							@handler="removeCount(rows.id)"
						>Удалить</VBtn>
						<VBtn
							typeButton='danger'
							colorText= 'light'
							@handler="addCount(rows.id)">Добавить</VBtn>
					</td>
				</tr>
				<template v-if="rows.isOpen">
					<TRComponent v-for="rows of rows.children" :rows="rows" :key="rows.id">
					</TRComponent>
				</template>
			</table>
		</td>
	</tr>
</template>
<script>
import VBtn from './VBtn'
import { dotFormatNums } from '../util/index'

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
	computed: {
		getDotFormatNums () {
			return dotFormatNums(this.rows.id)
		},
		setImageIcon(){
      return `${this.rows.isOpen?'minus':'plus'}-square-solid.svg`
		},
    countMultiplePrice (){
			return this.rows.count * this.rows.price
    },
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
  }

}
</script>
