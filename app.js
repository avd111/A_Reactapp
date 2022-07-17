'use strict';



const e = React.createElement;

const isTen = (i) => {
    console.log(i);
    return i == 10;
    

}





function SuperLikeButton() {
    const [count, setCount] = React.useState(0)
<<<<<<< HEAD
    console.log(count);
    if (isTen(count)) {
        return React.createElement('span', null, 'You like this');
=======

    if (isTen(count)) {
        return React.createElement('span', {className: 'span'}, 'You like this');
>>>>>>> 1c5d5314bc37ff4d380c4bdbce354bb7d9c0a6bd
    }

    
    const buttonName = count === 0? 'Like' : `Like ${count}`    
 


    return e(
        'button',
<<<<<<< HEAD
        { onClick: () => setCount(count + 1)},
=======
        { onClick: () => setCount(count + 1), className: 'button'},
>>>>>>> 1c5d5314bc37ff4d380c4bdbce354bb7d9c0a6bd
        buttonName 
      );
    
}






function RandomNamesButton(props) {
    const makeIndex = () => Math.floor(Math.random() * 3);
<<<<<<< HEAD
    // const names = ['Ranger', 'CT', 'Maza'];
=======
    const names = ['Ranger', 'CT', 'Maza'];
>>>>>>> 1c5d5314bc37ff4d380c4bdbce354bb7d9c0a6bd
    const [buttonName, setButtonName] = React.useState('Clickme');
    // const [, forceUpdate] = React.useState();
    

    
    // let i = Math.floor(Math.random() * 3);

    // let x = names[i];

    // return e('button', { onClick: () => { console.log('onClick', x); setButtonName(x); forceUpdate();}}, buttonName);

<<<<<<< HEAD
    return e('button', { onClick: () => setButtonName(names[makeIndex()])}, buttonName);
    
} 
    
=======
    return e('button', { onClick: () => setButtonName(names[makeIndex()]), className:'randomNamesButton'}, buttonName);
    
} 

function DoubleDiv() {
return e('div', {className: 'double'}, e(SuperLikeButton),e(RandomNamesButton),e(RandomNamesButton) )
}
    
function DoubleDiv2() {
    return e('div', {className: 'double2'}, e(SuperLikeButton),e(RandomNamesButton),e(RandomNamesButton) )
    }
>>>>>>> 1c5d5314bc37ff4d380c4bdbce354bb7d9c0a6bd
        



    

    




    



//function App() {
 //   return (
 //     <div>
 //       <h1>Hello world!</h1>
 //     </div>
 //   );
 // }





const domContainer = document.querySelector('#root');

const root = ReactDOM.createRoot(domContainer);
<<<<<<< HEAD
root.render(React.createElement('div', {className: 'Ilya', }, [e(SuperLikeButton), e(RandomNamesButton), e(RandomNamesButton)]));

=======
>>>>>>> 1c5d5314bc37ff4d380c4bdbce354bb7d9c0a6bd

root.render(e('div',{className: 'final'},e(DoubleDiv), e(DoubleDiv2)));
// root.render(e('div', {className: 'Ilya'},
//  [e(SuperLikeButton),//Можно ли задать пропсы для функционального компонента в функции E?
//  e(RandomNamesButton),
//  e(RandomNamesButton),
//  e(DoubleDiv)]));
// root.render(e('div', {className: 'dima'}, 'TEXT'))