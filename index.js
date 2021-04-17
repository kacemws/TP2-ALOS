var unirest = require("unirest");

let noteId = null;

const deleteNote = async (id = noteId ?? "UDC0Sal") => {
  try {
    const note = await new Promise(function (resolve, reject) {
      return unirest
        .delete(`http://localhost:3000/notes/${id}`)
        .headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        })
        .end(function (req) {
          if (req.error) reject(req.error);
          resolve(req.body);
        });
    });
    console.log(`deleted note with id : ${id}`);
  } catch (err) {
    console.error(err);
  }
};
