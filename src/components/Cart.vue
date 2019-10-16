<template>
    <div class="cart">
        <div class="cartHead">
            <router-link to="javascript:;">
                <img src="../assets/emptyicon-l.png" alt="">
            </router-link>
            <span>购物车</span>
            <router-link to="./CartEdit">编辑</router-link>
            <router-link to="javascript:;">
                <img src="../assets/emptyicon-r.png" alt="">
            </router-link>
        </div>
        <div class="cartMiddle">
            <van-checkbox v-model="checked" checked-color="#ea5858">爱宠西部仓</van-checkbox>
            <van-checkbox v-model="checked" checked-color="#ea5858">
                <div class="cartdsc">
                    <div class="bgimg">
                        <button>还剩4袋</button>
                    </div>
                    <div>
                        <div class="dsc">
                            <span>[限量购买]</span>
                            <span>健康成长配方中小型幼犬粮350g</span>
                        </div>
                        <div class="price">
                            <span>￥31.00</span>
                            <div class="add">
                                <button>-</button>
                                <input type="text" value="1">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </van-checkbox>
        </div>
        <div class="cartbottom">
            <van-checkbox v-model="checked" checked-color="#ea5858">
                <span>总额</span>
                <span>￥31.00</span>
            </van-checkbox>
            <router-link to="javascript:;">
                <span>去结算</span>
            </router-link>  
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
export default {
    data() {
        return {
        checked: true,
        }
    },

}
</script>
<style scoped>
.cart{position: relative;}
    /* cart-header */
    .cartHead{
        height:50px;
        display:flex;
        justify-content:space-between;
        box-sizing:border-box;
        border-bottom:1px solid #f3f3f3;
        margin:0 auto;
        padding:6px 6px 0px;
        line-height:50px;
        position:relative;
    }
    .cartHead img{
        height:25px;
        width:25px;
    }
    .cartHead span{
        font-size:1.2rem;
        color:#333;
        width:190px;
        height:50px;
        line-height:50px;
        position:absolute;
        top:-2px;
        left:50%;
        margin-left:-5px;
    }
    .cartHead a:nth-child(3){
        margin-top:-6px;
        width:50px;
        color:#333;
        position:absolute;
        right:20px;
    }
    .cartMiddle{
        margin-top:50px;
        position: relative;
        border:1px solid #eee;
    }
    .cartMiddle:first-child{
        font-size:15px;
    }
    div.van-checkbox{
        width:100%;
        padding:12px;
        padding-right:0px;
        position:relative;
    }
    .cartdsc{
        width:100%;
        display:flex;
        justify-content:space-around;
    }
    .bgimg{
        width:85px;
        height:85px;
        background-image:url("https://img2.epetbar.com/2012-11/16/65bf479384e7e549e7be65cce572f363.jpg@!200w-b");
        background-size:85px 85px;
        background-repeat:no-repeat;
        position:relative;
    }
    .bgimg button{
        position:absolute;
        bottom:0px;
        left:0px;
        background-color:rgba(0,0,0,0.6);
        border:none;
        border-radius:0 30px 30px 0;
        font-size:12px;
        height:20px;
        width:85px;
        color:#fff;
    }
    .bgimg+div{
        width:100%;
        display:flex;
        flex-flow:row wrap;
        margin-left:30px;
        position: relative;
        right:7px;
    }
    div.dsc{
        font-size:12px;
    }
    div.dsc span:first-child{
        color:#f03e3e;
    }
    .price{
        width:100%;
        display:flex;
        justify-content: space-between; 
    }
    .price span{
        color:#f03e3e;
        font-weight:bold;
    }
    div.add{
        float:left;
        font-size:15px;
        position:absolute;
        right:20px;
    }
    .price .add input{
        display:inline-block;
        width:32px;
        height:20px;
        float:left;
        vertical-align:top;
        box-sizing:border-box;
        border:1px solid #000;
        outline:0;
        text-align:center;
        font-size:15px;
        border-right:none;
    }
    .price .add button{
        height:20px;
        width:32px;
        float:left;
        line-height:15px;
        text-align:center;
        color:#000;
        font-size:20px;
        background-color:#fff;
    }
    .price .add button:first-child{
        border-radius:30px 0px 0px 30px;
        border:1px solid #ccc;
    }
    .price .add button:last-child{
        border-radius:0px 30px 30px 0px;
        border:1px solid #000;
    }
    .price .add button:first-child:hover{
        border:1px solid #000;
        border-right:none;
    }
    .price .add button:last-child:hover{
        border:1px solid #ccc;
    }
    .cartbottom{
        width:100%;
        height:60px;
        position:fixed;
        bottom:0px;
        left:0px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-top:1px solid #eee;
        font-size:15px;
        margin:0 6px;
    }
    .cartbottom span:nth-child(2){
        color:#f03e3e;
        font-weight:bold;
    }
    .cartbottom a{
        background-color:#f03e3e;
        border-radius:5px;
        color:#fff;
        width:80px;
        height:35px;
        text-align:center;
        line-height:35px;
        position:absolute;
        right:12px;  
    }
</style>

