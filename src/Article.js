import { articleobj } from "./articleobj";
export default function Article() {
    return(
        <article>
            <div className="about-iphone">iPhone</div>
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/IPhone_14_Pro_vector_%28blue%29.svg/279px-IPhone_14_Pro_vector_%28blue%29.svg.png"/><p>The front face of an iPhone 14 Pro</p>

            {articleobj.map(h => <div className='iphone-history' key={h.h}>
                <h2>{h.article}</h2> 
                <p>{h.text}</p>
            </div>)}
            <div className="iphone-camera">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/IPhone_13_Pro_camera_lens_group.jpg/330px-IPhone_13_Pro_camera_lens_group.jpg"/><p>Picture of the cameras on the iPhone 13 Pro. Newer iPhone models have been praised for their camera quality.</p>
            </div>
            
        </article>
    )
}