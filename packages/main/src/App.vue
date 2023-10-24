<template>
  <div>
    <div class="nav-box">
      <RouterLink to="/product/child">child - page</RouterLink>
      <RouterLink to="/product/child/code/code1">child - code</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style lang="scss">
.nav-box {
  display: flex;
  gap: 8px;
}
</style>
