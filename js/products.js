const WHATSAPP_NUMBER = "919999999999"; // ← Change to your real WhatsApp number

// ═══════════════════════════════════════════════════════════════
// HOW TO ADD YOUR REAL PRODUCT IMAGES:
//   1. Find the product by name (Ctrl+F)
//   2. Replace the placeholder URLs in "images": [...] with real image URLs
//   3. Replace "video": "" with a YouTube embed URL like:
//      "video": "https://www.youtube.com/embed/VIDEO_ID_HERE"
// ═══════════════════════════════════════════════════════════════

const products = [
  {
    id: 1,
    name: "Canon Pixma G4780 MegaTank Wireless All-in-One with Duplex & ADF",
    brand: "Canon",
    category: "inktank-printers",
    featured: true,
    price: 19400,
    mrp: 22900,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+G4780+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+G4780+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+G4780+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+G4780+Top", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+G4780+Ink"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    shortDesc: "Print | Scan | Copy | Fax — Ink Tank, Wi-Fi, Duplex, ADF",
    sku: "CAN-G4780",
    specs: {"Technology": "Ink Tank", "Functions": "Print | Scan | Copy", "Connectivity": "Wireless (Wi-Fi)", "Color Output": "Color", "Model": "G4780", "Paper Size": "A4, Letter", "Family Brand": "Pixma", "Features": "Automatic Document Feeder", "Usage": "For Office"}
  },
  {
    id: 2,
    name: "Canon Maxify GX 3070",
    brand: "Canon",
    category: "inktank-printers",
    featured: true,
    price: 22000,
    mrp: 25900,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX3070+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX3070+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX3070+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX3070+Rear", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX3070+Tank"],
    video: "",
    shortDesc: "Print | Scan | Copy — Ink Tank, Wi-Fi, Duplex",
    sku: "CAN-GX3070",
    specs: {"Technology": "Ink Tank", "Functions": "Print | Scan | Copy", "Connectivity": "Wireless (Wi-Fi)", "Color Output": "Color", "Model": "GX 3070", "Family Brand": "MAXIFY", "Features": "Duplex Printing", "Paper Size": "A4, Letter", "Usage": "For Office"}
  },
  {
    id: 3,
    name: "Canon MF3010 Digital Multifunction Laser Printer",
    brand: "Canon",
    category: "laser-printers",
    featured: true,
    price: 16500,
    mrp: 19500,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+MF3010+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+MF3010+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+MF3010+Open", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+MF3010+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+MF3010+Back"],
    video: "",
    shortDesc: "Print | Scan | Copy — Laser, USB, 18ppm, Mono",
    sku: "CAN-MF3010",
    specs: {"Technology": "Laser", "Functions": "Print | Scan | Copy", "Print Speed": "Up to 18 pages/min", "Connectivity": "USB", "Color Output": "Black & White", "Model": "MF3010", "Paper Size": "A4", "Copy Speed": "Up to 18cpm", "Scan Resolution": "600x600 dpi", "Usage": "For Office"}
  },
  {
    id: 4,
    name: "Canon Maxify GX2070",
    brand: "Canon",
    category: "inktank-printers",
    featured: true,
    price: 20500,
    mrp: 24200,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX2070+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX2070+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX2070+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX2070+Rear", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX2070+Tank"],
    video: "",
    shortDesc: "Print | Scan | Copy | Fax — Ink Tank, Wi-Fi, Duplex",
    sku: "CAN-GX2070",
    specs: {"Technology": "Ink Tank", "Functions": "Print | Scan | Copy | Fax", "Connectivity": "Wireless (Wi-Fi)", "Color Output": "Color", "Model": "GX2070", "Family Brand": "MAXIFY", "Features": "Duplex Printing", "Paper Size": "A4, Letter", "Usage": "For Office"}
  },
  {
    id: 5,
    name: "Canon Maxify GX 7070",
    brand: "Canon",
    category: "inktank-printers",
    featured: false,
    price: 34500,
    mrp: 40000,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX7070+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX7070+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX7070+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX7070+ADF", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX7070+Ink"],
    video: "",
    shortDesc: "Print | Scan | Copy | Fax — Ink Tank, Wi-Fi, Two-sided scanning",
    sku: "CAN-GX7070",
    specs: {"Technology": "Ink Tank", "Functions": "Print | Scan | Copy | Fax", "Connectivity": "Wireless (Wi-Fi)", "Color Output": "Color", "Model": "GX 7070", "Family Brand": "MAXIFY", "Features": "Two-sided Scanning", "Paper Size": "A4, Letter", "Usage": "For Office"}
  },
  {
    id: 6,
    name: "Canon Maxify GX1070",
    brand: "Canon",
    category: "inktank-printers",
    featured: false,
    price: 19000,
    mrp: 22400,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX1070+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX1070+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX1070+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX1070+Top", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+GX1070+Tank"],
    video: "",
    shortDesc: "Print | Scan | Copy — Ink Tank, Wi-Fi, Duplex",
    sku: "CAN-GX1070",
    specs: {"Technology": "Ink Tank", "Functions": "Print | Scan | Copy", "Connectivity": "Wireless (Wi-Fi)", "Color Output": "Color", "Model": "GX1070", "Family Brand": "MAXIFY", "Features": "Duplex Printing", "Paper Size": "A4, Letter", "Usage": "For Office"}
  },
  {
    id: 7,
    name: "HP LaserJet M208dw Printer",
    brand: "HP",
    category: "laser-printers",
    featured: true,
    price: 15000,
    mrp: 18000,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M208dw+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M208dw+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M208dw+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M208dw+Rear", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M208dw+Tray"],
    video: "",
    shortDesc: "Print | Scan | Copy — Laser, Wi-Fi, Duplex, 29ppm Mono",
    sku: "HP-M208DW",
    specs: {"Color Output": "Black & White", "Functions": "Print | Scan | Copy", "Max Print Speed": "29 ppm", "Connectivity": "Wi-Fi", "Model": "M208DW", "Duplex Printing": "Yes", "Paper Size": "A4", "Warranty": "1 Year", "Technology": "Laser"}
  },
  {
    id: 8,
    name: "HP LaserJet Tank MFP 1005w Printer",
    brand: "HP",
    category: "laser-printers",
    featured: true,
    price: 19000,
    mrp: 22500,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+1005w+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+1005w+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+1005w+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+1005w+Tank", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+1005w+Tray"],
    video: "",
    shortDesc: "Print | Scan | Copy — Laser Tank, Wi-Fi, 22ppm Mono",
    sku: "HP-MFP1005W",
    specs: {"Color Output": "Black & White", "Functions": "Print | Scan | Copy", "Max Print Speed": "22 ppm", "Connectivity": "Wi-Fi, USB", "Model": "MFP 1005W", "Duplex Printing": "No", "Paper Size": "A4", "Warranty": "1 Year", "Technology": "Laser Tank"}
  },
  {
    id: 9,
    name: "HP LaserJet 136a Laser Monochrome Print Scan Copy",
    brand: "HP",
    category: "laser-printers",
    featured: false,
    price: 13000,
    mrp: 15500,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+136a+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+136a+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+136a+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+136a+Open", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+136a+Rear"],
    video: "",
    shortDesc: "Print | Scan | Copy — Laser, USB, Compact Mono",
    sku: "HP-136A",
    specs: {"Color Output": "Black & White", "Functions": "Print | Scan | Copy", "Connectivity": "USB", "Model": "136a", "Paper Size": "A4", "Technology": "Laser", "Usage": "For Office"}
  },
  {
    id: 10,
    name: "HP LaserJet 108w Printer",
    brand: "HP",
    category: "laser-printers",
    featured: false,
    price: 10500,
    mrp: 12500,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+108w+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+108w+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+108w+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+108w+Rear", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+108w+Top"],
    video: "",
    shortDesc: "Single Function Laser Printer, Wi-Fi, Compact, 20ppm",
    sku: "HP-108W",
    specs: {"Color Output": "Black & White", "Functions": "Print", "Connectivity": "Wi-Fi", "Model": "108w", "Paper Size": "A4", "Technology": "Laser", "Usage": "For Office or Home"}
  },
  {
    id: 11,
    name: "HP LaserJet 108a Printer",
    brand: "HP",
    category: "laser-printers",
    featured: false,
    price: 9500,
    mrp: 11500,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+108a+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+108a+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+108a+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+108a+Tray", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+108a+Rear"],
    video: "",
    shortDesc: "Single Function Laser Printer, USB, Budget Office Printer",
    sku: "HP-108A",
    specs: {"Color Output": "Black & White", "Functions": "Print", "Connectivity": "USB", "Model": "108a", "Paper Size": "A4", "Technology": "Laser", "Usage": "For Office or Home"}
  },
  {
    id: 12,
    name: "HP LaserJet Pro M305dn",
    brand: "HP",
    category: "laser-printers",
    featured: false,
    price: 22000,
    mrp: 26000,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M305dn+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M305dn+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M305dn+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M305dn+Tray", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M305dn+Rear"],
    video: "",
    shortDesc: "Single Function Laser, Duplex, Ethernet, 40ppm",
    sku: "HP-M305DN",
    specs: {"Color Output": "Black & White", "Functions": "Print", "Connectivity": "Ethernet, USB", "Model": "M305dn", "Duplex Printing": "Yes", "Print Speed": "40 ppm", "Paper Size": "A4", "Technology": "Laser"}
  },
  {
    id: 13,
    name: "Epson L850 Ink Tank Photo Printer",
    brand: "Epson",
    category: "inktank-printers",
    featured: true,
    price: 37500,
    mrp: 44000,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L850+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L850+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L850+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L850+Open", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L850+Ink"],
    video: "",
    shortDesc: "Print | Scan | Copy — 6-Ink Tank, USB, 5760x1440dpi Photo",
    sku: "EPS-L850",
    specs: {"Color Output": "Color | B&W", "Print Technology": "Ink Tank", "Model": "L850", "Print Resolution": "5760x1440 dpi", "Paper Size": "A4, A5", "Connectivity": "USB", "Scan Resolution": "1200x2400 dpi", "Auto Duplex": "No", "Usage": "Photo & Office"}
  },
  {
    id: 14,
    name: "Epson PictureMate PM520 Photo Printer",
    brand: "Epson",
    category: "inktank-printers",
    featured: false,
    price: 18500,
    mrp: 22000,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+PM520+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+PM520+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+PM520+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+PM520+Top", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+PM520+Ink"],
    video: "",
    shortDesc: "Compact Photo Printer, 6-ink, Borderless 4x6 prints",
    sku: "EPS-PM520",
    specs: {"Color Output": "Color", "Print Technology": "Ink Tank", "Model": "PM520", "Print Resolution": "5760x1440 dpi", "Paper Size": "4x6, 5x7", "Connectivity": "USB, Card Slot", "Usage": "Photo Printing"}
  },
  {
    id: 15,
    name: "Epson L18050 Ink Tank Printer",
    brand: "Epson",
    category: "inktank-printers",
    featured: false,
    price: 28000,
    mrp: 33000,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L18050+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L18050+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L18050+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L18050+A3", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L18050+Ink"],
    video: "",
    shortDesc: "A3+ Ink Tank, Print up to A3+, 6-Colour, Wi-Fi",
    sku: "EPS-L18050",
    specs: {"Color Output": "Color", "Print Technology": "Ink Tank", "Model": "L18050", "Paper Size": "A3+", "Connectivity": "Wi-Fi, USB", "Usage": "Photo & Office", "Features": "A3+ Wide Format"}
  },
  {
    id: 16,
    name: "Epson EcoTank L3250 A4 Wi-Fi All-in-One Ink Tank Printer",
    brand: "Epson",
    category: "inktank-printers",
    featured: true,
    price: 14500,
    mrp: 17200,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3250+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3250+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3250+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3250+Tank", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3250+Rear"],
    video: "",
    shortDesc: "Print | Scan | Copy — Ink Tank, Wi-Fi, 33ppm Black",
    sku: "EPS-L3250",
    specs: {"Color Output": "Color | B&W", "Print Technology": "Ink Tank", "Model": "L3250", "Connectivity": "Wi-Fi, USB", "Paper Size": "A4", "Functions": "Print | Scan | Copy", "Print Speed": "33ppm Black, 15ppm Color", "Usage": "For Home & Office"}
  },
  {
    id: 17,
    name: "Epson EcoTank L3215",
    brand: "Epson",
    category: "inktank-printers",
    featured: false,
    price: 11500,
    mrp: 13800,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3215+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3215+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3215+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3215+Tank", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3215+Rear"],
    video: "",
    shortDesc: "Print | Scan | Copy — Ink Tank, USB, Budget AIO",
    sku: "EPS-L3215",
    specs: {"Color Output": "Color | B&W", "Print Technology": "Ink Tank", "Model": "L3215", "Connectivity": "USB", "Paper Size": "A4", "Functions": "Print | Scan | Copy", "Usage": "For Home & Office"}
  },
  {
    id: 18,
    name: "Epson EcoTank L3210 A4 All-in-One Ink Tank Printer",
    brand: "Epson",
    category: "inktank-printers",
    featured: false,
    price: 10500,
    mrp: 12500,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3210+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3210+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3210+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3210+Tank", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+L3210+Rear"],
    video: "",
    shortDesc: "Print | Scan | Copy — Ink Tank, USB, Compact AIO",
    sku: "EPS-L3210",
    specs: {"Color Output": "Color | B&W", "Print Technology": "Ink Tank", "Model": "L3210", "Connectivity": "USB", "Paper Size": "A4", "Functions": "Print | Scan | Copy", "Usage": "For Home & Office"}
  },
  {
    id: 19,
    name: "HP Color LaserJet Pro 3203dw Single Function Printer",
    brand: "HP",
    category: "laser-printers",
    featured: true,
    price: 32500,
    mrp: 38500,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+3203dw+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+3203dw+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+3203dw+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+3203dw+Tray", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+3203dw+Rear"],
    video: "",
    shortDesc: "Color Laser, Wi-Fi, Duplex, 35ppm Colour",
    sku: "HP-3203DW",
    specs: {"Color Output": "Color", "Functions": "Print", "Connectivity": "Wi-Fi, Ethernet", "Model": "3203dw", "Duplex Printing": "Yes", "Print Speed": "35 ppm Colour", "Paper Size": "A4", "Technology": "Laser"}
  },
  {
    id: 20,
    name: "HP Laser MFP 323d Multifunction Duplex Printer",
    brand: "HP",
    category: "laser-printers",
    featured: true,
    price: 22000,
    mrp: 26000,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+323d+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+323d+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+323d+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+323d+ADF", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+323d+Rear"],
    video: "",
    shortDesc: "Print | Scan | Copy — Laser, Duplex, 30ppm, USB",
    sku: "HP-MFP323D",
    specs: {"Color Output": "Black & White", "Functions": "Print | Scan | Copy", "Connectivity": "USB", "Model": "MFP 323d", "Duplex Printing": "Yes", "Print Speed": "30 ppm", "Paper Size": "A4", "Technology": "Laser"}
  },
  {
    id: 21,
    name: "HP LaserJet Pro MFP M428dw",
    brand: "HP",
    category: "laser-printers",
    featured: false,
    price: 28000,
    mrp: 33000,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M428dw+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M428dw+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M428dw+ADF", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M428dw+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M428dw+Rear"],
    video: "",
    shortDesc: "Print | Scan | Copy — Laser, Wi-Fi, Duplex, 38ppm",
    sku: "HP-M428DW",
    specs: {"Color Output": "Black & White", "Functions": "Print | Scan | Copy", "Connectivity": "Wi-Fi, Ethernet, USB", "Model": "M428dw", "Duplex Printing": "Yes", "Print Speed": "38 ppm", "Paper Size": "A4", "Technology": "Laser"}
  },
  {
    id: 22,
    name: "HP LaserJet Pro MFP M130nw",
    brand: "HP",
    category: "laser-printers",
    featured: false,
    price: 14500,
    mrp: 17200,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M130nw+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M130nw+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M130nw+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M130nw+Tray", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+M130nw+Top"],
    video: "",
    shortDesc: "Print | Scan | Copy — Laser, Wi-Fi, Compact, 18ppm",
    sku: "HP-M130NW",
    specs: {"Color Output": "Black & White", "Functions": "Print | Scan | Copy", "Connectivity": "Wi-Fi, USB", "Model": "M130nw", "Paper Size": "A4", "Print Speed": "18 ppm", "Technology": "Laser"}
  },
  {
    id: 23,
    name: "Brother DCP-L2541DW Wireless All-in-One Laser Printer",
    brand: "Brother",
    category: "laser-printers",
    featured: false,
    price: 14500,
    mrp: 17200,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2541+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2541+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2541+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2541+ADF", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2541+Rear"],
    video: "",
    shortDesc: "Print | Scan | Copy — Laser, Wi-Fi, Duplex, 34ppm",
    sku: "BRO-DCPL2541DW",
    specs: {"Color Output": "Black & White", "Functions": "Print | Scan | Copy", "Connectivity": "Wi-Fi, USB", "Model": "DCP-L2541DW", "Duplex Printing": "Yes", "Print Speed": "34 ppm", "Paper Size": "A4", "Technology": "Laser"}
  },
  {
    id: 24,
    name: "Brother MFC-L2715DW Wireless Laser All-in-One with Fax",
    brand: "Brother",
    category: "laser-printers",
    featured: false,
    price: 18500,
    mrp: 21900,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2715+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2715+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2715+ADF", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2715+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2715+Rear"],
    video: "",
    shortDesc: "Print | Scan | Copy | Fax — Laser, Wi-Fi, Duplex, 34ppm",
    sku: "BRO-MFCL2715DW",
    specs: {"Color Output": "Black & White", "Functions": "Print | Scan | Copy | Fax", "Connectivity": "Wi-Fi, Ethernet, USB", "Model": "MFC-L2715DW", "Duplex Printing": "Yes", "Print Speed": "34 ppm", "Paper Size": "A4", "Technology": "Laser"}
  },
  {
    id: 25,
    name: "Brother HL-L2321D Automatic Duplex Laser Printer",
    brand: "Brother",
    category: "laser-printers",
    featured: false,
    price: 9500,
    mrp: 11500,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2321+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2321+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2321+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2321+Tray", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+L2321+Rear"],
    video: "",
    shortDesc: "Single Function Laser, USB, Duplex, 30ppm, Compact",
    sku: "BRO-HLL2321D",
    specs: {"Color Output": "Black & White", "Functions": "Print", "Connectivity": "USB", "Model": "HL-L2321D", "Duplex Printing": "Yes", "Print Speed": "30 ppm", "Paper Size": "A4", "Technology": "Laser"}
  },
  {
    id: 26,
    name: "Brother HL-B2080DW Wi-Fi Laser Printer",
    brand: "Brother",
    category: "laser-printers",
    featured: false,
    price: 12000,
    mrp: 14200,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+B2080+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+B2080+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+B2080+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+B2080+Tray", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+B2080+Rear"],
    video: "",
    shortDesc: "Single Function Laser, Wi-Fi, Duplex, 34ppm, High Yield Tank",
    sku: "BRO-HLB2080DW",
    specs: {"Color Output": "Black & White", "Functions": "Print", "Connectivity": "Wi-Fi, USB", "Model": "HL-B2080DW", "Duplex Printing": "Yes", "Print Speed": "34 ppm", "Paper Size": "A4", "Technology": "Laser Tank"}
  },
  {
    id: 27,
    name: "Canon DR-C225 II Document Scanner",
    brand: "Canon",
    category: "document-scanners",
    featured: false,
    price: 28000,
    mrp: 33000,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+DR-C225+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+DR-C225+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+DR-C225+ADF", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+DR-C225+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+DR-C225+Rear"],
    video: "",
    shortDesc: "25ppm/50ipm, ADF 30 sheets, USB, Duplex, A4",
    sku: "CAN-DRC225",
    specs: {"Brand": "Canon", "Model": "DR-C225 II", "Scan Speed": "25ppm / 50ipm", "ADF Capacity": "30 Sheets", "Connectivity": "USB", "Duplex": "Yes", "Resolution": "600 dpi", "Paper Size": "A4"}
  },
  {
    id: 28,
    name: "HP ScanJet Pro 2500 f1 Flatbed Scanner",
    brand: "HP",
    category: "document-scanners",
    featured: false,
    price: 18000,
    mrp: 21500,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+ScanJet+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+ScanJet+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+ScanJet+Open", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+ScanJet+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+ScanJet+Rear"],
    video: "",
    shortDesc: "Flatbed + ADF, 20ppm, USB, 1200dpi Optical",
    sku: "HP-SCANJET2500",
    specs: {"Brand": "HP", "Model": "ScanJet Pro 2500 f1", "Scan Speed": "20ppm", "Connectivity": "USB", "Resolution": "1200 dpi Optical", "ADF Capacity": "50 Sheets", "Duplex": "Yes", "Paper Size": "A4"}
  },
  {
    id: 29,
    name: "Epson DS-310 Portable Document Scanner",
    brand: "Epson",
    category: "document-scanners",
    featured: false,
    price: 16000,
    mrp: 19000,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+DS310+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+DS310+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+DS310+Open", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+DS310+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Epson+DS310+Rear"],
    video: "",
    shortDesc: "Portable ADF, 25ppm, USB Bus-powered, Duplex",
    sku: "EPS-DS310",
    specs: {"Brand": "Epson", "Model": "DS-310", "Scan Speed": "25ppm", "Connectivity": "USB (Bus-powered)", "Resolution": "600 dpi", "Duplex": "Yes", "ADF Capacity": "20 Sheets", "Paper Size": "A4"}
  },
  {
    id: 30,
    name: "Brother ADS-1200 Compact Mobile Document Scanner",
    brand: "Brother",
    category: "document-scanners",
    featured: false,
    price: 14000,
    mrp: 16500,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+ADS1200+Fron",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+ADS1200+Fron", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+ADS1200+Open", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+ADS1200+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Brother+ADS1200+Rear"],
    video: "",
    shortDesc: "Portable ADF, 25ppm, USB Bus-powered, Duplex, Compact",
    sku: "BRO-ADS1200",
    specs: {"Brand": "Brother", "Model": "ADS-1200", "Scan Speed": "25ppm", "Connectivity": "USB (Bus-powered)", "Resolution": "600 dpi", "Duplex": "Yes", "ADF Capacity": "20 Sheets", "Paper Size": "A4"}
  },
  {
    id: 31,
    name: "Logitech MK215 Wireless Keyboard & Mouse Combo",
    brand: "Logitech",
    category: "keyboard-mouse",
    featured: false,
    price: 1699,
    mrp: 2200,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Logitech+MK215+Set",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Logitech+MK215+Set", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Logitech+MK215+Keybo", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Logitech+MK215+Mouse", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Logitech+MK215+Recei"],
    video: "",
    shortDesc: "2.4GHz Wireless, Compact Keyboard + Mouse, Long Battery Life",
    sku: "LOG-MK215",
    specs: {"Brand": "Logitech", "Model": "MK215", "Connectivity": "2.4GHz Wireless", "Battery Life": "24 months keyboard / 12 months mouse", "Range": "10 meters", "Compatibility": "Windows, Chrome OS"}
  },
  {
    id: 32,
    name: "HP KM100 Wired Keyboard & Mouse Combo",
    brand: "HP",
    category: "keyboard-mouse",
    featured: false,
    price: 799,
    mrp: 999,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+KM100+Set",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+KM100+Set", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+KM100+Keyboard", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+KM100+Mouse", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+KM100+Box"],
    video: "",
    shortDesc: "USB Wired Keyboard + Mouse, Spill-resistant, Budget Combo",
    sku: "HP-KM100",
    specs: {"Brand": "HP", "Model": "KM100", "Connectivity": "USB Wired", "Keyboard Layout": "Full size", "Mouse Type": "Optical", "DPI": "1000 dpi", "Compatibility": "Windows"}
  },
  {
    id: 33,
    name: "Dell KB216 Wired Keyboard",
    brand: "Dell",
    category: "keyboard-mouse",
    featured: false,
    price: 699,
    mrp: 899,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Dell+KB216+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Dell+KB216+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Dell+KB216+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Dell+KB216+Keys", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Dell+KB216+USB"],
    video: "",
    shortDesc: "USB Wired, Full-size Layout, Quiet Keystroke, Spill-resistant",
    sku: "DELL-KB216",
    specs: {"Brand": "Dell", "Model": "KB216", "Connectivity": "USB Wired", "Keyboard Layout": "Full size", "Key Type": "Membrane", "Compatibility": "Windows", "Color": "Black"}
  },
  {
    id: 34,
    name: "HP 85A Black Original LaserJet Toner Cartridge (CE285A)",
    brand: "HP",
    category: "toner-cartridges",
    featured: false,
    price: 2800,
    mrp: 3300,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+85A+Toner+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+85A+Toner+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+85A+Toner+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+85A+Toner+Box", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=HP+85A+Toner+Open"],
    video: "",
    shortDesc: "Original HP 85A, 1600 pages, Black, For P1100/P1102 series",
    sku: "HP-CE285A",
    specs: {"Brand": "HP", "Part Number": "CE285A", "Color": "Black", "Page Yield": "1600 pages", "Compatible Printer": "HP LaserJet P1100, P1102, P1102w, M1130, M1132, M1210, M1212nf, M1217nfw", "Type": "Original"}
  },
  {
    id: 35,
    name: "Canon 337 Toner Cartridge for Canon MF200 / MF210 Series",
    brand: "Canon",
    category: "toner-cartridges",
    featured: false,
    price: 2500,
    mrp: 2999,
    inStock: true,
    image: "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+337+Front",
    images: ["https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+337+Front", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+337+Side", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+337+Box", "https://placehold.co/400x400/EBF5FB/1E3A5F?text=Canon+337+Chip"],
    video: "",
    shortDesc: "Original Canon 337, 2400 pages, Black, MF200/210/220/230 Series",
    sku: "CAN-CRG337",
    specs: {"Brand": "Canon", "Part Number": "CRG-337", "Color": "Black", "Page Yield": "2400 pages", "Compatible Printer": "Canon MF211, MF212w, MF215, MF217w, MF221d, MF226dn, MF229dw", "Type": "Original"}
  }
];

