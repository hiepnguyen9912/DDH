<template>
    <div class="services-page">
        <!-- New Hero Section: Clean & Airy Moodboard -->
        <section class="services-hero position-relative overflow-hidden d-flex align-items-center">
            <div class="hero-bg-dark position-absolute w-100 h-100"></div>
            <div class="container position-relative z-index-2">
                <div class="row align-items-center">
                    <div class="col-lg-7 animate-left">
                        <div class="hero-text-content mb-5">
                            <span class="text-uppercase ls-5 text-white-50 mb-3 d-block font-weight-bold">PROFESSIONAL
                                SERVICES</span>
                            <h1 class="display-3 fw-bold text-white mb-4">Kiến Tạo Không Gian <br> <span
                                    class="text-teal-light">Nâng Tầm Trải Nghiệm</span></h1>
                            <p class="lead text-white-80 mb-5 w-75">Tại Danang Decor Hub, chúng tôi không chỉ thiết kế
                                nội thất. Chúng tôi kể câu chuyện về phong cách sống của bạn qua từng chi tiết kiến trúc
                                và vật liệu tinh tuyển.</p>
                            <div class="d-flex gap-3">
                                <a href="#our-services"
                                    class="btn btn-light text-ddh btn-lg rounded-pill px-5 py-3 ls-2 transition shadow-lg">KHÁM
                                    PHÁ DỊCH VỤ</a>
                                <button class="btn btn-outline-light btn-lg rounded-pill px-5 py-3 ls-2 transition">LIÊN
                                    HỆ</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 d-none d-lg-block position-relative h-600">
                        <!-- Moodboard Image Stack -->
                        <div class="mood-stack">
                            <div class="mood-item item-1 animate-stack-1">
                                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                                    class="rounded-4 shadow-2xl" alt="Modern Living">
                            </div>
                            <div class="mood-item item-2 animate-stack-2 glass-border">
                                <img src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=800"
                                    class="rounded-4 shadow-2xl bord-white" alt="Detail View">
                            </div>
                            <div class="mood-item item-3 animate-stack-3">
                                <div class="bg-white p-4 rounded-4 text-ddh shadow-lg">
                                    <h5 class="fw-bold mb-0 text-ddh">Architecture</h5>
                                    <p class="smaller mb-0 text-muted">Interior Philosophy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Grid -->
        <section id="our-services" class="py-huge bg-light">
            <div class="container">
                <div class="text-center mb-huge">
                    <h2 class="display-5 fw-bold text-ddh mb-3 animate-up">Dịch Vụ Của Chúng Tôi</h2>
                    <div class="divider-ddh mx-auto mb-4 animate-up"></div>
                    <p class="text-muted mx-auto w-50 animate-up">Giải pháp toàn diện từ ý tưởng đến bàn giao, cam kết
                        chất lượng chuẩn mực nhất.</p>
                </div>

                <div class="row g-4">
                    <div v-for="(s, index) in services" :key="index" class="col-lg-3 col-md-6 animate-up"
                        :style="`animation-delay: ${index * 0.1}s`">
                        <div class="service-card p-5 h-100 bg-white border-0 shadow-sm rounded-4 transition hover-lift">
                            <div
                                class="icon-box bg-ddh-light text-ddh rounded-circle d-flex align-items-center justify-content-center mb-4 shadow-sm">
                                <i :class="s.icon" class="fs-2"></i>
                            </div>
                            <h5 class="fw-bold mb-3 text-dark">{{ s.title }}</h5>
                            <p class="text-muted mb-4 small">{{ s.desc }}</p>
                            <ul class="list-unstyled mb-0">
                                <li v-for="(item, i) in s.items" :key="i" class="smaller text-muted mb-2">
                                    <i class="fas fa-check text-ddh me-2"></i> {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-huge bg-ddh text-white">
            <div class="container">
                <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <span class="text-uppercase ls-5 text-white mb-3 d-block">QUY TRÌNH LÀM VIỆC</span>
                        <h2 class="display-5 fw-bold mb-4 text-white">Hành Trình Hiện Thực Hóa <br> Ý Tưởng Của Bạn</h2>
                        <p class="text-white-80 mb-5">Một quy trình minh bạch, chặt chẽ là chìa khóa để kiến tạo nên
                            những công trình hoàn mỹ và đúng tiến độ.</p>
                        <button class="btn btn-light text-ddh fw-bold px-5 py-3 rounded-pill">NHẬN TƯ VẤN MIỄN
                            PHÍ</button>
                    </div>
                    <div class="col-lg-5 d-flex justify-content-center align-items-center">
                        <div class="process-steps">
                            <div v-for="(p, i) in process" :key="i" class="process-item d-flex"
                                :class="{ 'mb-5': i !== process.length - 1 }">
                                <div class="step-num text-white fw-bold display-4 me-4">0{{ i + 1 }}</div>
                                <div>
                                    <h4 class="fw-bold mb-2 text-white">{{ p.title }}</h4>
                                    <p class="text-white-80 mb-0">{{ p.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-huge bg-white">
            <div class="container text-center">
                <div class="cta-box p-5 rounded-5 shadow-lg bg-ddh-light border border-white-50">
                    <h2 class="fw-bold text-ddh mb-4">Bạn Đã Sẵn Sàng Khởi Đầu Dự Án?</h2>
                    <p class="text-muted mb-5 w-75 mx-auto">Để lại thông tin, các chuyên gia kiến trúc của Danang Decor
                        Hub sẽ liên hệ tư vấn giải pháp tối ưu nhất cho không gian của bạn.</p>
                    <div class="d-flex justify-content-center gap-3">
                        <button class="btn btn-ddh text-white px-5 py-3 rounded-pill fw-bold">NHẬN BÁO GIÁ NGAY</button>
                        <button class="btn btn-outline-ddh px-5 py-3 rounded-pill fw-bold">XEM CÁC DỰ ÁN</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'DichVuView',
    data() {
        return {
            services: [
                {
                    icon: 'fas fa-pen-nib',
                    title: 'Thiết kế Nội thất',
                    desc: 'Kiến tạo không gian dựa trên 4 yếu tố: Công năng, Thẩm mỹ, Cảm xúc và Cá tính gia chủ.',
                    items: ['Layout 2D chuyên sâu', 'Phối cảnh 3D Realtime', 'Lựa chọn Moodboard vật liệu']
                },
                {
                    icon: 'fas fa-tools',
                    title: 'Thi công Trọn gói',
                    desc: 'Hiện thực hóa bản vẽ với chất lượng hoàn thiện chuẩn khách sạn 5 sao, thi công chuyên nghiệp.',
                    items: ['Quản lý dự án tập trung', 'Báo cáo tiến độ Daily', 'Bảo hành lên đến 5 năm']
                },
                {
                    icon: 'fas fa-building',
                    title: 'Thiết kế Kiến trúc',
                    desc: 'Tư vấn giải pháp cấu trúc, tối ưu ánh sáng và gió tự nhiên cho nhà phố, biệt thự.',
                    items: ['Hồ sơ xin phép xây dựng', 'Kết cấu & Điện nước', 'Tư vấn Phong thủy']
                },
                {
                    icon: 'fas fa-couch',
                    title: 'Cung cấp Nội thất',
                    desc: 'Hệ sinh thái nội thất rời cao cấp, thiết kế độc bản theo kích thước và gu thẩm mỹ riêng.',
                    items: ['Sản xuất tại xưởng riêng', 'Vật liệu nhập khẩu Châu Âu', 'Lắp đặt tận nơi']
                }
            ],
            process: [
                { title: 'Khảo sát & Tư vấn', desc: 'Lắng nghe nhu cầu, đo đạc hiện trạng và tư vấn sơ bộ về phong cách phù hợp.' },
                { title: 'Thiết kế Ý tưởng', desc: 'Phát triển Layout 2D và phối cảnh 3D để bạn dễ dàng hình dung không gian tương lai.' },
                { title: 'Triển khai Kỹ thuật', desc: 'Lập hồ sơ thi công chi tiết, lựa chọn vật liệu và dự toán ngân sách chính xác.' },
                { title: 'Thi công & Bàn giao', desc: 'Triển khai thực tế tại công trình, vệ sinh công nghiệp và bàn giao chìa khóa.' }
            ]
        }
    }
};
</script>

<style scoped>
.services-page {
    font-family: 'Outfit', sans-serif;
    color: #333;
    background: #fdfdfd;
}

/* Color Tokens */
.bg-ddh {
    background-color: #0d5459;
}

.text-ddh {
    color: #0d5459 !important;
}

.bg-ddh-light {
    background-color: rgba(13, 84, 89, 0.05);
}

.btn-ddh {
    background-color: #0d5459;
    border: none;
}

.btn-outline-ddh {
    border: 2px solid #0d5459;
    color: #0d5459;
    background: transparent;
}

.btn-outline-ddh:hover {
    background-color: #0d5459;
    color: white;
}

/* Hero Redesign: Hybrid Dark Mode with Moodboard */
.services-hero {
    min-height: 90vh;
    padding: 100px 0;
    overflow: visible;
}

.hero-bg-dark {
    background: linear-gradient(135deg, rgba(13, 84, 89, 0.95), rgba(0, 0, 0, 0.964)), url('https://images.unsplash.com/photo-1600607687920-4e2a12cf1a50?auto=format&fit=crop&q=80&w=2000');
    background-size: cover;
    background-position: center;
}

.h-600 {
    min-height: 550px;
}

.mood-stack {
    position: relative;
    width: 100%;
    height: 100%;
}

.mood-item {
    position: absolute;
    transition: all 0.6s cubic-bezier(0.2, 1, 0.3, 1);
}

.mood-item img {
    width: 100%;
    height: auto;
    display: block;
}

.item-1 {
    width: 440px;
    top: -30px;
    right: 80px;
    z-index: 1;
    /* transform: rotate(-3deg); */
}

.item-2 {
    width: 300px;
    top: 80px;
    right: -60px;
    z-index: 3;
    border: 10px solid rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    transform: rotate(5deg);
}

.item-3 {
    width: 190px;
    bottom: -350px;
    left: 120px;
    z-index: 5;
    /* transform: rotate(-2deg); */
}

/* Animations Overhaul */
.animate-left {
    animation: fadeInLeft 1s ease forwards;
}

.animate-stack-1 {
    animation: scaleIn 0.8s ease backwards 0.3s;
}

.animate-stack-2 {
    animation: slideInUp 0.8s ease backwards 0.6s;
}

.animate-stack-3 {
    animation: slideInRight 0.8s ease backwards 0.9s;
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(100px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Layout Utilities */
.ls-5 {
    letter-spacing: 5px;
}

.ls-2 {
    letter-spacing: 2px;
}

.py-huge {
    padding: 120px 0;
}

.mb-huge {
    margin-bottom: 80px;
}

.divider-ddh {
    width: 80px;
    height: 4px;
    background-color: #0d5459;
}

.service-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0, 0, 0, 0.03) !important;
}

.service-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 40px 80px rgba(13, 84, 89, 0.08) !important;
}

.icon-box {
    width: 70px;
    height: 70px;
}

.bg-ddh {
    background-color: #0d5459;
    box-shadow: inset 0 40px 100px rgba(0, 0, 0, 0.15), inset 0 -40px 100px rgba(0, 0, 0, 0.2);
}

.step-num {
    min-width: 60px;
    opacity: 0.7;
}

.text-white-80 {
    color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 991px) {
    .services-hero {
        min-height: auto;
        padding: 120px 0 60px;
        text-align: center;
    }

    .w-75 {
        width: 100% !important;
    }

    .d-flex.gap-3 {
        justify-content: center;
    }

    .item-2 {
        bottom: -50px;
        right: 20px;
        width: 200px;
    }

    .item-1 {
        width: 280px;
        right: 0;
    }
}
</style>
