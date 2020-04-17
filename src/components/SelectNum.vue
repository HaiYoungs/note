<template>
    <div>
        <div class="selNum">
            <van-icon name="cross" @click="closeSel"/>
            <span class="sel-span" v-show="!num">未选择</span>
            <span class="sel-span" v-show="num">已选择 {{ num }} 项</span>
        </div>
        <div style="height: 45px;"></div>
    </div>
</template>

<script>
import { Icon } from 'vant'

export default {
    name: 'selNum',
    components: {
        [Icon.name]: Icon
    },
    props: ['num'],
    methods: {
        closeSel () {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.selNum {
    background: #f2f3f5;
    position: fixed;
    top: 0;
    width: 90%;
    font-size: 24px;
    margin-top: 10px;
}

.sel-span {
    font-size: 20px;
    position: relative;
    top: -6px;
    margin-left: 15px;
};
</style>