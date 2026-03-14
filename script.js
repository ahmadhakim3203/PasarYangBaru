// DATA KOMPLEKS UNTUK 10 SYARAT (STUDI KASUS DETAIL)
const syaratData = [
    {
        num: 1,
        title: "Kemudahan & efisiensi",
        desc: "Konsumen milenial menuntut kecepatan dan kemudahan. Tidak mau antre, tidak mau ribet.",
        contoh: "📌 Uber: pesan taksi 5 detik, langsung muncul. GrabNow: langsung terhubung driver.",
        stat: "⏱️ Rata-rata waktu transaksi: < 1 menit",
        logo: ['fa-uber', 'Uber', 'fa-bolt', 'Grab', 'fa-amazon', 'Amazon'],
        detail: {
            perusahaan: "Uber Technologies Inc.",
            pendiri: "Travis Kalanick, Garrett Camp",
            tahun: "2009 (San Francisco)",
            model: "Ridesharing, on-demand transport",
            kasus: "Uber mengubah industri taksi global dengan memanfaatkan GPS, pembayaran digital, dan rating driver. Dalam 5 tahun, Uber hadir di 60+ negara dan memaksa regulator di seluruh dunia merevisi aturan transportasi.",
            dampak: "Nilai pasar taksi konvensional turun 40% di AS. Lebih dari 50% perjalanan taksi di New York digantikan Uber.",
            data1: "93 juta", data1label: "Pengguna aktif bulanan",
            data2: "$72 milyar", data2label: "Market cap (2024)",
            data3: "10.000+", data3label: "Kota di dunia"
        }
    },
    {
        num: 2,
        title: "Nilai lebih (value)",
        desc: "Lebih murah, lebih banyak pilihan, atau kualitas lebih baik dibanding pasar lama.",
        contoh: "📌 Airbnb: menginap 30-50% lebih murah dari hotel.",
        stat: "💰 Rata-rata harga Airbnb 35% lebih rendah dari hotel",
        logo: ['fa-airbnb', 'Airbnb', 'fa-amazon', 'Amazon'],
        detail: {
            perusahaan: "Airbnb Inc.",
            pendiri: "Brian Chesky, Joe Gebbia, Nathan Blecharczyk",
            tahun: "2008 (San Francisco)",
            model: "Peer-to-peer lodging, homestay",
            kasus: "Bermula dari menyewakan kasur angin di apartemen, Airbnb mengganggu industri perhotelan dengan menawarkan pengalaman lokal dan harga bersaing. Hotel bintang 3-4 kehilangan pangsa pasar karena konsumen beralih ke Airbnb untuk perjalanan keluarga atau grup.",
            dampak: "Di Paris, jumlah listing Airbnb melebihi kamar hotel. Harga kamar hotel di kota besar turun rata-rata 15%.",
            data1: "4 juta", data1label: "Host di dunia",
            data2: "1 milyar", data2label: "Tamu kumulatif",
            data3: "220+", data3label: "Negara"
        }
    },
    {
        num: 3,
        title: "Pemanfaatan teknologi",
        desc: "AI, big data, cloud computing, algoritma sebagai tulang punggung operasi.",
        contoh: "📌 Google: algoritma pencarian dan iklan.",
        stat: "🤖 80% keputusan beli dipengaruhi rekomendasi AI",
        logo: ['fa-google', 'Google', 'fa-gofore', 'Gojek', 'fa-amazon', 'Amazon'],
        detail: {
            perusahaan: "Google LLC",
            pendiri: "Larry Page, Sergey Brin",
            tahun: "1998 (Menlo Park)",
            model: "Search engine, iklan digital, cloud",
            kasus: "Google mengubah cara dunia mengakses informasi. Algoritma PageRank dan machine learning membuat pencarian semakin relevan. Google juga mempelopori iklan berbasis minat (targeted ads) yang mengalahkan iklan koran dan TV.",
            dampak: "Industri periklanan konvensional (koran, majalah) turun drastis. Pendapatan iklan digital sekarang melebihi TV.",
            data1: "8,5 milyar", data1label: "Pencarian per hari",
            data2: "90%", data2label: "Market share search",
            data3: "$1,6 triliun", data3label: "Market cap (2024)"
        }
    },
    {
        num: 4,
        title: "Konsolidasi pasar terfragmentasi",
        desc: "Menyatukan ribuan pedagang kecil, UMKM, penyedia jasa dalam satu platform.",
        contoh: "📌 Gojek: menggabungkan ojek, tukang bersih, tukang pijat.",
        stat: "🇮🇩 Gojek: >2 juta mitra driver",
        logo: ['fa-gofore', 'Gojek', 'fa-shopify', 'Shopify'],
        detail: {
            perusahaan: "Gojek (GoTo Group)",
            pendiri: "Nadiem Makarim, Kevin Aluwi, Michaelangelo Moran",
            tahun: "2010 (Jakarta)",
            model: "Super-app, on-demand services",
            kasus: "Gojek memulai dengan layanan ojek online, kemudian mengkonsolidasi berbagai layanan informal: ojek, tukang bersih, tukang pijat, kurir, bahkan psikolog. Dalam satu dekade, Gojek menjadi platform raksasa dengan jutaan mitra dan ratusan juta transaksi per tahun.",
            dampak: "Memberi penghasilan formal bagi sektor informal. Mengubah kebiasaan transportasi dan konsumsi masyarakat Indonesia.",
            data1: "2,5 juta", data1label: "Mitra driver",
            data2: "900.000+", data2label: "Merchant GoFood",
            data3: "190 juta", data3label: "Unduhan aplikasi"
        }
    },
    {
        num: 5,
        title: "Kemudahan bagi pemasok",
        desc: "Proses registrasi cepat, tanpa modal besar, bisa langsung jualan.",
        contoh: "📌 Shopify: buka toko online 5 menit.",
        stat: "⏱️ Rata-rata onboarding: < 10 menit",
        logo: ['fa-shopify', 'Shopify', 'fa-etsy', 'Etsy'],
        detail: {
            perusahaan: "Shopify Inc.",
            pendiri: "Tobias Lütke, Daniel Weinand, Scott Lake",
            tahun: "2006 (Ottawa)",
            model: "E-commerce platform, online store builder",
            kasus: "Shopify memungkinkan siapa saja membuka toko online tanpa keahlian teknis. Dengan template siap pakai, integrasi pembayaran, dan manajemen inventaris, Shopify menjadi tulang punggung jutaan UMKM di seluruh dunia.",
            dampak: "Menggantikan toko fisik dengan toko online. Mempercepat digitalisasi UMKM terutama saat pandemi.",
            data1: "4,4 juta", data1label: "Toko online",
            data2: "$235 milyar", data2label: "GMV (2024)",
            data3: "175+", data3label: "Negara"
        }
    },
    {
        num: 6,
        title: "Melayani permintaan besar",
        desc: "Mampu scaling dari 1 ke jutaan order dalam waktu singkat (peak season).",
        contoh: "📌 Alibaba: 1 milyar paket dalam 24 jam (11.11).",
        stat: "📦 Alibaba 2024: 1.2 milyar paket dalam 24 jam",
        logo: ['fa-amazon', 'Amazon', 'fa-alibaba', 'Alibaba'],
        detail: {
            perusahaan: "Alibaba Group",
            pendiri: "Jack Ma",
            tahun: "1999 (Hangzhou)",
            model: "E-commerce, cloud, fintech",
            kasus: "Alibaba menciptakan 'Singles Day' (11.11) yang menjadi hari belanja terbesar dunia. Dalam 24 jam, volume order bisa mencapai 1,2 milyar paket. Infrastruktur cloud dan logistik Alibaba mampu menangani lonjakan ribuan persen dari hari biasa.",
            dampak: "Mengubah ritel global. Brand-brand dunia berlomba-lomba ikut 11.11. Logistik dan pembayaran digital melompat maju.",
            data1: "1,2 milyar", data1label: "Paket dalam 24 jam",
            data2: "$38,4 milyar", data2label: "GMV 11.11 (2024)",
            data3: "1 milyar+", data3label: "Pengguna tahunan"
        }
    },
    {
        num: 7,
        title: "Menjangkau yang tak terlayani",
        desc: "Melayani segmen yang sebelumnya tak terjangkau pasar formal (unbanked, remote).",
        contoh: "📌 Alipay: pedagang kecil tanpa rekening bank.",
        stat: "🌏 1,7 milyar orang unbanked mulai terlayani fintech",
        logo: ['fa-alipay', 'Alipay', 'fa-gofore', 'Gojek'],
        detail: {
            perusahaan: "Alipay (Ant Group)",
            pendiri: "Jack Ma",
            tahun: "2004 (Hangzhou)",
            model: "Digital payment, fintech",
            kasus: "Alipay lahir sebagai solusi pembayaran untuk marketplace Taobao. Kemudian menjadi payment platform yang melayani pedagang kaki lima, warung kecil, hingga pedesaan yang tidak punya akses ke bank. Menggunakan QR code, pedagang cukup print kode dan bisa terima pembayaran digital.",
            dampak: "Mengurangi penggunaan uang tunai. Memberi akses keuangan ke miliaran orang unbanked di China dan Asia.",
            data1: "1,3 milyar", data1label: "Pengguna",
            data2: "80 juta", data2label: "Merchant",
            data3: "200+", data3label: "Negara"
        }
    },
    {
        num: 8,
        title: "Kebutuhan sehari-hari",
        desc: "Menjadi bagian gaya hidup, digunakan setiap hari (high frequency).",
        contoh: "📌 Gojek: dari GoFood (sarapan) sampai GoMassage (tidur).",
        stat: "📱 GoFood: >75 juta order/bulan",
        logo: ['fa-gofore', 'Gojek', 'fa-whatsapp', 'WhatsApp'],
        detail: {
            perusahaan: "WhatsApp Inc.",
            pendiri: "Jan Koum, Brian Acton",
            tahun: "2009 (California)",
            model: "Instant messaging, komunikasi",
            kasus: "WhatsApp menggantikan SMS dan telepon konvensional. Dengan enkripsi end-to-end dan kemudahan penggunaan, WhatsApp menjadi kebutuhan komunikasi harian miliaran orang. Dari sekadar chat, berkembang jadi voice call, video call, hingga bisnis.",
            dampak: "Industri SMS dan telepon internasional kolaps. Operator telekomunikasi kehilangan pendapatan puluhan milyar dolar.",
            data1: "2 milyar", data1label: "Pengguna",
            data2: "100 milyar", data2label: "Pesan per hari",
            data3: "60+", data3label: "Negara dominan"
        }
    },
    {
        num: 9,
        title: "Konsolidasi pembayaran",
        desc: "Mengintegrasikan berbagai metode pembayaran (kartu, e-wallet, transfer) dalam satu platform.",
        contoh: "📌 Stripe: menyatukan Visa, Mastercard, Amex, e-wallet.",
        stat: "💳 Stripe: 100+ metode pembayaran global",
        logo: ['fa-stripe', 'Stripe', 'fa-google-wallet', 'Google Pay'],
        detail: {
            perusahaan: "Stripe Inc.",
            pendiri: "Patrick Collison, John Collison",
            tahun: "2010 (San Francisco)",
            model: "Payment processing, financial infrastructure",
            kasus: "Stripe menyediakan API sederhana bagi perusahaan untuk menerima pembayaran dari berbagai metode: kartu kredit, e-wallet, bank transfer, buy-now-pay-later. Bisnis tidak perlu repot integrasi satu per satu ke bank. Stripe menangani semuanya.",
            dampak: "Mempercepat pertumbuhan e-commerce dan startup digital. Memungkinkan bisnis kecil menjual ke global tanpa hambatan pembayaran.",
            data1: "3 juta+", data1label: "Bisnis menggunakan",
            data2: "$1 triliun", data2label: "Volume pembayaran/tahun",
            data3: "46 negara", data3label: "Aktif penuh"
        }
    },
    {
        num: 10,
        title: "Efek jejaring",
        desc: "Nilai platform meningkat seiring bertambahnya pengguna (semakin ramai, semakin berharga).",
        contoh: "📌 WhatsApp: makin banyak teman pakai, makin berguna.",
        stat: "📈 WhatsApp: 2 milyar pengguna, efek jaringan eksponensial",
        logo: ['fa-whatsapp', 'WhatsApp', 'fa-facebook-messenger', 'Messenger'],
        detail: {
            perusahaan: "Facebook (Meta Platforms)",
            pendiri: "Mark Zuckerberg",
            tahun: "2004 (Cambridge, Massachusetts)",
            model: "Social media, jaringan sosial",
            kasus: "Facebook tumbuh dengan efek jaringan: semakin banyak teman bergabung, semakin bernilai platform tersebut. Setelah mencapai massa kritis, orang tidak bisa keluar karena semua relasi sosialnya ada di sana. Ini menciptakan monopoli alami.",
            dampak: "Mengubah cara manusia berinteraksi, berita tersebar, dan bisnis beriklan. Industri media konvensional (koran, TV) kehilangan pengaruh.",
            data1: "3,07 milyar", data1label: "Pengguna bulanan",
            data2: "98%", data2label: "Pendapatan dari iklan",
            data3: "$1,2 triliun", data3label: "Market cap (2024)"
        }
    }
];

