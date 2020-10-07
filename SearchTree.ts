type node = {
	value: number;
	left: node | null;
	right: node | null;
};
function SearchTree(current: node, v: number): boolean {
	if (current === null) {
		return false;
	}
	if (current.value === v) {
		return true;
	} else if (current.value > v) {
		return SearchTree(current.left, v);
	}
	return SearchTree(current.right, v);
}
function SearchList(array: number[], v: number): number {
	let L = 0;
	let R = array.length - 1;
	while (L <= R) {
		const idx = L + Math.floor((R - L) / 2);
		const value = array[idx];
		if (value === v) {
			return idx;
		} else if (value > v) {
			R = idx - 1;
		} else {
			L = idx + 1;
		}
	}
	return -1;
}
const list = [1, 5, 7, 9, 11, 15, 17];
console.log(SearchList(list, 1));
console.log(SearchList(list, 13));
console.log(SearchList(list, 17));
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
				left: null,
			},
		},
		right: {
			value: 9,
			right: null,
			left: null,
		},
	},
	right: {
		value: 12,
		left: {
			value: 11,
			left: null,
			right: null,
		},
		right: {
			value: 15,
			left: {
				value: 14,
				left: {
					value: 13,
					left: null,
					right: null,
				},
				right: null,
			},
			right: null,
		},
	},
};
console.log(SearchTree(head, 1));
console.log(SearchTree(head, 13));
console.log(SearchTree(head, 17));
