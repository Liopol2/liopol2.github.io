const str = 'hello'
const revStr = str.split('').reduce((rev,char) => char + rev);
console.log(revStr)
const companies = [
    {
        name:'comp2',category:'retail',start:1992,end:2008
    }
]
const rcompanies = companies.filter((company) =>
 company.category === 'retail')
console.log(rcompanies)