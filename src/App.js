import './App.css'

export default function App() {
  return (
    <Comment userName="Aashish" time={new Date().toString()}>
      <h2>Heading of the child text</h2>
      <p>This is para two</p> 
    </Comment>
  );
}

function Comment({userName, time, children}) {
  return (
    <>
      <p>{userName} commented at {time}</p>
      {children}
    </>
  )
}