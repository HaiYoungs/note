<template>
    <div>
        <NoteHead 
            @handSel="handleSel" 
            :isSelSome="!addShow" 
            :selectNum="selectNum"
            :allNum="allNum"
            :isgrid="isgrid"
            @close="handleClose"
            @filterChange="filtering"
            @changeGrid="changeGrid"></NoteHead>
        <ul class="main">
            <van-grid v-if="isgrid" :border="false" :column-num="2" :gutter="10">
                <van-grid-item v-for="(item) in sortData" :key="item.id">
                    <div class="list" :class="{'grid': isgrid}" @click="handleClick(item)">
                        <h4>{{ item.title }}</h4>
                        <p>{{ funcTime(item.timeStamp) }}</p>
                        <van-icon name="star" id="star-icon" v-if="item.isStar"/>
                    </div>
                    <div class="checkbox" v-if="!addShow">
                        <van-checkbox v-model="item.checked" checked-color="rgb(28, 182, 118)"></van-checkbox>
                    </div>
                </van-grid-item>
            </van-grid>
            <div v-if="!isgrid">
            <li v-for="(item) in sortData" :key="item.id">
                <div class="list" :class="{'grid': isgrid}" @click="handleClick(item)">
                    <h4>{{ item.title }}</h4>
                    <p>{{ funcTime(item.timeStamp) }}</p>
                    <van-icon name="star" id="star-icon" v-if="item.isStar"/>
                </div>
                <div class="checkbox" v-if="!addShow">
                    <van-checkbox v-model="item.checked" checked-color="rgb(28, 182, 118)"></van-checkbox>
                </div>
            </li>
            </div>
        </ul>
        <Add v-show="addShow"></Add>
        <div class="del" v-if="!addShow">
            <van-tabbar v-model="active" active-color="black" inactive-color="black">
                <van-tabbar-item icon="delete" :class="{'disabled': !isSelect}" @click="handleDel">删除</van-tabbar-item>
                <van-tabbar-item>
                    <template>
                        <van-checkbox v-model="status" checked-color="rgb(28, 182, 118)"></van-checkbox>
                    </template>
                    <span class="span-all">全选</span>
                </van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import NoteHead from '@/components/NoteHead'
import Add from '@/components/Add'
import { Checkbox, Tabbar, TabbarItem, Icon, Dialog, Grid, GridItem } from 'vant'

export default {
    name: 'list',
    components: {
        NoteHead, Add,
        [Checkbox.name]: Checkbox,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Icon.name]: Icon,
        [Grid.name]: Grid,
        [GridItem.name]: GridItem
    },
    data: function () {
        return {
            newDataList: this.$store.state.dataList,
            addShow: true,
            active: 0,
            isAll: false,
        }
    },
    computed: {
        status: {
            get () {
                return this.newDataList.filter( item => item.checked ).length === this.newDataList.length;
            },
            set (value) {
                this.newDataList.map(function (item) {
                    item.checked = value;
                    return item;
                })
            }
        },
        isSelect () {//判断是否有选中的
            if(this.newDataList.filter( item => item.checked ).length !== 0) {
                return true;
            } else {
                return false;
            }
        },
        selectNum () {//计算选中的数目
            return this.newDataList.filter( item => item.checked ).length;
        },
        allNum () {//总笔记数
            return this.newDataList.length;
        },
        funcTime () {
            return function (timeStamp) {//闭包，由于 computed 计算属性不能传递参数
                let minute = 60*1000;
                let hour = 60*60*1000;
                let day = 24*60*60*1000;

                let time = new Date(timeStamp);
                let timeMonth = time.getMonth() + 1;
                let timeDay = time.getDate();
                let timeHour = time.getHours();
                let timeMinute = time.getMinutes() >= 10?time.getMinutes():`0${time.getMinutes()}`

                let diffTime = new Date().getTime() - timeStamp;//时间戳差
                let minuteC = diffTime/minute;
                let hourC = diffTime/hour;
                let dayC = diffTime/day;
                if(dayC >= 1) {
                    return `${timeMonth} 月 ${timeDay} 日 ${timeHour}:${timeMinute}`;
                } else if(hourC >= 1) {
                    return `${parseInt(hourC)} 小时前`;
                } else if(minuteC >= 1) {
                    return `${parseInt(minuteC)} 分钟前`;
                } else {
                    return `刚刚`;
                }
            }
        },
        sortData () {//列表按时间排序
            return this.newDataList.sort(this.sortNum);
        },
        isgrid () {
            return this.$store.state.isgrid;
        }
    },
    methods: {
        handleClick (obj) {
            this.$router.push({
                path: '/detail',
                query: {
                    id: obj.id
                }
            })
        },
        handleDel () {
            if(this.isSelect) {
                Dialog.confirm({
                    title: '警告',
                    message: '是否删除所选项？',
                    confirmButtonColor: 'rgb(28, 182, 118)',
                    }).then(() => {
                        let list = this.newDataList.filter( item => item.checked === false );
                        this.newDataList = list;
                        this.$store.commit('delSome', list);
                    }).catch(() => {
                });
            }
        },
        handleSel () {
            this.addShow = false;
        },
        handleClose () {
            this.addShow = true;
            this.newDataList.forEach(function (item) {
                item.checked = false;
            });
        },
        filtering (value) {
            if(typeof value === 'number') {
                if(value === 0) {
                    this.newDataList = this.$store.state.dataList;
                } else if (value === 1) {
                    this.newDataList = this.$store.state.dataList.filter( item => item.isStar );
                } else {
                    this.newDataList = this.$store.state.dataList.filter( item => item.belongs === value );
                }
            }else {//模糊查询
                if(value) {
                    let list = this.$store.state.dataList.filter((item) => {
                        return item.title.includes(value) || item.content.includes(value);
                    });
                    this.newDataList = list;
                }
            }    
        },
        sortNum (a, b) {
            return b.timeStamp - a.timeStamp;
        },
        changeGrid () {
            this.$store.commit('changeGrid');
        }
    }
}
</script>

<style scoped>
.main {
    padding: 95px 0 10px 0;
}
.main li {
    display: flex;
    flex-wrap: nowrap;
    position: relative;
}
.list {
    padding: 15px;
    background: white;
    border-radius: 8px;
    margin: 0 0 10px 0;
    flex: 1;
    width: calc(100% - 30px)
}
.grid {
    padding: 0!important;
}
.grid h4 {
    width: 7em!important;
}
.list h4 {
    margin: 0 0 5px 0;
    font-size: 16px;
    color: #323233d9;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
}
.list p {
    margin: 0;
    font-size: 14px;
    color: #666;
}
.checkbox {
    margin-left: 10px;
    margin-bottom: 10px;
    padding-top: 30px;
}
.disabled {
    color: #c8c9cc!important;
}

.span-all {
    display: inline-block;
    font-size: 12px;
    line-height: 2;
    cursor: pointer;
    position: relative;
    right: 3px;
}
#star-icon {
    position: absolute;
    top: 10px;
    right: 15px;
    color: #ff976a;
}
</style>