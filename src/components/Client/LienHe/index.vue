<template>
    <div class="contact-page">
        <!-- Contact Hero -->
        <section class="contact-hero position-relative overflow-hidden d-flex align-items-center">
            <div class="hero-overlay position-absolute w-100 h-100"></div>
            <div class="container position-relative z-index-2 text-center">
                <span class="text-uppercase ls-5 mb-3 d-block animate-up text-white">KẾT NỐI VỚI CHÚNG TÔI</span>
                <h1 class="display-2 fw-bold mb-4 animate-up text-white">Liên Hệ Với <span class="text-teal-light">Chúng Tôi</span></h1>
                <p class="lead text-white-80 mx-auto w-75 animate-up">Sẵn sàng đồng hành cùng bạn kiến tạo nên những không gian sống đẳng cấp nhất.</p>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="py-huge bg-white">
            <div class="container">
                <div class="row g-5">
                    <!-- Contact Information -->
                    <div class="col-lg-5 animate-left">
                        <h2 class="fw-bold text-ddh mb-4">Thông Tin Liên Hệ</h2>
                        <p class="text-muted mb-5">Đội ngũ của Danang Decor Hub luôn sẵn sàng lắng nghe và tư vấn giải pháp tối ưu nhất cho bạn.</p>
                        
                        <div class="contact-info-stack">
                            <div class="info-item d-flex align-items-center mb-4 p-4 rounded-4 bg-light transition hover-lift shadow-sm">
                                <div class="icon-box bg-ddh text-white rounded-circle me-4 d-flex align-items-center justify-content-center">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">Văn phòng chính</h6>
                                    <p class="mb-0 smaller text-muted">Liên Chiểu, Đà Nẵng</p>
                                </div>
                            </div>

                            <div class="info-item d-flex align-items-center mb-4 p-4 rounded-4 bg-light transition hover-lift shadow-sm">
                                <div class="icon-box bg-ddh text-white rounded-circle me-4 d-flex align-items-center justify-content-center">
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">Hotline tư vấn</h6>
                                    <p class="mb-0 smaller text-muted">0356 569 943</p>
                                </div>
                            </div>

                            <div class="info-item d-flex align-items-center mb-4 p-4 rounded-4 bg-light transition hover-lift shadow-sm">
                                <div class="icon-box bg-ddh text-white rounded-circle me-4 d-flex align-items-center justify-content-center">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1">Email liên hệ</h6>
                                    <p class="mb-0 smaller text-muted">hiep841627856627@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div class="social-connect mt-5">
                            <h6 class="fw-bold mb-3 ls-2 text-uppercase smaller text-muted">Kết nối với chúng tôi</h6>
                            <div class="d-flex gap-3">
                                <a href="https://www.facebook.com/share/1P8EAjhLe4/" target="_blank" class="social-btn"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/danangdecorhub_1007?igsh=bjMwMm9qdmc3Y3Aw" target="_blank" class="social-btn"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.tiktok.com/@danangdecorhub?_r=1&_t=ZS-9555W7Xmv00" target="_blank" class="social-btn"><i class="fab fa-tiktok"></i></a>
                                <a href="https://youtube.com/@danangdecorhub?si=agiq7NnTs8yjqi1E" target="_blank" class="social-btn"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="col-lg-7 animate-right">
                        <div class="inquiry-form p-5 rounded-5 bg-white shadow-2xl border border-light">
                            <h3 class="fw-bold mb-4">Gửi Yêu Cầu Tư Vấn</h3>
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <label class="form-label smaller fw-bold text-muted">HỌ VÀ TÊN</label>
                                    <input type="text" class="form-control custom-input" placeholder="Nguyễn Văn A">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label smaller fw-bold text-muted">SỐ ĐIỆN THOẠI</label>
                                    <input type="tel" class="form-control custom-input" placeholder="09xx xxx xxx">
                                </div>
                                <div class="col-12">
                                    <label class="form-label smaller fw-bold text-muted">EMAIL (TÙY CHỌN)</label>
                                    <input type="email" class="form-control custom-input" placeholder="email@example.com">
                                </div>
                                <div class="col-12">
                                    <label class="form-label smaller fw-bold text-muted">NỘI DUNG CẦN TƯ VẤN</label>
                                    <textarea class="form-control custom-input" rows="4" placeholder="Bạn đang quan tâm đến dịch vụ nào?"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-ddh text-white w-100 py-3 rounded-pill fw-bold ls-2 mt-2 shadow-lg">GỬI YÊU CẦU NGAY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Map Section -->
        <section class="py-0 position-relative mb-5">
            <div class="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.895550269094!2d108.21983057577546!3d16.07101833940177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218307d81954d%3A0xebc423d2139046c8!2zQmFua29vaywgVGjDoWkgTGFu!5e0!3m2!1svi!2s!4v1711684562084!5m2!1svi!2s" 
                    width="100%" height="700" style="border:0; filter: grayscale(1) contrast(1.1) opacity(0.8);" allowfullscreen="" loading="lazy"></iframe>
                <div class="map-tag bg-ddh text-white p-3 rounded-3 shadow-lg position-absolute top-50 start-50 translate-middle">
                    <h6 class="text-white fw-bold mb-0">Danang Decor Hub Office</h6>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'LienHeView'
};
</script>

<style scoped>
.contact-page {
    font-family: 'Outfit', sans-serif;
}

/* Color Tokens */
.text-ddh { color: #0d5459 !important; }
.bg-ddh { background-color: #0d5459; }
.text-teal-light { color: #4dcad6; }
.btn-ddh { background-color: #0d5459; transition: all 0.3s ease; }
.btn-ddh:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(13, 84, 89, 0.3) !important; filter: brightness(1.1); }

/* Hero Styles */
.contact-hero {
    height: 60vh;
    background: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000') center/cover no-repeat;
}

.hero-overlay {
    background: linear-gradient(rgba(3, 65, 69, 0.9), rgba(0, 0, 0, 0.7));
}

/* Info Cards */
.icon-box {
    width: 60px;
    height: 60px;
}

.social-btn {
    width: 45px;
    height: 45px;
    background: #f1f1f1;
    color: #0d5459;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.social-btn:hover {
    background: #0d5459;
    color: white;
    transform: translateY(-5px);
}

/* Inquiry Form */
.custom-input {
    border: 2px solid #f1f1f1;
    border-radius: 12px;
    padding: 12px 18px;
    transition: all 0.3s ease;
}

.custom-input:focus {
    border-color: #0d5459;
    box-shadow: 0 0 0 4px rgba(13, 84, 89, 0.05);
}

.shadow-2xl {
    box-shadow: 0 40px 100px rgba(0,0,0,0.08);
}

.hover-lift:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.05) !important;
}

/* Utilities */
.py-huge { padding: 120px 0; }
.ls-5 { letter-spacing: 5px; }
.ls-2 { letter-spacing: 2px; }
.smaller { font-size: 0.85rem; }
.text-white-80 { color: rgba(255, 255, 255, 0.8); }

/* Animations */
.animate-up { animation: fadeInUp 1s ease forwards; }
.animate-left { animation: fadeInLeft 1s ease forwards; }
.animate-right { animation: fadeInRight 1s ease forwards; }

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
}

@media (max-width: 991px) {
    .contact-hero { height: 40vh; }
    .inquiry-form { padding: 30px !important; }
}
</style>