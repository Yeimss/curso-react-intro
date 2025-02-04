import './TodoCounter.css';

function TodoCounter({total, completed}){
  if(total === completed && total !== 0){
    return (
      <h1 className='checkAll'>
        ¡Sos el más grande de todos! <span>Lo completaste todooo</span>
      </h1>
    );  
  }  
  
  return (
      <h1>
        Completaste <b>{completed}</b> de <b>{total}</b> TODOs
      </h1>
    );  
}

export { TodoCounter };
