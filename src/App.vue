<template>
  <div>
    <nav>
      <router-link to="/">ホーム</router-link> |
      <router-link to="/about">アバウト</router-link> | 
      <router-link to="/edit">作成</router-link>|
      <router-link to="/mypage">マイページ</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
