<template>
    <div class="breadcrumbs">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="breadcrumb">
                        <li class="item">
                            <nuxt-link :to="'/'" class="title">Главная</nuxt-link>
                            <span>
                                >
                            </span>
                        </li>
                        <li v-for="(item, i) in crumbs" :key="i" class="item">
                            <nuxt-link :to="item.to" class="title">{{ item.title }}</nuxt-link>
                            <span v-if="i+1 != crumbs.length">
                                > 
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        crumbs: {
            type: Array,
            default: [],
        }
    }
};
</script>

<style lang="scss" scoped>
span {
    user-select: none;
}
.breadcrumbs {
    background-color: $color-1;
    ul::-webkit-scrollbar {
        width: 10px;
        height: 3px;
        background-color: $color-6;
        margin-left: 3px;
        opacity: 0;
    }
    ul::-webkit-scrollbar-thumb {
        background-color: #bbb;
        border-radius: 0;
        box-shadow: inset 0px 0px 0px #f3faf7;
    }
    ul::-webkit-scrollbar-thumb:hover {
        background-color: #eee;
    }
    ul {
        display: flex;
        flex-direction: row;
        li,span {
            display: flex;
            flex-direction: row;
            align-items: center;
            .preloader {
                height: 20px;
                width: 80px;
            }
            a,
            span {
                font-size: 16px;
                font-weight: 400;
                line-height: 20px;
                -webkit-font-smoothing: subpixel-antialiased;
            }
            a {
                color: $color-2;
                &:hover {
                    background-size: 0% 1px;
                    color: $color-3;
                }
            }
            span {
                color: #818181;
            }
            &:before {
                content: "";
                display: flex;
                // width: 8px;
                height: 12px;
                margin: 0 6px;
                @media screen and (max-width: $screen-lg) {
                    margin: 0 6px;
                }
            }
            &:first-child:before {
                display: none;
            }
            &:last-child {
                a {
                    color: #818c96;
                }
            }
        }
        @media screen and (max-width: $screen-lg) {
            white-space: nowrap;
        }
        @media screen and (max-width: $screen-lg) {
            overflow-y: auto;
            padding-bottom: 10px;
        }
    }
    @media screen and (max-width: $screen-lg) {
        padding-bottom: 10px;
        &:hover {
            ul::-webkit-scrollbar {
                opacity: 1;
            }
        }
    }
}

.selector {
    font-size: 14px;
    position: relative;
    z-index: 1;
    display: inline-flex;
    justify-content: flex-end;
    div {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 0px;
        cursor: pointer;
        p {
            font-size: 14px;
            font-weight: 400;
            padding-right: 8px;
        }
        span {
            font-weight: 500;
        }
        &:after {
            content: "";
            display: block;
            width: 10px;
            height: 6px;
            margin-left: 8px;
            transition: 0.2s ease-in;
            background: url(/images/main/index/arrow_black.svg) no-repeat
                center/cover;
        }
    }
    ul {
        top: 42px;
        background-color: #fff;
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        overflow: hidden;
        position: absolute;
        z-index: 2;
        max-height: 0;
        transition: 0.2s;
        li {
            padding: 10px 15px;
            cursor: pointer;
            &:hover {
                background-color: rgba(224, 229, 231, 0.5);
            }
        }
    }
    &.active {
        div {
            &:after {
                transform: rotate(-180deg);
            }
        }
        ul {
            max-height: 300px;
        }
    }
}
</style>