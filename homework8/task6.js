const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]
let copyNumbers=[]
    
copyNumbers = numbersList.map((number) => number) 

copyNumbers.sort((a, b) => a-b) 
		
console.log(numbersList)
console.log(copyNumbers)






