import prisma from '@/app/prismadb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { query } = req.query;

    try {
      const products = await prisma.product.findMany({
        where: {
          name: {
            contains: query,
          },
        },
      });

      res.status(200).json(products);
    } catch (error) {
      console.error('Error searching for products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}