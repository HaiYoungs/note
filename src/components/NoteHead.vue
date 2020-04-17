<template>
    <div class="head">
        <div class="top" v-if="!isSelSome">
            <van-dropdown-menu active-color="#1cb676">
                <van-dropdown-item v-model="dropdownValue" :options="options" @change="filterChange">
                    
                </van-dropdown-item>
                <p class="noteNum">{{ allNum }} 条笔记</p>
                <p class="menuIcon" @click="handleClick"><van-icon name="ellipsis" class="ell-icon"/></p>
            </van-dropdown-menu>
        </div>
        <SelectNum v-if="isSelSome" :num="selectNum" @close="handleClose"></SelectNum>
        <div class="search">
            <van-search id="search" v-model="searchValue" @input="filterChange" shape="round" placeholder="请输入搜索关键词" />
        </div>
        <!-- 面板 -->
        <van-action-sheet
            v-model="show"
            :actions="actions"
            cancel-text="取消"
            :close-on-click-action="closeOnClickAction"
            @cancel="this.show = false"
            @select="handleSelect"/>
    </div>
</template>

<script>
import SelectNum from '@/components/SelectNum'
import { Search, Icon, DropdownMenu, DropdownItem, ActionSheet } from 'vant'

export default {
    name: 'head',
    components: {
        SelectNum,
        [Search.name]: Search, 
        [Icon.name]: Icon,
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
        [ActionSheet.name]: ActionSheet
    },
    props: ['isSelSome', 'selectNum', 'allNum', 'isgrid'],
    data: function () {
        return {
            dropdownValue: 0,
            options: [
                { text: '全部笔记', value: 0, color: '#f7f8fabf', icon: 'orders-o' },
                { text: '我的收藏', value: 1, color: '#f7f8fabf', icon: 'star-o' }
            ],
            searchValue: '',
            show: false,
            closeOnClickAction: true,
            actions: []
        }
    },
    created () {
        this.options = this.options.concat(this.$store.state.category);
        this.actions = [
            { name: this.isgrid?'列表视图':'宫格视图' },
            { name: '批量删除' }
        ]
    },
    watch: {
        isgrid (newVal, oldVal) {
            this.actions = [
                { name: newVal?'列表视图':'宫格视图' },
                { name: '批量删除' }
            ]
        }
    },
    methods: {
        handleSelect (item) {
            //console.log(item)
            if(item.name === '批量删除') {
                this.$emit('handSel');
            } else {
                this.$emit('changeGrid');
            }
        },
        handleClick () {
            this.show = true;
        },
        handleClose () {
            this.$emit('close')
        },
        filterChange (value) {
            this.$emit('filterChange', value);
        }
    }
}
</script>

<style scoped>
.head {
    background: #f2f3f5;
    position: fixed;
    top: 0;
    width: 90%;
    padding-bottom: 10px;
    z-index: 1;
}
.top {
    position: relative;
}
.top h2 {
    margin: 5px 0;
}
.noteNum {
    margin: 0;
    font-size: 15px;
    color: #666;
    position: absolute;
    left: 50%;
    line-height: 50px;
}
.menuIcon {
    height: 57px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    line-height: 59px;
    font-size: 32px;
    margin-right: -10px;
}
.ell-icon {
    transform: rotate(90deg);
}
.van-dropdown-menu__title {
    line-height: inherit;
    font-size: 22px;
    color: black;
    font-weight: bold;
    padding: 0 8px 0 0;
}
.van-dropdown-menu__title::after {
    top: 45%;
    right: -8px;
    border: 5px solid;
    border-color: transparent transparent currentColor currentColor;
}
</style>