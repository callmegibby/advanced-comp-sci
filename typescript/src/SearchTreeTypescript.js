/**
 * SearchTreeTypescript.ts
 *
 * The script will use the binary search algorithm to find any input values in the array & json object
 */
var chalk = require('chalk')
var list = [1, 5, 7, 9, 11, 15, 17]
var head = {
	value: 10,
	left: {
		value: 8,
		left: {
			value: 3,
			right: null,
			left: {
				value: 1,
				right: null,
				left: null
			}
		},
		right: {
			value: 9,
			right: null,
			left: null
		}
	},
	right: {
		value: 12,
		left: {
			value: 11,
			left: null,
			right: null
		},
		right: {
			value: 15,
			left: {
				value: 14,
				left: {
					value: 13,
					left: null,
					right: null
				},
				right: null
			},
			right: null
		}
	}
}
function SearchTreeTypescript(current, goal) {
	if (current === null) {
		return false
	}
	if (current.value === goal) {
		return true
	} else if (current.value > goal) {
		return SearchTreeTypescript(current.left, goal)
	}
	return SearchTreeTypescript(current.right, goal)
}
function SearchListTypescript(array, goal) {
	var L = 0
	var R = array.length - 1
	while (L <= R) {
		var index = L + Math.floor((R - L) / 2)
		var value = array[index]
		if (value === goal) {
			return index
		} else if (value > goal) {
			R = index - 1
		} else {
			L = index + 1
		}
	}
	// console.log('false')
	return -1
}
console.log(chalk.white.bold('-- Search Results --'))
console.log(chalk.green(SearchListTypescript(list, 1)))
console.log(chalk.red.bold(SearchListTypescript(list, 13)))
console.log(chalk.green(SearchListTypescript(list, 17)))
console.log(chalk.green(SearchTreeTypescript(head, 1)))
console.log(chalk.green(SearchTreeTypescript(head, 13)))
console.log(chalk.red.bold(SearchTreeTypescript(head, 17)))
