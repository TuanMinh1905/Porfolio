# PORTFOLIO RULES – Phạm Tuấn Minh
> Đây là file quy tắc dành cho AI assistant khi chỉnh sửa portfolio này.
> Đọc kỹ trước khi thay đổi bất kỳ thứ gì.

---

## 1. TECH STACK

| Layer | Công nghệ |
|---|---|
| Framework | **Next.js 16** (App Router) |
| Styling | **Tailwind CSS v4** |
| State | **Zustand** (language toggle EN/VI) |
| Language | **TypeScript** |
| Font chính | **Mona Sans** (local, `public/fonts/`) |
| Font mono | **JetBrains Mono** (Google Fonts) |
| Font fallback | **Inter** (Google Fonts) |

---

## 2. CẤU TRÚC THƯ MỤC

```
Porfolio/
├── app/
│   ├── layout.tsx       ← Root layout, font, SEO metadata
│   ├── page.tsx         ← Ghép tất cả components, KHÔNG chứa logic
│   └── globals.css      ← @font-face + design tokens + animations
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── SectionWrapper.tsx   ← Wrapper chung, KHÔNG sửa
├── store/
│   └── languageStore.ts     ← Zustand EN/VI, KHÔNG thay đổi interface
├── data/
│   └── content.ts           ← NGUỒN DUY NHẤT của toàn bộ text content
└── public/
    ├── avatar.jpg           ← Ảnh đại diện
    ├── cv.pdf               ← File CV download
    └── fonts/               ← Mona Sans .ttf files (KHÔNG xóa)
```

---

## 3. QUY TẮC NỘI DUNG (content.ts)

### ⚠️ QUAN TRỌNG NHẤT
- **TOÀN BỘ text** hiển thị trên web đều nằm trong `data/content.ts`.
- **KHÔNG** hardcode text trực tiếp vào component.
- Mỗi key phải có **cả 2 ngôn ngữ**: `en` và `vi`.

### Quy tắc viết hoa (Tiếng Việt)
> Chỉ viết hoa **chữ đầu tiên** của cụm từ (sentence case).
> Các từ còn lại viết thường, TRỪ tên riêng & thuật ngữ kỹ thuật.

ĐÚNG:
- "Kỹ sư tích hợp AI"
- "Lập trình viên Full-Stack"
- "Nền tảng thương mại điện tử – Công ty Maysoft"
- "Khóa luận tốt nghiệp"
- "Kinh nghiệm làm việc"

SAI:
- "Kỹ Sư Tích Hợp AI"     <- viết hoa mỗi từ
- "Lập Trình Viên Full-Stack"
- "Nền Tảng Thương Mại Điện Tử"

### Tên riêng & kỹ thuật — LUÔN giữ nguyên casing:
```
Phạm Tuấn Minh, Petpet.vn, Maysoft, HCMUTE, TMF Fashion
TailorNet, SMPL, Next.js, Nuxt.js, Vue.js, Node.js
MongoDB, GitHub, AI, REST API, SSR, CSR, SEO
Frontend, Backend, Full-Stack, Mobile-First, Solo Developer
```

### Quy tắc viết hoa (Tiếng Anh)
- Title/Section headers: Title Case ("Work Experience", "About Me")
- Badges/Labels ngắn: Title Case ("Real-world Project", "Graduation Thesis")
- Sentences/Description: Sentence case (chỉ hoa chữ đầu câu)

---

## 4. HỆ THỐNG MÀU SẮC

```
--color-bg:        #0a0a0f   /* Nền tổng thể */
--color-surface:   #12121a   /* Surface card */
--color-surface-2: #0d0d14   /* Section nền xen kẽ */
--color-primary:   #6C63FF   /* Purple accent */
--color-secondary: #00D4FF   /* Cyan accent */
```

Gradient chính: bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]

### Màu Skills cards (theo nhóm — dùng emoji làm key):
| Emoji key | Màu card | Màu badge |
|---|---|---|
| 🎨 Frontend | pink to purple | text-pink-300 |
| ⚙️ Backend | blue to cyan | text-blue-300 |
| 🔄 State | green to teal | text-green-300 |
| 🛠️ Tools | orange to amber | text-orange-300 |
| 🤖 AI | violet to indigo | text-violet-300 |