// ─── HELPERS ────────────────────────────────────────────────────────────────
function getDiscount(mrp, price) {
  if (!mrp || mrp <= price) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}
function formatPrice(n) {
  return "\u20b9" + Number(n).toLocaleString("en-IN");
}
function imgErr(el) {
  el.onerror = null;
  el.src = "https://placehold.co/300x300/EBF5FB/1E3A5F?text=ANG";
}

// ─── PRODUCT CARD ────────────────────────────────────────────────────────────
function buildProductCard(p) {
  var disc = getDiscount(p.mrp, p.price);
  var img = (p.image && p.image.trim()) ? p.image : "https://placehold.co/300x300/EBF5FB/1E3A5F?text=Product";
  var el = document.createElement("div");
  el.className = "col-6 col-md-4 col-lg-3";
  var inner = '<div class="product-card">';
  inner += '<div class="product-img-wrap">';
  inner += '<img class="pcard-img" src="' + img + '" alt="' + (p.brand||"") + '" loading="lazy"/>';
  if (disc > 0) inner += '<span class="discount-badge">-' + disc + '%</span>';
  if (!p.inStock) inner += '<span class="out-of-stock-badge">Out of Stock</span>';
  inner += '<button class="quick-view-btn" onclick="openQuickView(' + p.id + ')"><i class="bi bi-images"></i> Quick View</button>';
  inner += '</div><div class="product-body">';
  inner += '<div class="product-brand">' + (p.brand||"") + '</div>';
  inner += '<div class="product-name">' + p.name + '</div>';
  inner += '<div class="product-price"><span class="price-sale">' + formatPrice(p.price) + '</span>';
  if (p.mrp > p.price) inner += '<span class="price-mrp">' + formatPrice(p.mrp) + '</span>';
  inner += '<span class="price-gst">Incl. of all taxes</span></div>';
  inner += '<button class="btn-enquire" onclick="openEnquiry(' + p.id + ')"' + (!p.inStock ? ' disabled style="opacity:0.6"' : '') + '>';
  inner += '<i class="bi bi-chat-dots"></i> Enquire Now</button>';
  inner += '</div></div>';
  el.innerHTML = inner;
  var imgEl = el.querySelector(".pcard-img");
  if (imgEl) imgEl.onerror = function() { imgErr(this); };
  return el.outerHTML;
}

