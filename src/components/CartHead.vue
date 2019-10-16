<template>
    <div>
        <div class="header">
            <router-link to="javascript:;">
                <img src="../assets/emptyicon-l.png" alt="">
            </router-link>
            <span>购物车</span>
            <router-link to="javascript:;">
                <img src="../assets/emptyicon-r.png" alt="">
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    .header{
        height:50px;
        display:flex;
        justify-content:space-between;
        box-sizing:border-box;
        border-bottom:1px solid #f3f3f3;
        margin:0 auto;
        padding:6px 6px 0px;
        line-height:50px;
    }
    .header img{
        height:25px;
        width:25px;
    }
    .header span{
        font-size:1.2rem;
        color:#333;
        display:inline-block;
        width:375px;
        height:50px;
        line-height:50px;
        text-align:center;
        margin-top:-6px;
    }
</style>

