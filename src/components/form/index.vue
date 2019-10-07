<template>
    <div>
        <KForm :model="model" :rules="rules" ref="KForm">
            <KFormItem label="用户名" prop="username" >
                <KInput v-model="model.username" placeholder="请输入用户名"></KInput> 
            </KFormItem>
            <KFormItem label="密码"  prop="password">
                <KInput type="password" v-model="model.password" placeholder="请输入密码"></KInput> 
            </KFormItem>
            <KFormItem label="密码" >
                <button @click="submit">提交</button> 
            </KFormItem>
        </KForm>
        <!-- <KInput :value="model.username" @input="test"></KInput>  -->
        <!-- sync和v-model一样只是一种语法糖，用于可复用的组件，使用场景除v-model之外，需要改变多个props
        <KInput :value.sync="model.username" ></KInput>  -->
        {{model}}
    </div>
</template>

<script>
    import KInput from '@/components/form/KInput.vue';
    import KFormItem from '@/components/form/KFormItem.vue';
    import KForm from '@/components/form/KForm.vue';
    import create from '@/util/create.js'
    import Notice from '@/components/custom/Notice.vue'


    export default {
        components:{
            KInput,
            KFormItem,
            KForm
        },
        data(){
            return{
                model:{username:'',password:''},
                rules:{username:[{required:true},{message:'用户名必填'}],password:[{required:true},{message:'用户名必填'}]}
            }
        },
        methods:{
            test(e){
                this.model.username = e;
                console.log(e)
            },
            submit(){
            
                this.$refs.KForm.validate(isValdate=>{
                    if(isValdate){
                        console.log('验证通过了')
                    }else{
                        console.log('没有通过验证')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>