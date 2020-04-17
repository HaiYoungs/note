<template>
    <div class="add-btn"  @click="handleClick(null)">
        <span>+</span>
    </div>
</template>

<script>
import { Icon } from 'vant'

export default {
    name: 'add', 
    components: {
        [Icon.name]: Icon
    },
    methods: {
        handleClick (id) {
            this.$router.push({
                path: '/detail',
                query: {
                    id
                }
            })
        }
    }
}
</script>

<style scoped>
.add-btn {
    position: fixed;
    right: 5%;
    bottom: 10%;
}
.add-btn span {
    font-size: 60px;
    font-weight: 100;
    display: inline-block;
    width: 52px;
    height: 52px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #f2f3f5;
    border-radius: 100%;
    background: white;
    box-shadow: 0px 3px 6px 0px #790be64d;
    color: #8f19faab;
}
</style>