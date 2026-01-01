# Project Notes – Hannah Female Life Coach

***日本語***

_プロジェクトノート – Hannah Female Life Coach_

本プロジェクトの制作過程における学びや、直面した課題をまとめた簡易ドキュメントです。

---

## プロジェクトの目的

女性向けライフコーチのための
ポートフォリオ／プロモーション用Webサイトを制作することを目的としました。

重視したポイント：
- 落ち着きと信頼感のあるデザイン
- レスポンシブ対応（デスクトップ／タブレット／モバイル）
- 英語・日本語の二言語対応
- GitHub Pages を利用したデプロイ

---

## 学んだこと

### 1. フロントエンドのプロジェクト構成
- フォルダ構成の整理（images、screenshots、SCSS など）
- SCSS を用いたスタイルの分離と管理

### 2. SCSS ワークフロー
- SCSS の partial（`_variables`、`_mixin` など）の活用
- `@use` と `@import` の違いの理解
- `@use`：名前空間付きのモジュールとして読み込むため、スコープが明確で安全
- `@import`：グローバルに統合され、競合の原因になりやすく、現在は非推奨
- BEM スタイルによるクラス命名の統一

### 3. JavaScript（DOM 操作・インタラクション）
- JavaScript を用いた言語切り替え（EN / JP）の実装
- フレームワークを使わずに言語状態を管理
- シンプルで可読性の高いイベント処理

### 4. Git & GitHub
- リポジトリと GitHub Pages の違いの理解
- `main` ブランチの管理
- 意味のあるコミットメッセージの作成
- interactive rebase によるコミットの squash
- `git push` と `git push --force-with-lease` の違いの理解
- 通常時は `git push` を使用
- rebase 後は、より安全な `git push --force-with-lease` を使用

### 5. デプロイ
- `main` ブランチを使用した GitHub Pages の設定
- 更新内容が正しく反映されているかの確認

---

## 直面した課題

### Git ワークフロー
- リモートリポジトリに初期コミット（README.md）が存在していたため、最初の push が拒否された
- `git pull origin main --rebase` を使用してローカルとリモートの履歴を統一
- rebase 完了後、正常に push が可能になった
- `.DS_Store` などの untracked file の扱い
- コミット履歴を整理して保つこと

### Open Graph / SEO
- Open Graph 画像サイズの選定（1920x630）
- `og:title`、`og:description`、`meta description` の設定
- SNS 共有時のプレビュー表示の確認

---

## 個人的な振り返り

**CSS・レスポンシブデザイン**

このプロジェクトで最も時間を要したのは CSS でした。特に、clamp() を用いた フルードデザイン を初めて本格的に取り入れた点です。
当初は、メディアクエリを完全になくすことが目的だと誤解していましたが、調査を進める中で、実際には CSS の上書きを減らし、より柔軟なレイアウトを実現するための手法 であると理解しました。
rem、vw、% などの単位計算には苦労しましたが、モダンなレスポンシブデザインへの理解を深める良い経験になりました。

**プロジェクト構成とビジュアル表現**

プロジェクト全体の構成が整理され、一貫性が出てきた瞬間が最も楽しい部分でした。
Swiper.js をスライダーコンポーネントとして使用することで、過度な複雑さを加えることなく、滑らかなアニメーションと視覚的なクオリティ向上を実現できました。
既存の完成度の高い機能を活用することで、UI の品質向上に集中できたと感じています。

**SCSS を使用した経験**

今回のプロジェクトでは、これまであまり触れてこなかった SCSS を積極的に使用しました。
パーシャル、ネスト、変数といった機能により、スタイルをより整理された形で記述でき、プロジェクトの規模が大きくなっても保守・拡張しやすい CSS を書けるようになりました。

---

***English***

A brief documentation of the development process of this project, including
key learnings and challenges encountered.

---

## Project Goals

To build a portfolio / promotional website for a female life coach with a focus on:
- A calm and professional visual appearance
- Responsive layout (desktop, tablet, mobile)
- Bilingual support (English & Japanese)
- Deployment using GitHub Pages

---

## What I Learned

### 1. Frontend Project Structure
- Organizing a clean and maintainable folder structure (images, screenshots, SCSS, etc.)
- Separating styles using SCSS for better maintainability

### 2. SCSS Workflow
- Using SCSS partials (`_variables`, `_mixin`, etc.)
- Understanding the difference between `@use` and `@import`
- `@use`: Imports SCSS as a module with a namespace (scoped), making styles safer and more structured
- `@import`: Merges files into the global scope, which can cause conflicts and is no longer recommended
- Maintaining consistent class naming (BEM-style)

### 3. JavaScript DOM & Interactions
- Implementing a language toggle (EN / JP) using vanilla JavaScript
- Managing language state without using a framework
- Writing simple and clear event handling logic

### 4. Git & GitHub
- Understanding the difference between a repository and GitHub Pages
- Managing branches (`main`)
- Writing clear and meaningful commit messages
- Squashing commits using interactive rebase
- Understanding the difference between `git push` and `git push --force-with-lease`
- Using `git push` for normal workflows without rewritten history
- Using `git push --force-with-lease` after rebasing, which is safer than `--force` because it aborts if new commits exist on the remote

### 5. Deployment
- Setting up GitHub Pages from the `main` branch
- Updating content and verifying that changes are deployed correctly

---

## Challenges Faced

### Git Workflow
- Initial push was rejected because the remote repository already contained an initial commit (`README.md`)
- Used `git pull origin main --rebase` to align local and remote commit histories
- Successfully pushed the repository after completing the rebase
- Understanding untracked files such as `.DS_Store`
- Keeping the commit history clean and readable

