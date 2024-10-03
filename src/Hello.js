import React from 'react';

// Định nghĩa component Hello
function Hello() {
    // Định nghĩa các hàm hiển thị hộp thoại thông báo
    const hiAll = () => {
        alert("hello everyone");
    };

    const hiYou = (name) => {
        alert("Hello " + name);
    };

    return (
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={() => hiYou('Vân Thư')}>Hi you</button>
        </span>
    );
}

function HelloPeter() {
    const person = {
        name: 'Peter',
        theme: {
            backgroundColor: 'green',
            color: 'white'
        }
    };

    return (
        <div>
            <div style={person.theme}>
                <h1>Xin chào: {person.name}</h1>
            </div>
            <div>Chúc bạn thành công với React</div>
        </div>
    );
}

// Định nghĩa component HelloPerson
function HelloPerson(props) {
    return <h1>Xin chào bạn: {props.name}</h1>;
}

// Xuất cả hai component
export { Hello, HelloPerson, HelloPeter };
