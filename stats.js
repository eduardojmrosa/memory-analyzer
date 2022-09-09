const os = require ('os')

setInterval(()=>{

const {freemem, totalmem }= os
const  mem = parseInt(freemem() / 1024 / 1024)
const totalMem = parseInt(totalmem() / 1024 / 1024) 
const percents = parseInt((mem/totalMem)*100)
const stats = {
    free:`${mem} MB`,
    total:`${totalMem} MB`,
    usage:`${percents} %`
}
console.clear()
console.log("---PC STATS---")
console.table(stats)
}, 1000)
.
