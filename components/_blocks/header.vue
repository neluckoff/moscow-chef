<template>
	<header v-bind:class="{ opened: open, active: scrollingDown || scrollingUp}">
		<div class="container">
			<div class="row">
				<div class="col-xxl-3 col-xl-4 col-lg-3 col-md-4 col-sm-6 col-6">
					<nuxt-link to="/" class="logo active">
						<base-svg name="logo"></base-svg>
					</nuxt-link>
				</div>
				<div class="col-md-8 col-sm-6 col-6 toolbar">
					<div class="nav-toogle" v-on:click="navToogle">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="col-xxl-9 col-xl-8 col-lg-9 col-md-8 nav-menu">
					<ul class="menu">
						<li :class="{active: $route.path == `/`}" @click="hide">
							<nuxt-link to="/">Главная</nuxt-link>
						</li>
						<li :class="{active: $route.path == `/blog/articles`}" @click="hide">
							<nuxt-link to="/blog/articles">Обо мне</nuxt-link>
						</li>
						<li :class="{active: $route.path == `/events`}" @click="hide">
							<nuxt-link to="/events">Контакты</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/events">
								<div class="btn btn-primary">
									<span>Книга рецептов</span>
								</div>
							</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
export default {
	data: () => ({
		scrollingUp: false,
		scrollingDown: false,
		prevScrollpos: process.client ? window.pageYOffset : 0,
		open: false,
	}),
	computed: {
		getMainNavClasses() {
			return {
				"scroll-up": this.scrollingUp,
				"scroll-down": this.scrollingDown,
			};
		},
	},
	methods: {
		navToogle() {
			this.open = !this.open;
		},
		scrollNow() {
			const currentScrollPos = process.client ? window.pageYOffset : 0;

			if (currentScrollPos == 0) {
				this.scrollingUp = false;
				this.scrollingDown = false;
				return;
			}

			if (currentScrollPos < 100) return; // set offset here

			if (this.prevScrollpos > currentScrollPos) {
				// up
				this.scrollingDown = false;
				this.scrollingUp = true;
			} else {
				// down
				this.scrollingUp = false;
				this.scrollingDown = true;
			}

			this.prevScrollpos = currentScrollPos;
		},
		handleScroll() {
			let doScoll;
			if (process.client) {
				window.onscroll = () => {
					clearTimeout(doScoll);
					doScoll = setTimeout(this.scrollNow, 10); // firing less scroll events
				};
			}
		},
		handleScroll2() {
			this.scrollNow();
		},
		async hide() {
			this.open = false;
		}
	},
	created() {
		setTimeout(this.handleScroll, 50);
	},
};
</script>
<style lang="scss" scoped>
header {
	box-shadow: 0px 4px 15px rgba(128, 128, 128, 0.25);
	position: fixed;
	top: -81px;
	left: 0%;
	width: 100%;
	z-index: 999;
	padding: 15px 20px;
	background-color: #fff;
	padding-top: 95px;
	transition: 0.1s;
	a:not(.btn) {
		font-weight: 200;
	}
	outline: 0px solid rgba(255, 255, 255, 0.2);
	&:before {
		display: none;
		content: "";
		z-index: -1;
		position: absolute;
		inset: 0px;
		background-color: rgba(255,255,255,1);
	}
	.logo {
		display: flex;
		align-items: center;
		height: 100%;
		.svg {
			width: 70%;
		}
	}
	.menu {
		width: 100%;
		justify-content: flex-end;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		min-height: 54px;
		li {
			margin-left: 30px;
			padding: 0;
			font-size: 17px;
			font-weight: 500;
			a {
				font-weight: 500;
				color: $color-2;
				text-decoration: none;
				transition: color 0.4s ease-in-out;
				position: relative;
				&:hover {
					color: $color-3;
				}
				&:before {
					content: "";
					width: 0px;
					height: 2px;
					background-image: $color-2;
					position: absolute;
					bottom: -6px;
					transition: 0.2s cubic-bezier(0.47, 0.11, 0, 0.96);
				}
			}
			&.active {
				a {
					color: $color-3;
					background: $base-gradient;
					background-clip: text;
  					-webkit-text-fill-color: transparent;
				}
			}
		}
	}
	.menu-buttons {
		display: flex;
		flex-wrap: wrap;
		li {
			margin-right: 0;
			margin-left: 20px;
		}
	}
	.btns {
		display: inline-flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
	}
	.toolbar {
		display: none;
		align-items: center;
		justify-content: flex-end;
	}
	.nav-toogle {
		display: flex;
		width: 18px;
		height: 14px;
		position: relative;
		transform: rotate(0);
		transition: 0.3s ease-in-out;
		position: relative;
		cursor: pointer;
		&:before {
			content: "";
			width: 30px;
			height: 30px;
			display: flex;
			position: absolute;
			top: -8px;
			left: -6px;
		}
		span {
			display: block;
			position: absolute;
			height: 2px;
			width: 100%;
			background: $color-2;
			border-radius: 9px;
			opacity: 1;
			left: 0;
			transform: rotate(0);
			transition: 0.2s ease-in-out;
			&:nth-child(1) {
				top: 0;
			}
			&:nth-child(2) {
				top: 6px;
			}
			&:nth-child(3) {
				top: 6px;
			}
			&:nth-child(4) {
				top: 12px;
			}
		}
	}
	&.active {
		outline: 1px solid rgba(255, 255, 255, 0.2);
		outline-offset: 0px;
		box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
		background-color: rgba(255, 255, 255, 0.7);
		&:before {
			display: flex;
		}
		.logo {
			img {
				width: 120px;
			}
		}
	}
}
@media screen and (max-width: 1280px) {
	header {
		.logo {
			&__text {
				width: 100%;
				padding-left: 30px;
			}
		}
	}
}
@media screen and (max-width: 992px) {
	header {
		.logo {
			display: flex;
			img {
				width: 140px;
				bottom: -2px;
				//margin-left: -20%;
				//position: absolute;
			}
			&__text {
				width: 100%;
				padding-left: 30px;
			}
		}
		.toolbar {
			display: flex;
		}
		.menu-buttons {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			flex-direction: column;
			li {
				margin: 0;
			}
		}
		.nav-menu {
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			top: 0;
			right: 0;
			z-index: 999;
			//background-color: rgb(13, 17, 23);
			background-color: $color-1;
			transition: 0.2s;
			height: 100vh;
			box-shadow: 0px 0px 100px 0px rgba(0, 0, 0, 0.8);
			transition: 0.2s;
			width: 0;
			min-width: 0;
			padding: 0;
		}
		.btns {
			display: none;
		}
		&.opened {
			.nav-menu {
				width: 80%;
				min-width: 220px;
				.menu {
					display: flex;
					flex-direction: column;
					li {
						margin: 10px 0;
						a {
							font-size: 20px;
						}
					}
				}
			}
			.nav-toogle {
				position: fixed;
				z-index: 1001;
				span {
					&:nth-child(1) {
						top: 18px;
						width: 0;
						left: 50%;
					}
					&:nth-child(2) {
						transform: rotate(45deg);
					}
					&:nth-child(3) {
						transform: rotate(-45deg);
					}
					&:nth-child(4) {
						top: 18px;
						width: 0;
						left: 50%;
					}
				}
			}
		}
		&.active + &.opened {
			.nav-toogle {
				top: 42px;
			}
		}
		&:not(.opened) {
			.menu {
				display: none;
			}
		}
	}
}
@media screen and (max-width: 576px) {
	header {
		outline: 1px solid rgba(255, 255, 255, 0);
		outline-offset: 0px;
		padding-top: 95px;
		box-shadow: 0 3px 4px rgba(0, 0, 0, 0);
		&:before {
			display: flex;
		}
		.logo {
			display: flex;
		}
		&.active {
			outline: 1px solid rgba(255, 255, 255, 0.2);
		}
	}
}
</style>