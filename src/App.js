import logo from './logo.svg';
import './App.css';
import './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Functions from './components/Functions';
import ClassClick from './components/ClassClick';
import Parent from './components/Parent';
import HelloCondition from './components/HelloCondition';
import PersonNameList from './components/PersonNameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/CSS/appStyles.css'
import styles from './components/CSS/appStyles.module.css'
import Form from './components/Form';
import Fragment from './components/Fragment';
import TableRow from './components/TableRow';
import TableColumn from './components/TableColumn';
import PureComponentFile from './components/PureComponentFile';
import MemoFunction from './components/MemoFunction';

function App() {
  return (
    <div className="App">
      <PureComponentFile/>
      <MemoFunction/>
      <TableColumn/>
      <Fragment/>
      <Form/>
      <h1 className='error'> Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Parent/>
     <Functions/>
     <ClassClick/>
    <HelloCondition/>
    <PersonNameList/>
    <Stylesheet primary={true}/>
    <Inline/>

    </div>
  );
}

export default App;
