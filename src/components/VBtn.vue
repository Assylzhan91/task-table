<template>
	<button @click="$emit('handler')" class="btn" :class="`btn-${color}`">
		{{ text }}
	</button>
</template>

<script>
export default {
  name: "VBtn",
	props: {
    color: {
      type: String,
      default: 'warning'
		},
		text: {
      type: String,
      default: 'Default'
		},
	}
}
</script>
