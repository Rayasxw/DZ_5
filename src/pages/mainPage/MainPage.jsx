
import { useState } from "react"

function MainPage() {
    const [names, setNames] = useState([])
    const [inputValue, setInputValue] = useState("")

    function handleAdd() {
        if (inputValue.trim()) {
            setNames([...names, inputValue])
            setInputValue('')
        }
    }

    function handleChange(index) {
        if (inputValue.trim()) {
            const updatedNames = names.map((name, i) =>
                i === index ? inputValue : name
            )
            setNames(updatedNames)
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Введите имя"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={handleAdd}
                disabled={!inputValue.trim()}
            >
                Добавить
            </button>

            {names.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                names.map((name, index) => (
                    <div key={index}>
                        <span>{name}</span>
                        <button
                            onClick={() => handleChange(index)}
                            disabled={!inputValue.trim()}
                        >
                            Поменять
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default MainPage
