// *******************************************************************
// ⚠️ PASTIKAN URL DEPLOYMENT GOOGLE APPS SCRIPT ANDA DI SINI
const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbz_jXIpLvNsmUURxAjCFv43KNY8avsz5yVitnNS2F_MmluNV7aPKi2JJDrbcE4CKlDf/exec'; 
// *******************************************************************

// --- KUNCI JAWABAN ---
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

let currentPage = -1; 
const userAnswers = {}; 
const kuisionerForm = document.getElementById('kuisioner-form');


// --- FUNGSI UTAMA RENDER HALAMAN ---
function renderPage() {
    kuisionerForm.innerHTML = ''; 

    if (currentPage === -1) { 
        renderIntroPage();
    } else if (currentPage === 0) { 
        renderIdentitasPage();
    } else if (currentPage >= 1 && currentPage <= questions.length) { 
        renderQuestionPage(currentPage);
    } else if (currentPage === questions.length + 1) {
        renderRewardPage();
    }
}

// --- (-1) RENDER HALAMAN PENGANTAR (Dark Mode Aesthetic) ---
function renderIntroPage() {
    // Styling di sini disederhanakan karena gaya utama ada di CSS
    kuisionerForm.innerHTML = `
        <div id="intro-page" style="text-align: center; padding: 10px 0;">
            <h2 style="color: #00ffff; font-size: 2em; margin-bottom: 10px;">
                🎉 Selamat Datang! 🎉
            </h2>
            <h3 style="color: #ff00ff; margin-bottom: 30px; font-weight: 500;">
                Pemberitahuan Penting Mengenai Kuisioner
            </h3>
            
            <div style="background-color: rgba(0, 255, 255, 0.05); padding: 25px; border-radius: 12px; border: 2px solid #00ffff; margin-bottom: 35px; text-align: left; box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);">
                <p style="font-size: 1.1em; line-height: 1.7; color: #e0ffff;">
                    Kuisioner ini merupakan bagian dari 
                    <span style="font-weight: bold; color: #ff00ff;">Penelitian Tugas Kokulikuler</span> 
                    yang dilaksanakan oleh kelompok 
                    <span style="font-weight: bold; color: #ff00ff;">DYNA</span> 
                    dari 
                    <span style="font-weight: bold; color: #ff00ff;">Kelas 9B SMP Negeri 1 Kalasan</span>.
                </p>
                <hr style="border: 0; border-top: 1px solid rgba(0, 255, 255, 0.3); margin: 15px 0;">
                <p style="font-size: 1em; color: #ccc;">
                    Seluruh data dan jawaban yang Anda berikan akan dijaga kerahasiaannya dan hanya akan digunakan untuk tujuan akademis dan penelitian kelompok kami.
                </p>
            </div>
            
            <h4 style="color: #90ee90; margin-top: 30px; font-style: italic;">
                Terima kasih atas kesediaan dan partisipasi Anda.
            </h4>
            
            <button class="btn-primary" style="margin-top: 30px; padding: 15px 40px; font-size: 1.2em;" onclick="currentPage = 0; renderPage();">
                <span style="margin-right: 10px;">➡️</span> LANJUT MENGISI DATA DIRI
            </button>
        </div>
    `;
}


// --- 1. RENDER HALAMAN IDENTITAS BARU (Nama & Rentang Umur) ---
function renderIdentitasPage() {
    const ageRanges = [
        'Pilih Rentang Usia', '10-19 tahun', '20-30 tahun', '>30 tahun'
    ];
    
    const optionsHtml = ageRanges.map(range => 
        `<option value="${range === 'Pilih Rentang Usia' ? '' : range}" ${userAnswers.umur === range ? 'selected' : ''}>${range}</option>`
    ).join('');

    kuisionerForm.innerHTML = `
        <h2>Input Data Diri</h2>
        <h3>Mohon Isi Data Diri Anda</h3>
        <div class="input-group">
            <label for="nama">Nama:</label>
            <input type="text" id="nama" value="${userAnswers.nama || ''}" required>
        </div>
        <div class="input-group">
            <label for="umur">Rentang Umur:</label>
            <select id="umur" required>
                ${optionsHtml}
            </select>
        </div>
        <div style="text-align: center; margin-top: 30px;">
            <button class="btn-primary" onclick="nextPageIdentitas()">Lanjut ke Quisioner</button>
        </div>
    `;
}

