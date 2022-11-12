const bilanganCacah = require('../src/tes1')

let n = 13 // Digunakan sebagai parameter fungsi bilanganCacah
let result = '3, 6, 7, 9, 12, 14, 15, 18, Z, 24, 27, 28, 30' // hasil yang di harapkan jika n = 13

test('Mencari bilangan cacah dengan kelipatan 3 atau 7, jika bilangan itu adalah kelipatan 3 dan 7 ganti dengan Z', () => {
	/*
	 * Menjalankan  fungsi bilanganCacah menggunakan variable n sebagai parameter
	 * Melihat jumlah bilangan dari hasil bilanganCacah
	 */
	console.log(bilanganCacah(n))
	console.log(bilanganCacah(n).split(', ').length)

	/*
	 * 1. Cek hasilnya apakah sesuai jika parameternya dari fungsi bilanganCacah adalah 13
	 * 2. Cek apakah panjangnya dari bilangan cacah yang ada sudah sesuai dengan parameter yang di berikan
	 * 3. Cek jika masih terdapat bilangan cacah yang merupakan kelipatan 3 dan 7
	 */
	expect(bilanganCacah(n)).toBe(result)
	expect(bilanganCacah(n).split(', ').length).toStrictEqual(n)
	expect(
		bilanganCacah(n)
			.split(', ')
			.filter((e) => e % 3 === 0 && e % 7 === 0).length
	).toBeLessThanOrEqual(0)
})