// Generate kartu syarat setelah DOM siap
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('syaratGrid');
    
    syaratData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'syarat-card';
        card.setAttribute('data-index', index);
        
        // Header
        let logoHtml = '';
        for (let i = 0; i < item.logo.length; i+=2) {
            logoHtml += `<div class="logo-item"><i class="fab ${item.logo[i]}"></i><span>${item.logo[i+1]}</span></div>`;
        }

        card.innerHTML = `
            <div class="syarat-header">
                <span class="syarat-num">${item.num}</span>
                <h4>${item.title}</h4>
            </div>
            <div class="syarat-desc">${item.desc}</div>
            <div class="example-box"><p>${item.contoh}</p><span class="stat-mini">${item.stat}</span></div>
            <div class="logo-group">${logoHtml}</div>
            <div class="detail-panel" id="detail-${index}">
                <div class="detail-title">📋 STUDI KASUS LENGKAP: ${item.detail.perusahaan}</div>
                <div class="detail-grid">
                    <span class="detail-label">Pendiri:</span><span class="detail-value">${item.detail.pendiri}</span>
                    <span class="detail-label">Tahun berdiri:</span><span class="detail-value">${item.detail.tahun}</span>
                    <span class="detail-label">Model bisnis:</span><span class="detail-value">${item.detail.model}</span>
                </div>
                <div class="case-study">
                    <p><strong>Kronologi disruption:</strong> ${item.detail.kasus}</p>
                    <p><strong>Dampak ke industri lama:</strong> ${item.detail.dampak}</p>
                </div>
                <div class="data-table">
                    <div class="data-item"><div class="data-number">${item.detail.data1}</div><div class="data-label">${item.detail.data1label}</div></div>
                    <div class="data-item"><div class="data-number">${item.detail.data2}</div><div class="data-label">${item.detail.data2label}</div></div>
                    <div class="data-item"><div class="data-number">${item.detail.data3}</div><div class="data-label">${item.detail.data3label}</div></div>
                </div>
            </div>
        `;

        // Event klik untuk expand/collapse
        card.addEventListener('click', function(e) {
            // Cegah klik di dalam detail panel agar tidak menutup
            if (e.target.closest('.detail-panel')) return;
            
            const detailPanel = this.querySelector('.detail-panel');
            const isActive = detailPanel.classList.contains('active');
            
            // Tutup semua panel lain
            document.querySelectorAll('.detail-panel').forEach(p => {
                p.classList.remove('active');
            });
            
            // Buka panel ini jika belum aktif
            if (!isActive) {
                detailPanel.classList.add('active');
            }
        });

        grid.appendChild(card);
    });
});