### Open Graph & SEO
- Determining the appropriate Open Graph image size (1920x630)
- Configuring `og:title`, `og:description`, and `meta description`
- Ensuring link previews display correctly when shared

---

## Personal Notes

**CSS & Responsive Design**

The most time-consuming part of this project was CSS, especially when applying a fluid design approach using clamp() for the first time.
Initially, I thought the main goal was to eliminate the use of media queries entirely. However, after further research, I realized that this approach is more about reducing CSS overrides and creating more flexible layouts.
Although it was challenging due to calculations involving units such as rem, vw, and %, this experience helped me gain a better understanding of modern responsive design concepts.

**Project Structure & Visual Experience**

The most enjoyable part was when the project structure started to feel clean and consistent.
Using Swiper.js as a slider component provided smooth animations and improved the visual quality of the page without adding unnecessary complexity.
This approach allowed me to focus on UI quality without having to rebuild well-established features from scratch.

**Experience Using SCSS**

In this project, I also started using SCSS more actively, which I had not explored much before.
SCSS helped me organize styles more effectively through the use of partials, nesting, and variables, making the CSS easier to maintain and scale as the project grew in complexity.

---

***Bahasa Indonesia***

Dokumentasi singkat proses pengerjaan project ini, termasuk hal yang dipelajari dan
tantangan yang dihadapi.

---

## Tujuan Project

Membangun website portfolio / promotional page untuk seorang female life coach
dengan fokus pada:
- Tampilan yang tenang dan profesional
- Responsif (desktop, tablet, mobile)
- Dukungan dua bahasa (English & Japanese)
- Deployment menggunakan GitHub Pages

---

## Hal yang Dipelajari

### 1. Struktur Project Frontend
- Mengatur struktur folder yang rapi (images, screenshots, SCSS, dll)
- Memisahkan style menggunakan SCSS agar lebih terorganisir

### 2. SCSS Workflow
- Penggunaan partial SCSS (`_variables`, `_mixin`, dll)
- Perbedaan `@use` dan `@import`
- `@use`: Mengimpor SCSS sebagai module dengan namespace (scoped), sehingga lebih aman dan terstruktur.
- `@import`: Menggabungkan file ke global scope, berisiko konflik dan tidak lagi direkomendasikan.
- Menjaga konsistensi class naming (BEM-style)

### 3. JavaScript DOM & Interaksi
- Language toggle (EN / JP) menggunakan JavaScript
- Mengelola state bahasa tanpa framework
- Event handling yang sederhana dan jelas

### 4. Git & GitHub
- Perbedaan repository dan GitHub Pages
- Mengelola branch (`main`)
- Commit message yang jelas dan bermakna
- Squash commit menggunakan interactive rebase
- Perbedaan `git push` dan `git push --force-with-lease`
- `git push` digunakan pada kondisi normal tanpa perubahan riwayat commit
- `git push --force-with-lease` digunakan setelah melakukan `rebase`, dan lebih aman dibanding `--force` karena akan membatalkan push jika sudah ada commit baru di remote

### 5. Deployment
- Setup GitHub Pages dari branch `main`
- Update konten dan memastikan perubahan ter-deploy dengan benar

---

## Tantangan yang Dihadapi

### Git Workflow
- Push awal ditolak karena repository remote sudah memiliki commit awal (README.md).
- Menggunakan `git pull origin main --rebase` untuk menyelaraskan history lokal dan remote.
- Setelah rebase selesai, repository berhasil di-push ke GitHub.
- Memahami untracked files seperti `.DS_Store`
- Menjaga history commit tetap bersih

### Open Graph & SEO
- Menentukan ukuran OG image yang tepat (1920x630 ref:chatGPT)
- Mengatur `og:title`, `og:description`, dan `meta description`
- Memastikan preview link tampil dengan benar saat dibagikan

---

## Catatan Pribadi

**CSS & Responsive Design**

Bagian yang paling memakan waktu dalam project ini adalah CSS, khususnya saat pertama kali menerapkan pendekatan fluid design menggunakan clamp().
Awalnya saya mengira tujuan utama pendekatan ini adalah menghilangkan penggunaan media query sepenuhnya. Namun setelah melakukan riset lebih lanjut, saya memahami bahwa tujuannya lebih ke mengurangi kebutuhan override CSS dan membuat layout menjadi lebih fleksibel.
Meskipun cukup menantang karena melibatkan perhitungan unit seperti rem, vw, dan %, proses ini membantu saya memahami konsep responsive design modern dengan lebih baik.

**Struktur Project & Visual Experience**

Bagian yang paling menyenangkan adalah ketika struktur project mulai terasa rapi dan konsisten.
Penggunaan Swiper.js sebagai komponen slider memberikan animasi yang halus dan meningkatkan kualitas visual halaman tanpa menambah kompleksitas berlebihan.
Pendekatan ini memungkinkan saya untuk fokus pada kualitas UI tanpa harus membangun ulang fitur yang sudah tersedia dengan baik.

**Pengalaman Menggunakan SCSS**

Pada project ini saya juga mulai lebih aktif menggunakan SCSS, yang sebelumnya jarang saya eksplorasi.
SCSS membantu saya menulis style dengan struktur yang lebih terorganisir melalui penggunaan partial, nesting, dan variable, sehingga file CSS menjadi lebih mudah dirawat dan dikembangkan seiring bertambahnya kompleksitas project.
