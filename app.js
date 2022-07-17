'use strict';



const e = React.createElement;

const isTen = (i) => {
    console.log(i);
    return i == 10;
    

}





function SuperLikeButton() {
    const [count, setCount] = React.useState(0)

    if (isTen(count)) {
        return React.createElement('span', {className: 'span'}, 'You like this');
    }

    
    const buttonName = count === 0? 'Like' : `Like ${count}`    
 


    return e(
        'button',
        { onClick: () => setCount(count + 1), className: 'button'},
        buttonName 
      );
    
}






function RandomNamesButton(props) {
    const makeIndex = () => Math.floor(Math.random() * 3);
    const names = ['Ranger', 'CT', 'Maza'];
    const [buttonName, setButtonName] = React.useState('Clickme');
    // const [, forceUpdate] = React.useState();
    

    
    // let i = Math.floor(Math.random() * 3);

    // let x = names[i];

    // return e('button', { onClick: () => { console.log('onClick', x); setButtonName(x); forceUpdate();}}, buttonName);

    return e('button', { onClick: () => setButtonName(names[makeIndex()]), className:'randomNamesButton'}, buttonName);
    
} 

function DoubleDiv() {
return e('div', {className: 'double'}, e(SuperLikeButton),e(RandomNamesButton),e(RandomNamesButton) )
}
    
function DoubleDiv2() {
    return e('div', {className: 'double2'}, e(SuperLikeButton),e(RandomNamesButton),e(RandomNamesButton) )
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

root.render(e('div',{className: 'final'},e(DoubleDiv), e(DoubleDiv2)));
// root.render(e('div', {className: 'Ilya'},
//  [e(SuperLikeButton),//Можно ли задать пропсы для функционального компонента в функции E?
//  e(RandomNamesButton),
//  e(RandomNamesButton),
//  e(DoubleDiv)]));
// root.render(e('div', {className: 'dima'}, 'TEXT'))