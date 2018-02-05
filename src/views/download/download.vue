<template>
<div class="wrapper">
    <div class="scroller" v-bind:style="{transform: 'translate3d(0,'+ translateY + 'px,0)' }">
        <section class="part1" v-bind:style="{minHeight: wrapperHieght+'px'}">
            <img src="./images/sec_01.png">
            <div class="space" v-bind:style="{height: wrapperHieght-981+'px'}"></div>
            <div v-bind:class="{txt:true}"></div>
            <i class="left_top_c"></i>
            <i class="left_bottom_c"></i>
            <i class="right_c"></i>
            <i class="download_icon_1 show" @click="download()"></i>
            <i class="down" @click="scroll('down')"></i>
        </section>
        <section class="part2">
            <img src="./images/sec_03.png">
            <div v-bind:class="{txt:true}"></div>
        </section>
        <section class="part3">
            <img src="./images/sec_04.png">
            <div v-bind:class="{txt:true}"></div>
        </section>
        <section class="part4">
            <img src="./images/sec_05.png">
            <div class="txt">Copyright  2017 Sohu.com inc<br>搜狐公司 版权所有</div>
            <i class="download_icon_2 show" @click="download()"></i>
            <i class="top" @click="scroll('top')"></i>
        </section>
    </div>
    <Tip v-if="ifShowTip" v-bind:content="'程序猿小哥火力开发中<br>，敬请期待'"></Tip>
    <div v-if="showCover" class="cover_wrap" @click="showCover=false"></div>
</div>
</template>

<script>
    import Utils from 'common/utils/1.0.x';
    import ShareWeixin from 'common/share_weixin/1.0.x';
    import ShareQq from 'common/share_qq/1.0.x';
    import Tip from '../components/small_tip/index.vue';

    export default {
        components:{Tip},
        data () {
            return {
                scrollerHeight: 981+832+960+480,
                wrapperHieght: window.innerHeight,
                translateY: 0,
                showCover: false,
                ifShowTip: false
            };
        },
        mounted() {
            this.initEvent();
        },
        methods: {
            initEvent(){
                
            },
            scroll(direct){
                let self = this;
                let scroller = document.querySelector('.scroller');
                let wrapper = document.querySelector('.wrapper');
                let translateY = 0;
                let scrollTop = 0;
                if(direct=='top'){
                    translateY = wrapper.scrollTop
                }else{
                    translateY = -(this.wrapperHieght-wrapper.scrollTop);
                    scrollTop = self.wrapperHieght;
                }
                scroller.style['transitionProperty'] = 'all';
                scroller.style['transitionDuration'] = '0.5s';
                window.getComputedStyle ?window.getComputedStyle(scroller, null) : null || scroller.currentStyle;
                this.translateY = translateY;
                setTimeout(function(){
                    scroller.style['transitionProperty'] = 'none';
                    scroller.style['transitionDuration'] = '0s';
                    window.getComputedStyle ?window.getComputedStyle(scroller, null) : null || scroller.currentStyle;
                    wrapper.scrollTop = scrollTop;
                    self.translateY = 0;
                },600);
            },
            download(){
                let isIos = window.navigator.userAgent.toLowerCase().indexOf('iphone') >= 0;
                let isWx = window.navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1;
                let self = this;
                if(isWx){
                    this.showCover = true;
                    return;
                }
                if(isIos){
                    this.ifShowTip = true;
                    setTimeout(function(){
                        self.ifShowTip = false;
                    },2000);
                }else{
                    window.location.href = 'http://10.23.212.106/qf-apk/online-zhihu/1.0.0/sohu-zhihu-v1.0.0-pcxiazai.apk';
                }
            }
        }
    };
</script>

<style lang="scss">
    @import "./download.scss";
</style>
