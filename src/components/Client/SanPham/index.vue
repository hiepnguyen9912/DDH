<template>
    <div class="shop-container bg-white min-vh-100">
        <!-- Shop Header -->
        <header class="py-5 bg-ddh-light">
            <div class="container py-5 text-center">
                <h1 class="display-4 fw-bold mb-4">Nâng tầm phong cách sống</h1>
                <p class="lead text-muted max-w-700 mx-auto">Khám phá bộ sưu tập nội thất độc bản, nơi mỗi món đồ được chăm chút từng đường nét để mang lại sự hoàn mỹ cho gia đình bạn.</p>
            </div>
        </header>

        <!-- Filters & Content -->
        <div class="container py-5">
            <div class="d-flex flex-wrap justify-content-center gap-3 mb-5 py-4 border-bottom">
                <button 
                    v-for="cat in productData.categories" 
                    :key="cat.id"
                    class="btn filter-btn px-4 py-2 rounded-pill fw-bold"
                    :class="activeCategory === cat.id ? 'active' : 'btn-outline-ddh'"
                    @click="activeCategory = cat.id"
                >
                    {{ cat.name }}
                </button>
            </div>

            <!-- Product Grid -->
            <div class="row g-4">
                <div 
                    v-for="p in filteredProducts" 
                    :key="p.id" 
                    class="col-md-6 col-lg-4 mb-4"
                >
                    <div class="product-card rounded-5 overflow-hidden shadow-xl hover-shadow-2xl transition h-450 position-relative" @click="selectedProduct = p">
                        <img :src="p.image" class="w-100 h-100 object-fit-cover transition-slow" :alt="p.name">
                        
                        <!-- Floating Glass Info -->
                        <div class="product-glass-card p-3 m-3 rounded-4 position-absolute bottom-0 start-0 end-0 d-flex justify-content-between align-items-center transition">
                            <div>
                                <h6 class="fw-bold mb-2 text-dark">{{ p.name }}</h6>
                                <p class="text-muted smaller ls-3 mb-0">{{ p.tagline }}</p>
                            </div>
                            <div class="btn-circle-sm bg-ddh text-white shadow"><i class="fas fa-arrow-right"></i></div>
                        </div>

                        <!-- Hover Action Overlay -->
                        <div class="product-overlay d-flex align-items-center justify-content-center transition">
                            <span class="btn btn-light rounded-pill px-4 fw-bold shadow">Xem chi tiết</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="filteredProducts.length === 0" class="text-center py-5">
                <i class="fas fa-search fs-1 text-muted mb-3"></i>
                <h4 class="text-muted">Không tìm thấy sản phẩm nào</h4>
            </div>
        </div>

        <!-- Detail View Component -->
        <ChiTiet 
            :product="selectedProduct" 
            v-if="selectedProduct" 
            @close="selectedProduct = null"
        />
    </div>
</template>

<script>
import { productData } from './index.js';
import ChiTiet from './ChiTiet.vue';

export default {
    components: {
        ChiTiet
    },
    data() {
        return {
            productData: productData,
            activeCategory: 'all',
            selectedProduct: null
        };
    },
    computed: {
        filteredProducts() {
            if (this.activeCategory === 'all') return this.productData.products;
            return this.productData.products.filter(p => p.category === this.activeCategory);
        }
    }
}
</script>

<style scoped>
.bg-ddh-light { background-color: #f0f7f7; }

.max-w-700 { max-width: 700px; }
.h-450 { height: 450px; }

.filter-btn {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.filter-btn.active {
    background-color: #0d5459;
    color: white;
    box-shadow: 0 10px 15px rgba(13, 84, 89, 0.3);
}

.product-card {
    cursor: pointer;
    background: #f8f9fa;
}

.product-glass-card {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    z-index: 3;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(13, 84, 89, 0.7);
    backdrop-filter: blur(5px);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    z-index: 2;
}

.product-overlay .btn {
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover .product-overlay {
    opacity: 1;
}

.product-card:hover .product-overlay .btn {
    transform: translateY(0);
}

.product-card:hover img {
    transform: scale(1.1);
}

.product-card:hover .product-glass-card {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.95);
}

.btn-circle-sm {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
}

.smaller { font-size: 0.75rem; }
.ls-5 { letter-spacing: 5px; }
.ls-3 { letter-spacing: 3px; }
.transition-slow { transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
</style>