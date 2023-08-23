import {db} from "./Firebase";

function newsDatabaseContent() {
    const result = [];
    db.collection("news").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            result.push(doc);
        });
    });
    return result;
}

export default newsDatabaseContent();