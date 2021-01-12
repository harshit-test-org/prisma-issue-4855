import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  // clearing db
  await prisma.image.deleteMany();
  await prisma.tag.deleteMany();

  const tag = await prisma.tag.create({
    data: {
      name: "tag",
    },
  });

  const image1 = prisma.image.create({
    data: {
      hash: "hash1",
      tags: {
        connect: {
          name: tag.name,
        },
      },
    },
  });

  const image2 = prisma.image.create({
    data: {
      hash: "hash2",
      tags: {
        connect: {
          name: tag.name,
        },
      },
    },
  });

  await Promise.all([image1, image2]);
  const data = await prisma.image.findMany({
    include: {
      tags: true,
    },
  });
  console.log(data);
  prisma.$disconnect();
}

main();
