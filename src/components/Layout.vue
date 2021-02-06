<template>
  <div id="components-layout-demo-basic">
    <a-layout class="main-layout">
      <!-- 侧边栏 -->
      <a-layout-sider theme="dark" breakpoint="lg" v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" @click="clickMenu">
          <a-menu-item v-for="item in menu" :key="item">
            <RocketOutlined v-if="item === 'Hello'" />
            <HeatMapOutlined v-else-if="item === 'Store'" />
            <RobotOutlined v-else-if="item === 'List'" />
            <span class="nav-text">{{ item }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout :style="{ minHeight: '100vh', marginLeft: collapsed ? '80px' : '200px', transition: 'margin 0.3s' }">
        <!-- header -->
        <a-layout-header>
          <a-row type="flex" justify="space-between">
            <slot name="header">
              <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
              <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
              <HeaderBox theme="light" />
            </slot>
          </a-row>
        </a-layout-header>
        <!-- main -->
        <a-layout-content>
          <slot></slot>
        </a-layout-content>
        <!-- footer -->
        <a-layout-footer>
          <slot name="footer">
            <FooterBox />
          </slot>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
// API: https://2x.antdv.com/components/layout-cn/
import { Layout, Menu, Row } from 'ant-design-vue';
const { Sider, Header, Content, Footer } = Layout;
import { RocketOutlined, HeatMapOutlined, RobotOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import HeaderBox from '@/components/HeaderBox';
import FooterBox from '@/components/FooterBox';
const components = {
  HeaderBox,
  FooterBox,
  ALayout: Layout,
  ALayoutSider: Sider,
  ALayoutHeader: Header,
  ALayoutContent: Content,
  ALayoutFooter: Footer,
  AMenu: Menu,
  ARow: Row,
  AMenuItem: Menu.Item,
  AMenuDivider: Menu.Divider,
  RocketOutlined,
  HeatMapOutlined,
  RobotOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
};
export default {
  props: { menu: Object, active: String },
  components,
  data() {
    return {
      selectedKeys: [this.$store.state.curMenu], //当前 Menu
      collapsed: false, //展开隐藏 Menu
    };
  },
  methods: {
    clickMenu(e) {
      // 切换 MenuItem
      this.$emit('click-menu', e.key);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  .ant-layout-sider {
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    .logo {
      margin: 16px;
      height: 28px;
      background: rgba(255, 255, 255, 0.2);
    }
  }
  .ant-layout-header {
    padding: 0;
    height: auto;
    min-height: 64px;
    background: #fff;
    .trigger {
      font-size: 18px;
      height: 100%;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: #1890ff;
      }
    }
  }
  .ant-layout-content {
    position: relative;
    margin: 24px 16px 0;
    padding: 20px;
    background-color: #fff;
  }
}
</style>
