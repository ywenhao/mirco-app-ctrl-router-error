<template>
  <div>
    <div class="nav-box">
      <RouterLink to="/product/child">child</RouterLink>
      <RouterLink to="/product/child2">child2</RouterLink>
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
