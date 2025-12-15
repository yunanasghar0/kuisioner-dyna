// URL GOOGLE APPS SCRIPT ANDA
const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbz_jXIpLvNsmUURxAjCFv43KNY8avsz5yVitnNS2F_MmluNV7aPKi2JJDrbcE4CKlDf/exec'; 

// NOMOR WA PENELITI (Ganti dengan nomor asli!)
const WA_NUMBER = '6281234567890';

// DATA SOAL DAN KUNCI JAWABAN
const KUNCI_JAWABAN = {
    'soal1': 'YA', 'soal2': 'YA', 'soal3': 'YA', 'soal4': 'YA', 'soal5': 'TIDAK',
    'soal6': 'YA', 'soal7': 'YA', 'soal8': 'YA', 'soal9': 'YA', 'soal10': 'YA',
    'soal11': 'YA', 'soal12': 'YA', 'soal13': 'YA', 'soal14': 'YA', 'soal15': 'YA',
    'soal16': 'TIDAK', 'soal17': 'TIDAK', 'soal18': 'TIDAK', 'soal19': 'TIDAK', 'soal20': 'YA'
};

const questions = [
    "1. Cara yang paling ampuh bagi remaja yang belum menikah agar tidak tertular penyakit menular seksual adalah dengan tidak melakukan hubungan seksual baik oral, vaginal, atau anal",
    "2. Cara memakai kondom yang tidak benar dapat memungkinkan untuk terjadi kehamilan atau terkena penyakit menular seksual",
    "3. Haid / menstruasi adalah keluarnya darah dari vagina pada perempuan ketika ia memasuki masa remaja",
    "4. Mimpi basah biasa terjadi pada laki-laki dalam masa pubertas",
    "5. Kalau seorang perempuan tidak mengalami menstruasi pada usia 14, maka ada sesuatu yang tidak normal",
    "6. Kalau perempuan yang sudah mengalami haid, tidak mengalami haid pada waktu nya, bisa saja ia hamil ",
    "7. Seorang remaja perempuan bisa menjadi hamil walaupun hanya satu kali berhubungan seks",
    "8. Kesehatan reproduksi merupakan keadaan fisik, mental dan sosial secara menyeluruh, dalam segala hal yang berhubungan dengan system reproduksi berikut fungsi-fungsi dan proses-prosesnya",
    "9. Mimpi basah merupakan perubahan fisik laki-laki awal setelah memasuki masa pubertas",
    "10. Awal pubertas pada remaja laki-laki dimulai pada usia 10-13 tahun",
    "11. Penyakit menular seksual merupakan Penyakit yang timbul akibat hubungan seksual",
    "12. Kencing nanah merupakan tanda dari salah satu penyakit menular seksual yaitu GONORE",
    "13. HIV/AIDS juga merupakan penyakit menular seksual yang sangat berbahaya",
    "14. Pubertas adalah masa peralihan menjadi orang dewasa dimana organ seksual mulai tumbuh dan berkembang dan mampu melakukan fungsi reproduksi",
    "15. Pubertas adalah masa peralihan menjadi orang dewasa dimana organ reproduksi mulai matang dan berkembang dan mampu melakukan fungsi reproduksi",
    "16. Berganti-ganti pasangan tidak meningkatkan resiko tertular penyakit menular seksual",
    "17. Penggunaan kondom saat melakukan hubungan seksual dapat 100% mencegah kehamilan",
    "18. Kita akan beresiko tertular penyakit menular seksual hanya bila berhubungan seks dengan pekerja seks komersial",
    "19. Penyakit menular seksual hanya terjadi pada orang yang homoseksual",
    "20. Seks diluar nikah sama dengan seks bebas atau seks tidak aman"
];

let currentPage = -1; // -1: Intro, 0: Identitas, 1-20: Soal, 21: Reward
const userAnswers = {}; 
const formContainer = document.getElementById('kuisioner-form');

// --- FUNGSI RENDER HALAMAN ---

function renderPage() {
    formContainer.innerHTML = '';
    window.scrollTo(0,0); // Scroll ke atas setiap ganti halaman

    if (currentPage === -1) {
        renderIntro();
    } else if (currentPage === 0) {
        renderIdentitas();
    } else if (currentPage >= 1 && currentPage <= questions.length) {
        renderQuestion(currentPage);
    } else if (currentPage === questions.length + 1) {
        renderReward();
    }
}

// 1. HALAMAN INTRO
function renderIntro() {
    formContainer.innerHTML = `
        <h2>✨ Selamat Datang ✨</h2>
        <h3>Kuisioner Penelitian Kelompok DYNA - Kelas 9B</h3>
        
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
            <p style="margin-bottom: 10px;">Halo! Terima kasih sudah mampir.</p>
            <p>Data yang kamu isi di sini <strong>100% Aman & Rahasia</strong>. Hanya digunakan untuk tugas sekolah kami.</p>
        </div>

        <button class="btn-primary" onclick="currentPage=0; renderPage()">Mulai Sekarang 🚀</button>
    `;
}

