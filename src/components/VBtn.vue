<template>
	<button @click="$emit('handler')" :class="classes">
		<slot>{{ text }}</slot>
	</button>
</template>

<script>
export default {
  name: "VBtn",
	props: {
    typeButton: {
      type: String,
			required: false
		},

    colorText: {
      type: String,
		},
		text: {
      type: String,
		},
	},
	computed: {
    classes(){
      return `${this.typeButton ? `btn btn-${this.typeButton}`: ''
      }${this.colorText ? ` text-${this.colorText}`: ''}`
		}
	}
}
</script>