QUAN TRỌNG: Emoji trong content.ts KHÔNG hiển thị ra ngoài UI.
Chúng chỉ dùng làm KEY để tra màu trong groupColors và badgeColors ở Skills.tsx.
KHÔNG xóa trường `icon` trong data/content.ts.

---

## 5. FONT

| Mục đích | Font |
|---|---|
| Text thường (body, desc, nav) | Mona Sans |
| Tiêu đề section | Mona Sans (font-black / font-bold) |
| Code, label mono, thời gian | JetBrains Mono (font-mono) |

Thêm font mới:
1. Copy file .ttf vào public/fonts/
2. Khai báo @font-face trong app/globals.css (TRƯỚC dòng @import "tailwindcss")
3. Cập nhật font-family trong body {} rule của globals.css
4. KHÔNG dùng next/font để load font local

---

## 6. QUY TẮC ICON

KHÔNG thêm SVG icon vào UI elements (buttons, bullets, headings, v.v.)

ĐƯỢC PHÉP:
- Timeline dot (.w-4.h-4.rounded-full) trong Experience section
- Gradient accent dot trong Contact cards
- Dấu "–" làm bullet trong lists

KHÔNG ĐƯỢC:
- SVG icon trong buttons (GitHub, external link, download, play)
- Checkmark SVG trong highlight lists
- Emoji hiển thị trực tiếp trong UI
- Icon trong Education/Skills card headers

---

## 7. COMPONENT CONVENTIONS

### SectionWrapper — dùng cho mọi section:
```tsx
<SectionWrapper id="section-id" className="bg-[#0d0d14]">
  {/* Section nền tối xen kẽ thêm className */}
  {/* Section nền mặc định thì bỏ className */}
</SectionWrapper>
```

### Section Header — copy pattern này:
```tsx
<div className="text-center mb-16">
  <p className="text-[#6C63FF] font-mono text-sm mb-2">{t.subtitle}</p>
  <h2 className="text-4xl md:text-5xl font-black text-white">{t.title}</h2>
  <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full mx-auto" />
</div>
```

### Language store — cách dùng:
```tsx
"use client";
const { lang } = useLanguageStore();
const t = content.[section][lang];
```
Tất cả component client đều có "use client" và lấy text qua useLanguageStore.

---

## 8. THÊM / SỬA NỘI DUNG

### Thêm project mới:
1. Thêm object vào content.projects.en.items[] VÀ content.projects.vi.items[]
2. Điền đủ: id, title, subtitle, period, badges[], description, highlights[], tech[], links
3. links.demo = "" nếu chưa có video

### Thêm YouTube video demo:
- Điền URL vào links.demo trong cả en và vi
- Component Projects.tsx tự hiển thị nút "Video demo" khi link không rỗng

### Thêm section mới:
1. Tạo component trong components/
2. Thêm content vào data/content.ts (cả en và vi)
3. Import và thêm vào app/page.tsx
4. Thêm nav link vào content.nav

---

## 9. KHÔNG ĐƯỢC THAY ĐỔI

- KHÔNG xóa trường `icon` trong content.skills.*.groups[] — dùng để map màu
- KHÔNG thay đổi interface của useLanguageStore trong store/languageStore.ts
- KHÔNG sửa SectionWrapper.tsx — dùng chung toàn bộ
- KHÔNG xóa file font trong public/fonts/
- KHÔNG hardcode text trực tiếp vào component — phải qua content.ts
- KHÔNG dùng class `font-sans` của Tailwind — đã override bằng Mona Sans qua CSS
- KHÔNG xóa @font-face declarations ở đầu globals.css

---

## 10. LỆNH THƯỜNG DÙNG

```bash
npm run dev      # Chạy local tại http://localhost:3000
npm run build    # Build production (kiểm tra lỗi TypeScript)
npm run lint     # Kiểm tra ESLint
```
