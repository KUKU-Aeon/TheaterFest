import { Button, Card } from 'antd';
const { Meta } = Card;

export const BlogCard = () => {
    return (
        <Card
            style={{
                width: 300,
            }}
            cover={
                <img
                    alt="Пример"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
        >
            <Meta
                title="Заголовок"
                description="Описание"
            />
            <Button style={{float: "right", marginTop: 10}}>Подробнее</Button>
        </Card>
    )
}