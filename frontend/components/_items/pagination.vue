<template>
    <ul class="pagination" v-if="total > 1">
        <li v-if="current != 1">
            <NuxtLink class="pagination__link" :to="`${url}&page=1`"><<</NuxtLink>
        </li>
        <li v-if="current != 1">
            <NuxtLink class="pagination__link" :to="`${url}&page=${current-1}`"><</NuxtLink>
        </li>
        <li v-if="current - 1 > 0">
            <NuxtLink class="pagination__link" :to="`${url}&page=${current-1}`">{{current-1}}</NuxtLink>
        </li>
        <li>
            <NuxtLink class="pagination__link current" :to="`${url}&page=${current}`">{{current}}</NuxtLink>
        </li>
        <li v-if="current + 1 <= total">
            <NuxtLink class="pagination__link" :to="`${url}&page=${current+1}`">{{current+1}}</NuxtLink>
        </li>
        <li v-if="current != total">
            <NuxtLink class="pagination__link" :to="`${url}&page=${current+1}`">></NuxtLink>
        </li>
        <li v-if="current != total">
            <NuxtLink class="pagination__link" :to="`${url}&page=${total}`">>></NuxtLink>
        </li>
    </ul>
    <ul class="pagination" v-else>
        <li>
            <NuxtLink class="pagination__link current" :to="`${url}&page=${current}`">{{current}}</NuxtLink>
        </li>
        <li>
            <a href="#" class="pagination__link disabled">></a>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        total: {
            type: Number,
            default: () => 0,
        },
        current: {
            type: Number,
            default: () => 1
        }
    },
    computed: {
        url() {
            let url = this.$route.path;
            url += "?";
            url += this.$serialize(this.$route.query, ['page'], true);
            return url;
        },

    },
};
</script>
<style lang="scss" scoped>
.pagination {
    background: transparent;
    display: flex;
    flex-wrap: wrap;
    li {
        margin-right: 9px;
    }
    &__link {
        display: block;
        width: 35px;
        height: 35px;
        line-height: 34px;
        font-size: 14px;
        font-weight: 500;
        border: 1px solid #d6d6d6;
        border-radius: 5px;
        text-align: center;
        color: #818181;
        &:hover {
            border-color: $color-3;
            color: $color-3;
        }
        &.current {
            background: $color-3;
            border-color: $color-3;
            color: #fff;
        }
        &.disabled {
            color: #818181;
            border: 1px solid #d6d6d6;
            background-color: #f6f6f6;
            cursor: default;
            opacity: 0.5;
        }
    }
}
</style>