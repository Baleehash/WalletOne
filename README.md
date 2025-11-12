# 💳 WalletOne - E-Wallet Management App

<div align="center">

![WalletOne](https://img.shields.io/badge/WalletOne-E--Wallet%20Manager-4F46E5?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-10B981?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-FF6B6B?style=for-the-badge)

**Kelola semua e-wallet Anda dalam satu aplikasi!**

[Demo Live](https://walletone.vercel.app) • [Report Bug](https://github.com/Baleehash/WalletOne/issues) • [Request Feature](https://github.com/Baleehash/WalletOne/issues)

</div>

---

## 🌟 Features

### 🎨 **Beautiful UI/UX**
- 🎭 Animated login & register pages with gradient backgrounds
- 🌊 Smooth transitions and hover effects
- 📱 Fully responsive design (mobile-first)
- 🎨 Modern glassmorphism effects

### 🔐 **Authentication**
- ✅ Frontend-only auth using localStorage
- 🔒 Protected routes with auto-redirect
- 🚪 Logout functionality with confirmation

### 💰 **E-Wallet Management**
- 🏦 Multi e-wallet aggregator (DANA, GoPay, ShopeePay, OVO, LinkAja)
- 💳 Combined balance view
- 🔄 Cross-wallet transfers
- 💸 Top-up functionality

### 📊 **Financial Analytics**
- 📈 **Lightweight Charts** (Pure CSS - No Chart.js!)
  - Donut chart dengan `conic-gradient`
  - Bar chart dengan CSS animations
  - Super fast & mobile-friendly
- 🎯 Budget tracking dengan progress indicator
- 📉 Spending trends (5 months history)
- 🏷️ Category-based expense tracking

### 💼 **Transaction Management**
- 📜 Transaction history dengan filter
- 🔍 Detail transaksi dengan modal
- 📥 Download receipt simulation
- 🏷️ Category filtering

### 🎯 **Savings Goals**
- 💎 Target menabung dengan progress tracking
- 📊 Rekomendasi monthly savings
- ✏️ Edit goals dengan modal form

---

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling & Animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Interactivity |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Utility-first CSS |
| ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-7C3AED?style=flat) | Beautiful Modals |

**No frameworks, no build tools, just vanilla goodness!** ⚡

---

## 📦 Installation

### Clone Repository
```bash
git clone https://github.com/Baleehash/WalletOne.git
cd WalletOne
```

### Run Locally
Karena ini static HTML project, Anda bisa langsung buka file HTML di browser:

```bash
# Dengan Live Server (VSCode Extension)
# Atau dengan Python
python -m http.server 8000

# Atau dengan Node.js
npx serve
```

Buka browser: `http://localhost:8000/login.html`

---

## 🎯 Usage

### 1. **Login**
- Buka `login.html`
- Masukkan email/nomor HP dan password (apapun, frontend only!)
- Klik "Masuk" → redirect ke dashboard

### 2. **Register**
- Klik "Daftar sekarang" di login page
- Isi form registrasi dengan validasi password strength
- Submit → redirect ke login

### 3. **Dashboard**
- Lihat total balance dari semua e-wallet
- Quick actions: Transfer, Top Up, History
- Budget overview dengan progress bar
- Savings goal tracking

### 4. **Budget Analysis**
- Pie chart pengeluaran per kategori (Pure CSS!)
- Bar chart tren 5 bulan terakhir
- Budget limit indicator
- Trend analysis

### 5. **Transfer**
- Pilih source wallet (DANA/GoPay/ShopeePay)
- Input nomor HP/email penerima
- Masukkan nominal
- Biometric authentication simulation

### 6. **Logout**
- Buka Profile page
- Klik tombol "Keluar" merah
- Confirm → redirect ke login

---

## 🎨 Screenshots

### 🔐 Login Page
Gradient background dengan floating shapes animasi

### 📝 Register Page
Progress indicator dengan password strength meter

### 🏠 Dashboard
Multi-wallet aggregator dengan budget overview

### 📊 Budget Analysis
**Lightweight CSS Charts** - Tidak pakai Chart.js!
- Donut chart dengan `conic-gradient`
- Bar chart dengan CSS animations

### 💸 Transfer Page
Cross-wallet transfer dengan biometric auth

---

## 🚀 Deploy to Vercel

### Via GitHub
1. Fork repository ini
2. Login ke [Vercel](https://vercel.com)
3. Import project dari GitHub
4. Deploy! ✨

### Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Manual
1. Zip semua file HTML, CSS, JS
2. Upload ke Vercel Dashboard
3. Configure:
   - Root directory: `/`
   - Framework: Other (Static)
   - Build command: (kosongkan)
   - Output directory: (kosongkan)

---

## 📂 Project Structure

```
WalletOne/
├── login.html          # Login page dengan animasi
├── register.html       # Register page dengan progress indicator
├── index.html          # Dashboard utama
├── budget.html         # Budget analysis (Lightweight Charts!)
├── history.html        # Transaction history
├── transfer.html       # Transfer antar wallet
├── profile.html        # User profile & settings
├── app.js              # Main JavaScript logic
├── vercel.json         # Vercel deployment config
└── README.md           # Documentation
```

---

## 🎯 Key Highlights

### ⚡ **Performa Tinggi**
- **Sebelum:** Chart.js (~50KB) → Lag di mobile
- **Sesudah:** Pure CSS charts → Smooth & fast!

### 🎨 **Animasi Keren**
- Gradient background yang bergerak
- Floating shapes animation
- Form input bounce effect
- Button hover lift effect
- Bar growth animation

### 📱 **Mobile-First**
- Responsive di semua device
- Touch-friendly UI
- Optimized untuk layar kecil

### 🔐 **Security Features**
- Auth check di semua protected pages
- Biometric authentication simulation
- Balance visibility toggle

---

## 🛠️ Customization

### Ubah Color Scheme
Edit `tailwind.config` di setiap file HTML:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#4F46E5',   // Indigo
                secondary: '#FF6B6B', // Red
                accent: '#10B981',    // Green
                warning: '#F59E0B'    // Amber
            }
        }
    }
}
```

### Tambah E-Wallet Baru
Edit section "E-Wallet List" di `index.html`:

```html
<div class="bg-white rounded-2xl shadow-md p-4 flex items-center justify-between">
    <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-blue-500 rounded-xl">
            <span class="text-white font-bold">N</span>
        </div>
        <div>
            <p class="font-bold">New Wallet</p>
            <p class="text-sm text-gray-600">Rp 1.000.000</p>
        </div>
    </div>
    <button class="bg-primary text-white px-5 py-2.5 rounded-xl">
        Top Up
    </button>
</div>
```

---

## 🐛 Known Issues

- [ ] LocalStorage bisa di-clear browser → auth reset
- [ ] Tidak ada persistent data (semua mock data)
- [ ] Social login belum terintegrasi
- [ ] Biometric auth hanya simulasi

---

## 🤝 Contributing

Contributions are welcome! Silakan:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add: Amazing Feature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Baleehash**
- GitHub: [@Baleehash](https://github.com/Baleehash)
- Repository: [WalletOne](https://github.com/Baleehash/WalletOne)

---

## 🙏 Acknowledgments

- 🎨 [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- 🍬 [SweetAlert2](https://sweetalert2.github.io) - Beautiful modal library
- 🤖 Built with [Claude Code](https://claude.com/claude-code)

---

<div align="center">

**⭐ Star this repo if you find it useful!**

Made with ❤️ and ☕ by Baleehash

🤖 **Generated with [Claude Code](https://claude.com/claude-code)**

</div>
