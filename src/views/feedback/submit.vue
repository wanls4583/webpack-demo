<template>
    <div class="wrapper_submit" v-on:click="hideTip()">
        <div class="cont_w">
            <div class="title_1">您想反馈的问题和建议</div>
            <textarea class="feedback" v-model="cont"></textarea>
            <!-- <div class="title_2">请填写您的联系方式</div> -->
            <!-- <input type="text" class="phone" v-model.trim="phone"> -->
            <div class="desc_w">
                <div class="desc_t">联系我们</div>
                <div class="desc_c">
                    电话：020-85533243（工作日10:00-19:00）<br>
                    邮箱：qianfanbd@sohu-inc.com<br>
                    微信服务号：知狐App
                </div>
            </div>
        </div>
        <div class="sub_btn"><span v-on:click.stop="submit()">提交</span></div>
        <Tip v-if="ifShowTip" v-bind:content="tipCont"></Tip>
    </div>
</template>

<script>
    import Tip from '../components/small_tip/index.vue';
    import router from './router';

    export default {
        components:{Tip},
        data () {
            return {
                cont: '',
                phone: '',
                tipCont: '',
                ifShowTip: false,
                stopHideTip: true
            };
        },
        mounted() {
            var winH = window.innerHeight;
            var contW = document.querySelector('.wrapper_submit .cont_w');
            var btn = document.querySelector('.wrapper_submit .sub_btn');
            var marginTop =  winH - contW.clientHeight - btn.clientHeight - 50;
            if(marginTop > 0){
                btn.style.marginTop = marginTop+'px';
            }
        },
        beforeRouteEnter(to, from, next){
            next((vm)=>{
                // 初始化分享
                // vm.initShare();
            });
        },
        methods: {
            submit(){
                router.push({ path: '/suc'});
            },
            validate(data){
                var pass = true;
                if(!data.suggestion){
                    this.showTip('反馈内容不能为空');
                    pass = false ;
                }
                return pass;
            },
            showTip(cont){
                var self = this;
                this.tipCont = cont;
                this.ifShowTip = true;
                this.tipTimeoutId = setTimeout(function(){
                    self.hideTip();
                },3000);
            },
            hideTip(){
                clearTimeout(this.tipTimeoutId);
                this.tipCont = '';
                this.ifShowTip = false;
            }
        }
    };
</script>

<style lang="scss">
    @import "./submit.scss";
</style>
