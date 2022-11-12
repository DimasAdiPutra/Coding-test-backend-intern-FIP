function cekBilanganCacahTerkecil(numbers) {
	numbers = numbers.sort((a, b) => a - b)
	for (let i = 0; i < numbers.length; i++) {
		const e = numbers[i]

		// Jika nilai saat ini + 1 tidak sama dengan nilai selanjutnya maka return nilai saat ini + 1
		if (e + 1 !== numbers[i + 1]) {
			return e + 1
		}
	}
}

/*
! Untuk menjalankan test hilangkan komentar tanpa bintang (*) mulai dari blok di bawah
*/
// console.log(cekBilanganCacahTerkecil([5, 2, 8, 4, 3, 10]))
// console.log(cekBilanganCacahTerkecil([2, 3, 4, 6]))
// console.log(cekBilanganCacahTerkecil([8, 6, 7, 12]))
/*
! sampai sini
*/

module.exports = cekBilanganCacahTerkecil
