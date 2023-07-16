import {db} from "./Firebase";

function databaseContent() {
    const result = [];
    db.collection("billboard").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            result.push(doc.data());
        });
    });
    return result;
}

export default databaseContent();