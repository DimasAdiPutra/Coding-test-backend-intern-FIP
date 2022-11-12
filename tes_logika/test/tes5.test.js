const pattern = require('../src/tes5')

let n = 5

test('Membuat sebuah pola sebanyak n secara horizontal dan vertical', () => {
	console.log(pattern(n))

	// * Cek jumlah caracter pada pola termasuk \n
	expect(pattern(n).split('').length).toStrictEqual(n * n + n)
	// * Cek jumlah baris yang ada secara vertical
	expect(pattern(n).split('\n').length - 1).toStrictEqual(n)
})
