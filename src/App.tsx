import ListGroup from "./components/ListGroup";

const onSelectedItem = (item: string) =>
{
  console.log(item);
}

function App()
{
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return <div><ListGroup items={items} heading="Cities" onSelectItem={onSelectedItem} /></div>;
}

export default App;