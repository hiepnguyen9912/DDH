<template>
	<div class="nav-container primary-menu shadow-lg" style="top: 0px !important; height: 90px !important;">
		<div class="topbar-header d-flex align-items-center">
			<div>
				<img src="../../assets/images/login-images/logo_ko_bg.png" style="height: 50px; width: 120px;"
					class="logo-icon" alt="logo icon">
			</div>
		</div>
		<nav class="navbar navbar-expand-xl ms-5 ps-5 w-100">
			<ul class="navbar-nav mx-auto ps-2 gap-1">
				<li class="nav-item">
					<router-link to="/">
						<a class="nav-link" href="/">
							<div class="menu-title">Trang chủ</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/san-pham">
						<a class="nav-link" href="/san-pham">
							<div class="menu-title">Sản phẩm</div>
						</a>

					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/dich-vu">
						<a class="nav-link" href="/dich-vu">
							<div class="menu-title">Dịch vụ</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/lien-he">
						<a class="nav-link" href="/lien-he">
							<div class="menu-title">Liên hệ</div>
						</a>
					</router-link>
				</li>
			</ul>
		</nav>
		<div class="">
			<button class="btn btn-ddh text-nowrap px-4 py-2 ms-5">
				<router-link to="/lien-he" class="text-white">Liên hệ ngay</router-link>
			</button>
		</div>
	</div>
</template>
<script>
export default {

}
</script>