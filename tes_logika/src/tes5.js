function pattern(n) {
	if (n % 2 === 0) {
		return 'Harus bilangan ganjil'
	}

	let patternString = ''

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			if (n >= 5) {
				if (i >= 2 && i !== n) {
					if (j >= 2 && j < n) {
						if (j === n - (i - 1)) {
							patternString += 'X'
						} else {
							patternString += 'O'
						}
					} else {
						patternString += 'X'
					}
				} else {
					patternString += 'X'
				}
			} else {
				patternString += 'X'
			}
		}
		patternString += '\n'
	}

	return patternString
}

/*
! Untuk menjalankan test hilangkan komentar tanpa bintang (*) mulai dari blok di bawah
*/
// console.log(pattern(3))
// console.log(pattern(5))
// console.log(pattern(7))
// console.log(pattern(2))
/*
! sampai sini
*/

module.exports = pattern
