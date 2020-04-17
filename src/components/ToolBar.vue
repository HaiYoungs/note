<template>
    <div>
        <van-tabbar v-bind="active" :active-color="isStar?'rgb(28, 182, 118':'#646566'">
            <van-tabbar-item icon="star-o" @click="toggleStar">{{ starText }}</van-tabbar-item>
            <van-tabbar-item icon="friends-o">分享</van-tabbar-item>
            <van-tabbar-item icon="delete" @click="handleDel">删除</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, Toast, Dialog } from 'vant';

export default {
    name: 'tool',
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Toast.name]: Toast
    },
    props: ['isStar'],
    data: function () {
        return {
            active: 0
        }
    },
    computed: {
        starText () {
            if(this.isStar) {
                return '取消收藏'
            }
            return '收藏'
        }
    },
    methods: {
        handleDel () {
            Dialog.confirm({
                confirmButtonColor: 'rgb(28, 182, 118)',
                    title: '提示',
                    message: '是否删除此便签？'
                }).then(() => {
                    this.$emit('del');
                }).catch(() => {
                // on cancel
            });
        },
        toggleStar () {
            this.isStar = !this.isStar;
            this.$emit('toggleStar');
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>