import { prisma } from '../src/lib/prisma'

async function seed(){
    await prisma.event.create({
       data: {
        id:'698d3991-9efb-4d0c-8a41-fd40f1d74f20', 
        title: 'Unite summit',
        slug: 'unite-summit',
        details: 'Evento de programação',
        maximumAttendees: 120,
       }
    })
}

seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect

})