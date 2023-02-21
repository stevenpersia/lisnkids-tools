const express = require("express");
const formidableMiddleware = require("express-formidable");
const firebase = require("firebase-admin");
const cloudinary = require("cloudinary").v2;
const { customAlphabet } = require("nanoid");
require("dotenv").config();
const { Parser } = require("json2csv");
const { cloudinaryTransformations } = require("./utils");

const app = express();
app.use(formidableMiddleware());
const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;

firebase.initializeApp({
  credential: firebase.credential.cert(JSON.parse(serviceAccountJson)),
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const db = firebase.firestore();
const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  20
);

app.get("/wake-up", async (req, res) => {
  try {
    res.status(200).json("ZZZzzzZZzzz... Ho yeah, I'm here ! Sorry !");
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/episode", async (req, res) => {
  try {
    const id = await nanoid();

    const docRef = db
      .collection("Series")
      .doc(req.query.serieId)
      .collection("Episodes")
      .doc(id);

    await docRef.set(req.fields);

    res.status(200).json({
      message: `Episode créé.`,
      episode: `Series/${req.query.serieId}/Episodes/${id}`,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/serie", async (req, res) => {
  try {
    const id = await nanoid();
    const docRef = db.collection("Series").doc(id);
    await docRef.set(req.fields);
    res.status(200).json({ message: `Série créée.`, serie: `Series/${id}` });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/image", async (req, res) => {
  try {
    const image = await cloudinary.uploader.upload(req.files.picture.path, {
      folder: req.fields.path,
      public_id: req.fields.name,
      eager_async: true,
      eager: cloudinaryTransformations,
    });

    res.status(200).json({ message: `Image envoyée.`, image });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/ad", async (req, res) => {
  try {
    await db
      .collection("Series")
      .doc(req.query.serieId)
      .update({
        ads: firebase.firestore.FieldValue.arrayUnion(req.fields),
      });

    res.status(200).json({
      message: `Produit dérivé ajouté.`,
      episode: `Series/${req.query.serieId}`,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.get("/download-users", async (req, res) => {
  try {
    const docRef = await db.collection("Users").get();

    const users = await docRef.docs.map((u) => {
      const user = u.data();
      return { email: user.email, hasMembership: user.hasMembership };
    });

    const parser = new Parser({ fields: ["email", "hasMembership"] });
    const csv = parser.parse(users);

    res.status(200).send(csv);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.listen(process.env.PORT, () => console.log("Server started."));
