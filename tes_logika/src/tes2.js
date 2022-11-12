function checkString(string) {
	/*
	 * Membuat array untuk menyimpan kata apa saja yang ingin kita cari
	 * Lalu buat regex baru untuk mencari kata yang ada di dalam array yang sudah kita buat
	 */
	let findArray = ['sang gajah', 'serigala', 'harimau']
	let regex = new RegExp(
		findArray.map((e) => `(${e.toLowerCase()})`).join('|'),
		'gi'
	)

	/*
	 * apakah di dalam string ada kata yang kita masukan ke dalam array?
	 * jika ada kembalikan array yang berisi semua kata itu,
	 * jika tidak kembalikan string di akhir function
	 */
	if (regex.test(string)) {
		return string
			.match(regex)
			.map((e) => e.toLowerCase())
			.join(' - ')
	}
	return `Tidak ada kata ${findArray.join(' ')} di dalam string anda masukan`
}

/*
! Untuk menjalankan test hilangkan komentar tanpa bintang (*) mulai dari blok di bawah
*/
// * Membuat variable untuk parameter
// let str = 'Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.'

// * Menjalankan fungsi checkString dan melihat jika kita memasukan string yang tidak terdapat kata yang tepat di dalamnya
// console.log(checkString(str))
// console.log(checkString('Tes bila tidak ada kata yang tepat'))
/*
! sampai sini
*/

module.exports = checkString
