<template>
    <div class="main-header">
        <h1>annict tier maker</h1>
        <router-link to="/home">ホーム</router-link>  
        <router-link to="/edit">作成</router-link> 
        <router-link to="/mypage">マイページ</router-link>
    </div>
</template>

<script>
    export default {
        name: 'MainHeader',
        data() {
            return {
                title: 'annict tier maker'
            }
        }
    }
</script>


<style>
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
}
.main-header h1 {
    font-size: 1.5rem;
}
.main-header a {
    color: #fff;
    text-decoration: none;
}
.main-header a:hover {
    text-decoration: underline;
}
</style>