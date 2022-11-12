const cekBilanganCacahTerkecil = require('../src/tes4')

let numbers = [5, 2, 8, 4, 3, 10]
let result = 6

test('Mencari bilangan cacah terkecil berdasarkan array yang ada', () => {
	console.log(
		`Bilangan cacah terkecil yang tidak ada dalam array [${numbers.join(
			', '
		)}] adalah ${cekBilanganCacahTerkecil(numbers)}`
	)

	// * Cek jika hasilnya sesuai dengan yang di harapkan
	expect(cekBilanganCacahTerkecil(numbers)).toStrictEqual(result)
})
