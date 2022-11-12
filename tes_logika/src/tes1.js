const bilanganCacah = (n) => {
	let arrCacah = new Set()
	let kelipatan3 = 0
	let kelipatan7 = 0
	for (let i = 0; i < n; i++) {
		arrCacah.add((kelipatan3 += 3))
		arrCacah.add((kelipatan7 += 7))
	}

	return Array(...arrCacah)
		.sort((a, b) => a - b)
		.slice(0, n)
		.map((e) => (e % 3 === 0 && e % 7 === 0 ? 'Z' : e))
		.join(', ')
}

/*
! Untuk menjalankan test hilangkan komentar tanpa bintang (*) mulai dari blok di bawah
*/
// * Membuat variable untuk parameter
// let n = 13

// * Menjalankan fungsi bilanganCacah dan menampilkan jumlah bilanganCacah apakah sudah sesuai dengan nilai n
// console.log(bilanganCacah(n))
// console.log(bilanganCacah(n).split(', ').length)
/*
! sampai sini
*/

module.exports = bilanganCacah
