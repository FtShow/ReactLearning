import React, {useCallback, useMemo, useState} from "react";

type BookSecretType = {
    books: string[]
}


export const BookSecret: React.FC<BookSecretType> = ({books}) => {

    //const [counter, setCounter] = useState(0)

    const addBook = () => {
        // setBooks([...books, new Date().getTime().toString()])

    }
    // const memad = useCallback(()=>{
    //     setBooks([...books, new Date().getTime().toString()])
    //     console.log('1---')
    // }, [])
    //
    // const bookView2 = useMemo(() => {
    //     return books.map((el, index) => {
    //         console.log("rerenderbook")
    //         return <li key={index}>{el}</li>
    //     })
    // }, [books])

    // const bookView = books.map((el, index) => {
    //         console.log("rerenderbook")
    //         return <li key={index}>{el}</li>
    //     })


    return (
        <div>
            <button onClick={addBook}>ADD</button>
            {/*<button onClick={() => setCounter(counter + 1)}>COUNT++</button>*/}
            {/*<div>Counter is {counter}</div>*/}
            {/*{bookView}*/}
            {books[0]}
        </div>
    );
};
