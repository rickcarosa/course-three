import CustomeHookExampleTwo from './components/CustomeHookExampleTwo';
import CustomHookExampleOne from './components/CustomHookExampleOne';
import UseCallbackExample from './components/UseCallbackExample';
import UseMemoExample from './components/UseMemoExample';
import UseRefExampleOne from './components/UseRefExampleOne';
import UseRefExampleThree from './components/UseRefExampleThree';
import UseRefExampleTwo from './components/UseRefExampleTwo';

function App() {
  return (
    <div className='container mt-5'>
      <p>Use Ref</p>
      <UseRefExampleOne />
      <UseRefExampleTwo />
      <UseRefExampleThree />
      <hr />
      <p>Use Memo</p>
      <UseMemoExample />
      <hr />
      <p>Use Callback</p>
      <UseCallbackExample />
      <hr />
      <p>Custom hook example one</p>
      {/* <CustomHookExampleOne /> */}
      <hr />
      <p>Custom hook example two</p>
      <CustomeHookExampleTwo />
    </div>
  );
}

export default App;
