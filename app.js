'use strict';



const e = React.createElement;

const isTen = (i) => {
    console.log(i);
    return i == 10;
    

}





function SuperLikeButton() {
    const [count, setCount] = React.useState(0)
    console.log(count);
    if (isTen(count)) {
        return React.createElement('span', null, 'You like this');
    }

    
    const buttonName = count === 0? 'Like' : `Like ${count}`    
 


    return e(
        'button',
        { onClick: () => setCount(count + 1)},
        buttonName 
      );
    
}






function RandomNamesButton(props) {
    const makeIndex = () => Math.floor(Math.random() * 3);
    // const names = ['Ranger', 'CT', 'Maza'];
    const [buttonName, setButtonName] = React.useState('Clickme');
    // const [, forceUpdate] = React.useState();
    

    
    // let i = Math.floor(Math.random() * 3);

    // let x = names[i];

    // return e('button', { onClick: () => { console.log('onClick', x); setButtonName(x); forceUpdate();}}, buttonName);

    return e('button', { onClick: () => setButtonName(names[makeIndex()])}, buttonName);
    
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
root.render(React.createElement('div', {className: 'Ilya', }, [e(SuperLikeButton), e(RandomNamesButton), e(RandomNamesButton)]));


