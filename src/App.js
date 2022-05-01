import Text from "./component/Text";
import Button from "./component/Button";
import TextCard from "./component/TextCard";
function App() {
  return (
    <>
      <Text color="blue">"hihi"</Text>
      <Button backgroundColor="red" color="black">
        hihi
      </Button>
      <TextCard text="이성인" button="hihi" />
    </>
  );
}

export default App;
