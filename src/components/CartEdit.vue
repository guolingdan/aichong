<template>
    <div class="cartEdit">
        <div class="cartHead">
            <router-link to="javascript:;">
                <img src="../assets/emptyicon-l.png" alt="">
            </router-link>
            <span>购物车</span>
             <router-link to="./Cart">完成</router-link>
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
        <cart-common></cart-common>
        <div class="editBottom">
            <van-checkbox v-model="checked" checked-color="#ea5858">
                <span class="checkAll">全选</span>
            </van-checkbox>
            <router-link to="javascript:;">
                <span>移入收藏</span>
            </router-link>
            <router-link to="javascript:;">
                <span>删除</span>
            </router-link>  
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checked:false,
        }
    },
}
</script>
<style scoped>
    .cartEdit{position: relative;}
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
    .editBottom{
        width:100%;
        height:60px;
        position:fixed;
        bottom:0px;
        left:0px;
        display:flex;
        align-items:center;
        justify-content: space-around;
        border-top:1px solid #eee;
        font-size:15px;
    }
    .checkAll{
        color:#666;
    }
    .editBottom a{
        position:relative;
        right:20px;
        border:1px solid #f03e3e;
        border-radius:5px;
        text-align:center;
        line-height:35px;
    }
    .editBottom a:nth-child(2){
        width:100px;
        height:35px;
        color:#999;
        border:1px solid #999;
        margin-right:20px;
    }
    .editBottom a:last-child{
        width:80px;
        height:35px;
        color:#f03e3e;
        margin-right:6px;
    }

</style>

