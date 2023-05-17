<template>
	<div class="card">
		<nuxt-link :to="`/recepts/${ id }`">
			<div class="article-block">
				<div class="image">
					<img v-if="image != null" :src="image" alt />
					<img v-else :src="`/no-image.png`" alt />
					<div class="image__absolute">
						<div class="point first">
							<div class="point__inside" v-if="hard >= 1"></div>
						</div>
						<div class="point">
							<div class="point__inside" v-if="hard >= 2"></div>
						</div>
						<div class="point">
							<div class="point__inside" v-if="hard >= 3"></div>
						</div>
						<div class="point">
							<div class="point__inside" v-if="hard >= 4"></div>
						</div>
						<div class="point">
							<div class="point__inside" v-if="hard >= 5"></div>
						</div>
					</div>
				</div>
				<div class="article-block__info">
					<h4 class="article-block__head">{{title}}</h4>
					<div class="article-block__text" v-html="`${content}`"></div>
				</div>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: () => "Название",
		},
		content: {
			type: String,
			default: () => "Описание",
		},
		image: {
			type: String,
			default: () => null,
		},
		id: {
			type: Number,
			default: () => null,
		},
		date: {
			type: String,
			default: () => "123",
		},
		hard: {
			type: Number,
			default: () => 1,
		}
	},
	data: () => ({}),
};
</script>

<style lang="scss" scoped>
.card {
	width: 100%;
	display: flex;
	background-color: #ffffff;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
	border-radius: 10px;
	transition: all .3s;
	&:hover {
		box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.13);
	}
	a {
		width: 100%;
		display: block;
	}
	.article-block {
		width: 100%;
		transition: 0.5s;
		.image {
			height: 100%;
			width: 100%;
            height: 240px;
			position: relative;
			border-radius: 10px 10px 0 0;
			overflow: hidden;
			&:before {
				content: "";
				width: 100%;
				height: 100%;
				position: absolute;
				z-index: 1;
				background-color: rgba(0, 0, 0, 0.4);
			}
			img {
				width: 100%;
                height: 100%;
                object-fit: cover;
				transition: 1s;
			}
			&__absolute {
				display: flex;
				flex-direction: row;
				z-index: 2;
				position: absolute;
				bottom: 0;
				right: 20px;
				background-color: $color-1;
				border-radius: 10px 10px 0 0;
				padding: 5px 7px;

				.point {
					width: 16px;
					height: 16px;
					border: 1px solid $color-card-hards;
					border-radius: 50%;
					margin-left: 5px;
					display: flex;
					align-items: center;
					justify-content: center;

					&__inside {
						background-color: $color-card-hards;
						border-radius: 50%;
						width: 70%;
						height: 70%;
					}
				}
				.first {
					margin-left: 0;
				}
			}
		}
		&__info {
			padding: 20px;
		}
		&__head {
			width: 100%;
			font-weight: 700;
			font-size: 18px;
			color: $color-2;
			line-height: 21.78px;
		}
		&__text {
			width: 100%;
			padding-top: 10px;
			color: #808080;
			width: 100%;
			font-weight: 400;
			font-size: 14px;
			line-height: 16.94px;
			
			:deep() p {
				width: 100%;
				font-weight: 400;
				font-size: 17px;
				color: #808080;
			}
			:deep() img {
				display: none;
			}
			:deep() strong {
				display: none;
			}
			:deep() h1 {
				display: none;
			}
		}
	}
}
.card .article-block .image {
	.span {
		flex-direction: column;
		align-items: flex-start;
		
		span {
			padding-top: 2px;
		}
		.dort {
			display: none;
		}
	}
}
</style>