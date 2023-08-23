import { PlusOutlined } from '@ant-design/icons';
import {useState} from "react";

import {db, storage} from "./Firebase";
import {
    Button,
    Form,
    Input,
    Upload,
} from 'antd';

const { TextArea } = Input;
let fileURL;


const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const CreateBlog = () => {
    const [file, setFile] = useState("")
    const [image, setImage] = useState("")
    const [contentList, setContentList] = useState([])
    const [form] = Form.useForm();


    async function onFinish (data){
        let id = '';
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i =0; i < 4; i++)
        {
            id += letters[Math.floor(Math.random() * letters.length)];
        }
        let fileSrc = await handleUpload();
        let docName = `${data.title}-${id}`;

        db.collection("news").doc(docName).set({
            title: data.title,
            content: contentList,
            src: fileSrc,
        }).then(() => {

        })
            .catch((err => {
                console.error(err);
            }))
    }

    function handleChange(event){
        setFile(event.target.files[0])
    }

    async function handleChangeImage(event){
        setImage(event.target.files[0])
        setContentList([...contentList, await handleUploadImage()])
    }


    async function handleUpload()
    {
        if (!file)
        {
            return;
        }

        const uploadTask = storage.ref(`files/${file.name}`).put(file);

        await uploadTask
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => { fileURL = url});

        return fileURL
    }

    async function handleUploadImage()
    {

        const uploadTask = storage.ref(`files/${file.name}`).put(image);

        await uploadTask
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => { fileURL = url});

        return fileURL
    }

    return (
        <>
            <div>
                <Form  form={form} name="fillData" onFinish={onFinish}

                       labelCol={{
                           span: 10,
                       }}
                       wrapperCol={{
                           span: 25,
                       }}
                       layout="horizontal"
                       style={{
                           maxWidth: "60%",
                           marginTop: 150,
                           marginLeft:50,
                       }}
                >
                    <Form.Item label="Введите заголовок" style={{marginTop: 50}} name="title">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Введите абзац" style={{marginTop: 50}} name="paragraph">
                        <TextArea rows={4}   onPressEnter={(event) => {
                            setContentList([...contentList, event.target.value])
                        }}/>
                    </Form.Item>
                    <Form.Item  name="images" label="Добавить изображение" valuePropName="fileList" getValueFromEvent={normFile} onChange={handleChangeImage}>
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item  name="src" label="Установить обложку" valuePropName="fileList" getValueFromEvent={normFile} onChange={handleChange}>
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" style={{margin: "0 5%"}}>
                            Создать новую карточку
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}

export default CreateBlog;