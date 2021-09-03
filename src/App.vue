<template>
  <div id="app">
		<div class="container page">
			<ul class="list-group">
				<li class="list-group-item header">
					<div class="list-group__id">
						<strong>#</strong>
					</div>
					<div class="list-group__title">
						<strong>Деталь</strong>
					</div>
					<div class="list-group__price">
						<strong>Цена</strong>
					</div>
					<div class="list-group__count">
						<strong>Количество</strong>
					</div>
					<div class="list-group__cost">
						<strong>Стоимость</strong>
					</div>
					<div class="list-group__actions">
						<strong>Действия</strong>
					</div>
				</li>
				<TRComponent
					v-for="row in getListTable"
					:rows="row"
					:key="row.id"
				/>
			</ul>
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
