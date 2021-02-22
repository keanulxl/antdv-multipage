<template>
  <a-layout :style="{ minHeight: '100vh' }">
    <!-- header -->
    <a-layout-header>
      <HeaderBox theme="dark" />
    </a-layout-header>
    <!-- main -->
    <a-layout-content>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Store"
        sub-title="This is a subtitle"
        @back="() => goBack()"
      ></a-page-header>
      <div class="store">
        <h1>store.state.count</h1>
        <p>{{ $store.state.count }}</p>
      </div>
    </a-layout-content>
    <!-- footer -->
    <a-layout-footer>
      <FooterBox />
    </a-layout-footer>
  </a-layout>
</template>

<script>
import HeaderBox from '@/components/HeaderBox';
import FooterBox from '@/components/FooterBox';

export default {
  components: { HeaderBox, FooterBox },
  methods: {
    goBack() {
      window.history.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.store {
  text-align: center;
  font-weight: 700;
  h1 {
    margin: 100px auto 50px;
    font-size: 24px;
  }
  p {
    font-size: 32px;
  }
}
</style>