function renderFeatured() {
  var el = document.getElementById("featuredProducts");
  if (!el) return;
  el.innerHTML = products.filter(function(p){ return p.featured; }).map(buildProductCard).join("");
}

// ─── ENQUIRY MODAL ───────────────────────────────────────────────────────────
function openEnquiry(id) {
  var p = products.find(function(x){ return x.id === id; });
  if (!p) return;
  var qv = document.getElementById("quickViewModal");
  if (qv) { var qi = bootstrap.Modal.getInstance(qv); if (qi) qi.hide(); }
  document.getElementById("modalProductName").textContent = p.name;
  document.getElementById("enquiryProductId").value = p.id;
  var txt = "Hi ANG Solutions,\nI am interested in: " + p.name + "\nSKU: " + (p.sku||"") + "\nPlease share availability and best price.";
  document.getElementById("whatsappEnquiry").href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(txt);
  setTimeout(function(){ new bootstrap.Modal(document.getElementById("enquiryModal")).show(); }, 300);
}

// ─── QUICK VIEW MODAL (Images + Video + Specs) ───────────────────────────────
function openQuickView(id) {
  var p = products.find(function(x){ return x.id === id; });
  if (!p) return;
  var imgs = (Array.isArray(p.images) && p.images.length) ? p.images : [p.image||""];
  var disc = getDiscount(p.mrp, p.price);
  var waTxt = "Hi ANG Solutions,\nInterested in: " + p.name + "\nSKU: " + (p.sku||"") + "\nPlease share price.";
  var waLink = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(waTxt);
  var hasVideo = p.video && p.video.trim().length > 0;
  var mrpHtml = p.mrp > p.price ?
    '<span class="qv-price-mrp">' + formatPrice(p.mrp) + '</span><span class="qv-saving">Save ' + formatPrice(p.mrp - p.price) + '</span>' : "";
  var specHtml = "";
  if (p.specs && Object.keys(p.specs).length) {
    specHtml = '<div class="qv-specs-wrap"><h6>Specifications</h6><table class="qv-specs-table">' +
      Object.entries(p.specs).map(function(e){ return "<tr><th>" + e[0] + "</th><td>" + e[1] + "</td></tr>"; }).join("") +
      "</table></div>";
  }

  // Tab bar: Images + Video tab if video exists
  var tabsHtml = '<div class="qv-tabs">';
  tabsHtml += '<button class="qv-tab active" data-panel="images" onclick="qvShowTab(this)"><i class="bi bi-images"></i> Photos (' + imgs.length + ')</button>';
  if (hasVideo) tabsHtml += '<button class="qv-tab" data-panel="video" onclick="qvShowTab(this)"><i class="bi bi-play-circle-fill"></i> Video</button>';
  tabsHtml += '</div>';

  // Image panel
  var imgPanel = '<div class="qv-tab-panel" id="qvPanelImages">';
  imgPanel += '<div class="qv-main-img-wrap"><img id="qvMainImg" src="' + imgs[0] + '" alt="product"/>';
  imgPanel += (disc > 0 ? '<span class="qv-discount-badge">-' + disc + '% OFF</span>' : "");
  if (imgs.length > 1) {
    imgPanel += '<button class="qv-nav qv-nav-prev" onclick="qvNav(-1)"><i class="bi bi-chevron-left"></i></button>';
    imgPanel += '<button class="qv-nav qv-nav-next" onclick="qvNav(1)"><i class="bi bi-chevron-right"></i></button>';
  }
  imgPanel += '</div>';
  if (imgs.length > 1) imgPanel += '<div class="qv-thumbs-strip" id="qvThumbs"></div>';
  imgPanel += '<div class="qv-img-count">' + imgs.length + ' photo' + (imgs.length > 1 ? 's' : '') + '</div>';
  imgPanel += '</div>';

  // Video panel
  var vidPanel = "";
  if (hasVideo) {
    vidPanel = '<div class="qv-tab-panel" id="qvPanelVideo" style="display:none">';
    vidPanel += '<div class="qv-video-wrap"><iframe src="' + p.video + '" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe></div>';
    vidPanel += '</div>';
  }

  var modal = document.createElement("div");
  modal.id = "quickViewModal";
  modal.className = "modal fade";
  modal.setAttribute("tabindex", "-1");
  modal.innerHTML = (
    '<div class="modal-dialog modal-xl modal-dialog-centered">' +
    '<div class="modal-content qv-modal-content">' +
    '<button class="qv-close-btn" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i></button>' +
    '<div class="row g-0">' +
    '<div class="col-md-6 qv-gallery-col">' + tabsHtml + imgPanel + vidPanel + '</div>' +
    '<div class="col-md-6 qv-info-col">' +
    '<div class="qv-brand-badge">' + (p.brand||"") + '</div>' +
    '<h2 class="qv-product-name">' + p.name + '</h2>' +
    '<div class="qv-price-block"><span class="qv-price-sale">' + formatPrice(p.price) + '</span>' + mrpHtml + '</div>' +
    '<div class="qv-tax-note"><i class="bi bi-check-circle-fill text-success"></i> Incl. of all taxes</div>' +
    '<div class="qv-stock ' + (p.inStock ? "in-stock" : "out-stock") + '">' +
    '<i class="bi bi-' + (p.inStock ? "check-circle-fill" : "x-circle-fill") + '"></i> ' +
    (p.inStock ? "In Stock" : "Out of Stock") + '</div>' +
    (p.sku ? '<div class="qv-sku">SKU: ' + p.sku + '</div>' : '') +
    specHtml +
    '<div class="qv-actions">' +
    '<button class="btn-enquire w-100"' + (!p.inStock ? ' disabled' : '') + ' onclick="openEnquiry(' + p.id + ')"><i class="bi bi-chat-dots"></i> Enquire Now</button>' +
    '<a href="' + waLink + '" class="btn-whatsapp-qv w-100" target="_blank"><i class="bi bi-whatsapp"></i> WhatsApp Enquiry</a>' +
    '</div></div></div></div></div>'
  );

  var old = document.getElementById("quickViewModal");
  if (old) old.remove();
  document.body.appendChild(modal);

  // Attach main image onerror
  var mi = document.getElementById("qvMainImg");
  if (mi) mi.onerror = function(){ imgErr(this); };

  // Build thumbnails via DOM
  if (imgs.length > 1) {
    var strip = document.getElementById("qvThumbs");
    imgs.forEach(function(src, i) {
      var td = document.createElement("div");
      td.className = "qv-thumb" + (i === 0 ? " active" : "");
      var ti = document.createElement("img");
      ti.src = src;
      ti.alt = "view " + (i + 1);
      ti.onerror = function(){ imgErr(this); };
      td.appendChild(ti);
      td.addEventListener("click", (function(s, el){ return function(){ qvSelectImage(el, s); }; })(src, td));
      if (strip) strip.appendChild(td);
    });
  }

  window._qvImages = imgs;
  window._qvCurrent = 0;
  var bm = new bootstrap.Modal(modal);
  bm.show();
  modal.addEventListener("hidden.bs.modal", function(){
    // Stop video on close
    var iframe = modal.querySelector("iframe");
    if (iframe) iframe.src = iframe.src;
    if (modal.parentNode) modal.parentNode.removeChild(modal);
  });
}

