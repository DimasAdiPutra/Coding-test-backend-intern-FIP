# Coding Test Backend Developer Intern

Saya Dimas Adi Putra, Seorang lulusan SMK Jurusan Teknik Komputer Jaringan, dalam repository ini, Saya mengerjakan 2 buah tes dari finplan untuk mengikuti program magang sebagai Backend Developer.

## Navigasi

- [Tes Logika](#tes-logika)
  - [Hasil Akhir Logika](#hasil-akhir-logika)
  - [Cara Menjalankan Logika](#cara-menjalankan-logika)
    - [Dengan online editor](#dengan-online-editor)
    - [Dengan manual testing logika](#dengan-manual-testing-logika)
    - [Dengan unit testing logika](#dengan-unit-testing-logika)
- [Tes Backend](#tes-backend)
  - [Hasil akhir backend](#hasil-akhir-backend)
  - [Cara Menjalankan backend](#cara-menjalankan-backend)
    - [Dengan manual testing sql](#dengan-manual-testing-sql)
    - [Dengan unit testing-sql](#dengan-unit-testing-sql)

## Dokumentasi

Saya menyediakan beberapa cara untuk menjalankan code yang saya kirimkan, untuk lebih jelasnya silahkan baca dokumentasi lebih lanjut

### Tes Logika

Untuk Tes logika saya menyediakan 3 cara yaitu dengan menggunakan online editor dari [paiza.io](https://paiza.io/), lalu manual testing yaitu dengan menjalankan 1 persatu filenya, atau dengan menggunakan unit testing yang sudah saya sediakan, meskipun akan diharuskan untuk menginstall beberapa hal sebelumnya.

#### Hasil Akhir Logika

Berikut beberapa hasil akhir yang akan terlihat

##### Tes 1

![image](./tes_logika/screenshots/tes1_logika.png 'Tes 1 logika ketika di jalankan dengan unit testing jest')

##### Tes 2

![image](./tes_logika/screenshots/tes2_logika.png 'Tes 2 logika ketika di jalankan dengan unit testing jest')

##### Tes 3

![image](./tes_logika/screenshots/tes3_logika.png 'Tes 3 logika ketika di jalankan dengan unit testing jest')

##### Tes 4

![image](./tes_logika/screenshots/tes4_logika.png 'Tes 4 logika ketika di jalankan dengan unit testing jest')

##### Tes 5

![image](./tes_logika/screenshots/tes5_logika.png 'Tes 5 logika ketika di jalankan dengan unit testing jest')

#### Cara Menjalankan Logika

Seperti yang saya katakan di atas, saya menyediakan 3 cara untuk menjalankan tes logika ini, yaitu sebagai berikut :

##### Dengan online editor

Untuk menjalankan code dengan online editor saya menggunakan bantuan dari online editor gratis dari situs [paiza.io](https://paiza.io) dengan begitu anda bisa melakukan copy paste pada source code yang ada pada folder [src tes logika](./tes_logika/src/) ke [online editor yang sudah saya sediakan](https://paiza.io/en/projects/new?language=javascript).

##### Dengan manual testing Logika

Untuk menjalankan secara manual testing anda bisa membuka folder [src tes logika](./tes_logika/src/) dan menghilangkan komentar yang sudah saya beri tanda pada masing-masing file, akan ada petunjuk lebih lanjut pada masing-masing file nantinya.

##### Dengan unit testing Logika

Cara lain untuk menjalankannya adalah dengan menggunakan unit testing yang sudah saya sediakan menggunakan [jest.io](https://jestjs.io), dan tentunya untuk menggunakan ini diharuskan sudah menginstall [Node JS](https://nodejs.org) dan [npm](https://npmjs.com).

Jika di pastikan sudah terinstall anda bisa menjalankan perintah berikut pada terminal favorit anda untuk menginisialisasi project node js baru

```
npm init -y
```

parameter -y berfungsi untuk menggunakan nilai default yang sudah tersedia, jika anda memiliki konfigurasi sendiri anda bisa menghilangkan parameter ini. Selanjutnya jalankan perintah berikut untuk menginstall package yang di butuhkan.

```
npm install
```

Setelah terinstall maka tinggal menjalankan [jest](https://jestjs.io) untuk melakukan unit testing

```
npx jest
```

atau untuk menjalan unit testing untuk file tertentu bisa tuliskan

```
npx jest tes1
```

```
npx jest tes2
```

```
npx jest tes3
```

```
npx jest tes4
```

```
npx jest tes5
```

### Tes Backend

Untuk tes backend saya hanya menyediakan 2 cara untuk menjalankan codenya dan disini saya menggunakan mysql dari [xampp](https://www.apachefriends.org/download.html).

#### Hasil Akhir Backend

Berikut beberapa hasil akhir yang akan terlihat

##### Tes 1

![image](./tes_backend/screenshots/tes1_backend.png 'Tes 1 logika ketika di jalankan dengan unit testing jest')

##### Tes 2

![image](./tes_backend/screenshots/tes2_backend.png 'Tes 2 logika ketika di jalankan dengan unit testing jest')

##### Tes 3

![image](./tes_backend/screenshots/tes3_backend.png 'Tes 3 logika ketika di jalankan dengan unit testing jest')

##### Tes 4

![image](./tes_backend/screenshots/tes4_backend.png 'Tes 4 logika ketika di jalankan dengan unit testing jest')

#### Cara Menjalankan Backend

Seperti yang saya katakan, saya hanya menyediakan 2 cara untuk menjalankan tes backend, sebagai berikut :

##### Dengan manual testing SQL

Untuk menjalankan secara manual testing anda bisa membuka folder [src tes backend](./tes_backend/src/) dan Mengcopy paste code yang saya miliki pada runtime mysql anda, baik itu mysql yang di install di local machine anda ataupun dari XAMPP atau apapun itu, dan tentu saja ini cara yang lebih mudah.

##### Dengan unit testing SQL

Cara lain untuk menjalankannya adalah dengan menggunakan javascript yang sudah saya siapkan, dengan syarat sudah menginstall [Node JS](https://nodejs.org) dan [npm](https://npmjs.com) pada komputer anda dan termasuk syarat di atas yaitu menginstall mysql pada komputer anda.

Jika dipastikan semuanya sudah terinstall, ketikan perintah berikut pada terminal favorit anda untuk menginisialisasi project node js baru.

```
npm init -y
```

Parameter -y digunakan untuk menggunakan jawaban default, jika anda memiliki konfigurasi sendiri anda bisa menghilangkan parameter ini. Setelah itu jalankan perintah berikut untuk menginstall package yang di butuhkan

```
npm install
```

setelah selesai anda sudah menginstall package mysql dan dotenv. mysql di gunakan untuk menghubungkan code javascript dengan database mysql kita dan dotenv digunakan untuk mendeklarasikan variable environment yang banyak kita gunakan, anda bisa memiliki untuk membuat file **.env** dan mengisi **HOST**, **USER**, **PASSWORD**, dan **DATABASE** pada file ini, atau jika anda tidak ingin membuat file env, anda bisa membuka file [index.js](./tes_backend/index.js) dan melakukan konfigurasi database anda pada file tersebut.

Setelah konfigurasi selesai, anda masih harus melakukan copy-paste untuk code di [tes1 backend](./tes_backend/sql/tes1.sql) ke runtime mysql anda atau melakukan import pada XAMPP, setelah itu anda baru bisa menggunakan javascript untuk menjalan tes berikutnya dengan mengetikan code berikut di terminal :

Saya menganggap terminal ini sudah berada pada folder tes_backend

```
node ./src/tes2.js
```

```
node ./src/tes3.js
```

```
node ./src/tes4.js
```