function nextPageIdentitas() {
    const nama = document.getElementById('nama').value.trim();
    const umur = document.getElementById('umur').value; 

    if (!nama) {
        alert('Mohon lengkapi Nama Anda.');
        return;
    }
    
    if (!umur) {
        alert('Mohon pilih Rentang Umur Anda.');
        return;
    }

    userAnswers.nama = nama;
    userAnswers.umur = umur; 
    
    currentPage = 1; 
    renderPage();
}


// --- 2. RENDER HALAMAN SOAL ---
function renderQuestionPage(qNumber) {
    const questionIndex = qNumber - 1;
    const questionText = questions[questionIndex];

    kuisionerForm.innerHTML = `
        <h2>Soal ${qNumber} dari ${questions.length}</h2>
        <div class="question-content">
            ${questionText}
        </div>
        <div class="button-group">
            <button class="btn-primary" onclick="submitAnswer(${qNumber}, 'YA')">YA</button>
            <button class="btn-secondary" onclick="submitAnswer(${qNumber}, 'TIDAK')">TIDAK</button>
        </div>
    `;
}

function calculateScore() {
    let correctCount = 0;
    
    for (let i = 1; i <= questions.length; i++) {
        const key = 'soal' + i; 
        
        if (userAnswers[key] && userAnswers[key] === KUNCI_JAWABAN[key]) {
            correctCount++; 
        }
    }
    
    userAnswers.totalBenar = correctCount; 
}

function submitAnswer(qNumber, answer) {
    userAnswers['soal' + qNumber] = answer; 
    currentPage++;

    if (currentPage <= questions.length) {
        renderPage(); 
    } else {
        calculateScore(); 
        submitDataToSheets();
    }
}


// --- 3. KIRIM DATA KE GOOGLE SHEETS (DENGAN SPINNER) ---
async function submitDataToSheets() {
    kuisionerForm.innerHTML = `
        <div id="loading-message">
            <div class="loading-spinner"></div>
            <h3>Sedang Mengirim Data...</h3>
            <p style="color: #ccc;">Mohon tunggu sebentar hingga muncul ucapan terima kasih.</p>
        </div>
    `;
    
    const params = new URLSearchParams();
    for (const key in userAnswers) {
        params.append(key, userAnswers[key]);
    }

    try {
        const response = await fetch(GAS_WEB_APP_URL, {
            method: 'POST',
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString()
        });

        const result = await response.json();

        if (response.ok && result.result === "success") {
            currentPage = questions.length + 1; 
            renderPage();
        } else {
            kuisionerForm.innerHTML = '<h3 style="color:red;">ERROR Pengiriman:</h3><p style="color: #ccc;">Gagal menyimpan data ke Google Sheets. Detail: ' + (result.message || 'Unknown Error') + '</p>';
        }

    } catch (error) {
        console.error('Submission Error:', error);
        kuisionerForm.innerHTML = `
            <h3 style="color:red;">KESALAHAN JARINGAN/SISTEM</h3>
            <p style="color: #ccc;">Terjadi kesalahan saat menghubungi server Google Apps Script. (${error.message})</p>
            <button class="btn-primary" style="margin-top:20px;" onclick="window.location.reload()">Coba Lagi</button>
        `;
    }
}