// Tab switching (Images / Video)
function qvShowTab(btn) {
  var panel = btn.getAttribute("data-panel") || "images";
  document.querySelectorAll(".qv-tab").forEach(function(t){ t.classList.remove("active"); });
  btn.classList.add("active");
  document.querySelectorAll(".qv-tab-panel").forEach(function(p){ p.style.display = "none"; });
  var el = document.getElementById("qvPanel" + panel.charAt(0).toUpperCase() + panel.slice(1));
  if (el) el.style.display = "block";
}

function qvSelectImage(thumbEl, src) {
  document.querySelectorAll(".qv-thumb").forEach(function(t){ t.classList.remove("active"); });
  thumbEl.classList.add("active");
  var m = document.getElementById("qvMainImg");
  m.style.opacity = "0";
  setTimeout(function(){ m.src = src; m.style.opacity = "1"; }, 150);
  window._qvCurrent = (window._qvImages||[]).indexOf(src);
}

function qvNav(dir) {
  var imgs = window._qvImages || [];
  window._qvCurrent = (window._qvCurrent + dir + imgs.length) % imgs.length;
  var m = document.getElementById("qvMainImg");
  m.style.opacity = "0";
  setTimeout(function(){ m.src = imgs[window._qvCurrent]; m.style.opacity = "1"; }, 150);
  document.querySelectorAll(".qv-thumb").forEach(function(t, i){
    t.classList.toggle("active", i === window._qvCurrent);
  });
}

document.addEventListener("DOMContentLoaded", renderFeatured);
