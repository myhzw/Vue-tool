<template>
    <div>
        <input :value="value"  @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs:false,
        props:{
            value:{
                type: String,
                default:''
            }
        },
        methods:{
            onInput(e){    
                this.$emit('input',e.target.value)
                //this.$emit('update:value',e.target.value)
                this.$parent.validate()
                //this.$parent.$emit('validate')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>