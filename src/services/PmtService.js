import firebase from "../firebase";

const db = firebase.ref("/pmts");

class PmtDataService {
  getAll() {
    return db;
  }

  create(word) {
    return db.push(word);
  } 
  
  setuuID(id,word) {
    return firebase.ref("/pmts/"+id).set(word);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new PmtDataService();
