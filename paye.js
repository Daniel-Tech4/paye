function paye()
{
//  Philips salary
let PhilipsSalary=(4000000)
let incomeTax=40/100 // Deductible income tax percent
let prsi=10/100     //Deductible pay related social insurance
let tdtp=incomeTax+prsi //total deductible tax percentage
let taxapayable=PhilipsSalary*tdtp
console.log(taxapayable)

}
paye()