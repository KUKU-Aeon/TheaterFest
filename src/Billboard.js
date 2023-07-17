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
                    marginLeft: 20,
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    zIndex: -1,
                  }}
            >
              <Skeleton loading={!data} avatar active>
               <Avatar src={data.src} style={{
                  width: "65%",
                  height: "auto",
                  margin: "0 20%"
                 }}/>
                <Meta
                    title={<h1 style={{height: 10}}>{data.name}</h1>}
                    description={
                      <><h4>Описание: {data.description}</h4><h4>Место: {data.place}</h4><p>Дата: {data.date}</p><p>Время: {data.time}</p></>
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