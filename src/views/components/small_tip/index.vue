<template>
    <div class="tip_cover">
        <div class="tip_w">
            <div class="cont">
                <span v-html="content"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            'show':{
                type: Boolean
            },
            'content':{
                type: String
            }
        }
    };
</script>

<style lang="scss">
    @import "./index.scss";
</style>
