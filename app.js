// WalletOne - Main Application JavaScript
// All interactive features with SweetAlert2

let balanceVisible = true;
let currentTopUpWallet = '';
let monthlyBudget = 3800000;
let currentSpending = 3200000;

// Toggle Balance Visibility
function toggleBalance() {
    const balanceEl = document.getElementById('totalBalance');
    const eyeIcon = document.getElementById('eyeIcon');

    if (balanceVisible) {
        balanceEl.textContent = '••••••••';
        eyeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>';
    } else {
        balanceEl.textContent = 'Rp 2.450.000';
        eyeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>';
    }
    balanceVisible = !balanceVisible;
}

// Show Features Modal
function showFeaturesModal() {
    Swal.fire({
        title: '<strong>Fitur Unggulan WalletOne</strong>',
        icon: 'info',
        html: `
            <div style="text-align: left; padding: 10px;">
                <div style="margin-bottom: 15px;">
                    <strong>🎯 Satu Aplikasi, Semua Dompet</strong>
                    <p style="font-size: 14px; color: #666; margin-top: 5px;">
                        Kelola DANA, GoPay, ShopeePay, OVO, dan lainnya dalam satu dashboard!
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <strong>💸 Transfer Lintas Platform</strong>
                    <p style="font-size: 14px; color: #666; margin-top: 5px;">
                        Transfer antar e-wallet berbeda tanpa ribet. Dari DANA ke GoPay? Bisa!
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <strong>📊 Analisis Keuangan Cerdas</strong>
                    <p style="font-size: 14px; color: #666; margin-top: 5px;">
                        Lihat pengeluaran dari semua e-wallet dalam satu laporan lengkap
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <strong>🎯 Budget Bulanan & Target Menabung</strong>
                    <p style="font-size: 14px; color: #666; margin-top: 5px;">
                        Atur budget bulanan dan capai target menabung dengan mudah
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <strong>🔐 Keamanan Tingkat Bank</strong>
                    <p style="font-size: 14px; color: #666; margin-top: 5px;">
                        Biometric authentication & enkripsi end-to-end
                    </p>
                </div>
            </div>
        `,
        showCloseButton: true,
        confirmButtonText: 'Mengerti!',
        confirmButtonColor: '#4F46E5',
    });
}

// QR Code Modal
function showQRModal() {
    Swal.fire({
        title: 'QR Code Saya',
        html: `
            <div style="padding: 20px;">
                <div style="background: #4F46E5; padding: 20px; border-radius: 15px; margin-bottom: 15px;">
                    <div style="background: white; padding: 15px; border-radius: 10px;">
                        <svg style="width: 200px; height: 200px;" viewBox="0 0 200 200" fill="none">
                            <rect x="10" y="10" width="50" height="50" fill="#4F46E5"/>
                            <rect x="140" y="10" width="50" height="50" fill="#4F46E5"/>
                            <rect x="10" y="140" width="50" height="50" fill="#4F46E5"/>
                            <rect x="70" y="70" width="60" height="60" fill="#10B981"/>
                        </svg>
                    </div>
                </div>
                <p style="font-weight: bold; margin-bottom: 5px;">ID: 0812-3456-7890</p>
                <p style="font-size: 14px; color: #666;">WalletOne</p>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Bagikan',
        cancelButtonText: 'Tutup',
        confirmButtonColor: '#4F46E5',
    });
}

// Top Up Modal
function showTopUpModal(wallet = '') {
    currentTopUpWallet = wallet;
    const walletText = wallet ? wallet : 'E-Wallet';

    Swal.fire({
        title: `Top Up ${walletText}`,
        html: `
            <div style="text-align: left;">
                <label style="display: block; font-weight: bold; margin-bottom: 8px;">Pilih Bank</label>
                <select id="bankSelect" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 12px; margin-bottom: 15px;">
                    <option value="">Pilih bank...</option>
                    <option value="bca">BCA</option>
                    <option value="mandiri">Mandiri</option>
                    <option value="bni">BNI</option>
                    <option value="bri">BRI</option>
                </select>

                <label style="display: block; font-weight: bold; margin-bottom: 8px;">Jumlah Top Up</label>
                <div style="position: relative; margin-bottom: 15px;">
                    <span style="position: absolute; left: 12px; top: 12px; font-weight: bold;">Rp</span>
                    <input type="number" id="topUpAmount" placeholder="0" style="width: 100%; padding: 12px 12px 12px 40px; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 18px; font-weight: bold;">
                </div>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">
                    <button onclick="document.getElementById('topUpAmount').value='50000'" style="padding: 10px; background: #f3f4f6; border: none; border-radius: 10px; font-weight: bold; cursor: pointer;">50rb</button>
                    <button onclick="document.getElementById('topUpAmount').value='100000'" style="padding: 10px; background: #f3f4f6; border: none; border-radius: 10px; font-weight: bold; cursor: pointer;">100rb</button>
                    <button onclick="document.getElementById('topUpAmount').value='200000'" style="padding: 10px; background: #f3f4f6; border: none; border-radius: 10px; font-weight: bold; cursor: pointer;">200rb</button>
                </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Top Up Sekarang',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#4F46E5',
        preConfirm: () => {
            const bank = document.getElementById('bankSelect').value;
            const amount = document.getElementById('topUpAmount').value;

            if (!bank || !amount) {
                Swal.showValidationMessage('Mohon lengkapi semua data!');
                return false;
            }

            return { bank, amount };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Show biometric authentication
            showBiometricAuth('topup', result.value);
        }
    });
}

