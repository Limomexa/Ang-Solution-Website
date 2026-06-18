// ===== ANG SOLUTIONS — CATEGORY PAGE JS =====

// ── Main category → subcategory map ─────────────────────────────────────────
const MAIN_CATEGORIES = {
  'desktop-laptops': {
    label: 'Desktop & Laptops',
    subs: [
      { key: 'assembled-desktop',  label: 'Assembled Desktop' },
      { key: 'branded-desktop',    label: 'Branded Desktop' },
      { key: 'branded-laptops',    label: 'Branded Laptops' },
      { key: 'monitors',           label: 'Monitors' },
      { key: 'keyboard-mouse',     label: 'Keyboard / Mouse' },
      { key: 'ups',                label: 'UPS' },
      { key: 'hdd',                label: 'HDD / SSD' },
      { key: 'processor',          label: 'Processor' },
      { key: 'desktop-ram',        label: 'Desktop RAM' },
      { key: 'laptop-ram',         label: 'Laptop RAM' },
      { key: 'motherboard',        label: 'Motherboard / GPU' },
      { key: 'refurbished-laptop', label: 'Refurbished Laptop' },
      { key: 'smps',               label: 'SMPS' },
      { key: 'cabinet',            label: 'Cabinet' },
      { key: 'laptop-adapter',     label: 'Laptop Adapter' },
      { key: 'cable',              label: 'Cable' },
    ]
  },
  'printers-scanners': {
    label: 'Printers & Scanners',
    subs: [
      { key: 'inktank-printers',   label: 'Inktank Printers' },
      { key: 'laser-printers',     label: 'Laser Printers' },
      { key: 'inkjet-printers',    label: 'Inkjet Printers' },
      { key: 'dot-matrix',         label: 'Dot Matrix Printers' },
      { key: 'thermal-printers',   label: 'Thermal Printers' },
      { key: 'photo-printers',     label: 'Photo Printers' },
      { key: 'passbook-printers',  label: 'Passbook Printers' },
      { key: 'estamping-printers', label: 'E-Stamping Printers' },
      { key: 'document-scanners',  label: 'Document Scanners' },
      { key: 'photo-scanners',     label: 'Photo Scanners' },
      { key: 'barcode-scanners',   label: 'Barcode Scanners' },
      { key: 'ink-bottles',        label: 'Ink Bottles' },
      { key: 'toner-cartridges',   label: 'Toner Cartridges' },
      { key: 'maintenance-box',    label: 'Maintenance Box' },
    ]
  },
  'networking': {
    label: 'Networking Products',
    subs: [
      { key: 'wifi-routers',   label: 'WiFi Routers' },
      { key: 'wifi-extender',  label: 'WiFi Extender' },
      { key: 'switches',       label: 'Switches' },
      { key: 'cables',         label: 'Cables' },
      { key: 'wifi-receiver',  label: 'WiFi Receiver' },
    ]
  },
  'accessories': {
    label: 'Other Accessories',
    subs: [
      { key: 'headphone',    label: 'Headphone' },
      { key: 'speaker',      label: 'Speaker' },
      { key: 'webcam',       label: 'Webcam' },
      { key: 'pendrive',     label: 'Pendrive' },
      { key: 'usb-hub',      label: 'USB Hub' },
      { key: 'antivirus',    label: 'Antivirus' },
      { key: 'spike-buster', label: 'Spike Buster' },
      { key: 'cable-tester', label: 'Cable Tester' },
    ]
  }
};

// All subcategory keys flat (for lookup)
const ALL_SUBS = Object.values(MAIN_CATEGORIES).flatMap(m => m.subs.map(s => s.key));

// ── State ────────────────────────────────────────────────────────────────────
let activeMainCat  = '';   // e.g. 'desktop-laptops'
let activeSubCat   = '';   // e.g. 'monitors' (a sub of desktop-laptops)
let activeBrands   = new Set();
let maxPrice       = 100000;
let inStockOnly    = false;
let currentSearch  = '';

// ── Detect which main category a subcategory belongs to ─────────────────────
function getMainCat(subKey) {
  for (const [main, data] of Object.entries(MAIN_CATEGORIES)) {
    if (subKey === main) return main;
    if (data.subs.some(s => s.key === subKey)) return main;
  }
  return '';
}

