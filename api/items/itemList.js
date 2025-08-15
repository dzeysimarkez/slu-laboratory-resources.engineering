// pages/api/items/index.js
import connectToDatabase from '../../../server/utils/db.js';
import Item from '../../../server/models/Item.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToDatabase();

      // Fetch all items
      const items = await Item.find();

      // Return as plain objects
      const plainItems = items.map(item => item.toObject());

      return res.status(200).json(plainItems);

    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server error' });
    }
  } else {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
}
