/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const eshop = require("mysql2/promise");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line no-unused-vars
const { response } = require("express");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
// const { jwtSecret } = require('./config');
// const { isLoggedIn } = require('./middleware');
const app = express();

app.use(cors());
app.use(express.json());
app.listen(8000, "localhost", () => {
  console.log("Server is running - ok!");
});

const eshopConfig = {
  host: "localhost",
  user: "root",
  password: "HornEkz147",
  database: "eshop",
  port: "3306",
};

const SECRET_KEY = "1234567890";
app.post("/sql/token", async (req, res) => {
  const user = req.body;
  console.log(user);
  const token = jwt.sign(
    { userEmail: user.email, UserPassword: user.password },
    SECRET_KEY
  );
  res.json({ token });
});
app.post("/sql/auth", async (req, res) => {
  const { token } = req.body;
  const data = jwt.verify(token, SECRET_KEY);
  console.log(data);
  res.json({ data });
});
app.get("/sql/deliveryconditions/", async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await eshop.createConnection(eshopConfig);
    const dbresponse = await connect.query(
      "SELECT * FROM deliveryconditions LIMIT ?",
      [limit]
    );
    console.log(dbresponse[0]);
    res.send(dbresponse[0]);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.post("/sql/deliveryconditions", async (req, res) => {
  console.log(req.body);
  try {
    const connect = await eshop.createConnection(eshopConfig);
    const results = await connect.query(
      "INSERT INTO deliveryconditions (delivery_date, delivery_time, delivery_address, contact_person, contact_phone, additional_information) VALUES (?, ?, ?, ?, ?, ?)",
      [
        req.body.delivery_date,
        req.body.delivery_time,
        req.body.delivery_address,
        req.body.contact_person,
        req.body.contact_phone,
        req.body.additional_information,
      ]
    );

    const databaseResults = results[0];

    console.log(results);
    if (databaseResults.affectedRows > 0) {
      res.send({
        error: false,
        stats: databaseResults,
      });
    } else {
      throw Error("No results");
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
app.get("/sql/invoice/", async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await eshop.createConnection(eshopConfig);
    const dbresponse = await connect.query("SELECT * FROM invoice LIMIT ?", [
      limit,
    ]);
    // console.log(dbresponse[0]);
    res.send(dbresponse[0]);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.post("/sql/invoice", async (req, res) => {
  console.log(req.body);
  try {
    const connect = await eshop.createConnection(eshopConfig);
    const results = await connect.query(
      "INSERT INTO invoice (invoice_number, invoice_date, invoice_amount, buyer, warehouse_code, description, invoice_status, currency) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        req.body.invoice_number,
        req.body.invoice_date,
        req.body.invoice_amount,
        req.body.buyer,
        req.body.warehouse_code,
        req.body.description,
        req.body.invoice_status,
        req.body.currency,
      ]
    );

    const databaseResults = results[0];

    console.log(results);
    if (databaseResults.affectedRows > 0) {
      res.send({
        error: false,
        stats: databaseResults,
      });
    } else {
      throw Error("No results");
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
app.get("/sql/warehouse/", async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await eshop.createConnection(eshopConfig);
    const dbresponse = await connect.query("SELECT * FROM warehouse LIMIT ?", [
      limit,
    ]);
    // console.log(dbresponse[0]);
    res.send(dbresponse[0]);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.post("/sql/warehouse", async (req, res) => {
  console.log(req.body);
  try {
    const connect = await eshop.createConnection(eshopConfig);
    const results = await connect.query(
      "INSERT INTO warehouse (warehouse_code, warehouse_name, warehouse_address, warehouse_ILN ) VALUES (?, ?, ?, ?)",
      [
        req.body.warehouse_code,
        req.body.warehouse_name,
        req.body.warehouse_address,
        req.body.warehouse_ILN,
      ]
    );

    const databaseResults = results[0];

    console.log(results);
    if (databaseResults.affectedRows > 0) {
      res.send({
        error: false,
        stats: databaseResults,
      });
    } else {
      throw Error("No results");
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
app.get("/sql/orders/", async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await eshop.createConnection(eshopConfig);
    const dbresponse = await connect.query("SELECT * FROM orders LIMIT ?", [
      limit,
    ]);
    // console.log(dbresponse[0]);
    res.send(dbresponse[0]);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.post("/sql/orders", async (req, res) => {
  console.log(req.body);
  try {
    const connect = await eshop.createConnection(eshopConfig);
    const results = await connect.query(
      "INSERT INTO orders (order_owner, order_product, order_amount, order_date, delivery_method, payment_method, order_status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        req.body.order_owner,
        req.body.order_product,
        req.body.order_amount,
        req.body.order_date,
        req.body.delivery_method,
        req.body.payment_method,
        req.body.order_status,
      ]
    );

    const databaseResults = results[0];

    console.log(results);
    if (databaseResults.affectedRows > 0) {
      res.send({
        error: false,
        stats: databaseResults,
      });
    } else {
      throw Error("No results");
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
app.get("/sql/products/", async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await eshop.createConnection(eshopConfig);
    const dbresponse = await connect.query("SELECT * FROM products LIMIT ?", [
      limit,
    ]);
    // console.log(dbresponse[0]);
    res.send(dbresponse[0]);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.post("/sql/products", async (req, res) => {
  console.log(req.body);
  try {
    const connect = await eshop.createConnection(eshopConfig);
    const results = await connect.query(
      "INSERT INTO products (product_barcode, product_name, product_VAT, product_purchase_prise, product_sales_prise, product_description, product_image, product_author, product_genre, publisher, pages, language, translator, year) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        req.body.product_barcode,
        req.body.product_name,
        req.body.product_VAT,
        req.body.product_purchase_prise,
        req.body.product_sales_prise,
        req.body.product_description,
        req.body.product_image,
        req.body.product_author,
        req.body.product_genre,
        req.body.publisher,
        req.body.pages,
        req.body.language,
        req.body.translator,
        req.body.year,
      ]
    );

    const databaseResults = results[0];

    console.log(results);
    if (databaseResults.affectedRows > 0) {
      res.send({
        error: false,
        stats: databaseResults,
      });
    } else {
      throw Error("No results");
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
app.get("/sql/users/", async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await eshop.createConnection(eshopConfig);
    const dbresponse = await connect.query("SELECT * FROM users LIMIT ?", [
      limit,
    ]);
    console.log(dbresponse[0]);
    res.send(dbresponse[0]);
    connect.end();
    return;
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
});
app.post("/sql/auth", async (req, res) => {
  const { token } = req.body;
  const data = jwt.verify(token, SECRET_KEY);
  console.log(data);
  res.json({ data });
});
app.get("/sql", async (req, res) => {
  const defaultlimit = 60;
  const limit = Number(req.query.limit) || defaultlimit;

  try {
    const connect = await veterinary.createConnection(veterinaryConfig);
    const petsDBresponse = await connect.query("SELECT * FROM pets LIMIT ?", [
      limit,
    ]);
    const prescriptionsDBresponse = await connect.query(
      "SELECT * FROM prescriptions LIMIT ?",
      [limit]
    );
    const logsDBresponse = await connect.query("SELECT * FROM logs LIMIT ?", [
      limit,
    ]);
    const medicationsDBresponse = await connect.query(
      "SELECT * FROM medications LIMIT ?",
      [limit]
    );
    const pets = petsDBresponse[0];
    const prescriptions = prescriptionsDBresponse[0];
    const logs = logsDBresponse[0];
    const medications = medicationsDBresponse[0];

    const updatedPets = pets.map((pet) => {
      const petPrescription = prescriptions.find(
        (prescription) => prescription.prescriptions_petID === pet.id
      );
      const petLog = logs.find((log) => log.pet_id === pet.id);
      const petMedication = medications.find(
        (medication) => medication.petID === pet.id
      );

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
app.post("/sql/login", async (req, res) => {
  const {
    body: { email, password },
  } = req;
  try {
    const connect = await eshop.createConnection(eshopConfig);
    const results = await connect.query("SELECT * FROM users where email = ?", [
      email,
    ]);

    const user = results[0][0];

    if (bcryptjs.compareSync(password, user?.password)) {
      const token = jwt.sign({ email, password }, SECRET_KEY);
      res.json({ token });
    } else {
      res.status(401).json({
        message: "Invalid Credentials - pleas double check user data",
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
app.post("/sql/users", async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = bcryptjs.hashSync(req.body.password);
    console.log(hashedPassword);
    const connect = await eshop.createConnection(eshopConfig);
    const results = await connect.query(
      "INSERT INTO users (name, email, phone, buyer_address, delivery_address, city, post_code, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.buyer_address,
        req.body.delivery_address,
        req.body.city,
        req.body.post_code,
        hashedPassword,
      ]
    );
    // const results = await connect.query('INSERT INTO prescription (prescriptions_medicationsID, prescriptions_comment) VALUES (?, ?)', [req.body.prescriptions_medicationsID, req.body.prescriptions_comment]);
    const databaseResults = results[0];

    console.log(results);
    if (databaseResults.affectedRows > 0) {
      res.send({
        error: false,
        stats: databaseResults,
      });
    } else {
      throw Error("No results");
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
