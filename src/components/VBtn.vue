<template>
	<button @click="$emit('handler')" :class="{[`btn btn-${this.color}` ||'']: this.color}">
		<slot>{{ text }}</slot>
	</button>
</template>

<script>
export default {
  name: "VBtn",
	props: {
    color: {
      type: String,
			required: false
		},
		text: {
      type: String,
		},
	}
}
</script>
