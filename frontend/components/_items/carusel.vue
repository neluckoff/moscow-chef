<template>
    <carousel class="slider" ref="slider" :responsive="slider.responsive" :items="items.length" v-if="slider.show">
        <template slot="prev" class="nav-prev">
            <span class="prev">
                <base-icon name="thin/angle-left" type="font-awesome" class="icon" />
            </span>
        </template>

        <template v-for="item in items">
            <div class="slide" :key="item.i">
                <div class="card-personal">
                    <items-rec-card :id="1" />
                </div>
            </div>
        </template>

        <template slot="next" class="nav-next">
            <span class="next">
                <base-icon name="thin/angle-right" type="font-awesome" class="icon" />
            </span>
        </template>
    </carousel>
</template>

<script>
export default {
    data() {
        return {
            items: [1, 1, 1, 1, 1],
            slider: {
                show: true,
                responsive: {
                    0: {
                        center: true,
                        loop: true,
                        items: 1,
                        dots: true,
                        nav: false,
                        margin: 20
                    },
                    992: {
                        center: true,
                        loop: true,
                        dots: false,
                        items: 2,
                        nav: false,
                        margin: 1,
                    },
                    1200: {
                        autoHeight: true,
                        rewind: false,
                        center: false,
                        loop: false,
                        dots: true,
                        items: 3,
                        nav: false,
                        margin: 30,
                    },
                },
		    },
        };
    }
}
</script>

<style lang="scss" scoped>
    .slider {
		width: 100%;
        margin: 30px 0;
		.slide {
			display: flex;
			padding: 20px 0;
			width: 100%;
		}
	}
	:deep() .owl-carousel {
		width: 100%;
		.owl-stage-outer {
			overflow: inherit;
			.owl-stage {
				display: flex;
				flex-wrap: wrap;
				.owl-item {
					display: inline-flex;
				}
			}
		}
		.owl-dots {
			min-height: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: row;
			.owl-dot {
				padding: 8px 4px;
				display: inline-flex;
				justify-items: center;
				align-items: center;
				span {
					width: 27px;
					height: 4px;
					background-color: $color-5;
					border-radius: 4px;
					transition: 0.5s;
				}
				&:hover {
					opacity: 0.8;
				}
				&.active {
					span {
						display: inline-flex;
						margin: 0;
						width: 70px;
						background-color: $color-3;
					}
				}
			}
		}
	}
    .card-personal {
        width: 100%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        :deep() .card {
            height: 100%;
            .image {
                height: 200px;
            }
        }
    }
</style>