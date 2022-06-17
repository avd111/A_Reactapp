'use strict';


const e = React.createElement;


function SuperLikeButton() {
    const [liked, setLiked] = React.useState(false)
    console.log(liked);
    if (liked == true) {
        return e('span', null, 'You like this')
    }
    return e(
        'button',
        { onClick: () => setLiked(true)},
        'Like'
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

