import React from "react";

class Counter extends React.Component {
    // прописуємо значення пропсів за замовчуванням:

    static defaultProps = {
        initialValue: 0,
    }

    static propTypes = {
        // тут описуємо пропи
    }
    state = {
        value: this.props.initialValue,
    }
    hundleDecrement = () => {
        /* Якщо ми хочемо просто обновити значення, ми передаємо у функцію this.setState об'єкт:
        this.setState({
            value: 10,
        });

        якщо ж ми хочемо обновити значення віносно попереднього, ми передаємо функцію:
        */
        this.setState((prevState) => {
            return {
                value: prevState.value - 1,
            }
        });
    }
    hundleIncrement = () => {
        this.setState((prevState) => {
            return {
                value: prevState.value + 1,
            }
        });
    }
    render() {
        return (
            <div className="counter">
                <span className="counter_value">{ this.state.value}</span>
                <div className="counter_controls">
                    <button type="button" onClick={this.hundleIncrement}>Збільшити на 1</button>
                    <button type="button" onClick={this.hundleDecrement}> Зменшити на 1</button>
                </div>

            </div>
        )
    }
}

export default Counter;