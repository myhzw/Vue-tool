<template>
    <div>
        <div v-if="label" >{{label}}</div>
        <slot></slot>
        <p class="error" v-if="error">{{error}}</p>
    </div>
</template>

<script>
    import Schema from 'async-validator';

    export default {
        inject:['form'],
        props:{
            label:{
                type:String,
                default:''
            },
            prop:{
                type:String
            }
        },
        data(){
            return{
                error:''
            }
        },
        methods:{
            validate(){
                const value = this.form.model[this.prop];
                const rule = this.form.rules[this.prop];
                const schema = new Schema({[this.prop]:rule});
                return schema.validate({[this.prop]:value},errors=>{
                    if(errors){
                        this.error = errors[0].message
                    }else{
                        this.error = ''
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .error{
        color: red;
    }
</style>