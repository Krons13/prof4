import React from 'react'
import ServicesItem from '../ServicesItem.jsx/ServicesItem';


const Services = () => {
    return (
        <section id="services" className='bg-gray-850 py-20'>
             <div className='container'>
            <h2 className='text-4xl font-bold mb-8 text-center xl:text-left'>Полезные услуги</h2>
            <div className='flex flex-wrap gap-5 sm:justify-center'>
                <ServicesItem title={'Продлить полис'}/>
                <ServicesItem title={'Активировать полис'}/>
                <ServicesItem title={'Оплатить полис'}/>
                <ServicesItem title={'Проверить полис'}/>
            </div>
        </div>
        </section>
    );
};

export default Services