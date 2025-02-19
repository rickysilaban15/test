// Variabel keranjang
let keranjang = [];

// Fungsi tambah ke keranjang
function tambahKeranjang(produk) {
  keranjang.push(produk);
  updateKeranjang();
}

// Fungsi update keranjang
function updateKeranjang() {
  const keranjangList = document.querySelector('.keranjang-list');
  keranjangList.innerHTML = '';
  keranjang.forEach((produk) => {
    const item = document.createElement('div');
    item.innerHTML = `
      <h3>${produk.nama}</h3>
      <p>Rp ${produk.harga}</p>
      <button class="hapus-produk">Hapus</button>
    `;
    keranjangList.appendChild(item);
  });
  hitungTotal();
}

// Fungsi hitung total
function hitungTotal() {
  const total = keranjang.reduce((acc, produk) => acc + produk.harga, 0);
  document.getElementById('total-pembayaran').innerText = `Rp ${total}`;
}

// Fungsi hapus produk
function hapusProduk(index) {
  keranjang.splice(index, 1);
  updateKeranjang();
}

// Event listener tambah ke keranjang
document.querySelectorAll('.tambah-keranjang').forEach((button) => {
  button.addEventListener('click', (e) => {
    const produk = {
      nama: e.target.parentNode.querySelector('h3').innerText,
      harga: parseInt(e.target.parentNode.querySelector('p').innerText.replace('Rp ', '')),
    };
    tambahKeranjang(produk);
  });
});

// Event listener hapus produk
document.querySelector('.keranjang-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('hapus-produk')) {
    const index = Array.prototype.indexOf.call(keranjang, keranjang.find((produk) => produk.nama === e.target.parentNode.querySelector('h3').innerText));
    hapusProduk(index);
  }
});

// Event listener bayar
document.getElementById('bayar').addEventListener('click', () => {
  alert('Pembayaran berhasil!');
  keranjang = [];
  updateKeranjang();
});
