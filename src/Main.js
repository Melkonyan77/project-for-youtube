import { menu } from './menu';
export default function Main({total,setTotal}) {
    let color = 'lime'
    return (
        <main>
            {menu.map($ => <div className='item' key={$.id}>   
                <img src={$.picture} alt="" />
                <h2>{$.name}</h2>
                <del>{$.sale}$</del>
                <span className='price'>{$.price}$</span>
                <button  onClick={() => {
                    setTotal(total + $.price);
                }}>Buy</button>
            </div>)}
        </main>
    )
}