// ── Search (header bar) ──────────────────────────────────────────────────────
function doSearch() {
  const q = (document.getElementById('searchInput')?.value || '').trim();
  if (q) {
    window.location.href = `category.html?search=${encodeURIComponent(q)}`;
  }
}

// ── Build sidebar category filters ──────────────────────────────────────────
function buildCategoryFilters() {
  const cf = document.getElementById('categoryFilters');
  if (!cf) return;

  if (!activeMainCat) {
    // No main cat: show main category checkboxes
    cf.innerHTML = `<label class="filter-check">
        <input type="checkbox" checked onchange="setMainCat('')"/>
        All Categories
      </label>` +
      Object.entries(MAIN_CATEGORIES).map(([key, data]) => {
        const count = products.filter(p => getMainCat(p.category) === key).length;
        return `<label class="filter-check">
          <input type="checkbox" value="${key}" onchange="setMainCat('${key}')"/>
          ${data.label} <span class="filter-count">${count}</span>
        </label>`;
      }).join('');
  } else {
    // Main cat is set: show its subcategories
    const mcData = MAIN_CATEGORIES[activeMainCat];
    const mainCount = products.filter(p => getMainCat(p.category) === activeMainCat).length;

    cf.innerHTML =
      // "All [Main Category]" option
      `<label class="filter-check">
        <input type="checkbox" value="${activeMainCat}"
          ${!activeSubCat ? 'checked' : ''}
          onchange="setSubCat('')"/>
        All ${mcData.label} <span class="filter-count">${mainCount}</span>
      </label>` +
      mcData.subs.map(sub => {
        const count = products.filter(p => p.category === sub.key).length;
        if (count === 0) return ''; // hide empty subs
        return `<label class="filter-check">
          <input type="checkbox" value="${sub.key}"
            ${activeSubCat === sub.key ? 'checked' : ''}
            onchange="setSubCat('${sub.key}')"/>
          ${sub.label} <span class="filter-count">${count}</span>
        </label>`;
      }).join('') +
      // Back link
      `<div style="margin-top:8px">
        <a href="#" onclick="setMainCat('');return false;"
           style="font-size:12px;color:var(--blue);">
          ← All Categories
        </a>
      </div>`;
  }
}

// ── Build brand filters (based on current pool) ───────────────────────────────
function buildBrandFilters(pool) {
  const bf = document.getElementById('brandFilters');
  if (!bf) return;
  const brands = [...new Set(pool.map(p => p.brand))].sort();
  bf.innerHTML = brands.map(b => {
    const count = pool.filter(p => p.brand === b).length;
    return `<label class="filter-check">
      <input type="checkbox" value="${b}"
        ${activeBrands.has(b) ? 'checked' : ''}
        onchange="toggleBrand('${b}')"/>
      ${b} <span class="filter-count">${count}</span>
    </label>`;
  }).join('');
}

// ── Set active main category ─────────────────────────────────────────────────
function setMainCat(key) {
  activeMainCat = key;
  activeSubCat  = '';
  activeBrands.clear();
  buildCategoryFilters();
  applyFilters();
  // Update URL without reload
  const url = new URL(window.location);
  if (key) { url.searchParams.set('cat', key); }
  else      { url.searchParams.delete('cat'); }
  window.history.replaceState({}, '', url);
}

// ── Set active subcategory ────────────────────────────────────────────────────
function setSubCat(key) {
  activeSubCat = key;
  activeBrands.clear();
  buildCategoryFilters();
  applyFilters();
  const url = new URL(window.location);
  if (key) { url.searchParams.set('cat', key); }
  else      { url.searchParams.set('cat', activeMainCat); }
  window.history.replaceState({}, '', url);
}

function toggleBrand(brand) {
  if (activeBrands.has(brand)) activeBrands.delete(brand);
  else activeBrands.add(brand);
  applyFilters();
}

function updatePriceFilter(val) {
  maxPrice = parseInt(val);
  document.getElementById('priceLabel').textContent = `Up to ₹${parseInt(val).toLocaleString('en-IN')}`;
  applyFilters();
}

function clearFilters() {
  activeSubCat = '';
  activeBrands.clear();
  maxPrice = 100000;
  inStockOnly = false;
  document.getElementById('priceRange').value = 100000;
  document.getElementById('priceLabel').textContent = 'Up to ₹1,00,000';
  document.getElementById('inStockOnly').checked = false;
  buildCategoryFilters();
  applyFilters();
}

// ── Main filter + render ──────────────────────────────────────────────────────
function applyFilters() {
  const sort      = document.getElementById('sortSelect')?.value || 'default';
  inStockOnly     = document.getElementById('inStockOnly')?.checked || false;
  const q         = currentSearch;

  let result = [...products];

  // Filter by active sub or main category
  if (activeSubCat) {
    result = result.filter(p => p.category === activeSubCat);
  } else if (activeMainCat) {
    result = result.filter(p => getMainCat(p.category) === activeMainCat);
  }

  // Search term
  if (q) {
    const ql = q.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(ql) ||
      p.brand.toLowerCase().includes(ql) ||
      (p.shortDesc && p.shortDesc.toLowerCase().includes(ql))
    );
  }

  // Brand filter
  if (activeBrands.size > 0) result = result.filter(p => activeBrands.has(p.brand));

  // Price filter
  result = result.filter(p => p.price === 0 || p.price <= maxPrice);

  // Stock filter
  if (inStockOnly) result = result.filter(p => p.inStock);

  // Sort
  if (sort === 'price-asc')  result.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  if (sort === 'discount')   result.sort((a, b) => getDiscount(b.mrp, b.price) - getDiscount(a.mrp, a.price));

  // Render
  const grid  = document.getElementById('productGrid');
  const noRes = document.getElementById('noResults');
  const count = document.getElementById('productCount');

  // Rebuild brand filters based on this filtered pool (before brand filter)
  let brandPool = [...products];
  if (activeSubCat) brandPool = brandPool.filter(p => p.category === activeSubCat);
  else if (activeMainCat) brandPool = brandPool.filter(p => getMainCat(p.category) === activeMainCat);
  if (q) {
    const ql = q.toLowerCase();
    brandPool = brandPool.filter(p => p.name.toLowerCase().includes(ql) || p.brand.toLowerCase().includes(ql));
  }
  buildBrandFilters(brandPool);

  if (result.length === 0) {
    grid.innerHTML = '';
    noRes.style.display = 'block';
    count.textContent = 'No products found';
  } else {
    noRes.style.display = 'none';
    grid.innerHTML = result.map(p => buildProductCard(p)).join('');
    count.textContent = `Showing ${result.length} product${result.length !== 1 ? 's' : ''}`;
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────
function initCategoryPage() {
  const params  = new URLSearchParams(window.location.search);
  const catParam = params.get('cat') || '';
  currentSearch  = params.get('search') || '';

  // Determine if catParam is a main cat or a sub cat
  if (catParam) {
    if (MAIN_CATEGORIES[catParam]) {
      // It IS a main category
      activeMainCat = catParam;
      activeSubCat  = '';
    } else {
      // It's a subcategory
      activeSubCat  = catParam;
      activeMainCat = getMainCat(catParam);
    }
  }

  // Breadcrumb
  const bc = document.getElementById('breadcrumbCat');
  if (bc) {
    if (currentSearch) {
      bc.textContent = `Search: "${currentSearch}"`;
    } else if (activeSubCat) {
      const mcLabel = MAIN_CATEGORIES[activeMainCat]?.label || activeMainCat;
      const subLabel = MAIN_CATEGORIES[activeMainCat]?.subs.find(s => s.key === activeSubCat)?.label || activeSubCat;
      bc.innerHTML = `<a href="category.html?cat=${activeMainCat}">${mcLabel}</a> / ${subLabel}`;
    } else if (activeMainCat) {
      bc.textContent = MAIN_CATEGORIES[activeMainCat]?.label || activeMainCat;
    } else {
      bc.textContent = 'All Products';
    }
  }

  buildCategoryFilters();
  applyFilters();

  // Search on Enter key
  document.getElementById('searchInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });
}

document.addEventListener('DOMContentLoaded', initCategoryPage);
