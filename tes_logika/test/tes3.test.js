const passwordValidation = require('../src/tes3')

/*
! berikut urutan kegunaan dari array passwordTest di bawah berdasarkan indexnya
 * index ke-0 Cek bila sandi kurang dari 8
 * index ke-1 Cek bila sandi lebih dari 32
 * index ke-2 Cek bila ada angka di awal
 * index ke-3 Cek bila tidak ada angka sama sekali
 * index ke-4 Cek bila hurufnya kecil semua
 * index ke-5 Cek bila hurufnya kapital semua
 * index ke-6 Cek bila persyaratannya terpenuhi
*/
let passwordTest = [
	'sandi',
	'Berikut1 adalah kisah sang gajah.',
	'5andiwara',
	'Sandiwara',
	'sandiwar4',
	'SANDIWAR4',
	'Sandiwar4',
]

// Mengambil password yang valid untuk melakukan test
let validPassword = passwordTest[6]

test('Validasi password dengan beberapa syarat', () => {
	// * Menampilkan setiap kondisi yang memungkinkan
	for (let i = 0; i < passwordTest.length; i++) {
		const e = passwordTest[i]
		console.log(passwordValidation(e))
	}

	// * Cek jika password memenuhi syarat di atas sekaligus dan output yang di berikan sesuai
	expect(validPassword).toMatch(
		/^((?!\d)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32})/
	)
	expect(passwordValidation(validPassword)).toStrictEqual('Kata sandi valid')
})
