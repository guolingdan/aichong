<template>
    <div class="empty">
        <cart-head></cart-head>
        <table></table>
        <div class="cart-empty">
            <img src="../assets/empty.png" alt="">
            <p>您的购物车空空如也</p>
            <router-link to="javascript:;">随便逛逛</router-link>
        </div>
    </div>
</template>
<script>
import cartHead from "./CartHead.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
        cartHead
    }
}
</script>
<style scoped>
    .empty{
        width:100%;
        height:100%;
        margin-top:-6px;
    }
    .cart-empty{
        height:100%;  
        text-align:center;
        margin-top:150px;
    }
    .cart-empty img{
        width:130px;
        height:110px;
    }
    .cart-empty p{
        height:20px;
        width:100%;
        color:#666;
        margin:15px auto;
    }
    .cart-empty >:nth-child(3){
        display:block;
        width:100px;
        height:40px;
        border:1px solid  #f03e3e;
        border-radius:30px;
        color:#f03e3e;
        line-height:40px;  
        margin:15px auto; 
    } 
</style>

