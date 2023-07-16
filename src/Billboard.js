import databaseContent from "./databaseLink";
import { Avatar, Card, Skeleton, Button} from 'antd';
const { Meta } = Card;


function Billboard() {
  return (<main>
    <article>
      {databaseContent.map((data) =>
          <>
            <Card key={data.id}
                  style={{
                    width: "90%",
                    marginTop: 15,
                  }}
            >
              <Skeleton loading={!data} avatar active>
                <Meta
                    avatar={<Avatar src={data.src} style={{
                      width: 400,
                      height: 350,
                      marginRight: 30
                    }}/>}
                    title={<h1>{data.name}</h1>}
                    description={
                      <><h3>Место: {data.place}</h3><p>Дата: {data.date}</p><p>Время: {data.time}</p></>
                    }
                />
                <Button  style={{
                  width: 200,
                  marginTop: 15,
                  backgroundColor: `{rgba(255, 234, 167, 1.0)}`,
                  fontWeight: 700,
                  float: "right",
                }}>
                  Купить
                </Button>
              </Skeleton>
            </Card>
          </>
      )}
    </article>
  </main>)
}




export default Billboard