// --- 4. RENDER HALAMAN TERIMA KASIH (REWARD Opsional) ---
function renderRewardPage() {
    
    // ⚠️ GANTI DENGAN NOMOR WHATSAPP AKTIF PENELITI!
    const whatsappNumber = '6281227324594'; 

    function createWhatsAppLink(reward) {
        let message = `Halo, saya ${userAnswers.nama || 'Pengguna'} dari ${userAnswers.umur || 'Rentang Usia'}. Saya telah menyelesaikan kuisioner dan memilih hadiah: ${reward}. Mohon petunjuk klaim hadiah ini. Terima kasih!`;
        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    }

    kuisionerForm.innerHTML = `
        <div id="reward-page" style="text-align: center; padding: 40px;">
            <h2 style="color: #00ffff; font-size: 2.2em; margin-bottom: 15px;">
                ✅ Kuisioner Selesai!
            </h2>
            <h3 style="color: #ff00ff; font-size: 1.5em; margin-bottom: 25px;">
                Terima kasih banyak, 
                <span style="font-weight: bold; color: #ff00ff;">${userAnswers.nama || 'Pengguna'}</span>!
            </h3>
            
            <div style="background-color: rgba(0, 255, 255, 0.05); padding: 20px; border-radius: 10px; border: 1px solid #00ffff; margin-bottom: 30px;">
                <p style="font-size: 1.1em; color: #ccc;">
                    Data Anda telah berhasil direkam dan disimpan.
                </p>
            </div>
            
            <div id="reward-box" class="reward-box" style="background-color: rgba(255, 0, 255, 0.05); border: 2px solid #ff00ff; border-radius: 15px; padding: 25px; box-shadow: 0 0 10px rgba(255, 0, 255, 0.5); margin-bottom: 30px;">
                <h4 style="color: #ff00ff; font-size: 1.4em; margin-bottom: 10px; font-weight: bold;">🎁 Klaim Hadiah Anda (Opsional)!</h4>
                <p style="color: #ccc; margin-bottom: 25px; font-style: italic;">Anda berhak memilih salah satu hadiah di bawah ini sebagai apresiasi.</p>
                
                <div class="reward-buttons" style="display: flex; flex-direction: column; gap: 15px;">
                    
                    <a href="${createWhatsAppLink('Viu Premium Seumur Hidup')}" target="_blank" class="reward-btn btn-viu">
                        👑 Viu Premium Seumur Hidup
                    </a>
                    
                    <a href="${createWhatsAppLink('Alight Motion Pro 1 Tahun')}" target="_blank" class="reward-btn btn-alight">
                        🎬 Alight Motion Pro 1 Tahun
                    </a>
                    
                    <a href="${createWhatsAppLink('YouTube Premium 1 Bulan')}" target="_blank" class="reward-btn btn-youtube">
                        🔴 YouTube Premium 1 Bulan
                    </a>
                </div>
            </div>
            <hr style="margin: 30px auto; width: 50%; border: 0; border-top: 1px solid rgba(255, 255, 255, 0.2);">
            
            <button class="btn-secondary" onclick="window.close()" style="margin-top: 20px;">
                TUTUP HALAMAN / SELESAI
            </button>

            <p style="font-size: 0.9em; color: #ccc; margin-top: 20px;">
                Jika Anda sudah mengklaim hadiah atau tidak ingin mengklaim, silakan tekan tombol di atas.
            </p>
        </div>
    `;
}

// --- LOGIKA WATERMARK DAN SALJU JATUH (Aesthetic Background) ---

const WATERMARK_TEXT = 'Made by Yunan';
const BACKGROUND_SYMBOLS = ['❄', '⭐', '✨', '⚡'];

function createBackgroundParticle(type = 'watermark') {
    const parentElement = document.getElementById('watermark-bg');
    if (!parentElement) return;

    const particle = document.createElement('div');
    
    if (type === 'watermark') {
        particle.className = 'watermark';
        particle.textContent = WATERMARK_TEXT;
        particle.style.animationDuration = Math.random() * 15 + 15 + 's'; // 15-30s
        particle.style.animationDelay = Math.random() * 15 + 's'; 
        particle.style.opacity = Math.random() * 0.7 + 0.3; 

    } else { // Salju/Simbol
        particle.className = 'snowflake';
        const symbol = BACKGROUND_SYMBOLS[Math.floor(Math.random() * BACKGROUND_SYMBOLS.length)];
        particle.innerHTML = symbol;
        particle.style.animationDuration = Math.random() * 10 + 8 + 's'; // 8-18s
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.fontSize = Math.random() * 12 + 8 + 'px'; 
    }
    
    particle.style.left = Math.random() * window.innerWidth + 'px';
    parentElement.appendChild(particle);

    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

function startBackgroundEffects() {
    // Membuat Watermark (Interval Lambat)
    setInterval(() => createBackgroundParticle('watermark'), 3000); 
    
    // Membuat Salju/Simbol (Interval Cepat)
    setInterval(() => createBackgroundParticle('symbol'), 500); 
}


// --- INISIALISASI ---
document.addEventListener('DOMContentLoaded', () => {
    renderPage();
    startBackgroundEffects();
});
