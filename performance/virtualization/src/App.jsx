import { List } from "react-window";

const Row = ({ index, style }) => {
  return (
    <div style={style}>
      Row {index}
    </div>
  );
};

function App() {
  return (
    <List
      style={{
        height: 150,
        width: 300,
      }}
      rowCount={1000}
      rowHeight={35}
      rowComponent={Row}
      rowProps={{}}
    />
  );
}

export default App;