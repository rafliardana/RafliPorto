# Redesign Portfolio M. Rafli Ardhana dengan Magic UI

## 1. Tujuan

Migrasikan portfolio statis saat ini ke implementasi yang mengikuti repository resmi
[`magicuidesign/portfolio`](https://github.com/magicuidesign/portfolio), lalu isi dengan data
M. Rafli Ardhana. Hasil akhir harus mempertahankan karakter utama template—layout satu kolom
yang ringkas, animasi masuk, kartu pengalaman/pendidikan, kartu proyek, bottom dock, serta
dark/light theme—namun hanya memuat tujuh bagian yang diminta:

1. Hero
2. About
3. Work Experience
4. Education
5. Skills
6. Projects
7. Contact/Footer

Blog dan Hackathons tidak disertakan. Konten utama berbahasa Inggris. Contact section tetap
menggunakan form Web3Forms, bukan CTA email-only seperti template asli.

## 2. Fakta dan keputusan yang sudah dikunci

- **Nama utama:** M. Rafli Ardhana
- **Inisial avatar:** MRA
- **Foto profil:** belum digunakan; tampilkan avatar inisial yang dirancang sebagai fallback final
- **Bahasa:** Inggris
- **Lokasi:** Batam, Indonesia
- **Email:** `rafliardana.bisnis@gmail.com`
- **LinkedIn:** `https://www.linkedin.com/in/rafliardhana`
- **GitHub:** `https://github.com/rafliardana`
- **Design portfolio:** `https://rafliporto.framer.website/`
- **Domain produksi:** `https://rafliard.my.id`
- **Sumber biodata:** CV “Resume M.Rafli Ardhana” yang diberikan pengguna
- **Cakupan template:** arsitektur, komponen, visual, animasi, dock navigation, responsive
  behavior, dan theme switcher dari repo resmi; tanpa Blog/Hackathons
- **Project media:** ambil preview dari live demo atau aset repository publik, simpan sebagai aset
  lokal yang dioptimalkan; gunakan fallback visual konsisten jika preview tidak dapat dibuat
- **Contact:** pertahankan Web3Forms dan access key yang sudah ada di implementasi lama
- **Backend/CMS:** tidak dibutuhkan; situs tetap statis dan semua data portfolio berada di source
  control

## 3. Kondisi repository saat ini

Repository saat ini tidak memiliki package manager atau framework. File utama adalah
`index.html`, `style.css`, dan `script.js`; lifecycle Figma Make menjalankan Python static server
dan menyalin ketiga file tersebut ke `.figma/make/dist`.

Migrasi akan mengganti lapisan aplikasi lama dengan Next.js static export. `CNAME` dan lifecycle
Figma Make tetap dipertahankan, tetapi script install/dev/deploy/deploy-preview harus disesuaikan
dengan package manager dan output build baru.

## 4. Arsitektur target

### 4.1 Stack

Gunakan baseline versi dan pola repository resmi yang telah diverifikasi:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui primitives
- Magic UI components
- Motion untuk animasi
- `next-themes` untuk dark/light/system theme
- Lucide React dan icon set lokal untuk ikon
- pnpm dan lockfile

Sebelum mengedit kode Next.js, implementer harus memuat skill `make/nextjs-docs`. Sebelum
mengubah lifecycle `.figma/make/`, implementer harus memuat skill
`make-verify-bootstrap/make-verify-bootstrap`.

### 4.2 Static export

- Konfigurasikan Next.js dengan `output: "export"` agar build menghasilkan direktori `out/`.
- Hindari Server Actions, route handlers, image optimization server-side, atau fitur runtime lain
  yang mencegah static export.
- Gunakan aset lokal di `public/`; untuk gambar gunakan elemen/konfigurasi yang kompatibel dengan
  export statis.
- Letakkan `CNAME` di output deployment, baik melalui `public/CNAME` maupun langkah copy eksplisit.
- Pertahankan canonical domain `rafliard.my.id`.

### 4.3 Struktur source

Gunakan struktur yang sejalan dengan repo resmi:

- `src/app/layout.tsx`: metadata, font, theme provider, global shell
- `src/app/page.tsx`: komposisi tujuh section
- `src/app/globals.css`: token tema, typography, layout global, reduced-motion behavior
- `src/data/resume.tsx`: single source of truth untuk personal data, skills, work, education,
  projects, navigation, dan social links
- `src/components/section/*`: section kompleks seperti Work, Projects, dan Contact
- `src/components/magicui/*`: BlurFade, BlurFadeText, Dock, FlickeringGrid, dan komponen Magic UI
  lain yang benar-benar digunakan
- `src/components/ui/*`: Avatar, Badge, Card, Separator, Tooltip, serta primitive yang digunakan
- `src/components/icons.tsx`: ikon social/project link
- `public/projects/*`: preview lokal kelima proyek

Jangan membawa content collection, blog routes, MDX content, Hackathons section, atau aset demo
yang tidak digunakan. Pertahankan atribusi/lisensi upstream yang diperlukan.

## 5. Data dan tampilan per section

### 5.1 Hero

- Heading: `Hi, I'm Rafli`
- Nama lengkap tersedia melalui metadata/accessible text dan data config.
- Deskripsi singkat diturunkan dari CV, misalnya:
  “Information Systems student and aspiring software developer bridging business operations,
  administration, and practical web technology.”
- Tampilkan lokasi “Batam, Indonesia”.
- Avatar bulat memakai inisial `MRA`; tidak memuat gambar palsu atau placeholder orang lain.
- Gunakan entrance animation `BlurFadeText`/`BlurFade` dan typography/spacing template.

### 5.2 About

Tulis ringkasan profesional ringkas dalam bahasa Inggris berdasarkan CV dan pengalaman proyek,
tanpa mengklaim senioritas atau teknologi yang tidak didukung data. Ringkasan harus menjelaskan:

- mahasiswa Information Systems;
- fondasi programming, database management, dan technical problem-solving;
- pengalaman operasi/administrasi sebagai kekuatan dalam menerjemahkan kebutuhan bisnis;
- minat membangun web applications dan digital experiences.

Jika memakai Markdown seperti template, link internal hanya diarahkan ke section yang benar-benar
ada.

### 5.3 Work Experience

Urutkan terbaru ke terlama:

1. **PT. Maitri Gemilang Sukses** — Administrative Officer  
   Batam, Indonesia · November 2025–February 2026  
   Ringkas tanggung jawab CV: daily fleet sales deposit reporting, fleet administration and
   licensing, biosolar barcode processing, customer service, petty cash/monthly accountability,
   dan social media content.
2. **PT. Pertamina Patra Niaga (SAR–Kepri)** — Facilitator  
   Batam, Indonesia · April 2024–December 2024  
   Ringkas: customer registration guidance, data verification, dan responsive customer support.
3. **PT. Asia Paperindo Perkasa** — Logistics Officer Intern  
   Batam, Indonesia · August 2022–December 2022  
   Ringkas: warehouse placement, packaging/shipping preparation, organization, dan retrieval
   efficiency.

Gunakan resume card/accordion behavior seperti template: informasi utama selalu terlihat,
deskripsi dapat dibuka dengan keyboard dan pointer, serta logo memakai monogram perusahaan
apabila logo resmi yang aman tidak tersedia. External company links hanya ditambahkan bila dapat
diverifikasi; jangan membuat URL tebakan.

### 5.4 Education

Urutkan pendidikan aktif/terbaru:

1. **Batam Institute of Technology** — Information Systems, 2024–2028
2. **SMK Negeri 4 Batam** — Logistics Engineering, 2022–2024

Gunakan layout education row dari template. Logo sekolah dapat memakai monogram yang konsisten
jika aset resmi tidak tersedia. Tahun menggunakan tabular numerals dan tetap terbaca pada layar
kecil.

### 5.5 Skills

Pertahankan skill portfolio yang sudah disepakati sebelumnya dan dukung dengan data CV. Sajikan
sebagai chip kecil bergambar ikon bila ikon yang sesuai tersedia, bukan empat kartu kategori
besar. Kelompok data dapat tetap disimpan dalam config untuk maintainability, tetapi visual
diratakan sebagai kumpulan chip seperti template.

- **Frontend / application:** HTML5, CSS3, JavaScript, React, PHP, Laravel
- **Data / backend services:** MySQL, PostgreSQL, Microsoft SQL Server, Firebase, Supabase,
  Cloudinary
- **Design / modeling:** UI/UX Design, Figma, Framer, Canva, Draw.io, PlantUML
- **Tools:** Git, GitHub, Laragon, XAMPP, SQL Server Management Studio, VS Code, Docker, Agile,
  Microsoft Office, IT Support & Maintenance

Gunakan nama pendek yang tetap jelas pada chip (misalnya “SSMS” boleh dipakai hanya bila tooltip
atau accessible label menjelaskan nama lengkap). Ikon yang tidak tersedia tidak boleh diganti
dengan logo yang salah.

### 5.6 Projects

Tampilkan lima project dalam grid satu kolom pada mobile dan dua kolom pada layar yang cukup
lebar. Masing-masing kartu memiliki media 16:9, title, deskripsi Inggris, tahun terverifikasi,
technology tags, serta tombol Website/Source hanya bila link tersedia.

1. **TokoKrenkass**
   - Live: `https://krenkass.web.app/`
   - Source: `https://github.com/rafliardana/tokokrenkass`
   - Tahun: 2026
   - Deskripsi berdasarkan repository: web-based product catalog for apparel storefront and
     stock management
   - Preview dari live catalog
2. **RetailSIM**
   - Live: `https://simretail4.vercel.app`
   - Source canonical:
     `https://github.com/ALIIF28/Project-System-Pos-Retail1_-`
   - Tahun: 2026
   - Deskripsi: retail management simulation with role-based cashier, warehouse, admin, and owner
     workflows
   - Preview dari public login/dashboard surface; jangan menampilkan atau menyimpan kredensial demo
     pada portfolio
3. **Produk Online**
   - Live: `https://produk-online-50a30.web.app/`
   - Source: tidak tersedia, sehingga tombol Source tidak dirender
   - Tahun: 2026
   - Deskripsi: Firebase-backed e-commerce/catalog experience with authentication, cart,
     checkout, and admin workflows
   - Preview dari public storefront
4. **Custom Bouquet System — Faedah Shop**
   - Live: `https://faedahshop.figma.site/`
   - Source:
     `https://github.com/rafliardana/Sistem-Bouquet-Kustom-Faedah-Shop`
   - Tahun: 2026
   - Deskripsi: responsive e-commerce and bouquet customization experience
   - Preview dari live site atau repository asset
5. **Inventory System**
   - Live: tidak tersedia, sehingga tombol Website tidak dirender
   - Source: `https://github.com/crendyyy/sistemInventory`
   - Tahun: 2026
   - Deskripsi: Laravel/Blade inventory application for products, stock levels, and operational
     records
   - Preview dari repository asset bila tersedia; jika tidak, gunakan fallback branded card

Saat menyiapkan preview:

- capture/ambil hanya halaman publik;
- crop konsisten ke rasio kartu, ekspor WebP/PNG yang teroptimasi, dan simpan lokal;
- jangan hotlink screenshot atau bergantung pada image host proyek;
- sediakan alt text yang menjelaskan isi UI;
- jika capture gagal atau situs berubah, gunakan fallback abstrak berbasis title/initial dan
  jangan memblokir implementasi.

### 5.7 Contact/Footer

Gabungkan visual contact card Magic UI (bordered card + subtle `FlickeringGrid`) dengan form
Web3Forms yang fungsional.

Field:

- Name — required
- Email — required dan `type="email"`
- Message — required
- Web3Forms access key hidden field
- Botcheck/honeypot tersembunyi bila didukung Web3Forms

Perilaku:

- submit dari client component ke `https://api.web3forms.com/submit`;
- cegah double submit dan tampilkan loading state;
- reset hanya setelah response sukses;
- tampilkan success/error message yang ramah dan spesifik;
- tangani non-JSON response, response gagal, dan network failure;
- status menggunakan `aria-live`, label tetap tersedia selain placeholder, dan fokus tetap dapat
  dipahami;
- access key lama dipertahankan tanpa mencetaknya di log atau dokumentasi. Karena Web3Forms
  client access key memang dikirim dari browser, jangan mengklaim bahwa pemindahan ke public env
  var membuatnya rahasia.

Tambahkan email, LinkedIn, GitHub, dan design portfolio sebagai link langsung. Footer memuat
copyright dengan tahun berjalan yang dihitung saat build/runtime tanpa hard-code tahun lama.

## 6. Navigation, theming, motion, dan UX

- Bottom dock fixed seperti template, berisi anchor Home, About, Work, Education, Skills,
  Projects, Contact; social icons GitHub/LinkedIn dapat dikelompokkan setelah separator.
- Gunakan tooltip berlabel untuk seluruh icon-only controls.
- Theme toggle mendukung system/light/dark dan menghindari hydration mismatch.
- Anchor scrolling harus menghormati focus behavior dan tidak tertutup dock.
- Tambahkan bottom padding yang cukup agar dock tidak menutupi form/footer.
- Animasi menggunakan stagger halus dari template, tetapi nonaktif/diringankan untuk
  `prefers-reduced-motion`.
- Tidak menggunakan emoji untuk ikon atau dekorasi.
- Pertahankan max-width rapat sekitar `max-w-2xl` untuk konten utama dan maksimal sekitar 800px
  pada project grid, mengikuti repository resmi.
- Pastikan layout tetap utuh pada 320px, tablet, desktop, dan zoom 200%.

## 7. Metadata, discoverability, dan aset domain

- Isi Next metadata dengan nama `M. Rafli Ardhana`, deskripsi profesional, canonical
  `https://rafliard.my.id`, Open Graph/Twitter card dasar, dan favicon/initial mark.
- Set dokumen `lang="en"`.
- Pastikan semua external link memakai `target="_blank"` hanya bila sesuai dan selalu
  `rel="noopener noreferrer"`.
- Ubah konfigurasi robots deployment dari non-indexable menjadi indexable karena ini portfolio
  publik produksi, serta sediakan robots/sitemap statis bila sesuai dengan export.
- Pastikan `CNAME` ikut ke output deployment.

## 8. Migrasi lifecycle Figma Make

Perbarui script dengan tetap mengikuti kontrak platform:

- `.figma/make/install`: aktifkan package manager yang terdeteksi dan install dari lockfile.
- `.figma/make/dev`: jalankan Next dev pada `$PORT` dan bind `0.0.0.0`; implementer tidak boleh
  menjalankan dev server manual karena server Figma Make sudah disupervisi host.
- `.figma/make/deploy`: jalankan build, validasi `out/`, pastikan `CNAME` tersedia, lalu panggil
  `figma make deploy --build-dir out`.
- `.figma/make/deploy-preview`: langkah sama, lalu
  `figma make deploy-preview --build-dir out`.
- Perbarui `.gitignore` untuk `.next/`, `out/`, dan artefak package manager tanpa mengabaikan
  source/lockfile penting.

Script harus memakai `set -euo pipefail`, berhenti pada build gagal, dan tidak menyembunyikan
error.

## 9. Pembersihan dan dokumentasi

- Hapus `index.html`, `style.css`, dan `script.js` setelah semua perilaku yang masih diperlukan
  (konten, link, Web3Forms) sudah dipindahkan.
- Pertahankan `CNAME`.
- Perbarui `README.md` agar menjelaskan stack Next.js/Magic UI, struktur data terpusat, perintah
  pnpm, static export, lifecycle Figma Make, daftar section, sumber konten, domain, dan cara
  mengganti avatar/project preview.
- Jangan menyalin data contoh Dillion Verma, placeholder social URLs, demo Hackathons, atau
  kredensial dari repository template.

## 10. Error handling dan edge cases

- Avatar tanpa foto harus selalu menampilkan `MRA` dengan kontras memadai.
- Logo perusahaan/sekolah yang hilang memakai monogram, bukan broken image.
- Project tanpa live/source link tidak merender tombol kosong.
- Project preview yang gagal dimuat memiliki fallback visual dan tidak mengubah tinggi kartu.
- Deskripsi panjang pada work cards dan project cards tidak menyebabkan overflow.
- Long URL/link focus ring terlihat pada light dan dark theme.
- Form invalid menggunakan native validation plus label yang jelas.
- Form request gagal tetap mempertahankan input pengguna agar dapat dicoba ulang.
- JavaScript/motion yang belum hydrate tidak boleh menyembunyikan konten inti.

## 11. Verifikasi dan acceptance criteria

### Automated checks

Jalankan dari repository root menggunakan script package yang ditetapkan:

1. `pnpm install --frozen-lockfile`
2. `pnpm lint`
3. `pnpm build`

Build dianggap berhasil hanya bila static export `out/` terbentuk dan memuat entry HTML, aset
Next, project images, serta `CNAME`.

### Functional checks

- Buka preview yang sudah disupervisi Figma Make; jangan memulai dev server kedua.
- Verifikasi seluruh tujuh anchor dock menuju section yang benar.
- Verifikasi theme Light/Dark/System dan persistence setelah reload.
- Verifikasi semua external links aktual:
  GitHub, LinkedIn, design portfolio, lima project links yang tersedia, serta email.
- Kirim satu submission Web3Forms dengan data uji yang aman dan pastikan loading, success, reset,
  dan repeat submission bekerja. Uji juga validation kosong dan simulasi failure/network error
  tanpa menghilangkan isi form.
- Periksa bahwa tidak ada Blog/Hackathons route atau konten contoh upstream.
- Periksa responsive layout di sekitar 320px, 768px, dan desktop; pastikan bottom dock tidak
  menutupi field/form/footer.
- Periksa keyboard-only navigation, urutan fokus, tooltip/control labels, form labels,
  `aria-live`, heading order, alt text, dan visible focus.
- Periksa `prefers-reduced-motion`, light/dark contrast, dan zoom 200%.
- Jalankan pemeriksaan browser console untuk hydration/runtime errors hanya jika ada indikasi
  kegagalan konkret.

### Definition of done

- Visual dan interaction language dapat dikenali sebagai Magic UI Portfolio resmi, bukan skin
  sederhana atas HTML lama.
- Semua biodata, pekerjaan, pendidikan, skill, dan lima proyek menggunakan data M. Rafli Ardhana.
- Form Web3Forms benar-benar mengirim dan memberi feedback, bukan sekadar tombol dekoratif.
- Static export dapat dideploy oleh lifecycle Figma Make dan mempertahankan domain
  `rafliard.my.id`.
- Tidak ada placeholder data template, link kosong, broken image, atau control yang tidak
  berfungsi.
