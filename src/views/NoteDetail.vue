<template>
    <div class="detail">
        <div class="top">
            <van-icon name="arrow-left" @click="back"/>
            <van-icon name="success" class="save-btn" @click="handleSave" :color="isValued?'black':'#9697999e'"/>
        </div>
        <h1><van-field 
            id="title" 
            v-model="dataObj.title" 
            placeholder="便签标题" 
            @input="inputChange"/></h1>
        <div class="time">
            <van-dropdown-menu active-color="#1cb676" >
                <van-dropdown-item
                    v-model="dataObj.belongs"
                    :options="category"></van-dropdown-item>
                <span>{{ funcTime }}</span>
            </van-dropdown-menu>
        </div>
        <div class="content">
            <!-- {{ dataObj.content }} -->
            <van-field
                v-model="dataObj.content" 
                type="textarea" 
                autofocus=true
                @input="inputChange"
                />
        </div>
        <div style="height: 50px">
            <ToolBar    
            :isStar="this.dataObj.isStar"
            :isValued="this.isValued"
            :isAdd="this.isAdd"
            @toggleStar="toggleStar"
            @del="del"></ToolBar>
        </div>
        
    </div>
</template>

<script>
import { Icon, Toast, Field, DropdownItem, DropdownMenu } from 'vant'
import ToolBar from '@/components/ToolBar'

export default {
    name: 'detail',
    components: {
        [Icon.name]: Icon,
        [Field.name]: Field,
        [Toast.name]: Toast,
        [DropdownItem.name]: DropdownItem,
        [DropdownMenu.name]: DropdownMenu,
        ToolBar
    },
    data () {
        return {
            isValued: undefined,
            isValChanged: false,//输入内容是否被修改,
            dataObj: {},
            category: this.$store.state.category,
        }
    },
    created () {
        let initObj = { id: this.$store.state.currentId, title: "", cate: '未分类', belongs: 2, isStar: false, content: "", timeStamp: new Date().getTime(), checked: false }
        let id = this.$route.query.id;
        let obj = this.$store.state.dataList.filter( item => item.id === id );
        this.dataObj = id === null?initObj:obj[0];
    },
    computed: {
        isAdd () {//判断新建还是修改
            return this.$route.query.id === null?true:false;
        },
        funcTime () {
            let timeStamp = this.dataObj.timeStamp;
            let time = new Date(timeStamp);
            let nowMonth = time.getMonth() + 1;//月
            let nowDay = time.getDate(); //日
            let nowHH = time.getHours();// 时
            let nowMM = time.getMinutes() >= 10?time.getMinutes():`0${time.getMinutes()}`
            if(new Date(timeStamp).toDateString() === new Date().toDateString()) {
                return `今天 ${nowHH}:${nowMM}`;
            } else {
                return `${nowMonth} 月 ${nowDay} 日 ${nowHH}:${nowMM}`;
            }
        }
    },
    watch: {
        // BUG记录：从列表进来和从点击新建按钮进来有区别，前者能实时监听 dataObj 这个计算属性，而后者不能监听到变化。
        // 问题出现在：从新建按钮进来时，改变输入框内容不能实时响应到 computed 中的 dataObj 属性上，
        // 理论上，通过v-model 双向绑定能响应到，但是这里有点问题
        // 需要解决：v-model 和 computed 冲突( get() set() )
        dataObj: {
            handler (newVal, oldVal) {
                if(newVal.title === "" && newVal.content === "") {
                    this.isValued = false;
                }else {
                    this.isValued = true;
                }
            },
            deep: true,
            immediate:true
        }
    },
    methods: {
        back () {
            if(this.isValued) {
                this.save();
                this.$router.push({ path: '/' });
            } else {
                this.del();
            }
        },
        save () {
            let nowStamp = new Date().getTime();
            if(this.dataObj.title === '') {
                this.dataObj.title = this.dataObj.content.substr(0, 15);
            }

            if(this.isAdd === true) {//新建
                this.dataObj.timeStamp = nowStamp //获取时间戳
                this.$store.commit('add', this.dataObj);
            }else {//修改
                if(this.isValChanged) {
                    this.dataObj.timeStamp = nowStamp //获取时间戳
                }
                this.$store.commit('alter', this.dataObj);
            }
        },
        handleSave () {
            if(this.isValued) {
                Toast('已保存');
            }
        },
        toggleStar () {
            if(this.dataObj.isStar) {//取消收藏
                this.dataObj.isStar = false;
            } else {//收藏
                this.dataObj.isStar = true;
            }
            if(this.isAdd === false) {
                this.$store.commit('alter', this.dataObj);
            }
        },
        del () {
            if(this.isAdd) {//新建时点击删除按钮
                this.$router.push({ path: '/' });
            } else {
                this.$store.commit('del', this.dataObj.id);
                this.$router.push({
                    path: '/'
                })
            }
            
        },
        inputChange () {
            if(!this.isValChanged) {
                this.isValChanged = true;
            }
        }
    }
}
</script>

<style scoped>
.detail {
    padding-top: 5%;
}
.top {
    font-size: 26px;
    position: relative;
}
.detail h1 {
    margin: 10px 0 5px 0;
}
.time {
    text-align: right;
    color: #646566d1;
    margin-bottom: 5px;
}
.save-btn {
    position: absolute;
    right: 0;
}
.content {
    height: calc(100vh - 207.8px);
}

</style>