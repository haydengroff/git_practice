// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

const validateCred = (array) => {

    //declares a variable that will hold each new value in the array
    let newNum;
    //declares a new array to hold the newNums
    let newArray = [];

    //starts at the end of the array, iterates left by 1
    for (let i = array.length - 1; i >= 0; i--){
        
        

        //if the array length minus one (last value) is even, then every other value will be even. for all these even values, we want to return the same value to newNum
        if ((array.length - 1) % 2 === 0){

            if (i % 2 === 0){
                newNum = array[i];
                newArray.push(newNum);
            
            //for the values in odd position, we want to multiply them by 2
            } else {
                newNum = array[i] * 2;
                if (newNum > 9){
                    newNum -= 9;
                }
                newArray.push(newNum);
            }

        //if the last value is held in an odd position, we do the reverse
        } else if ((array.length - 1) % 2 != 0){
            if (i % 2 != 0){
                newNum = array[i];
                newArray.push(newNum);
            } else if (i % 2 === 0) {
                newNum = array[i] * 2;
                if (newNum > 9){
                    newNum -= 9;
                }
                newArray.push(newNum);
            }

        }

    }

    //process.stdout.write(newArray + '\n');


    //iterates through the function again, this time adding all the values up and returning the sum as sumArray
    const sumFunction = (arr) => {
        let sumArray = 0;
        for (let i in arr){
            sumArray += arr[i];
        }
        return sumArray;
    }

    
    
  
    //checks if the sum modulo ten is zero. if it is, then the credit card is valid. if it's not, the card is invalid
    if (sumFunction(newArray) % 10 === 0){
        
        return true;
        
    } else {
        
        return false;
    }


}

//validateCred(invalid3);

function findInvalidCards (array) {

    let invalidCardArray = [];
    

        for (let i = 0; i < array.length; i++){
            if (validateCred(array[i]) === false){
                invalidCardArray.push(array[i] + '\n');
            }
        }

    //process.stdout.write(`${invalidCardArray}`);
    return invalidCardArray;

}

process.stdout.write(`${findInvalidCards(batch)}`);


const idInvalidCardCompanies = (array) => {

    let invalidArray = findInvalidCards(array);
    let companyArray = [];


    for (let i = 0; i < invalidArray.length; i++){


        let firstDigit = invalidArray[i][0];

        if (firstDigit === '3'){

            companyArray.push('Amex');
            
            
        } else if (firstDigit === '4'){

            companyArray.push('Visa');
            
        } else if (firstDigit === '5'){

            companyArray.push('Mastercard');

        }else if(firstDigit = '6'){

            companyArray.push('Discover');

        } else {
            companyArray.push('Company Not Found.')
        }

    }

    let finalArray = [];
    companyArray.forEach((c) => {
        if (!finalArray.includes(c)){
            finalArray.push(c);
        }
    });



    process.stdout.write(`[${finalArray.join(' ')}] \n`);
    return finalArray;


}

idInvalidCardCompanies(batch);