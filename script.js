const menuData = [
  { id: 1, name: 'Americano', price: 18000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Cappuccino', price: 20000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1506372023823-741c83b836fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Latte', price: 22000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80' },
  { id: 4, name: 'Lemon Tea', price: 12000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, name: 'Milkshake', price: 18000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1624781740834-fbfbf5fd221a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1pbGtTaGFrZXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 6, name: 'Thai Tea', price: 15000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1644204010193-a35de7b0d702?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 7, name: 'Matcha', price: 20000, category: 2, type: 'beverages', image: 'https://media.istockphoto.com/id/2164727441/id/foto/es-matcha-green-tea-latte-duduk-di-atas-nampan-kayu.webp?a=1&b=1&s=612x612&w=0&k=20&c=iyOL3xInvnOfJBeHePiwSlBiTUQr3t_zcftuf6GygkU=' },
  { id: 8, name: 'Chocolate Float', price: 18000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 9, name: 'Lychee Tea', price: 12000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1664512298340-8df247f52488?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THljaGVlJTIwVGVhfGVufDB8fDB8fHww' },
  { id: 10, name: 'Orange Squash', price: 18000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1740555612192-3e3cf77b5d1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE9yYW5nZSUyMFNxdWFzaCUyMGRyaW5rfGVufDB8fDB8fHww' },
  { id: 11, name: 'Nasi Goreng', price: 22000, category: 1, type: 'foods', image: 'https://media.istockphoto.com/id/2171502071/id/foto/nasi-goreng-tiwul-ikan-asin-pete-atau-kacang-bau-petai-petes-asin-ikan-asin-tiwul-nasi-goreng.webp?a=1&b=1&s=612x612&w=0&k=20&c=ooCVoZPfdwx-xzCXFwvprNAmHk8oSuAnYV3JyDorG7g=' },
  { id: 12, name: 'Mie Goreng', price: 20000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1645696329525-8ec3bee460a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWllJTIwZ29yZW5nfGVufDB8fDB8fHww' },
  { id: 13, name: 'Chicken Teriyaki', price: 25000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1638502182261-7be714a565ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaWNrZW4lMjB0ZXJpeWFraXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 14, name: 'Kentang Goreng', price: 17000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1661081090290-9b66fd49d882?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZW5jaCUyMGZyaWVzJTIwd2l0aCUyMHBsYXRlfGVufDB8fDB8fHww' },
  { id: 15, name: 'Churos', price: 20000, category: 1, type: 'foods', image: 'https://media.istockphoto.com/id/1328931045/id/foto/sarapan-dengan-dessert-churos-karamel-dan-teh.webp?a=1&b=1&s=612x612&w=0&k=20&c=U9-_w9q9qMu_NDKx5rQtn8kRee96cKoSHNORV6_23EE=' },
  { id: 16, name: 'Pancake', price: 20000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhbmNha2V8ZW58MHx8MHx8fDA%3D' },
  { id: 17, name: 'Roti Bakar', price: 20000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1631707928780-153b053e09aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvdGklMjBiYWthcnxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 18, name: 'Chicken Katsu', price: 27000, category: 1, type: 'foods', image: 'https://media.istockphoto.com/id/2158928956/id/foto/ayam-goreng-renyah-dengan-kari-dan-nasi-jepang-gaya-makanan-jepang-dan-korea.webp?a=1&b=1&s=612x612&w=0&k=20&c=G3dKcVDpLHhoAgKWJ_oPD__vHRqgYkWl9FxxLr2D-tU=' },
  { id: 19, name: 'Mango Sticky Rice', price: 22000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1705056508219-0aa0ceb16820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFuZ28lMjBTdGlja3klMjBSaWNlfGVufDB8fDB8fHww' },
  { id: 20, name: 'Spaghetti Carbonara', price: 28000, category: 1, type: 'foods', image: 'https://media.istockphoto.com/id/946666108/id/foto/spaghetti-carbonara-dengan-roti-bawang-putih.webp?a=1&b=1&s=612x612&w=0&k=20&c=EyqExuqV0aeGic6Aifda0JaR2tp9r9tFqH7UYAQDgEQ=' },
];

let cart = [];
let selectedAdminItem = null;
let adminLoggedIn = false;
let nextId = 21;
let currentFilter = 'all';
let transactionsHistory = [];

const navButtons = document.querySelectorAll('.nav-btn');
const viewSections = document.querySelectorAll('.view');
const menuSections = document.getElementById('menu-sections');
const searchMenu = document.getElementById('search-menu');
const sortMenu = document.getElementById('sort-menu');
const cartList = document.getElementById('cart-list');
const receiptBox = document.getElementById('receipt');
const totalValue = document.getElementById('total-value');
const statusText = document.getElementById('status-text');
const statMenu = document.getElementById('stat-menu');
const statCart = document.getElementById('stat-cart');
const statStatus = document.getElementById('stat-status');
const adminLoginBox = document.getElementById('admin-login');
const adminPanel = document.getElementById('admin-panel');
const adminList = document.getElementById('admin-list');
const adminImageInput = document.getElementById('admin-image');
const adminImageFileInput = document.getElementById('admin-image-file');

function showView(view) {
  viewSections.forEach(section => section.classList.remove('active'));
  document.getElementById(`${view}-view`).classList.add('active');
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
  if (view === 'transaksi') renderTransactionHistory();
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, 1400);
}

function renderMenu() {
  const keyword = searchMenu.value.trim().toLowerCase();
  let items = [...menuData];

  if (keyword) {
    items = items.filter(item => item.name.toLowerCase().includes(keyword));
  }

  if (currentFilter !== 'all') {
    items = items.filter(item => item.type === currentFilter);
  }

  if (sortMenu.value === 'price') {
    items.sort((a, b) => a.price - b.price);
  } else if (sortMenu.value === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  const groups = currentFilter === 'all'
    ? [{ key: 'foods', label: 'Foods' }, { key: 'beverages', label: 'Beverages' }]
    : [{ key: currentFilter, label: currentFilter === 'foods' ? 'Foods' : 'Beverages' }];

  menuSections.innerHTML = '';
  groups.forEach(group => {
    const sectionItems = items.filter(item => item.type === group.key);
    if (!sectionItems.length) return;

    const section = document.createElement('section');
    section.className = 'menu-section';
    section.innerHTML = `<div class="menu-section-title">${group.label}</div>`;

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    sectionItems.forEach(item => {
      const card = document.createElement('article');
      card.className = 'menu-card';
      card.innerHTML = `
        <img class="menu-image" src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" />
        <div class="menu-card-body">
          <span class="menu-badge">${group.label}</span>
          <h4>${item.name}</h4>
          <p>Rp ${item.price.toLocaleString('id-ID')}</p>
          <div class="qty-row">
            <label>Qty</label>
            <input type="number" min="1" value="1" id="qty-${item.id}" />
          </div>
          <button class="btn-primary add-btn" data-id="${item.id}">Tambah</button>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    menuSections.appendChild(section);
  });

  if (!menuSections.children.length) {
    menuSections.innerHTML = '<div class="empty-state">Menu tidak ditemukan</div>';
  }

  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const qtyInput = document.getElementById(`qty-${id}`);
      const qty = Number(qtyInput.value) || 1;
      addToCart(id, qty);
    });
  });

  statMenu.textContent = menuData.length;
}

function addToCart(id, qty) {
  const menu = menuData.find(item => item.id === id);
  if (!menu) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
    existing.total = existing.qty * existing.price;
  } else {
    cart.push({ id: menu.id, name: menu.name, price: menu.price, qty, total: menu.price * qty });
  }
  showToast(`${menu.name} ditambahkan`);
  renderCart();
}

function renderCart() {
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.qty} = Rp ${item.total.toLocaleString('id-ID')}`;
    cartList.appendChild(li);
    total += item.total;
  });

  totalValue.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
  statusText.textContent = cart.length ? 'Keranjang siap dihitung' : 'Keranjang kosong';
  statCart.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  statStatus.textContent = cart.length ? 'Ada order' : 'Siap';
}

function calculateTotal() {
  let total = 0;
  cart.forEach(item => total += item.total);
  receiptBox.textContent = `=== STRUK KASIR CAFE KITA ===\n` +
    (cart.length ? cart.map(item => `${item.name} x${item.qty} = Rp ${item.total.toLocaleString('id-ID')}`).join('\n') : 'Belum ada item yang dipilih') +
    `\n\nTOTAL BAYAR : Rp ${total.toLocaleString('id-ID')}`;
  statusText.textContent = 'Total berhasil dihitung';
}

function pay() {
  if (!cart.length) {
    alert('Keranjang masih kosong');
    return;
  }
  const uang = Number(prompt('Masukkan uang pelanggan (Rp)'));
  if (!Number.isFinite(uang) || uang <= 0) {
    alert('Nominal tidak valid');
    return;
  }
  let total = 0;
  cart.forEach(item => total += item.total);
  if (uang < total) {
    alert('Uang tidak cukup');
    return;
  }
  const receiptText = `=== STRUK KASIR CAFE KITA ===\n` +
    cart.map(item => `${item.name} x${item.qty} = Rp ${item.total.toLocaleString('id-ID')}`).join('\n') +
    `\n\nTOTAL BAYAR : Rp ${total.toLocaleString('id-ID')}\nUANG PELANGGAN : Rp ${uang.toLocaleString('id-ID')}\nKEMBALIAN : Rp ${(uang - total).toLocaleString('id-ID')}`;

  // show receipt
  receiptBox.textContent = receiptText;
  statusText.textContent = 'Pembayaran selesai';

  // save to history
  transactionsHistory.unshift({
    id: Date.now(),
    time: new Date().toLocaleString(),
    items: cart.map(i => ({ name: i.name, qty: i.qty, total: i.total })),
    total,
    paid: uang,
    change: uang - total,
    receiptText
  });
  renderTransactionHistory();

  // clear cart
  cart = [];
  renderCart();
}

function renderTransactionHistory() {
  const list = document.getElementById('history-list');
  if (!list) return;
  list.innerHTML = '';
  if (!transactionsHistory.length) {
    list.innerHTML = '<li class="empty-state">Belum ada transaksi</li>';
    return;
  }
  transactionsHistory.forEach(tx => {
    const li = document.createElement('li');
    li.className = 'history-item';

    const headerHtml = `<div class="history-head"><div><strong>${tx.time}</strong></div><div>Rp ${tx.total.toLocaleString('id-ID')} <span style=\"color:#6c7f95\">(${tx.items.length} item)</span></div></div>`;

    const detailsHtml = tx.items.map(i => `<div class="history-row"><div>${i.name} x${i.qty}</div><div>Rp ${i.total.toLocaleString('id-ID')}</div></div>`).join('') +
      `<div class="history-total">Total: Rp ${tx.total.toLocaleString('id-ID')} — Dibayar: Rp ${tx.paid.toLocaleString('id-ID')} — Kembali: Rp ${tx.change.toLocaleString('id-ID')}</div>`;

    li.innerHTML = headerHtml + `<div class="details">${detailsHtml}</div>`;

    // toggle expand/collapse details on click
    li.addEventListener('click', (e) => {
      // avoid triggering when clicking buttons inside (if any)
      li.classList.toggle('expanded');
    });

    list.appendChild(li);
  });
}

function resetCart() {
  cart = [];
  renderCart();
  receiptBox.textContent = 'Keranjang dibersihkan';
}

function renderAdminList() {
  const keyword = document.getElementById('admin-search').value.trim().toLowerCase();
  const filtered = menuData.filter(item => item.name.toLowerCase().includes(keyword));
  adminList.innerHTML = '';
  filtered.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.id}. ${item.name} - Rp ${item.price.toLocaleString('id-ID')}`;
    li.addEventListener('click', () => {
      selectedAdminItem = item;
      document.getElementById('admin-name').value = item.name;
      document.getElementById('admin-price').value = item.price;
      adminImageInput.value = item.image || '';
      document.getElementById('admin-category').value = item.category;
    });
    adminList.appendChild(li);
  });
}

function loginAdmin() {
  const user = document.getElementById('admin-user').value;
  const pass = document.getElementById('admin-pass').value;
  if (user === 'cafekita' && pass === 'testing') {
    adminLoggedIn = true;
    adminLoginBox.classList.add('hidden');
    adminPanel.classList.remove('hidden');
    alert('Login berhasil');
    renderAdminList();
  } else {
    alert('Username atau password salah');
  }
}

function logoutAdmin() {
  adminLoggedIn = false;
  adminLoginBox.classList.remove('hidden');
  adminPanel.classList.add('hidden');
  document.getElementById('admin-user').value = '';
  document.getElementById('admin-pass').value = '';
  document.getElementById('admin-name').value = '';
  document.getElementById('admin-price').value = '';
  adminImageInput.value = '';
  document.getElementById('admin-search').value = '';
}

function addMenuAdmin() {
  const name = document.getElementById('admin-name').value.trim();
  const price = Number(document.getElementById('admin-price').value);
  const category = Number(document.getElementById('admin-category').value);
  const image = adminImageInput.value.trim() || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80';
  if (!name || !price) {
    alert('Nama dan harga wajib diisi');
    return;
  }
  menuData.push({ id: nextId++, name, price, category, type: category === 1 ? 'foods' : 'beverages', image });
  renderMenu();
  renderAdminList();
  document.getElementById('admin-name').value = '';
  document.getElementById('admin-price').value = '';
  adminImageInput.value = '';
  adminImageFileInput.value = '';
}

function saveMenuAdmin() {
  if (!selectedAdminItem) {
    alert('Pilih menu dulu');
    return;
  }
  selectedAdminItem.name = document.getElementById('admin-name').value.trim();
  selectedAdminItem.price = Number(document.getElementById('admin-price').value);
  selectedAdminItem.image = adminImageInput.value.trim() || selectedAdminItem.image;
  selectedAdminItem.category = Number(document.getElementById('admin-category').value);
  selectedAdminItem.type = selectedAdminItem.category === 1 ? 'foods' : 'beverages';
  renderMenu();
  renderAdminList();
}

function handleImageUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    adminImageInput.value = reader.result;
  };
  reader.readAsDataURL(file);
}

function deleteMenuAdmin() {
  if (!selectedAdminItem) {
    alert('Pilih menu dulu');
    return;
  }
  const index = menuData.findIndex(item => item.id === selectedAdminItem.id);
  if (index >= 0) menuData.splice(index, 1);
  selectedAdminItem = null;
  renderMenu();
  renderAdminList();
}

function sortMenuByPrice() {
  menuData.sort((a, b) => a.price - b.price);
  renderMenu();
  renderAdminList();
}

function sortMenuByName() {
  menuData.sort((a, b) => a.name.localeCompare(b.name));
  renderMenu();
  renderAdminList();
}

navButtons.forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.view)));

document.querySelectorAll('[data-view]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.view;
    if (target) showView(target);
  });
});

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    currentFilter = chip.dataset.filter;
    document.querySelectorAll('.chip').forEach(item => item.classList.toggle('active', item === chip));
    renderMenu();
  });
});

searchMenu.addEventListener('input', renderMenu);
sortMenu.addEventListener('change', renderMenu);
document.getElementById('calc-total-btn').addEventListener('click', calculateTotal);
document.getElementById('pay-btn').addEventListener('click', pay);
document.getElementById('reset-btn').addEventListener('click', resetCart);
document.getElementById('login-btn').addEventListener('click', loginAdmin);
document.getElementById('logout-btn').addEventListener('click', logoutAdmin);
document.getElementById('add-menu-btn').addEventListener('click', addMenuAdmin);
document.getElementById('save-menu-btn').addEventListener('click', saveMenuAdmin);
document.getElementById('delete-menu-btn').addEventListener('click', deleteMenuAdmin);
document.getElementById('sort-price-btn').addEventListener('click', sortMenuByPrice);
document.getElementById('sort-name-btn').addEventListener('click', sortMenuByName);
document.getElementById('admin-search').addEventListener('input', renderAdminList);
adminImageFileInput.addEventListener('change', handleImageUpload);

renderMenu();
renderCart();
renderAdminList();
