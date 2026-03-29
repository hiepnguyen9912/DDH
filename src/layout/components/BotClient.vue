<template>
    <footer class="text-center text-lg-start text-white bg-ddh">
        <!-- Section: Social media -->
        <section class="d-flex justify-content-between p-4" style="background-color: rgba(0, 0, 0, 0.2)">
            <!-- Left -->
            <div class="me-5">
            </div>
            <!-- Left -->

            <!-- Right -->

            <!-- Right -->
        </section>

        <section class="">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center text-md-start">
                        <h5 class="text-uppercase text-white fw-bold">Danang Decor Hub</h5>
                        <hr class="mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #0d5459; height: 2px;" />
                        <br>
                        <div class="text-center mb-2">
                            <img src="https://dzfullstack.com/assets/images/logo-img.png" class="img-fluid"
                                style="width: 100px; height: auto;" alt="">
                        </div>
                        <p>
                            Danang Decor Hub - Nơi kiến tạo những không gian sống đẳng cấp, kết hợp giữa thẩm mỹ kiến trúc hiện đại và triết lý thiết kế tinh tế.
                        </p>
                        <div class="d-flex justify-content-center justify-content-md-start">
                            <a href="https://www.facebook.com/share/1P8EAjhLe4/" target="_blank"
                                class="text-white me-4">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/danangdecorhub_1007?igsh=bjMwMm9qdmc3Y3Aw"
                                target="_blank" class="text-white me-4">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.tiktok.com/@danangdecorhub?_r=1&_t=ZS-9555W7Xmv00" target="_blank"
                                class="text-white me-4">
                                <i class="fab fa-tiktok"></i>
                            </a>
                            <a href="https://youtube.com/@danangdecorhub?si=agiq7NnTs8yjqi1E" target="_blank" class="text-white me-4">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase text-white fw-bold">Sản phẩm</h6>
                        <hr class="mb-4 mt-0 d-inline-block mx-auto"
                            style="width: 60px; background-color: #7c4dff; height: 2px" />
                        <p>
                            <RouterLink to="/" class="text-white">Trang chủ</RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/san-pham" class="text-white">Sản phẩm</RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/dich-vu" class="text-white">Dịch vụ</RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/lien-he" class="text-white">Liên hệ</RouterLink>
                        </p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase text-white fw-bold">Liên kết hữu ích</h6>
                        <hr class="mb-4 mt-0 d-inline-block mx-auto"
                            style="width: 60px; background-color: #7c4dff; height: 2px" />
                        <p>
                            <a href="https://www.facebook.com/share/1P8EAjhLe4/" target="_blank"
                                class="text-white">Facebook</a>
                        </p>
                        <p>
                            <a href="https://www.instagram.com/danangdecorhub_1007?igsh=bjMwMm9qdmc3Y3Aw"
                                target="_blank" class="text-white">Instagram</a>
                        </p>
                        <p>
                            <a href="https://www.tiktok.com/@danangdecorhub?_r=1&_t=ZS-9555W7Xmv00" target="_blank"
                                class="text-white">Tiktok</a>
                        </p>
                        <p>
                            <a href="https://youtube.com/@danangdecorhub?si=agiq7NnTs8yjqi1E" target="_blank"
                                class="text-white">Youtube</a>
                        </p>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
                        <h6 class="text-uppercase text-white fw-bold">Liên hệ</h6>
                        <hr class="mb-4 mt-0 d-inline-block mx-auto"
                            style="width: 60px; background-color: #7c4dff; height: 2px" />
                        <p><i class="fas fa-home me-3"></i>Liên Chiểu, Đà Nẵng</p>
                        <p><i class="fas fa-envelope me-3"></i>hiep841627856627@gmail.com</p>
                        <p><i class="fas fa-phone me-3"></i> + 8456569943</p>
                        <p><i class="fas fa-print me-3"></i> + 8456569943</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="text-center p-3  bg-dark">
            © 2026 Bản quyền:
            <a class="text-white" href="/">DanangDecorHub  Team</a>
        </div>
    </footer>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {

}
</script>
<style></style>