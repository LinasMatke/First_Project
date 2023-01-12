/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const eshop = require('mysql2/promise');
const express = require('express');
const cors = require('cors');
// eslint-disable-next-line no-unused-vars
const { response } = require('express');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
// const { jwtSecret } = require('./config');
// const { isLoggedIn } = require('./middleware');
const app = express();

app.use(cors());
app.use(express.json());
app.listen(3000, 'localhost', () => {
  console.log('Server is running - ok!');
});

const eshopConfig = {
  host: 'localhost',
  user: 'root',
  password: 'HornEkz147',
  database: 'eshop',
  port: '3306',
};

const SECRET_KEY = '1234567890';
app.post('/sql/token', async (req, res) => {
  const user = req.body;
  console.log(user);
  const token = jwt.sign({ userEmail: user.email, UserPassword: user.password }, SECRET_KEY);
  res.json({ token });
});
app.post('/sql/auth', async (req, res) => {
  const { token } = req.body;
  const data = jwt.verify(token, SECRET_KEY);
  console.log(data);
  res.json({ data });
});
app.delete('/sql', async (req, res) => {
  const { id } = req.query;

  if (!id) {
    res.send({
      error: true,
      stats: {
        message: 'error',
      },
    });
    return;
  }

  try {
    const connect = await veterinary.createConnection(veterinaryConfig);
    const results = await connect.query('DELETE FROM pets WHERE id = ?', [id]);
    const databaseResults = results[0];
    if (databaseResults.effectedRows > 0) {
      res.send({
        error: false,
        stats: databaseResults,
      });
    } else {
      res.send({
        error: false,
        message: 'rows_0',
        stats: databaseResults,
      });
    }
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send({
      error: true,
      stats: error,
    });
  }
});
app.get('/sql/pets/', async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await veterinary.createConnection(veterinaryConfig);
    const dbresponse = await connect.query('SELECT * FROM pets LIMIT ?', [limit]);
    // console.log(dbresponse[0]);
    res.send(dbresponse[0]);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.get('/sql/logs/', async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await veterinary.createConnection(veterinaryConfig);
    const dbresponse = await connect.query('SELECT * FROM logs LIMIT ?', [limit]);
    // console.log(dbresponse[0]);
    res.send(dbresponse[0]);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.get('/sql/warehouse/', async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await eshop.createConnection(eshopConfig);
    const dbresponse = await connect.query('SELECT * FROM warehouse LIMIT ?', [limit]);
    // console.log(dbresponse[0]);
    res.send(dbresponse[0]);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.get('/sql/users/', async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await eshop.createConnection(eshopConfig);
    const dbresponse = await connect.query('SELECT * FROM users LIMIT ?', [limit]);
    console.log(dbresponse[0]);
    res.send(dbresponse[0]);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.post('/sql/auth', async (req, res) => {
  const { token } = req.body;
  const data = jwt.verify(token, SECRET_KEY);
  console.log(data);
  res.json({ data });
});
app.get('/sql', async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await veterinary.createConnection(veterinaryConfig);
    const petsDBresponse = await connect.query('SELECT * FROM pets LIMIT ?', [limit]);
    const prescriptionsDBresponse = await connect.query('SELECT * FROM prescriptions LIMIT ?', [limit]);
    const logsDBresponse = await connect.query('SELECT * FROM logs LIMIT ?', [limit]);
    const medicationsDBresponse = await connect.query('SELECT * FROM medications LIMIT ?', [limit]);
    const pets = petsDBresponse[0];
    const prescriptions = prescriptionsDBresponse[0];
    const logs = logsDBresponse[0];
    const medications = medicationsDBresponse[0];

    const updatedPets = pets.map((pet) => {
      const petPrescription = prescriptions.find((prescription) => prescription.prescriptions_petID === pet.id);
      const petLog = logs.find((log) => log.pet_id === pet.id);
      const petMedication = medications.find((medication) => medication.petID === pet.id);

      return {
        ...pet,
        prescription: petPrescription,
        log: petLog,
        medication: petMedication,
      };
    });

    res.send(updatedPets);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.post('/sql/register', async (req, res) => {
  console.log(req.body);
  try {
    const connect = await veterinary.createConnection(veterinaryConfig);
    const results = await connect.query('INSERT INTO users (name, surname, age, email, pet_name, pet_age, password) VALUES (?, ?, ?, ?, ?, ?, ?)', [req.body.name, req.body.surname, req.body.age, req.body.phone, req.body.email, req.body.pet_name, req.body.pet_age, req.body.password]);

    const databaseResults = results[0];

    console.log(results);
    if (databaseResults.affectedRows > 0) {
      res.send({
        error: false,
        stats: databaseResults,
      });
    } else {
      throw Error('No results');
    }
    connect.end();
  } catch (error) {
    console.log(error);
    res.send({
      error: true,
      stats: error,
    });
  }
});
app.post('/sql/login', async (req, res) => {
  const { body: { email, password } } = req;
  try {
    const connect = await veterinary.createConnection(veterinaryConfig);
    const results = await connect.query('SELECT * FROM users where email = ?', [email]);

    const user = results[0][0];

    if (user?.password === password) {
      const token = jwt.sign({ email, password }, SECRET_KEY);
      res.json({ token });
    } else {
      res.status(401).json({
        message: 'Invalid Credentials - pleas double check user data',
      });
    }
    connect.end();
  } catch (error) {
    console.log(error);
    res.send({
      error: true,
      stats: error,
    });
  }
});
app.post('/sql/users', async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = bcryptjs.hashSync(req.body.password);
    console.log(hashedPassword);
    const connect = await eshop.createConnection(eshopConfig);
    const results = await connect.query('INSERT INTO users (name, email, phone, buyer_address, delivery_address, city, post_code, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [req.body.name, req.body.email, req.body.phone, req.body.buyer_address, req.body.delivery_address, req.body.city, req.body.post_code, hashedPassword]);
    // const results = await connect.query('INSERT INTO prescription (prescriptions_medicationsID, prescriptions_comment) VALUES (?, ?)', [req.body.prescriptions_medicationsID, req.body.prescriptions_comment]);
    const databaseResults = results[0];

    console.log(results);
    if (databaseResults.affectedRows > 0) {
      res.send({
        error: false,
        stats: databaseResults,
      });
    } else {
      throw Error('No results');
    }
    connect.end();
  } catch (error) {
    console.log(error);
    res.send({
      error: true,
      stats: error,
    });
  }
});
