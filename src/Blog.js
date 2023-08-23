import React, {useState} from 'react';
import {db} from "./Firebase"

function Blog()
{
    const [data, setData] = useState({})

    const location = window.location.pathname
    const ID = decodeURI(location).substring(decodeURI(location).lastIndexOf('/') + 1);
    let docRef = db.collection("news").doc(ID);

    docRef.get().then((doc) => {
        setData(doc.data())
    })



    return <main>
            <article>
                <img src={data.src} alt={data.title} className={"banner"}/>
                <h1>{data.title}</h1>
                {data.content?.map((content) => content.indexOf("https://firebasestorage.googleapis.com") ? <p className={"text"}>{content}</p> : <img src={content} alt="" className={"blogImage"} />)}
            </article>
        </main>


}

export default Blog;