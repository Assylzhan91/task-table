<template>
  <div id="app">
		<div class="container page">
			<table class="table">
				<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Деталь</th>
					<th scope="col">Цена</th>
					<th scope="col">Количество</th>
					<th scope="col">Стоимость</th>
					<th scope="col">Действия</th>
				</tr>
				</thead>
				<tbody>
				<template v-for="rows of getListTable">
					<TRComponent
						:rows="rows"
						:key="rows.id"
					>
					</TRComponent>
				</template>
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

<style>
.page {
	margin-top: 2rem;
}
</style>
