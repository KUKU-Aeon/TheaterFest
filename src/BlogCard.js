import newsDatabaseContent from "./newsDatabaseContent";
import {Button, Card} from 'antd';
import {Link} from "react-router-dom";
import React from "@types/react";
const { Meta } = Card;



export const BlogCard = () => {
    return (<article className={"grid"}>
        {newsDatabaseContent.map((data) =>
                <>
                    <Card
                        style={{
                            width: 300,
                        }}
                        cover={
                            <img
                                alt={data.title}
                                src={data.src}
                                style={{height: 200}}
                            />
                        }
                    >
                        <Meta
                            title={data.title}
                            description={data.paragraph.substring(0, 70) + '...'}
                        />
                        <Button style={{float: "right", marginTop: 20}}><Link to="/news">Подробнее...</Link></Button>
                    </Card>
                </>
            )}
</article>)}