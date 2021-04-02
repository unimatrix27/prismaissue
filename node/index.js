const { PrismaClient } = require('@prisma/client')


var prisma =  new PrismaClient({ log: ['query', 'info', 'warn'] })
    
var enterTestData = prisma.demotable.create({
  data: {demofield: 607013.31}
    }).then(r => {
        console.log(r.demofield)
    }
)