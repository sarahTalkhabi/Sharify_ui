import React, { useState } from "react"; 


const user = {
    name: 'Hedy Lamarr',
    imagePath: '/home/ava/Documents/mahdieh/photo1702380035.jpeg',
    imageSize: 90,
}

function MyButton(){
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    const bgColorClass = count % 2 === 0 ? 'bg-red-500': 'bg-blue-500';
    return (
        <div>
            <h1 className="bg-gray-50">Welcome to my app</h1>

            <h2>{user.name}</h2>
            <img
            className="w-36 h-36 rounded-full custom-position"
            src={'https://i.imgur.com/7vQD0fPs.jpg'}
            alt={'photo of' + user.name}
            style={{
                width:user.imageSize,
                height:user.imageSize
            }}
            />
        <button onClick={handleClick} 
        
             className={`px-4 py-2 ${bgColorClass} text-black rounded hover:bg-blue-600`}>
            {count}
            </button>
        </div>
    );
};
export default MyButton