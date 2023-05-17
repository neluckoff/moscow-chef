<template>
    <main>
        <section class="recepts">
            <items-breadcrumbs :crumbs="crumbs" />
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="recepts__head">
                            <h1>Рецепты от шефа</h1>
                            <div class="btn btn-gradient">
                                <span>Случайный рецепт</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi laborum animi?
                                Ducimus officiis totam eligendi illo molestiae nam cum.</p>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div class="head-search">
                                    <div class="search-panel">
                                        <input class="input" type="text" placeholder="Поиск" v-model="searchText" v-on:keyup.enter="search" />
                                        <button type="button" class="search-btn" @click="search">
                                            <base-svg name="search1" class="icon"></base-svg>
                                        </button>
                                    </div>
                                    <div class="button-panel">
                                        <button>
                                            <base-svg name="filter" class="icon"></base-svg>
                                        </button>
                                        <button>
                                            <base-svg name="sort" class="icon"></base-svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="recepts__start">
                            <div class="row row-flex">
                                <template v-for="item in items">
                                    <div class="col-xxl-3" :key="item.id">
                                        <items-rec-card :id="111" :category="`111`" :title="`111`" :date="`111`" :content="`111`" :author="`111`" :hard="4" />
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pagination-section">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12 d-flex justify-content-center">
                        <items-pagination v-if="items.length > 0" v-show="totalPages > 1" :current="typeof $route.query.page === 'undefined' ? 1:parseInt($route.query.page)" :total="totalPages" />
                        <h5 v-else>По вашему запросу ничего не найдено.</h5>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            crumbs: [
                {
                    title: "Книга рецептов",
                    to: '/recepts'
                },
            ],
            searchText: "",
            items: [1, 1, 1, 1],
            totalPages: 2,
			pageItems: 2,
        };
    },
    methods: {
        async search() {
            console.log('empty method search')
        }
    }
}
</script>

<style lang="scss" scoped>
    .pagination-section {
        margin: 50px 0;
    }
    .recepts {
        margin-top: 120px;

        &__head {
            margin-top: 30px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        &__start {
            margin-top: 30px;

            :deep() .card {
                margin-bottom: 16px;
            }
        }
    }

    .head-search {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        .button-panel {
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;
            flex: none;

            & > button {
                background-color: transparent;
                padding: 0;
                margin-left: 12px;
                border: 0;
                .icon {
                    width: 33px;
                    height: 33px;

                    :deep() svg {
                        cursor: pointer;
                        width: 100%;
                        height: 100%;
                        max-width: 32px;
                        max-height: 24px;
                        // fill: $color-5;
                    }
                }
            }
        }
	}

	.search-panel {
		position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
        border-radius: 100px;

		.search-btn {
			background-color: transparent;
			position: absolute;
			right: 10px;
			cursor: pointer;
            border: 0;

			.icon {
				:deep() svg {
					width: 100%;
					height: auto;
					max-width: 24px;
					max-height: 24px;
                    fill: #AEAEAE;

                    &:focus {
                        fill: $color-card-hards;
                    }
				}
			}
		}

		.input {
			display: flex;
            height: 38px;
            padding-right: 40px;
            padding-left: 15px;
            border-radius: 13px;
            background-color: transparent;
            border: 2px solid #AEAEAE;
            transition: all .3s;

            font-size: 16px;
            font-weight: 500;

            &:focus {
                outline: none;
                width: 350px;
                // border: 2px solid $color-card-hards;
            }
		}
	}
</style>