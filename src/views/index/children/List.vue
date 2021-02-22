<template>
  <a-list class="demo-loadmore-list" :loading="loading" item-layout="horizontal" :data-source="data">
    <template #loadMore>
      <div v-if="showLoadingMore" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <a-spin v-if="loadingMore"></a-spin>
        <a-button v-else @click="onLoadMore" :style="{ marginTop: '10px' }">
          loading more
        </a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a>edit</a>
          <a>more</a>
        </template>
        <a-list-item-meta description="Ant Design, a design language for background applications, is refined by Ant UED Team">
          <template #title>
            <a href="https://2x.antdv.com/components/list-cn/">{{ item.name.last }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-list-item-meta>
        <div>content</div>
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
import api from '@/api';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default {
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
    };
  },
  mounted() {
    this.getData(res => {
      this.loading = false;
      this.data = res.results;
    });
  },
  methods: {
    getData(callback) {
      api
        .get(fakeDataUrl)
        .then(res => {
          callback(res);
        })
        .catch(() => {
          this.loading = false;
          this.showLoadingMore = false;
        });
    },
    onLoadMore() {
      this.loadingMore = true;
      this.getData(res => {
        this.data = this.data.concat(res.results);
        this.loadingMore = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'));
        });
      });
    },
  },
};
</script>
