// d:/Hiep/DDH/FE_20.6/src/components/Client/SanPham/index.js

export const productData = {
    categories: [
        { id: 'all', name: 'Tất cả sản phẩm' },
        { id: 'ceramic', name: 'Gốm sứ thủ công' },
        { id: 'wood-bamboo', name: 'Gỗ & Tre Decor' },
        { id: 'scent', name: 'Nến & Tinh dầu' },
        { id: 'miniature', name: 'Mô hình tiểu cảnh' },
        { id: 'concept-package', name: 'Gói Decor Concept' }
    ],
    products: [
        // NHÓM GỐM SỨ (Ceramic) - [cite: 44]
        {
            id: 1, code: 'DDH-CER-01', category: 'ceramic', name: 'Lọ hoa gốm vẽ tay độc bản', tagline: 'NGHỆ THUẬT ĐẤT SÉT',
            priceRange: '50.000đ - 150.000đ', area: 'Bàn làm việc/Cafe', timeline: '3-5 ngày (nếu đặt vẽ riêng)',
            image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=1200',
            description: 'Gốm Thanh Hà nung truyền thống, họa tiết vẽ tay không trùng lặp[cite: 44, 74].',
            specs: ['Chất liệu: Gốm nung', 'Họa tiết: Màu acrylic bền']
        },
        {
            id: 2, code: 'DDH-CER-02', category: 'ceramic', name: 'Chậu cây gốm men rạn', tagline: 'VINTAGE VIBES',
            priceRange: '45.000đ - 120.000đ', area: 'Ban công/Cửa sổ', timeline: 'Giao ngay',
            image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=1200',
            description: 'Lớp men rạn nghệ thuật phù hợp phong cách hoài cổ[cite: 43].',
            specs: ['Màu sắc: Trắng ngà, Xanh ngọc', 'Kích thước: 10cm, 15cm']
        },
        {
            id: 3, code: 'DDH-CER-03', category: 'ceramic', name: 'Ly gốm mộc không men', tagline: 'MỘC MẠC TỰ NHIÊN',
            priceRange: '35.000đ - 65.000đ', area: 'Dụng cụ decor', timeline: 'Giao ngay',
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
            description: 'Vẻ đẹp thô mộc của đất nung, giữ nhiệt tốt cho đồ uống[cite: 43].',
            specs: ['Chất liệu: Đất sét đỏ', 'Phong cách: Rustic']
        },
        {
            id: 4, code: 'DDH-CER-04', category: 'ceramic', name: 'Bình trà gốm mini', tagline: 'TRÀ ĐẠO TĨNH LẶNG',
            priceRange: '180.000đ', area: 'Góc thư giãn', timeline: '2-4 ngày',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=1200',
            description: 'Bộ ấm trà nhỏ gọn dành cho homestay hoặc studio chụp ảnh[cite: 98].',
            specs: ['Gồm: 1 ấm, 2 chén', 'Men: Men bóng dễ lau chùi']
        },
        {
            id: 5, code: 'DDH-CER-05', category: 'ceramic', name: 'Tượng gốm trang trí trừu tượng', tagline: 'CÁ TÍNH KHÔNG GIAN',
            priceRange: '90.000đ', area: 'Kệ sách/Tủ trưng bày', timeline: 'Giao ngay',
            image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=1200',
            description: 'Các hình khối tối giản giúp tạo điểm nhấn nghệ thuật[cite: 41, 43].',
            specs: ['Màu: Đen nhám, Trắng sứ', 'Chất liệu: Gốm cao cấp']
        },

        // NHÓM GỖ & TRE (Wood & Bamboo) - [cite: 45]
        {
            id: 6, code: 'DDH-WB-06', category: 'wood-bamboo', name: 'Bảng gỗ treo tường khắc chữ', tagline: 'DẤU ẤN CÁ NHÂN',
            priceRange: '80.000đ - 180.000đ', area: 'Cửa tiệm/Phòng ngủ', timeline: '1-2 ngày (khắc theo yêu cầu)',
            image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200',
            description: 'Sử dụng gỗ thông tái chế, thân thiện môi trường[cite: 45, 56].',
            specs: ['Kỹ thuật: Khắc laser/Vẽ tay', 'Vật liệu: Gỗ thông']
        },
        {
            id: 7, code: 'DDH-WB-07', category: 'wood-bamboo', name: 'Giá để Menu bằng tre Taboo', tagline: 'TINH TẾ MIỀN TRUNG',
            priceRange: '40.000đ - 70.000đ', area: 'Quán cafe/Nhà hàng', timeline: 'Số lượng lớn 5-7 ngày',
            image: 'https://bizweb.dktcdn.net/thumb/grande/100/064/164/products/gia-de-menu-bang-go-b39-d.jpg?v=1568386839183',
            description: 'Sản phẩm từ làng tre Taboo, bền bỉ và sang trọng[cite: 45, 74].',
            specs: ['Chất liệu: Tre ép', 'Chống mối mọt: Có']
        },
        {
            id: 8, code: 'DDH-WB-08', category: 'wood-bamboo', name: 'Kệ gỗ mini để bàn', tagline: 'SẮP XẾP GỌN GÀNG',
            priceRange: '120.000đ', area: 'Bàn làm việc/Thu ngân', timeline: 'Giao ngay',
            image: 'https://khaytradao.com/wp-content/uploads/2017/06/ke-go-mini-ke-chen-do-tra-dep-kg02.jpg',
            description: 'Kệ 2 tầng nhỏ gọn để tinh dầu hoặc phụ kiện[cite: 43, 45].',
            specs: ['Kích thước: 30x15cm', 'Màu: Nâu hạt dẻ']
        },
        {
            id: 9, code: 'DDH-WB-09', category: 'wood-bamboo', name: 'Biển số bàn bằng tre', tagline: 'ĐỒNG BỘ THƯƠNG HIỆU',
            priceRange: '35.000đ/cái', area: 'Hệ thống quán cafe', timeline: 'Khắc theo số lượng',
            image: 'https://xuonginnhuhao.vn/wp-content/uploads/2025/04/lam-the-so-ban-go-2.jpg',
            description: 'Thay thế biển nhựa công nghiệp bằng tre tự nhiên[cite: 45, 56, 65].',
            specs: ['Hình dáng: Chữ A/Tròn', 'In logo: Miễn phí từ 20 cái']
        },
        {
            id: 10, code: 'DDH-WB-10', category: 'wood-bamboo', name: 'Đế lót ly gỗ vẽ Mandala', tagline: 'SÁNG TẠO TỪNG CHI TIẾT',
            priceRange: '25.000đ', area: 'Dụng cụ quán', timeline: 'Giao ngay',
            image: 'https://down-vn.img.susercontent.com/file/26f6ff32e9f2a8228acd2c13f44aba87',
            description: 'Mỗi đế lót ly là một bức tranh vẽ tay nghệ thuật[cite: 41, 45].',
            specs: ['Chống thấm nước: Có', 'Vật liệu: Gỗ xà cừ']
        },

        // NHÓM NẾN & MÙI HƯƠNG (Scent) - [cite: 46]
        {
            id: 11, code: 'DDH-SC-11', category: 'scent', name: 'Nến thơm sáp đậu nành "Hương Đà Thành"', tagline: 'HƠI ẤM TÂM HỒN',
            priceRange: '120.000đ - 250.000đ', area: 'Phòng ngủ/Spa', timeline: 'Đổ nến thủ công',
            image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=1200',
            description: 'Nguyên liệu sạch, an toàn sức khỏe, hương tinh dầu thiên nhiên[cite: 46, 51].',
            specs: ['Thành phần: Sáp đậu nành', 'Bấc: Gỗ/Cotton']
        },
        {
            id: 12, code: 'DDH-SC-12', category: 'scent', name: 'Tinh dầu khuếch tán sả chanh', tagline: 'SẠCH KHÔNG GIAN',
            priceRange: '150.000đ', area: 'Quán cafe/Toilet', timeline: 'Giao ngay',
            image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1200',
            description: 'Khử mùi hiệu quả cho các không gian dịch vụ[cite: 46, 58].',
            specs: ['Dung tích: 50ml', 'Tặng kèm: Que mây']
        },
        {
            id: 13, code: 'DDH-SC-13', category: 'scent', name: 'Nến Tealight không mùi', tagline: 'ÁNH SÁNG LUNG LINH',
            priceRange: '2.000đ/viên', area: 'Tiệc/Sự kiện', timeline: 'Sẵn hàng',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/277/395/products/nen-thom-mini-2.jpg?v=1730693378357',
            description: 'Phù hợp để đốt lò xông tinh dầu hoặc trang trí tiệc[cite: 46, 109].',
            specs: ['Thời gian cháy: 4h', 'An toàn: Không khói đen']
        },
        {
            id: 14, code: 'DDH-SC-14', category: 'scent', name: 'Lọ hoa khô treo tường Scented', tagline: 'HƯƠNG HOA KHÔ',
            priceRange: '65.000đ', area: 'Góc Decor/Quà tặng', timeline: 'Giao ngay',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRox-alxwHgyJbEJ7ZgPqr-h-EZj0tGBcT-8w&s',
            description: 'Sự kết hợp giữa hoa khô và tinh dầu giúp thơm phòng tự nhiên[cite: 60].',
            specs: ['Loại hoa: Lavender/Cúc họa mi', 'Hương: Nhẹ nhàng']
        },
        {
            id: 15, code: 'DDH-SC-15', category: 'scent', name: 'Túi thơm quế Trà Bồng', tagline: 'HƯƠNG VỊ QUẢNG NAM',
            priceRange: '30.000đ', area: 'Treo xe/Tủ quần áo', timeline: 'Giao ngay',
            image: 'https://www.quetrabong.vn/uploads/2022/7/t-62de4ce4ac45b.jpg',
            description: 'Tận dụng nguồn nguyên liệu quế đặc sản miền Trung[cite: 56, 74].',
            specs: ['Vỏ túi: Vải lanh mộc', 'Ruột: Vụn quế tự nhiên']
        },

        // NHÓM TIỂU CẢNH (Miniature) - [cite: 47]
        {
            id: 16, code: 'DDH-MN-16', category: 'miniature', name: 'Tiểu cảnh Terrarium mini', tagline: 'VƯỜN TRONG LỌ THỦY TINH',
            priceRange: '150.000đ - 350.000đ', area: 'Bàn làm việc', timeline: '3-4 ngày (nuôi ổn định)',
            image: 'https://mowgarden.com/wp-content/uploads/2021/04/tieu-canh-terrarium-la-gi-600x800.jpg',
            description: 'Tạo không gian xanh cho quán cafe mà không tốn công chăm sóc[cite: 47, 59].',
            specs: ['Loại cây: Dương xỉ, Rêu', 'Bình: Thủy tinh tái chế']
        },
        {
            id: 17, code: 'DDH-MN-17', category: 'miniature', name: 'Sen đá vẽ hình nhân vật', tagline: 'CUTE DECOR',
            priceRange: '55.000đ', area: 'Quà tặng sinh viên', timeline: 'Giao ngay',
            image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80&w=1200',
            description: 'Chậu gốm nhỏ vẽ hình vui nhộn kèm sen đá khỏe mạnh[cite: 60, 137].',
            specs: ['Chất liệu: Gốm', 'Cây: Sen đá Đà Lạt']
        },
        {
            id: 18, code: 'DDH-MN-18', category: 'miniature', name: 'Thác nước mini phong thủy', tagline: 'THANH ÂM TỰ NHIÊN',
            priceRange: '450.000đ', area: 'Quầy bar/Sảnh', timeline: '2-3 ngày',
            image: 'https://igardecor.com/wp-content/uploads/2020/09/82436858_151511342936472_7265820239344959488_o.jpg',
            description: 'Tạo tiếng nước chảy róc rách thư giãn cho khách hàng[cite: 47, 72].',
            specs: ['Máy bơm: Tiết kiệm điện', 'Khối lượng: 1.5kg']
        },
        {
            id: 19, code: 'DDH-MN-19', category: 'miniature', name: 'Mô hình nhà gỗ lắp ghép', tagline: 'SÁNG TẠO DIY',
            priceRange: '200.000đ', area: 'Kệ Decor', timeline: 'Giao ngay',
            image: 'https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2024/3/12/xem-them-2-17102548336661552482628.jpg',
            description: 'Tái hiện lại không gian quán cafe Đà Nẵng thu nhỏ[cite: 40, 73].',
            specs: ['Tỉ lệ: 1:24', 'Đèn LED: Có']
        },
        {
            id: 20, code: 'DDH-MN-20', category: 'miniature', name: 'Hòn non bộ để bàn mini', tagline: 'HỒN QUÊ PHỐ THỊ',
            priceRange: '320.000đ', area: 'Góc trà đạo', timeline: 'Theo mẫu',
            image: 'https://static1.cafeland.vn/cafelandnew/hinh-anh/2020/06/03/144/image-20200603161233-1.jpeg',
            description: 'Chế tác từ đá tự nhiên và cây bonsai mini[cite: 47, 50].',
            specs: ['Kích thước: 25cm', 'Vật liệu: Đá thấm thủy']
        },

        // NHÓM GÓI DECOR (Concept Package) - [cite: 142, 186]
        {
            id: 21, code: 'DDH-CP-21', category: 'concept-package', name: 'Gói Decor "Góc Mộc" (Rustic)', tagline: 'GIẢI PHÁP TIẾT KIỆM B2B',
            priceRange: 'Từ 1.200.000đ', area: 'Quán cafe quy mô nhỏ', timeline: 'Tư vấn trong ngày',
            image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200',
            description: 'Combo 5 món phối sẵn: bảng gỗ, 2 lọ gốm, kệ mini, nến thơm[cite: 142, 186].',
            specs: ['Tiết kiệm: 15% so với mua lẻ', 'Tư vấn: Miễn phí']
        },
        {
            id: 22, code: 'DDH-CP-22', category: 'concept-package', name: 'Gói Decor "Nắng Đà Thành"', tagline: 'CONCEPT CHỤP ẢNH',
            priceRange: 'Từ 2.500.000đ', area: 'Studio/Homestay', timeline: 'Setup 24h',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
            description: 'Tạo góc check-in đậm chất địa phương với tre và gốm[cite: 48, 72, 98].',
            specs: ['Phong cách: Tropical/Vintage', 'Phí setup: Bao gồm']
        },
        {
            id: 23, code: 'DDH-CP-23', category: 'concept-package', name: 'Gói "Tối Giản" (Minimalist)', tagline: 'TINH TẾ TRONG ĐƠN GIẢN',
            priceRange: '900.000đ', area: 'Góc học tập/Làm việc', timeline: 'Giao ngay',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
            description: 'Sắp xếp hài hòa các món đồ đơn sắc, hiện đại[cite: 43, 60].',
            specs: ['Màu sắc: Trắng/Xám', 'Tặng kèm: Chậu cây mini']
        },
        {
            id: 24, code: 'DDH-CP-24', category: 'concept-package', name: 'Combo Decor Mùa Lễ Hội', tagline: 'BIẾN HÓA THEO MÙA',
            priceRange: 'Từ 1.500.000đ', area: 'Quán F&B', timeline: 'Theo dịp (Tết/Noel)',
            image: 'https://flexdecor.vn/wp-content/uploads/2023/11/Cay-trang-tri-giang-sinh-bang-den-LED-XC7457-8-430x430.jpg',
            description: 'Thay đổi diện mạo quán nhanh chóng theo mùa lễ hội[cite: 143, 181].',
            specs: ['Chủ đề: Tết/Trung thu/Noel', 'Dịch vụ: Thu hồi/Đổi mới']
        },
        {
            id: 25, code: 'DDH-CP-25', category: 'concept-package', name: 'Gói Decor Studio Chuyên Nghiệp', tagline: 'ĐẲNG CẤP HÌNH ẢNH',
            priceRange: 'Từ 5.000.000đ', area: 'Studio quy mô lớn', timeline: '3-5 ngày',
            image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
            description: 'Dịch vụ tư vấn chuyên sâu và cung cấp đồ thủ công số lượng lớn[cite: 52, 98].',
            specs: ['Số lượng: >30 món decor', 'Hỗ trợ: Chụp ảnh quảng bá']
        },

        // CÁC SẢN PHẨM KHÁC & QUÀ TẶNG (Others) - [cite: 43, 60]
        {
            id: 26, code: 'DDH-OT-26', category: 'ceramic', name: 'Gác bút gốm hình cá', tagline: 'CHI TIẾT NHỎ - Ý NGHĨA LỚN',
            priceRange: '15.000đ', area: 'Bàn viết/Quà tặng', timeline: 'Giao ngay',
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rdyb-lzvoart7kuai84',
            description: 'Món quà tặng tinh tế cho khách hàng cá nhân[cite: 60].',
            specs: ['Chất liệu: Gốm men bóng', 'Màu: Xanh/Đỏ']
        },
        {
            id: 27, code: 'DDH-OT-27', category: 'wood-bamboo', name: 'Khay gỗ trưng bày bánh/trà', tagline: 'TIẾP KHÁCH SANG TRỌNG',
            priceRange: '160.000đ', area: 'Phục vụ quán', timeline: '2 ngày',
            image: 'https://nhatminhdecor.com/wp-content/uploads/2024/01/5.png',
            description: 'Gỗ tần bì cao cấp, gia công nhẵn mịn[cite: 45].',
            specs: ['Dáng: Tròn/Chữ nhật', 'Sơn: Sơn thực phẩm an toàn']
        },
        {
            id: 28, code: 'DDH-OT-28', category: 'scent', name: 'Lọ xông tinh dầu gốm vẽ tay', tagline: 'LAN TỎA HƯƠNG THƠM',
            priceRange: '85.000đ', area: 'Phòng khách/Spa', timeline: 'Giao ngay',
            image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1200',
            description: 'Kết hợp đốt nến Tealight để khuếch tán mùi hương[cite: 46, 114].',
            specs: ['Cấu tạo: 2 phần rời', 'Họa tiết: Đồng quê']
        },
        {
            id: 29, code: 'DDH-OT-29', category: 'wood-bamboo', name: 'Đèn lồng tre thủ công', tagline: 'ÁNH SÁNG TRUYỀN THỐNG',
            priceRange: '120.000đ', area: 'Sân vườn/Quán cafe', timeline: '3-5 ngày',
            image: 'https://dentoanloi.com/wp-content/uploads/2020/05/%C4%90%C3%A8n-m%C3%A2y-tre-%C4%91an-th%E1%BB%A7-c%C3%B4ng-h%C3%ACnh-Ovan-trang-tr%C3%AD-%C4%91%E1%BA%B9p-m%E1%BA%AFt.jpg',
            description: 'Sản phẩm từ làng nghề mây tre đan khu vực Đà Nẵng[cite: 74].',
            specs: ['Vật liệu: Nan tre', 'Kiểu: Đèn thả trần']
        },
        {
            id: 30, code: 'DDH-OT-30', category: 'miniature', name: 'Tranh cát Đà Nẵng mini', tagline: 'QUÀ TẶNG DU LỊCH',
            priceRange: '95.000đ', area: 'Trưng bày tủ kính', timeline: 'Giao ngay',
            image: 'https://artnam.vn/wp-content/uploads/2025/08/tranh-cat-ma-dao-thanhc-ong.jpg',
            description: 'Biểu tượng các thắng cảnh Đà Nẵng qua nghệ thuật tranh cát[cite: 40, 137].',
            specs: ['Kích thước: 10x15cm', 'Vật liệu: Cát tự nhiên']
        }
    ]
};