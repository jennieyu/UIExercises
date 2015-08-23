describe("divideFunction",function(){
	it("should got value a divide value b",function(){
		expect(divide(4,2)).toEqual(2);
	})
})

describe("takes a single argument (a string) and returns the string reversed",function(){
	it("should got a reverse string",function(){
		expect(reverseString("Subscribers rock")).toBe("kcor srebircsbuS");
	})
})

describe("takes an array of numbers and returns the minimum value",function(){
	it("should got min value",function(){
		expect(findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12])).toEqual(-1.1);
	})
})

describe("takes an array and returns the distinct values only",function(){
	it("should returns the distinct values only",function(){
		expect(findDistinctValues([5,3,2,4,2,5,2,17,1])).toEqual([5,3,2,4,17,1]);
	})
})

describe("remove the values contained in fruitsToRemove from the array fruits ",function(){
	it("should returns fruits without fruitsToRemove",function(){
		expect(removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],['pear', 'banana'])).toEqual(['apple', 'orange', 'kiwi', 'plum', 'strawberry']);
	})
})

describe("push either a simple value or an array of values onto a specified array ",function(){
	it("should returns array contains arrayToPush",function(){
		expect(pushOntoArray([1, 2, 3, 4, 5],6)).toEqual([1,2,3,4,5,6]);
		expect(pushOntoArray([1, 2, 3, 4, 5],[7, 8, 9])).toEqual([1,2,3,4,5,7,8,9]);
	})
})

describe("push either a simple value or an array of values onto a specified array ",function(){
	it("should returns array contains arrayToPush",function(){
		expect(splitListStrUsingComma("The quick brown fox jumped over")).toBe("The, quick, brown, fox, jumped, over");
		expect(splitListStrUsingComma()).toEqual([]);
	})
})
describe("sumFunction",function(){
	it("should got sum of two value",function(){
		expect(sum("1,1,2,3,5,7")).toEqual(19);
	})
})
describe("function that will return true if a specified string consists of only whitespace",function(){
	it("should return true if a specified string consists of only whitespace",function(){
		expect(isOnlyWhitespace("		")).toBe(true);
	})
})
describe("function that addRows that adds an item to the rows array",function(){
	it("should return more object in rows array",function(){
		expect(addRow("row1","row2","row3")).toEqual(["JasonRow","AlexRow","MandyRow","LucyRow","row1","row2","row3"]);
	})
})
describe("function that addColumn that adds an item to the column array",function(){
	it("should return more object in rows array",function(){
		expect(addColumn("column1","coulumn2","column3")).toEqual([ 'JasonColumn', 'AlexColumn', 'MandyColumn', 'LucyColumn', 'column1', 'coulumn2', 'column3' ]);
	})
})



