import './MagicBall.css';
export default function MagicBall({answer}) {
    return(<div className='magic-ball'>
        { answer }
    </div>)
}