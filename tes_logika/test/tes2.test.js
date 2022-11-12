const checkString = require('../src/tes2')

let str =
	'Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.'
let result = 'sang gajah - sang gajah - serigala - serigala - harimau'

test('Mencari kata di dalam string', () => {
	/*
	 * Menjalankan fungsi checkString
	 * Menampilkan hasil dalam bentuk array
	 * Melihat jika kita memasukan string yang tidak terdapat kata yang tepat di dalamnya
	 */
	console.log(checkString(str))
	console.log(checkString(str).split(' - '))
	console.log(checkString('Tes bila tidak ada kata yang tepat'))

	/*
	 * 1 dan 2 Cek jika hasil yang di harapkan sesuai
	 * 3 Cek jika hasil dalam bentuk arraynya sama
	 * 4 Cek jika jumlahnya sama
	 */
	expect(checkString(str)).toBe(result)
	expect(checkString(str)).toStrictEqual(result)
	expect(checkString(str).split(' - ')).toStrictEqual(result.split(' - '))
	expect(checkString(str).split(' - ').length).toStrictEqual(
		result.split(' - ').length
	)
})
