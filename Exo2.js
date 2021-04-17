var unirest = require("unirest");

const postBody = require("./post.json");
const putBody = require("./put.json");

let noteId = null;

const addNote = async () => {
  try {
    const note = await new Promise(function (resolve, reject) {
      return unirest
        .post("http://localhost:3000/notes")
        .headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        })
        .send(postBody)
        .end(function (req) {
          if (req.error) reject(req.error);
          resolve(req.body);
        });
    });
    console.log({
      "new note": note,
    });
    noteId = note.id;
  } catch (err) {
    console.error(err);
  }
};

const updateNote = async (id = noteId ?? "UDC0Sal") => {
  try {
    const note = await new Promise(function (resolve, reject) {
      return unirest
        .put(`http://localhost:3000/notes/${id}`)
        .headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        })
        .send(putBody)
        .end(function (req) {
          if (req.error) reject(req.error);
          resolve(req.body);
        });
    });
    console.log({
      "updated note": note,
    });
  } catch (err) {
    console.error(err);
  }
};

const getHeaders = async () => {
  try {
    const headers = await new Promise(function (resolve, reject) {
      return unirest
        .get("http://localhost:3000/notes")
        .headers({
          "cache-control": "no-cache",
        })
        .end(function (req) {
          if (req.error) reject(req.error);
          resolve(req.headers);
        });
    });
    console.log(headers);
  } catch (err) {
    console.error(err);
  }
};
