<template>
    <div v-if="product" class="product-detail-overlay" @click.self="$emit('close')">
        <div class="product-detail-modal shadow-2xl rounded-4 overflow-hidden fade-in">
            <!-- Floating Category Badge -->
            <div class="category-badge-float alert alert-ddh-light py-2 px-4 shadow fw-bold text-uppercase smaller ls-2">
                {{ product.category }}
            </div>
            <button class="close-btn border-0 bg-transparent text-dark" @click="$emit('close')">
                <i class="fas fa-times fs-3"></i>
            </button>
            <div class="row g-0 h-100">
                <div class="col-lg-7 h-100 bg-light">
                    <img :src="product.image" class="w-100 h-100 object-fit-cover" alt="Product Image">
                </div>
                <div class="col-lg-5 h-100 bg-white p-5 d-flex flex-column overflow-auto">

                    <div class="d-flex justify-content-between align-items-end mb-4 border-bottom pb-3">
                        <div>
                            <span class="text-muted smaller text-uppercase ls-1 d-block mb-1">{{ product.code }}</span>
                            <h2 class="display-6 fw-bold mb-0">{{ product.name }}</h2>
                        </div>
                    </div>

                    <h5 class="text-ddh fw-bold mb-4 ls-1">{{ product.tagline }}</h5>

                    <!-- Key Metadata Grid -->
                    <div class="row g-3 mb-5">
                        <div class="col-6">
                            <div class="p-3 bg-light rounded-4">
                                <span class="text-muted smaller d-block mb-1">Chi phí ước tính</span>
                                <h6 class="fw-bold mb-0 text-ddh">{{ product.priceRange }}</h6>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 bg-light rounded-4">
                                <span class="text-muted smaller d-block mb-1">Diện tích phù hợp</span>
                                <h6 class="fw-bold mb-0">{{ product.area }}</h6>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 bg-light rounded-4">
                                <span class="text-muted smaller d-block mb-1">Thời gian thi công</span>
                                <h6 class="fw-bold mb-0">{{ product.timeline }}</h6>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 bg-light rounded-4">
                                <span class="text-muted smaller d-block mb-1">Phong cách</span>
                                <h6 class="fw-bold mb-0">{{ product.category }}</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="description mb-3">
                        <h6 class="fw-bold text-uppercase ls-1 border-bottom pb-2 mb-3">Triết lý thiết kế</h6>
                        <p class="text-muted lh-lg">{{ product.description }}</p>
                    </div>

                    <div class="specs mb-3">
                        <h6 class="fw-bold text-uppercase ls-1 border-bottom pb-2 mb-3">Vật liệu & Chi tiết</h6>
                        <ul class="list-unstyled">
                            <li v-for="(spec, index) in product.specs" :key="index" class="mb-2 d-flex align-items-center">
                                <i class="fas fa-check-circle text-ddh me-3 small"></i>
                                <span class="text-muted">{{ spec }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="d-grid pt-3">
                        <button class="btn btn-ddh btn-lg fw-bold py-3 shadow-lg rounded-pill">Nhận báo giá chi tiết</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.product-detail-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.text-bg-ddh {
    background-color: #0d5459 !important;
    color: white !important;
}

/* Custom DDH Alerts */
.alert-ddh {
    background-color: #0d5459 !important;
    color: white !important;
    border: none;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
}

.alert-ddh-light {
    background-color: #f0f7f7 !important;
    color: #0d5459 !important;
    border: 1px solid rgba(13, 84, 89, 0.2);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
}

.alert-ddh-outline {
    background-color: transparent !important;
    color: #0d5459 !important;
    border: 2px solid #0d5459;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
}

.category-badge-float {
    position: absolute;
    top: 25px;
    left: 25px;
    z-index: 10;
    border-radius: 0.5rem;
    pointer-events: none;
}

.product-detail-modal {
    background: white;
    width: 100%;
    max-width: 1300px;
    height: 85vh;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 10;
    transition: transform 0.3s ease;
}

.close-btn:hover {
    transform: rotate(90deg);
}

.fade-in {
    animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 991px) {
    .product-detail-modal {
        height: auto;
        max-height: 90vh;
        overflow-y: auto;
    }
    .row { height: auto !important; }
    .col-lg-6 { height: 400px !important; }
}
</style>
