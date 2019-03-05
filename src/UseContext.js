import React , {useContext} from 'react';

const TestContext = React.createContext();

function Display() {
  const newValue = useContext(TestContext);
  return <div>{newValue}, I am learning react hooks.</div>;
}

function UseContext() {
  return (
    <TestContext.Provider value={"Hi"}>
      <Display />
    </TestContext.Provider>
  );
}

export default UseContext;