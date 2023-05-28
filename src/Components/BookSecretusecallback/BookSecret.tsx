import React, {useState} from "react";

type BookSecretType = {
    books: string[]
}


export const BookSecret = () => {
    const [books, setBooks]= useState(['book1','book2','book3','book4'])
    const [counter, setCounter]= useState(0)

    const addBook = () =>{
        setBooks([...books, 'Harry'])
    }
    return (
        <div>
            <button onClick={addBook}>ADD</button>
            <button onClick={()=>setCounter(counter+1)}>COUNT++</button>
            <div>Counter is {counter}</div>

            {books.map(el=>{
                return <li>{el}</li>
            })}

        </div>
    );
};
