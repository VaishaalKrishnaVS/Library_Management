import './home.styles.scss';
import Button from '../../components/button/button.component'
const Home = () => {
    
    return (
        <div className="homepg">
            <p className='a'>Discover a New</p>
            <p className='b'>Era of Cool</p>
            <p className='c'>Books !</p>
            <p className='d'>Bored of Reading?? Try Something New...</p>
            <Button className="but" buttonType={'inverted'}>________________</Button>
        </div>
    );
};

export default Home;
