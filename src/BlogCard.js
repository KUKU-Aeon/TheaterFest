import newsDatabaseContent from "./newsDatabaseContent";
import {Button, Card} from 'antd';
import {Link} from "react-router-dom";
import React from "react";
const { Meta } = Card;

export const BlogCard = () => {

    return <article className={"grid"}>
        {newsDatabaseContent.map((doc) =>
                <>
                    <Card
                        style={{
                            width: 300,
                        }}
                        cover={
                            <img
                                alt={doc.data().title}
                                src={doc.data().src}
                                style={{height: 200}}
                            />
                        }
                    >
                        <Meta
                            title={doc.data().title}
                        />
                        <Button style={{float: "right", marginTop: 20}}><Link to={`news/${doc.id}`}>Подробнее...</Link></Button>
                    </Card>
                </>
            )}
</article>}

