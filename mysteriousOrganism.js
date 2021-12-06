// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }



  const pAequorFactory = (number, baseArray) => {

        return organism = {
            specimenNum: number,
            dna: baseArray,
            mutate() {
                
                //assigns a random base in the dna array to a variable
                let mutatedBase = this.dna[Math.floor(Math.random() * (this.dna.length - 1))];

                //prints the randomly selected base to be mutated
                process.stdout.write(`Base to be mutated: ${mutatedBase}\n`);
                //prints the index of the base to be mutated
                process.stdout.write(`Index of base to be mutated: ${this.dna.indexOf(mutatedBase)}\n`);

                //assigns a variable to hold the index of the base to be mutated
                let baseIndex = this.dna.indexOf(mutatedBase);
                let mutate ;

                //depending on the base to be mutated, the if/else statement changes it to a different base
                if (mutatedBase === 'A'){
                    let changeBaseArray = ['G', 'T', 'C']; //array of different bases to choose from
                    mutate = changeBaseArray[Math.floor(Math.random() * 2)]; //randomly chooses one of those bases
                    this.dna[baseIndex] =  mutate; //reassigns the original base to the new base
                    //prints the mutation
                    process.stdout.write(`Mutated base: ${mutate}\n`);
                } else if (mutatedBase === 'G'){
                    let changeBaseArray = ['A', 'C', 'T'];
                    mutate = changeBaseArray[Math.floor(Math.random() * 2)];
                    this.dna[baseIndex] = mutate;
                    process.stdout.write(`Mutated base: ${mutate}\n`);
                    
                } else if (mutatedBase === 'C'){
                    let changeBaseArray = ['A', 'G', 'T'];
                    mutate = changeBaseArray[Math.floor(Math.random() * 2)];
                    this.dna[baseIndex] = mutate;
                    process.stdout.write(`Mutated base: ${mutate}\n`);
                
                } else if (mutatedBase === 'T'){
                    let changeBaseArray = ['A', 'C', 'G'];
                    mutate = changeBaseArray[Math.floor(Math.random() * 2)];
                    this.dna[baseIndex] = mutate;
                    process.stdout.write(`Mutated base: ${mutate}\n`);
                }
                
                //returns a sentence with the new, mutated DNA strand
                return this.dna;

            }, 
            compareDNA(object) {
                //creates a variable to count the identical bases
                let sameBaseCounter = 0;
                for (let i = 0; i < this.dna.length; i++){
                    //for each identical value the counter goes up
                    if (this.dna[i] === object.dna[i]){
                        sameBaseCounter++;
                    }
                }
                //calcualtes the percentage of similarity and prints it
                let percentIdentical = Math.floor((sameBaseCounter / (this.dna.length)) * 100);
                process.stdout.write(`Organism ${this.specimenNum}: ${this.dna}}\n`);
                process.stdout.write(`Organism ${object.specimenNum}: ${object.dna}\n`);
                process.stdout.write(`The DNA sequences are roughly ${percentIdentical}% identical.\n`);
            }, 
            willLikelySurvive(){

                let cgCount = 0;
                let atCount = 0;
                for (let i = 0; i < this.dna.length; i++){
                    if (this.dna[i] === 'C' || this.dna[i] === 'G'){
                        cgCount++;
                    } else if (this.dna[i] === 'T' || this.dna[i] === 'A'){
                        atCount++;
                    }   
                }
                let percentCG = ((cgCount / this.dna.length) * 100);
                if (percentCG >= 60){
                    process.stdout.write(`${percentCG}%: It will likely survive\n`);
                    return true;
                    
                } else {
                    process.stdout.write(`${percentCG}%: It will likely not survive\n`);
                    return false;
                }
            }

        }

  }




let orgArray = [];
let one = pAequorFactory(1, mockUpStrand());
orgArray.push(one);
let two = pAequorFactory(2, mockUpStrand());
orgArray.push(two);
let three = pAequorFactory(3, mockUpStrand());
orgArray.push(three);
let four = pAequorFactory(4, mockUpStrand());
orgArray.push(four);
let five = pAequorFactory(5, mockUpStrand());
orgArray.push(five);
let six = pAequorFactory(6, mockUpStrand());
orgArray.push(six);
let seven = pAequorFactory(7, mockUpStrand());
orgArray.push(seven);
let eight = pAequorFactory(8, mockUpStrand());
orgArray.push(eight);
let nine = pAequorFactory(9, mockUpStrand());
orgArray.push(nine);
let ten = pAequorFactory(10, mockUpStrand());
orgArray.push(ten);
let eleven = pAequorFactory(11, mockUpStrand());
orgArray.push(eleven);
let twelve = pAequorFactory(12, mockUpStrand());
orgArray.push(twelve);
let thirteen = pAequorFactory(13, mockUpStrand());
orgArray.push(thirteen);
let fourteen = pAequorFactory(14, mockUpStrand());
orgArray.push(fourteen);
let fifteen = pAequorFactory(15, mockUpStrand());
orgArray.push(fifteen);
let sixteen = pAequorFactory(16, mockUpStrand());
orgArray.push(sixteen);
let seventeen = pAequorFactory(17, mockUpStrand());
orgArray.push(seventeen);
let eighteen = pAequorFactory(18, mockUpStrand());
orgArray.push(eighteen);
let nineteen = pAequorFactory(19, mockUpStrand());
orgArray.push(nineteen);
let twenty = pAequorFactory(20, mockUpStrand());
orgArray.push(twenty);


let oneOrg = pAequorFactory(1, mockUpStrand());
let secondOrg = pAequorFactory(2, mockUpStrand());
process.stdout.write(`First DNA Strand: ${oneOrg.dna}\n`);
process.stdout.write(`${oneOrg.mutate()}\n`);
process.stdout.write(`Second DNA Strand: ${secondOrg.dna}\n`);
process.stdout.write(`${secondOrg.mutate()}\n`);
oneOrg.compareDNA(secondOrg);
process.stdout.write('\n');
oneOrg.willLikelySurvive();