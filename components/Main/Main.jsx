import happyMan from '../../public/assets/happy-man.jpg'
import Image from 'next/image'
import ButtonBlue from '../Button/ButtonBlue'


const Main = () => {
    return (
        <section className='main'>
            <div className='container'>
            <div className='flex justify-center lg:justify-evenly flex-wrap lg:flex-nowrap text-center lg:text-left gap-14 lg:gap-0'>
                <div className='mt-36'>
                    <div className="max-w-2xl text-black text-4xl font-bold mb-5">Все виды страхования</div>
                    <div className="suptitle text-black text-lg font-light mb-10">Страхование с нами - ваш ключ к беззаботному завтрашнему дню</div>
                    <ButtonBlue title={'Подать заявку'} />
                </div>
                <div>
                    <Image src={happyMan} alt="car" />
                </div>
             </div>
        </div>
        </section>
    );
};

export default Main;