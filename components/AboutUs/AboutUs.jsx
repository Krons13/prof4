import React from 'react'
import Image from 'next/image'
import vk from '../../public/assets/icon-vk.svg'
import wa from '../../public/assets/icon-whatsapp.svg'
import tg from '../../public/assets/icon-telegram.svg'



const AboutUs = () => {
    return (
        <section name="about" className='bg-gray-850 py-20'>
            <div className='container'>
                <div className="flex flex-wrap justify-center sm:justify-between text-center sm:text-left gap-10 items-center">
                    <div>
                        <h4 className='text-xl mb-6'>Мои контакты:</h4>
                        <div className='mb-3'>
                            <a className='text-3xl underline' href="tel:+79061848965">+7 (906) 184-89-65</a>
                        </div>
                        <div>
                            <a className='text-3xl' href="mailto:milaklimova70@gmail.ru">milaklimova70@gmail.ru</a>
                        </div>
                    </div>
                    <div className=''>
                        <h4 className='text-xl mb-6'>Социальные сети:</h4> 
                        <div className='flex gap-10'>
                            <a href="https://web.telegram.org/k/#@milakl1973" target="_blank"><Image src={tg} alt="telegram ссылка" /></a>
                            <a href="https://wa.me/c/79061848965" target="_blank"><Image src={wa} alt="whatsapp ссылка" /></a>
                            <a href="https://vk.com/kanzashimila2" target="_blank"><Image src={vk} alt="vk ссылка" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs