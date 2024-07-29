<template>
    <input type="text" class="form-control" :value="modalValue" @input="updateInput">
</template>

<script>
export default {
    name: 'Input',
props: {
    modalValue: {
        modalValue: [String, Number],
        customName: [String,Number],
    }
},
    methods: {
        updateInput(e) {
            this.$emit('update:modalValue', e.target.value)
        }
    }
}
</script>

<style>

</style>