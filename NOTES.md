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

## 個人的な気づき

このプロジェクトを通して、Webサイト制作は
単にコードを書くことだけでなく、

- バージョン管理
- 成果物の伝え方

も重要であると実感しました。

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

This project helped me realize that building a website is not only about writing code, but also about:
- Managing versions properly
- Communicating the outcome of the work clearly

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

Project ini membantu saya memahami bahwa membangun website bukan hanya soal menulis kode, tapi juga:
- Mengelola versi
- Menyampaikan hasil kerja dengan baik