// Biometric Authentication
function showBiometricAuth(action, data) {
    Swal.fire({
        title: 'Verifikasi Sidik Jari',
        html: `
            <div style="text-align: center; padding: 20px;">
                <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-center; animation: pulse 2s ease-in-out infinite;">
                    <svg style="width: 60px; height: 60px; color: white;" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clip-rule="evenodd"/>
                    </svg>
                </div>
                <p style="margin-bottom: 10px; font-weight: bold;">Letakkan jari Anda pada sensor</p>
                <p style="font-size: 14px; color: #666;">Autentikasi biometrik diperlukan untuk melanjutkan</p>
            </div>
        `,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Batal',
        didOpen: () => {
            // Simulate biometric scan - random success/fail
            setTimeout(() => {
                const isSuccess = Math.random() > 0.3; // 70% success rate

                if (isSuccess) {
                    Swal.close();
                    handleAuthSuccess(action, data);
                } else {
                    Swal.close();
                    handleAuthFail();
                }
            }, 2000);
        }
    });
}

// Authentication Success Handler
function handleAuthSuccess(action, data) {
    if (action === 'topup') {
        Swal.fire({
            icon: 'success',
            title: 'Top Up Berhasil!',
            html: `
                <p>Top Up <strong>${currentTopUpWallet}</strong> sebesar</p>
                <p style="font-size: 24px; font-weight: bold; color: #10B981; margin: 10px 0;">
                    Rp ${parseInt(data.amount).toLocaleString('id-ID')}
                </p>
                <p>dari <strong>${data.bank.toUpperCase()}</strong> berhasil diproses!</p>
            `,
            confirmButtonText: 'OK',
            confirmButtonColor: '#10B981',
        });
    }
}

// Authentication Fail Handler
function handleAuthFail() {
    Swal.fire({
        icon: 'error',
        title: 'Verifikasi Gagal!',
        text: 'Sidik jari tidak dikenali. Silakan coba lagi.',
        confirmButtonText: 'Coba Lagi',
        confirmButtonColor: '#FF6B6B',
        showCancelButton: true,
        cancelButtonText: 'Batal'
    });
}

