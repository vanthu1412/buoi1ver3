import React from 'react';
import { Hello, HelloPerson, HelloPeter } from './Hello'; // Sửa ở đây
import { Header } from './Header';


function App() {
    const studentName = "Vân Thư"; // Thay đổi tên sinh viên tại đây

    return (
        <div>
            <Header />
            <HelloPeter />
            <HelloPerson name={studentName} />
        </div>
    );
}

export default App;
