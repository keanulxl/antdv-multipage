<template>
  <div :class="`header-box ${dark ? 'header-dark' : 'header-light'}`">
    <div style="flex:1">
      <div class="header-title">心之所向 素履以往</div>
    </div>
    <a-dropdown>
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        <a-avatar :size="24" :src="require('@/assets/Cosmonaut.png')">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <span>
          Account
        </span>
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;" @click="showMsg">Account Center</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;" @click="showMsg">Account Settings</a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item>
            <a href="javascript:;" @click="showMsg">Logout</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { Avatar, Dropdown, Menu, message } from 'ant-design-vue';
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';
export default {
  props: { theme: String },
  components: {
    AAvatar: Avatar,
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    AMenuDivider: Menu.Divider,
    UserOutlined,
    DownOutlined,
  },
  data() {
    return {
      dark: this.theme === 'dark' ? true : false,
    };
  },
  methods: {
    showMsg() {
      message.info('this is a demo');
    },
  },
};
</script>

<style lang="scss" scoped>
.header-box {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.header-light {
  &,
  a {
    color: #333;
  }
  .header-title {
    text-align: center;
  }
}
.header-dark {
  &,
  a {
    color: #fff;
  }
}
.header-title {
  font-size: 20px;
  font-weight: 700;
}
@media screen and (max-width: 480px) {
  .header-title {
    display: none;
  }
}
.ant-dropdown-link {
  min-width: 152px;
  padding: 0 24px;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
  .ant-avatar {
    margin-right: 8px;
  }
}
</style>
