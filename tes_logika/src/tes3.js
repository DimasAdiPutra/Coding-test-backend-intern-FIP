const passwordValidation = (password) => {
	// Cek jika password kurang dari 8
	if (password.length < 8) {
		return 'Kata sandi minimal 8 karakter'
	}

	// Cek jika password lebih dari 32
	if (password.length > 32) {
		return 'Kata sandi maksimal 32 karakter'
	}

	// Cek jika password diawali oleh angka
	if (/^\d/.test(password)) {
		return 'Karakter awal tidak boleh angka'
	}

	// Cek jika password tidak terdapat angka di dalamnya
	if (!/.*\d.*/.test(password)) {
		return 'Harus memiliki angka'
	}

	// Cek jika password tidak mengandung minimal 1 huruf kapital dan huruf kecil
	if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
		return 'Harus memiliki huruf kapital dan huruf kecil'
	}

	return 'Kata sandi valid'
}

/*
! Untuk menjalankan test hilangkan komentar tanpa bintang (*) mulai dari blok di bawah
*/
/*
 * 1. Cek bila sandi kurang dari 8
 * 2. Cek bila sandi lebih dari 32
 * 3. Cek bila ada angka di awal
 * 4. Cek bila tidak ada angka sama sekali
 * 5. Cek bila hurufnya kecil semua
 * 6. Cek bila hurufnya kapital semua
 * 7. Cek bila persyaratannya terpenuhi
 */
// console.log(passwordValidation('sandi'))
// console.log(passwordValidation('Berikut1 adalah kisah sang gajah.'))
// console.log(passwordValidation('5andiwara'))
// console.log(passwordValidation('Sandiwara'))
// console.log(passwordValidation('sandiwar4'))
// console.log(passwordValidation('SANDIWAR4'))
// console.log(passwordValidation('Sandiwar4'))
/*
! sampai sini
*/

module.exports = passwordValidation
