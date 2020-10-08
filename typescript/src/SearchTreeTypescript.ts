/**
 * SearchTreeTypescript.ts
 *
 * The script will use the binary search algorithm to find any input values in the array & json object
 */

const chalk = require('chalk')
const list = [1, 5, 7, 9, 11, 15, 17]
const head: node = {
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
type node = {
	value: number
	left: node | null
	right: node | null
}
function SearchTreeTypescript(current: node, goal: number): boolean {
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
function SearchListTypescript(array: number[], goal: number): number {
	let L = 0
	let R = array.length - 1
	while (L <= R) {
		const index = L + Math.floor((R - L) / 2)
		const value = array[index]
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