// Add Account Modal
function showAddAccountModal() {
    Swal.fire({
        title: 'Tambah Akun E-Wallet',
        html: `
            <div style="text-align: left;">
                <label style="display: block; font-weight: bold; margin-bottom: 8px;">Pilih E-Wallet</label>
                <select id="walletTypeSelect" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 12px; margin-bottom: 15px;">
                    <option value="">Pilih e-wallet...</option>
                    <option value="ovo">OVO</option>
                    <option value="linkaja">LinkAja</option>
                    <option value="jenius">Jenius</option>
                    <option value="sakuku">SakuKu</option>
                </select>

                <label style="display: block; font-weight: bold; margin-bottom: 8px;">Nomor HP</label>
                <input type="tel" id="walletPhone" placeholder="08xx-xxxx-xxxx" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 12px;">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Tambahkan',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#4F46E5',
        preConfirm: () => {
            const walletType = document.getElementById('walletTypeSelect').value;
            const phone = document.getElementById('walletPhone').value;

            if (!walletType || !phone) {
                Swal.showValidationMessage('Mohon lengkapi semua data!');
                return false;
            }

            return { walletType, phone };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Akun Berhasil Ditambahkan!',
                text: `${result.value.walletType.toUpperCase()} - ${result.value.phone}`,
                confirmButtonColor: '#10B981',
            });
        }
    });
}

// Edit Savings Goal Modal
function showEditGoalModal() {
    Swal.fire({
        title: 'Edit Target Menabung',
        html: `
            <div style="text-align: left;">
                <label style="display: block; font-weight: bold; margin-bottom: 8px;">Nama Target</label>
                <input type="text" id="goalNameInput" value="Liburan ke Bali" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 12px; margin-bottom: 15px;">

                <label style="display: block; font-weight: bold; margin-bottom: 8px;">Target Nominal</label>
                <div style="position: relative;">
                    <span style="position: absolute; left: 12px; top: 12px; font-weight: bold;">Rp</span>
                    <input type="number" id="goalAmountInput" value="5000000" style="width: 100%; padding: 12px 12px 12px 40px; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 18px; font-weight: bold;">
                </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#4F46E5',
        preConfirm: () => {
            const goalName = document.getElementById('goalNameInput').value;
            const goalAmount = document.getElementById('goalAmountInput').value;

            if (!goalName || !goalAmount) {
                Swal.showValidationMessage('Mohon lengkapi semua data!');
                return false;
            }

            return { goalName, goalAmount };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { goalName, goalAmount } = result.value;

            // Update UI
            document.getElementById('goalName').textContent = goalName;
            document.getElementById('targetSavings').textContent = `/ Rp ${parseInt(goalAmount).toLocaleString('id-ID')}`;

            const current = 2450000;
            const target = parseInt(goalAmount);
            const percentage = Math.round((current / target) * 100);
            const remaining = target - current;

            document.getElementById('progressBar').style.width = percentage + '%';
            document.getElementById('progressText').textContent = `${percentage}% tercapai - Kurang Rp ${remaining.toLocaleString('id-ID')} lagi!`;

            Swal.fire({
                icon: 'success',
                title: 'Target Berhasil Diupdate!',
                text: `Target: ${goalName} - Rp ${parseInt(goalAmount).toLocaleString('id-ID')}`,
                confirmButtonColor: '#10B981',
                timer: 2000,
            });
        }
    });
}

// Budget Limit Modal
function showBudgetModal() {
    Swal.fire({
        title: 'Atur Budget Bulanan',
        html: `
            <div style="text-align: left;">
                <label style="display: block; font-weight: bold; margin-bottom: 8px;">Budget Pengeluaran per Bulan</label>
                <div style="position: relative; margin-bottom: 15px;">
                    <span style="position: absolute; left: 12px; top: 12px; font-weight: bold;">Rp</span>
                    <input type="number" id="budgetInput" value="3800000" style="width: 100%; padding: 12px 12px 12px 40px; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 18px; font-weight: bold;">
                </div>

                <p style="font-size: 14px; color: #666; margin-bottom: 10px;">
                    <strong>💡 Tips:</strong> Atur budget 20-30% di atas pengeluaran rata-rata Anda
                </p>

                <div style="background: #FEF3C7; padding: 12px; border-radius: 10px; border-left: 4px solid #F59E0B;">
                    <p style="font-size: 13px; margin: 0;">
                        <strong>Pengeluaran bulan ini:</strong> Rp ${currentSpending.toLocaleString('id-ID')}
                    </p>
                </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Simpan Budget',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#F59E0B',
        preConfirm: () => {
            const budget = document.getElementById('budgetInput').value;

            if (!budget || budget < 100000) {
                Swal.showValidationMessage('Budget minimal Rp 100.000!');
                return false;
            }

            return budget;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            monthlyBudget = parseInt(result.value);

            // Update UI
            document.getElementById('budgetLimit').textContent = `/ Rp ${monthlyBudget.toLocaleString('id-ID')}`;

            const percentage = Math.round((currentSpending / monthlyBudget) * 100);
            const remaining = monthlyBudget - currentSpending;

            document.getElementById('budgetBar').style.width = percentage + '%';
            document.getElementById('budgetText').textContent = `${percentage}% terpakai - Sisa Rp ${remaining.toLocaleString('id-ID')}`;

            // Change color based on percentage
            const budgetBar = document.getElementById('budgetBar');
            if (percentage >= 90) {
                budgetBar.classList.remove('bg-warning');
                budgetBar.classList.add('bg-secondary');
            } else {
                budgetBar.classList.remove('bg-secondary');
                budgetBar.classList.add('bg-warning');
            }

            Swal.fire({
                icon: 'success',
                title: 'Budget Berhasil Diatur!',
                html: `
                    <p>Budget bulanan Anda:</p>
                    <p style="font-size: 24px; font-weight: bold; color: #F59E0B; margin: 10px 0;">
                        Rp ${monthlyBudget.toLocaleString('id-ID')}
                    </p>
                    <p style="font-size: 14px; color: #666;">
                        Anda akan mendapat notifikasi saat mendekati limit!
                    </p>
                `,
                confirmButtonColor: '#10B981',
            });
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('WalletOne App Initialized');
});