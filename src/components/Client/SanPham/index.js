// d:/Hiep/DDH/FE_20.6/src/components/Client/SanPham/index.js

export const productData = {
    categories: [
        { id: 'all', name: 'Tất cả phong cách' },
        { id: 'modern', name: 'Hiện đại' },
        { id: 'minimalist', name: 'Tối giản' },
        { id: 'classic', name: 'Tân cổ điển' },
        { id: 'luxury', name: 'Sang trọng' }
    ],
    products: [
        {
            id: 1, code: 'DDH-2026-01', category: 'modern', name: 'Modern House Concept', tagline: 'CẢM HỨNG ĐƯƠNG ĐẠI',
            priceRange: 'Từ 350.000.000đ', area: '100 - 150m²', timeline: '45 - 60 ngày',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
            description: 'Phong cách hiện đại (Modernism) tập trung vào sự tối giản của hình khối, sử dụng vật liệu công nghiệp như kính và thép để tạo nên không gian mở. Mỗi chi tiết đều được tính toán để tối ưu hóa công năng và tính nghệ thuật đương đại.',
            specs: ['Màu sắc: Xám Pearl, Trắng sứ, Đen nhám', 'Vật liệu: Đá Marble Carrera, Kim loại mạ', 'Phù hợp: Căn hộ cao cấp, Penthouse Urban']
        },
        {
            id: 2, code: 'DDH-2026-02', category: 'minimalist', name: 'Japandi Sanctuary', tagline: 'TĨNH LẶNG & CÂN BẰNG',
            priceRange: 'Từ 280.000.000đ', area: '80 - 120m²', timeline: '40 - 55 ngày',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
            description: 'Sự kết hợp hoàn hảo giữa nét tinh tế Nhật Bản và sự ấm áp Bắc Âu, mang lại bình yên tuyệt đối với gỗ sồi tự nhiên và vải lanh mộc mạc.',
            specs: ['Màu sắc: Kem, Beige, Gỗ nhạt', 'Vật liệu: Gỗ sồi, Vải lanh mộc', 'Phù hợp: Studio, Nhà phố tối giản']
        },
        {
            id: 3, code: 'DDH-2026-03', category: 'classic', name: 'Neo-Classic Elegance', tagline: 'SANG TRỌNG VƯỢT THỜI GIAN',
            priceRange: 'Từ 450.000.000đ', area: '120 - 250m²', timeline: '60 - 75 ngày',
            image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1200',
            description: 'Tân cổ điển giữ lại những đường phào chỉ tinh tế và tỉ lệ vàng, lược bỏ các chi tiết rườm rà để phù hợp với nhịp sống hiện đại đẳng cấp.',
            specs: ['Màu sắc: Trắng sứ, Vàng đồng, Xanh navy', 'Vật liệu: Gỗ sơn Inchem, Đá Granite', 'Phù hợp: Biệt thự vườn, Nhà phố lớn']
        },
        {
            id: 4, code: 'DDH-2026-04', category: 'luxury', name: 'Luxury Villa Mood', tagline: 'ĐẲNG CẤP HOÀNG GIA',
            priceRange: 'Từ 650.000.000đ', area: '200 - 500m²', timeline: '75 - 90 ngày',
            image: 'https://media.vrbo.com/lodging/79000000/78550000/78545600/78545578/f644da07.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
            description: 'Đẳng cấp xa hoa thể hiện qua các vật liệu hiếm như Onyx xuyên sáng, Da bò Ý nhập khẩu và hệ thống Smart-home cao cấp nhất.',
            specs: ['Màu sắc: Đen kim sa, Vàng gold, Gỗ óc chó', 'Vật liệu: Da bò thật, Đá Onyx, Pha lê K9', 'Phù hợp: Dinh thự, Biệt thự ven biển']
        },
        {
            id: 5, code: 'DDH-2026-05', category: 'modern', name: 'Scandinavian Hygge', tagline: 'ẤM CÚNG & GẦN GŨI',
            priceRange: 'Từ 220.000.000đ', area: '65 - 110m²', timeline: '35 - 50 ngày',
            image: 'https://imgdataserver.com/blog/1097/livingroomhygge.jpg',
            description: ' Scandinavian tập trung vào sự ấm cúng, gần gũi và nới rộng không gian nhờ tối đa hóa ánh sáng tự nhiên và bảng màu trắng tinh khôi.',
            specs: ['Màu sắc: Trắng tuyết, Xanh nhạt, Gỗ thông', 'Vật liệu: Gỗ thông nhập, Vải lông cừu', 'Phù hợp: Chung cư, Gia đình trẻ']
        },
        {
            id: 6, code: 'DDH-2026-06', category: 'minimalist', name: 'Zen Retreat', tagline: 'THIỀN ĐỊNH ĐÔ THỊ',
            priceRange: 'Từ 320.000.000đ', area: '90 - 140m²', timeline: '50 - 65 ngày',
            image: 'https://images.trvl-media.com/lodging/96000000/95370000/95368700/95368646/99763a3e.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
            description: 'Lối sống tịnh tại giữa nhịp sống đô thị, sử dụng các vật liệu tự nhiên thô mộc như đá cuội và gỗ lũa để mang lại cảm giác nghỉ dưỡng.',
            specs: ['Màu sắc: Kem, Xám nhạt, Nâu sẫm', 'Vật liệu: Bê tông mài, Gỗ lũa, Tre', 'Phù hợp: Nghỉ dưỡng, Nhà vườn']
        },
        {
            id: 7, code: 'DDH-2026-07', category: 'classic', name: 'French Provincial', tagline: 'LÃNG MẠN PHÁP',
            priceRange: 'Từ 380.000.000đ', area: '150 - 300m²', timeline: '70 - 85 ngày',
            image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200',
            description: 'Cảm hứng từ miền Nam Pháp mộng mơ với các chi tiết sắt uốn nghệ thuật và vải hoa thêu tay đầy tinh tế, lãng mạn.',
            specs: ['Màu sắc: Kem bơ, Xanh sage, Tím nhạt', 'Vật liệu: Sắt thủ công, Gỗ Teak, Vải thêu', 'Phù hợp: Biệt thự, Homestay']
        },
        {
            id: 8, code: 'DDH-2026-08', category: 'luxury', name: 'Modern Art Deco', tagline: 'KIÊU HÃNH & RỰC RỠ',
            priceRange: 'Từ 550.000.000đ', area: '180 - 280m²', timeline: '65 - 80 ngày',
            image: 'https://media.architecturaldigest.com/photos/623365d6dbf1b09e519a6cad/1:1/w_1571,h_1571,c_limit/02d%20Living%20Room%20-%20Hero%20Shot%20West.jpg',
            description: 'Sự bùng nổ của hình khối và sự xa xỉ nhờ bề mặt sơn mài bóng gương và chi tiết mạ đồng thau, tạo nên hiệu ứng thị giác đẳng cấp.',
            specs: ['Màu sắc: Emerald, Deep Red, Gold', 'Vật liệu: Sơn mài, Đồng thau, Đá Quartzit', 'Phù hợp: Penthouse, Lounge']
        },
        {
            id: 9, code: 'DDH-2026-09', category: 'modern', name: 'Loft Industrial', tagline: 'MẠNH MẼ & PHÓNG KHOÁNG',
            priceRange: 'Từ 240.000.000đ', area: '110 - 180m²', timeline: '40 - 55 ngày',
            image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
            description: ' Industrial phô diễn vẻ đẹp trần trụi của gạch nung, kim loại và trần cao kịch trần, lý tưởng cho những studio sáng tạo cá tính.',
            specs: ['Vật liệu: Gạch thẻ, Sắt đen, Gỗ pallet', 'Màu sắc: Metal Grey, Chocolate, Brick', 'Phù hợp: Căn hộ trần cao, Studio']
        },
        {
            id: 10, code: 'DDH-2026-10', category: 'minimalist', name: 'Soft Minimal', tagline: 'DỊU DÀNG & CẢM XÚC',
            priceRange: 'Từ 290.000.000đ', area: '70 - 130m²', timeline: '45 - 60 ngày',
            image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1200',
            description: 'Sự mềm mại hóa chủ nghĩa tối giản qua các đường cong thạch cao và ánh sáng dịu nhẹ, mang lại cảm giác an toàn, thư thái tuyệt đối.',
            specs: ['Màu sắc: Cam đào, Kem, Sand', 'Vật liệu: Thạch cao bo cong, Vải len', 'Phù hợp: Căn hộ nữ tính, Phòng ngủ']
        },
        {
            id: 11, code: 'DDH-2026-11', category: 'classic', name: 'Victorian Mood', tagline: 'QUÝ TỘC ANH QUỐC',
            priceRange: 'Từ 480.000.000đ', area: '160 - 250m²', timeline: '70 - 85 ngày',
            image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80&w=1200',
            description: 'Hoàng gia Anh hiện diện qua những bộ sofa bọc nhung và phào chỉ trần cầu kỳ, mang lại vẻ đẹp quý phái vượt thời gian.',
            specs: ['Vật liệu: Nhung đỏ, Gỗ mun chạm trổ', 'Màu sắc: Bordeaux, Royal Gold', 'Phù hợp: Nhà biệt phố, Biệt thự']
        },
        {
            id: 12, code: 'DDH-2026-12', category: 'luxury', name: 'Penthouse View', tagline: 'TẦM NHÌN VÔ CỰC',
            priceRange: 'Từ 750.000.000đ', area: '250 - 400m²', timeline: '90 - 110 ngày',
            image: 'https://cdn.baodauthau.vn/images/eb68875604013237baaa21037e2492a9e92507d3c9b8d8b9963269313db22240d8b7e5969b14756a309d8f858381994d2356e8154aefab5f203d5c85d63908de/25-1-4434.png',
            description: 'Sống trên đỉnh thành phố với hệ thống kính Panorama toàn cảnh, kết hợp cùng nội thất đá tự nhiên mài bóng đẳng cấp thế giới.',
            specs: ['Vật liệu: Kính 3 lớp, Đá xuyên sáng Onyx', 'Phù hợp: Sky Villa, Penthouse cao cấp']
        },
        {
            id: 13, code: 'DDH-2026-13', category: 'modern', name: 'Mid-Century Style', tagline: 'CẢM HỨNG THỰC DỤNG',
            priceRange: 'Từ 350.000.000đ', area: '100 - 150m²', timeline: '50 - 65 ngày',
            image: 'https://images.unsplash.com/photo-1600585154166-d8897c8f930d?auto=format&fit=crop&q=80&w=1200',
            description: 'Sự trở lại của thiết kế biểu tượng những năm 50, đề cao sự tối ưu của công năng và những gam màu Teak ấm áp từ gỗ tự nhiên.',
            specs: ['Vật liệu: Gỗ Teak Nam Mỹ, Nhựa Eames', 'Màu sắc: Mustard, Teal, Cam đất', 'Phù hợp: Căn hộ hiện đại']
        },
        {
            id: 14, code: 'DDH-2026-14', category: 'minimalist', name: 'Bauhaus Loft', tagline: 'HÌNH KHỐI CƠ BẢN',
            priceRange: 'Từ 320.000.000đ', area: '120 - 200m²', timeline: '55 - 70 ngày',
            image: 'https://images.adsttc.com/media/images/5018/54b8/28ba/0d33/a800/0744/newsletter/stringio.jpg?1414032680',
            description: 'Thẩm mỹ kiến trúc đỉnh cao của Đức, xóa nhòa ranh giới giữa mỹ thuật và kỹ thuật qua các hình khối cơ bản và chất liệu thép.',
            specs: ['Vật liệu: Thép ống Chrome, Da cao cấp', 'Phù hợp: Loft chung cư, Studio cá tính']
        },
        {
            id: 15, code: 'DDH-2026-15', category: 'classic', name: 'Renaissance Villa', tagline: 'DI SẢN PHỤC HƯNG',
            priceRange: 'Từ 800.000.000đ', area: '300 - 600m²', timeline: '100 - 120 ngày',
            image: 'https://seasidequynhon.com/wp-content/uploads/2021/08/TOM1533-HDR-scaled.jpg',
            description: 'Sự hùng vĩ Phục hưng tái hiện qua các mảng bích họa, cột trụ đá cẩm thạch kiêu hãnh và ánh vàng diễm lệ bao trùm toàn bộ không gian.',
            specs: ['Vật liệu: Cẩm thạch trắng, Tranh tường', 'Màu sắc: Sepia Tone, Gold Leaf', 'Phù hợp: Lâu đài, Biệt thự']
        },
        {
            id: 16, code: 'DDH-2026-16', category: 'luxury', name: 'Indochine Boutique', tagline: 'NỤ HÔN PHÁP TRÊN MÔI Á ĐÔNG',
            priceRange: 'Từ 420.000.000đ', area: '130 - 220m²', timeline: '65 - 80 ngày',
            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200',
            description: 'Bản hòa ca diễm lệ giữa văn hóa Á Đông nồng nàn và kiến trúc Pháp lãng mạn, sử dụng gạch bông và gỗ kỉ đặc trưng vùng nhiệt đới.',
            specs: ['Vật liệu: Gạch bông, Mây đan, Gỗ kỉ', 'Màu sắc: Heritage Yellow, Raven Black', 'Phù hợp: Nhà mang nét xưa']
        },
        {
            id: 17, code: 'DDH-2026-17', category: 'modern', name: 'Biophilic Design', tagline: 'HƠI THỞ TỰ NHIÊN',
            priceRange: 'Từ 390.000.000đ', area: '140 - 250m²', timeline: '60 - 75 ngày',
            image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&q=80&w=1200',
            description: 'Xóa nhòa giới hạn giữa con người và thiên nhiên thông qua hệ thống vườn đứng trong nhà và ánh sáng diệu kỳ từ giếng trời.',
            specs: ['Vật liệu: Gỗ xanh, Thủy sinh AI', 'Màu sắc: Moss Green, Terra Cotta', 'Phù hợp: Nhà phố có giếng trời']
        },
        {
            id: 18, code: 'DDH-2026-18', category: 'minimalist', name: 'Monochrome Living', tagline: 'MA LỰC ĐƠN SẮC',
            priceRange: 'Từ 310.000.000đ', area: '90 - 140m²', timeline: '45 - 60 ngày',
            image: 'https://livom.at/cdn/shop/articles/View_1_-_D02_1_693c5541-f1ea-406d-9d06-871c3e74743f.jpg?v=1743569341&width=1500',
            description: ' Sự tinh tế đỉnh cao của nghệ thuật đơn sắc, sử dụng sự tương phản cực đại để tạo độ sâu và tính cá nhân hóa tuyệt vời.',
            specs: ['Màu sắc: Super Black, Snow White', 'Phù hợp: Căn hộ cho người có gu', 'Phong cách: High Precision']
        },
        {
            id: 19, code: 'DDH-2026-19', category: 'classic', name: 'Colonial Estate', tagline: 'KÝ ỨC THUỘC ĐỊA',
            priceRange: 'Từ 450.000.000đ', area: '200 - 350m²', timeline: '75 - 90 ngày',
            image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=1200',
            description: 'Vẻ đẹp di sản thời thuộc địa hào hùng, sử dụng gỗ quý tối màu và sàn gạch hoa văn tinh xảo phủ bóng loáng.',
            specs: ['Vật liệu: Gỗ mun quý, Quạt trần cánh gỗ', 'Màu sắc: Vanilla Warm, Quế', 'Phù hợp: Biệt thự vườn']
        },
        {
            id: 20, code: 'DDH-2026-20', category: 'luxury', name: 'Tech Luxury', tagline: 'TƯƠNG LAI XA XỈ',
            priceRange: 'Từ 850.000.000đ', area: '300 - 500m²', timeline: '95 - 110 ngày',
            image: 'https://luxurytech.gr/sites/default/files/first.jpg',
            description: 'Sự dẫn đầu của tương lai nơi các thiết bị nội thất thông minh ẩn mình trong những vật liệu xa xỉ nhất thế giới.',
            specs: ['Vật liệu: Thép mờ, Smart-glass AI', 'Công nghệ: Tự động hóa toàn phần', 'Phù hợp: Smart Villa']
        },
        {
            id: 21, code: 'DDH-2026-21', category: 'modern', name: 'Coastal Retreat', tagline: 'HƠI THỞ ĐẠI DƯƠNG',
            priceRange: 'Từ 360.000.000đ', area: '120 - 200m²', timeline: '55 - 70 ngày',
            image: 'https://www.sewbeautifulwindows.com/wp-content/uploads/2024/10/sew-beautiful-Coastal-Retreat-Buchanan45-Great-Room-web.jpg',
            description: 'Tái hiện bầu không khí biển cả xanh ngắt qua các vật liệu chống ăn mòn và bảng màu nước biển mang hơi thở nhiệt đới.',
            specs: ['Màu sắc: Azure, Sand Beige', 'Vật liệu: Gỗ chịu nước, Vải Canvas', 'Phù hợp: Biệt thự ven biển']
        },
        {
            id: 22, code: 'DDH-2026-22', category: 'minimalist', name: 'Wabi-Sabi Sanctuary', tagline: 'VẺ ĐẸP KHIẾM KHUYẾT',
            priceRange: 'Từ 330.000.000đ', area: '100 - 160m²', timeline: '60 - 75 ngày',
            image: 'https://salvatori-dam.imgix.net/Salvatori_Inspiration_Living-in-Westcheaster_3.jpg?fp-x=0.5&fp-y=0.5&auto=format&w=1151&h=863&fm=jpeg&q=70&fit=crop',
            description: 'Tôn vinh vẻ đẹp chân thực từ sự không hoàn hảo và vết hằn của thời gian trên những chất liệu đất sét, thô mộc.',
            specs: ['Vật liệu: Đất sét nung, Vải đũi mộc', 'Màu sắc: Earth Tone, Charcoal Grey', 'Phù hợp: Studio nghệ thuật']
        },
        {
            id: 23, code: 'DDH-2026-23', category: 'classic', name: 'Modern Heritage', tagline: 'CẢ TRÂN TRỌNG & CẢI CÁCH',
            priceRange: 'Từ 420.000.000đ', area: '150 - 240m²', timeline: '65 - 80 ngày',
            image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80&w=1200',
            description: 'Gìn giữ sự trang nghiêm truyền thống đồng thời giải phóng tối đa công năng sử dụng cho đời sống tiện nghi hiện đại.',
            specs: ['Phong cách: Timeless Classic', 'Màu sắc: Neutral Grey, Cream', 'Phù hợp: Nhà phố đa chức năng']
        },
        {
            id: 24, code: 'DDH-2026-24', category: 'luxury', name: 'Yacht-Inspired', tagline: 'SIÊU DU THUYỀN TẠI GIA',
            priceRange: 'Từ 920.000.000đ', area: '250 - 450m²', timeline: '100 - 120 ngày',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
            description: 'Cảm hứng từ những kỳ nghỉ xa hoa trên du thuyền siêu sang với những đường cong nội thất bo tròn gợi cảm và tinh tế.',
            specs: ['Vật liệu: Gỗ Lacquer bóng, Nickel mạ', 'Màu sắc: Deep Ocean Navy', 'Phù hợp: Luxury Villa']
        },
        {
            id: 25, code: 'DDH-2026-25', category: 'modern', name: 'Futuristic Studio', tagline: 'SÁNG TẠO KHÔNG GIỚI HẠN',
            priceRange: 'Từ 280.000.000đ', area: '60 - 100m²', timeline: '45 - 60 ngày',
            image: 'https://cdnb.artstation.com/p/assets/images/images/038/784/829/large/scene-unique-futuristic-studio-apartment.jpg?1624039595',
            description: 'Góc làm việc bùng nổ năng lượng cho các creators với ánh sáng đa màu sắc và vật liệu công nghệ cao xuyên thấu.',
            specs: ['Vật liệu: Resin xuyên sáng, Chrome mạ', 'Màu sắc: Neon Mood, Metal', 'Phù hợp: Studio làm việc']
        },
        {
            id: 26, code: 'DDH-2026-26', category: 'minimalist', name: 'White Aura', tagline: 'TRONG TRẺO KIẾN TRÚC',
            priceRange: 'Từ 290.000.000đ', area: '80 - 130m²', timeline: '50 - 65 ngày',
            image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&q=80&w=1200',
            description: 'Nghệ thuật sử dụng dải màu trắng vô tận để mở rộng ranh giới thị giác, tạo ra một bầu không khí trong trẻo khó tin.',
            specs: ['Màu sắc: All shades of White', 'Vật liệu: Ceramic mờ, Thạch cao mịn', 'Phù hợp: Căn hộ studio']
        },
        {
            id: 27, code: 'DDH-2026-27', category: 'classic', name: 'Hollywood Regency', tagline: 'KỊCH TÍNH & HÀO NHOÁNG',
            priceRange: 'Từ 550.000.000đ', area: '180 - 300m²', timeline: '80 - 95 ngày',
            image: 'https://files.theinteriorsaddict.com/uploads/2016/11/SPH_11-09-15_0040_1-copy-640x479.jpg',
            description: 'Vẻ rạng rỡ và sự kịch tính của các dinh thự tại trung tâm điện ảnh thế giới, ngập tràn gương và nhung cao cấp.',
            specs: ['Vật liệu: Gương Smoked, Velvet', 'Màu sắc: Champagne Gold', 'Phù hợp: Biệt thự sang trọng']
        },
        {
            id: 28, code: 'DDH-2026-28', category: 'luxury', name: 'Quiet Luxury', tagline: 'SANG TRỌNG TRONG TĨNH LẶNG',
            priceRange: 'Từ 950.000.000đ', area: '300 - 600m²', timeline: '110 - 130 ngày',
            image: 'https://images.ctfassets.net/wlzmdirin2hy/3gT0M6t6AvCcu6kSF43f6y/e69331525ad4aafbd71e008754bdfad9/lx_chicago76_hom_project_05',
            description: 'Đỉnh cao của sự sang trọng thầm lặng nơi không có bất kỳ màu sắc phô trương nào, chỉ có sự đắt giá của vật liệu.',
            specs: ['Vật liệu: Silk tơ tằm, Gỗ quý hiếm', 'Màu sắc: Greyish Taupe', 'Phù hợp: Dinh thự riêng biệt']
        },
        {
            id: 29, code: 'DDH-2026-29', category: 'modern', name: 'Dynamic Open', tagline: 'CHUYỂN ĐỘNG KHÔNG GIAN',
            priceRange: 'Từ 410.000.000đ', area: '180 - 250m²', timeline: '70 - 85 ngày',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
            description: 'Kiến trúc chuyển động với vách ngăn đa năng, biến đổi không gian linh hoạt từ phòng khách thành văn phòng làm việc.',
            specs: ['Phong cách: Transformable Space', 'Màu sắc: Urban Grey, Teal', 'Phù hợp: Penthouse hiện đại']
        },
        {
            id: 30, code: 'DDH-2026-30', category: 'minimalist', name: 'Urban Zen Garden', tagline: 'VƯỜN THIỀN GIỮA PHỐ',
            priceRange: 'Từ 330.000.000đ', area: '100 - 160m²', timeline: '55 - 70 ngày',
            image: 'https://www.urbanplant.in/a/blog/media/urban-plant-india.myshopify.com/Post/featured_img/Add_a_subheading_(2)_(1)-2.webp',
            description: 'Thiên nhiên được cô đọng một cách tinh tế trong từng mét vuông, mang hơi thở thiền định vào đời sống đô thị hối hả.',
            specs: ['Vật liệu: Sỏi tự nhiên, Tre carbon', 'Màu sắc: Moss Green, Stone Grey', 'Phù hợp: Căn hộ cao cấp']
        }
    ]
};