// 2. HALAMAN IDENTITAS
function renderIdentitas() {
    formContainer.innerHTML = `
        <h2>Data Diri</h2>
        <h3>Kenalan dulu yuk!</h3>
        
        <div class="input-group">
            <label>Nama Lengkap / Panggilan</label>
            <input type="text" id="nama" placeholder="Tulis namamu disini..." value="${userAnswers.nama || ''}">
        </div>

        <div class="input-group">
            <label>Rentang Usia</label>
            <select id="umur">
                <option value="">Pilih Usia...</option>
                <option value="10-19 tahun">10-19 tahun</option>
                <option value="20-30 tahun">20-30 tahun</option>
                <option value=">30 tahun">Di atas 30 tahun</option>
            </select>
        </div>

        <button class="btn-primary" onclick="submitIdentitas()">Lanjut ke Soal ➡️</button>
    `;
}

function submitIdentitas() {
    const nama = document.getElementById('nama').value.trim();
    const umur = document.getElementById('umur').value;
    
    if(!nama || !umur) {
        alert("Mohon lengkapi nama dan usia dulu ya! 🙏");
        return;
    }
    userAnswers.nama = nama;
    userAnswers.umur = umur;
    currentPage = 1;
    renderPage();
}

// 3. HALAMAN SOAL
function renderQuestion(idx) {
    const text = questions[idx-1];
    formContainer.innerHTML = `
        <h2>Soal ${idx} / 20</h2>
        <div class="question-content">${text}</div>
        
        <div class="button-group">
            <button class="btn-primary" onclick="answerQuestion(${idx}, 'YA')">YA</button>
            <button class="btn-secondary" onclick="answerQuestion(${idx}, 'TIDAK')">TIDAK</button>
        </div>
    `;
}

function answerQuestion(idx, ans) {
    userAnswers['soal'+idx] = ans;
    currentPage++;
    
    if(currentPage > questions.length) {
        finishQuiz();
    } else {
        renderPage();
    }
}

// 4. LOGIKA SELESAI & KIRIM DATA
function finishQuiz() {
    // Hitung Skor
    let skor = 0;
    for(let i=1; i<=20; i++) {
        if(userAnswers['soal'+i] === KUNCI_JAWABAN['soal'+i]) skor++;
    }
    userAnswers.totalBenar = skor;

    // Tampilan Loading
    formContainer.innerHTML = `
        <h2>Menyimpan Jawaban...</h2>
        <p>Mohon tunggu sebentar ya ⏳</p>
    `;

    // Kirim ke Google Sheets
    const params = new URLSearchParams();
    for(let key in userAnswers) params.append(key, userAnswers[key]);

    fetch(GAS_WEB_APP_URL, {
        method: 'POST',
        body: params
    })
    .then(res => res.json())
    .then(data => {
        currentPage = questions.length + 1;
        renderPage();
    })
    .catch(err => {
        console.error(err);
        alert("Gagal mengirim data (Masalah Koneksi). Coba lagi ya.");
        currentPage = questions.length + 1; // Tetap lanjut ke reward meski error (opsional)
        renderPage();
    });
}

// 5. HALAMAN REWARD
function renderReward() {
    const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    const msgTemplate = `Halo kak, saya ${userAnswers.nama}. Saya sudah selesai isi kuisioner DYNA dan mau klaim: `;

    formContainer.innerHTML = `
        <h2>🎉 Selesai! 🎉</h2>
        <h3>Terima kasih <strong>${userAnswers.nama}</strong>!</h3>
        
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
            <p>Jawabanmu sudah kami terima.</p>
        </div>

        <p style="margin-bottom: 15px;">🎁 <strong>Pilih Hadiah (Opsional):</strong></p>
        
        <a href="${waLink(msgTemplate + 'Viu Premium')}" target="_blank" class="reward-btn btn-viu">Viu Premium Seumur Hidup</a>
        <a href="${waLink(msgTemplate + 'Alight Motion Pro')}" target="_blank" class="reward-btn btn-alight">Alight Motion Pro 1 Tahun</a>
        <a href="${waLink(msgTemplate + 'Youtube Premium')}" target="_blank" class="reward-btn btn-youtube">Youtube Premium 1 Bulan</a>

        <button class="btn-secondary" onclick="window.close()" style="margin-top: 20px;">Tutup / Selesai</button>
    `;
}

// --- EFEK BACKGROUND (Watermark & Salju) ---
function startBackground() {
    const bg = document.getElementById('watermark-bg');
    const items = ['❄️', '✨', 'Made by Yunan Asghar']; // Campuran salju dan watermark
    
    setInterval(() => {
        const el = document.createElement('div');
        el.className = 'falling-item';
        el.innerText = items[Math.floor(Math.random() * items.length)];
        
        el.style.left = Math.random() * 100 + 'vw';
        el.style.animationDuration = (Math.random() * 5 + 5) + 's'; // 5-10 detik jatuh
        el.style.fontSize = Math.random() < 0.3 ? '10px' : '16px'; // Ukuran variasi
        
        bg.appendChild(el);
        
        // Hapus elemen setelah animasi selesai agar memori tidak penuh
        setTimeout(() => { el.remove() }, 10000);
    }, 800); // Muncul setiap 0.8 detik
}

// MULAI APLIKASI
document.addEventListener('DOMContentLoaded', () => {
    renderPage();
    startBackground();
});
