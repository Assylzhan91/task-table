<template>
  <div id="app">
		<div class="container page">
			<table class="table">
				<thead>
					<tr>
						<th><strong>#</strong></th>
						<th><strong>Деталь</strong></th>
						<th><strong>Цена</strong></th>
						<th><strong>Количество</strong></th>
						<th><strong>Стоимость</strong></th>
						<th><strong>Действия</strong></th>
					</tr>
				</thead>
				<tbody>
				<TRComponent v-for="rows of getListTable" :rows="rows" :key="rows.id">
				</TRComponent>
				</tbody>
			</table>
		</div>
  </div>
</template>

<script>
import TRComponent from './components/TRComponent.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    TRComponent,
  },
	computed: {
    ...mapGetters([
      'getListTable'
		])
	}
}
</script>
