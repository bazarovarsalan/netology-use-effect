
import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List';
import Details from './components/Details';
import { IList, IInfo } from './types/types';

function App() {
  const [list, setList] = useState<IList>({list:[],active:null});
  const [error, setError] = useState(false);
  const [info,setInfo] = useState<IInfo>({id: null, name:''});


  const fetchList = async () => {
    try {
      await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(response => response.json())
      .then(data => setList((prev) => ({...prev,list:data})))
    } catch (err) {
      setError(error)
    }
  }

  useEffect( () => {
    fetchList()
  },[])

  const handler = (event:React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const name = event.target.name
    const id = Number(event.target.id);
    setInfo({id: id, name: name});
    setList((prev) => ({...prev,active:id}))
  }


  return (
    <div className='App'>
          <List list={list.list} active={list.active}handler={handler}/>
          <Details info={info} /> 
    </div>
  )
}

export default App