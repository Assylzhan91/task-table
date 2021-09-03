<template>
  <div id="app">
		<div class="container">
			<table class="table">
				<thead>
				<tr>
					<th scope="col">Деталь</th>
					<th scope="col">Цена</th>
					<th scope="col">Количество</th>
					<th scope="col">Стоимость</th>
					<th scope="col">Действия</th>
				</tr>
				</thead>
				<tbody>
				<TRComponent

				/>
				{{ getListTable }}
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
