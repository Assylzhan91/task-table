<template>
	<tr>
		<template>
			<th scope="row">{{ rows.id }}</th>
			<td>{{ rows.title }}</td>
			<td>{{ rows.price }}</td>
			<td>{{ rows.count }}</td>
			<td>{{ rows.cost }}</td>
			<td>
				<button class="btn btn-danger remove">Удалить</button>
				<button class="btn btn-primary add">Добавить</button>
			</td>
		</template>
	</tr>
</template>

<script>
export default {
  name: 'TRComponent',
	props: {
    rows: {
      type: Object,
			default: () => [],
      required: true
		}
	},
	computed: {
    hasChildren() {
      let { children } = this.rows
			console.log('children', children)
      return children && children.length > 0
    },
	}
}
</script>


<style scoped>
	.btn.remove {
		margin-right: 1rem;
	}
</style>
