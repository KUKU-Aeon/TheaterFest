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

const CreateBill = () => {
    const [file, setFile] = useState("")
    const [form] = Form.useForm();

   async function onFinish (data){
        let id = '';
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i =0; i < 4; i++)
        {
            id += letters[Math.floor(Math.random() * letters.length)];
        }
        let fileSrc = await handleUpload();
        let docName = `${data.name}-${id}`;

        db.collection("billboard").doc(docName).set({
            name: data.name,
            place: data.place,
            description: data.description,
            date: data.date,
            time: data.time,
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
                        maxWidth: 600,
                    }}
               >
                    <Form.Item label="Введите название" style={{marginTop: 50}} name="name">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Укажите место" name="place">
                        <Input  />
                    </Form.Item>
                    <Form.Item label="Введите описание" name="description">
                        <TextArea rows={4}   />
                    </Form.Item>
                    <Form.Item label="Введите дату" name="date">
                        <Input  />
                    </Form.Item>
                    <Form.Item label="Введите Время" name="time">
                        <Input  />
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
                        <Button htmlType="submit" style={{marginLeft: 250}}>
                            Создать новую карточку
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}

export default CreateBill;