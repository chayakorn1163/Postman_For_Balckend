import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;

app.get('/', (resquest, response) => {
  return response.json({ message: 'Hi' });
});

//get user
app.get('/users', async (req, res, next) => {
  const users = await db.user.findMany(); //ดึงของออกจากDATAbase findMany:เอาแม่งมาทั้งหมด
  return res.json(users);
});




app.listen(PORT, () => {
  console.log('Server is running at port ', PORT);
});
