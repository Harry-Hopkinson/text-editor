import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

const initialValue = `<p><h1>Text Editor</h1></p>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/>`;

function App() {
  const [value, onChange] = useState(initialValue);
  return <RichTextEditor value={value} onChange={onChange} />;
}

export default App;
