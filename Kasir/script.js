const menuData = [
  { id: 1, name: 'Americano', price: 18000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80' },
  { id: 2, name: 'Cappuccino', price: 20000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80' },
  { id: 3, name: 'Latte', price: 22000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80' },
  { id: 4, name: 'Lemon Tea', price: 12000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80' },
  { id: 5, name: 'Milkshake', price: 18000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=80' },
  { id: 6, name: 'Thai Tea', price: 15000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80' },
  { id: 7, name: 'Matcha', price: 20000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=1200&q=80' },
  { id: 8, name: 'Chocolate Float', price: 18000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80' },
  { id: 9, name: 'Lychee Tea', price: 12000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1566677043200-9e0a8a9c5266?auto=format&fit=crop&w=1200&q=80' },
  { id: 10, name: 'Orange Squash', price: 18000, category: 2, type: 'beverages', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=1200&q=80' },
  { id: 11, name: 'Nasi Goreng', price: 22000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80' },
  { id: 12, name: 'Mie Goreng', price: 20000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1556316918-0b3d0f2f5f5d?auto=format&fit=crop&w=1200&q=80' },
  { id: 13, name: 'Chicken Teriyaki', price: 25000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80' },
  { id: 14, name: 'Kentang Goreng', price: 17000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=1200&q=80' },
  { id: 15, name: 'Churos', price: 20000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80' },
  { id: 16, name: 'Pancake', price: 20000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1200&q=80' },
  { id: 17, name: 'Roti Bakar', price: 20000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80' },
  { id: 18, name: 'Chicken Katsu', price: 27000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80' },
  { id: 19, name: 'Mango Sticky Rice', price: 22000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80' },
  { id: 20, name: 'Spaghetti Carbonara', price: 28000, category: 1, type: 'foods', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80' },
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
  if (user === 'cafekita' && pass === 'kelompok2') {
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
