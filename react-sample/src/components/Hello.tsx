// Hello will retune text message when clicked.
const Hello = () => {
    //Called function when clicked
    const onClick = () => {
        alert('hello')
    }
    const text = 'Hello, React'

    // テキストを子に持つdiv要素を返す
    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello
