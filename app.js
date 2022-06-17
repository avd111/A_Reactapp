'use strict';


const e = React.createElement;


function SuperLikeButton() {
    
    const [count, setCount] = React.useState(0);
    if (count == 10) {
        return e('span', null, 'You like this')
    }
    return e(
        'button',
        { onClick: () => {setCount(count + 1); console.log(count)}},
        `Like${count}`
        
      ); 
    
}



//function App() {
 //   return (
 //     <div>
 //       <h1>Hello world!</h1>
 //     </div>
 //   );
 // }





const domContainer = document.querySelector('#root');

const root = ReactDOM.createRoot(domContainer);
root.render(e(SuperLikeButton))

