import ColorCard from "./component/ColorCard";
import Text from "./component/Text";
import MediaCard from "./component/MediaCard";

function App() {
  return (
    <>
      {/* Hello 텍스트 부분 */}
      {/* 텍스트 색, 폰트 굵기, 폰트 사이즈 전달 */}
      <Text color="blue" fontWeight="400" fontSize="16">
        Hello{" "}
      </Text>
      {/* 색 박스 부분 5개 */}
      {/* 박스 색 전달 */}
      <ColorCard color="black" />
      <ColorCard color="#1E82CD" />
      <ColorCard color="#FFAAFF" />
      <ColorCard color="#C4DDFF" />
      <ColorCard color="#F9FFA4" />
      {/* 미디어카드 부분 5개 */}
      {/* 미디어카드 내의 사진, 제목, 내용, 버튼 색 전달 */}
      <MediaCard
        url="po.jpg"
        title="Pomeranian"
        text="귀여운 포메 등장~!!"
        color="#205375"
      ></MediaCard>
      <MediaCard
        url="cat.jpg"
        title="Cat"
        text="고양이 하품"
        color="#205375"
      ></MediaCard>
      <MediaCard
        url="inha.png"
        title="Inha"
        text="인하대학교 짜잔"
        color="tomato"
      ></MediaCard>
      <MediaCard
        url="inha2.jpg"
        title="인경호"
        text="인경호랍니당"
        color="tomato"
      ></MediaCard>
      <MediaCard
        url="flower.jpg"
        title="벚꽃"
        text="우리 학교 벚꽃! 시기는 지났지만ㅎ"
        color="tomato"
      ></MediaCard>
    </>
  );
}

export default App;
