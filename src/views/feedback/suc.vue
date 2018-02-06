<template>
    <div class="wrapper">
        <div class="suc_icon"></div>
        <div class="suc_txt">提交成功</div>
        <i class="cut_off_rule"></i>
        <div class="desc_w">
            <div class="desc_t">联系我们</div>
            <div class="desc_c">
                电话：020-85533243（工作日10:00-19:00）<br>
                邮箱：qianfanbd@sohu-inc.com<br>
                微信服务号：知狐App
            </div>
        </div>
        <div class="back_btn"><span @click="back()">返回关于知狐</span></div>
    </div>
</template>

<script>
    import router from './router';

    export default {
        data () {
            return {

            };
        },
        mounted() {
            // 初始化分享
        },
        methods: {
            back(){
                router.go(-1);
            }
        }
    };
</script>

<style lang="scss">
    @import "./suc.scss";
</style>
