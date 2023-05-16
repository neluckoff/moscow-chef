<template>
    <nuxt-link :to="path">
        <div class="menu-card">
            <base-svg :name="svg" :class="{connection: path === 'about'}"></base-svg>
            <div class="menu-card__name">
                <p class="menu-card-title">{{title}}</p>
                <p class="menu-card-desc">{{desc}}</p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: () => "Название",
        },
        desc: {
            type: String,
            default: () => "Описание",
        },
        svg: {
            type: String,
            default: () => "steak",
        },
        path: {
            type: String,
            default: () => "/",
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu-card {
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        height: 100%;
        transition: all .3s;
        &:hover {
            box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.15);
        }
        .connection {
            width: 54px;
        }
        .svg {
            width: 67px;

            :deep() svg {
                width: auto;
            }
        }
        &__name {
            display: flex;
            flex-direction: column;
            margin-left: 20px;

            p {
                margin-top: 0;
            }
        }
        &-title {
            color: $color-2;
            font-weight: 600;
        }
        &-desc {
            font-size: 16px;
            line-height: 20px;
            font-weight: 400;
        }
    }
</style>