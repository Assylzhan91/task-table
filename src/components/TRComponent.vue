<template>
	<li class="list-group-item">
		<div class="list-group__id">{{ rows.id }}</div>
		<div class="list-group__title">{{ rows.title }}</div>
		<div class="list-group__price">{{ rows.price }}</div>
		<div class="list-group__cost">{{ rows.count }}</div>
		<div class="list-group__actions">{{ rows.cost }}</div>
		<div class="list-group__buttons">
			<button class="btn btn-danger">Удалить</button>
			<button class="btn btn-primary">Добавить</button>
		</div>
<!--		<ul v-if="hasChildren">
			<TRComponent
				v-for="row in rows"
				:rows="row"
				:key="row.id"
			/>
		</ul>-->
	</li>
</template>

<script>
export default {
  name: 'TRComponent',
  props: {
    rows: {
      type: Object
    }
  },
  computed: {
    hasChildren() {
      let {children} = this.rows
      console.log('children', children)
      return children && children.length > 0
    },
  }
}
</script>
