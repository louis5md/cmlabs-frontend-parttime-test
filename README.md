# Meal Explorer

## Project Overview

Meal Explorer adalah aplikasi sederhana berbasis Next.js untuk menjelajahi data resep dari [TheMealDB API](https://www.themealdb.com/api.php).

Fitur utama aplikasi:

- Ingredients list: menampilkan daftar ingredient dari TheMealDB.
- Ingredients detail: menampilkan daftar meal berdasarkan ingredient yang dipilih.
- Meal detail: menampilkan informasi lengkap meal, recipe, instructions, dan video YouTube jika tersedia.

## Tech Stack

- Next.js dengan App Router
- React
- Tailwind CSS
- API: TheMealDB

## Prerequisites

Pastikan sudah menginstall:

- Node.js >= 18
- Package manager: npm, yarn, atau pnpm

## Installation Steps

1. Clone repository

```bash
git clone <repo-url>
```

2. Masuk ke folder project

```bash
cd cmlabs-frontend-parttime-test
```

3. Install dependencies

```bash
npm install
```

4. Jalankan development server

```bash
npm run dev
```

## Running the Project

Setelah development server berjalan, buka aplikasi di browser:

```bash
http://localhost:3000
```

Halaman utama akan mengarahkan user untuk mulai menjelajahi ingredient melalui route `/ingredients`.

## Build for Production

Untuk membuat production build:

```bash
npm run build
```

Untuk menjalankan hasil build:

```bash
npm start
```

## Project Structure

```txt
app/
  components/
    ingredients/
    meals/
    ui/
  ingredients/
    [ingredientName]/
  meals/
    [mealId]/
  lib/
```

Folder penting:

- `app/`: routing utama aplikasi menggunakan Next.js App Router.
- `app/components/`: komponen UI yang dipisahkan berdasarkan domain.
- `app/components/ingredients/`: komponen untuk ingredient list, search, dan card.
- `app/components/meals/`: komponen untuk meal list, meal detail, recipe, dan YouTube embed.
- `app/components/ui/`: komponen UI reusable seperti empty state, error state, dan loading skeleton.
- `app/lib/`: helper untuk fetch data dan tipe data TheMealDB.

## Features

- List Ingredients dari endpoint TheMealDB.
- Search Ingredients dengan frontend filtering.
- Ingredient Detail untuk menampilkan list meal berdasarkan ingredient.
- Search Meal berdasarkan nama meal di sisi frontend.
- Meal Detail berisi gambar, nama meal, instructions, recipe ingredients + measurements, dan YouTube embed.
- Loading state, empty state, dan error state.
- Tampilan responsive untuk desktop, tablet, dan mobile.

## Notes

- Semua data berasal dari TheMealDB API.
- Search dilakukan di frontend, tanpa backend tambahan.
- Search ingredient sudah dioptimasi menggunakan `useDeferredValue` agar input tetap responsif saat list card banyak.

## Deployment

Aplikasi ini dapat dideploy ke platform seperti:

- Vercel
- Netlify

Pastikan command build menggunakan:

```bash
npm run build
```
