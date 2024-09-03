import React from 'react'
import TypesInsuranceItem from '../TypesInsuranceItem/TypesInsuranceItem';
import iconCar from '../../public/assets/icon-car.svg'
import iconAirplane from '../../public/assets/icon-airplane.svg'
import iconHealth from '../../public/assets/icon-health.svg'
import iconHeart from '../../public/assets/icon-heart.svg'
import iconMoney from '../../public/assets/icon-money.svg'
import iconPension from '../../public/assets/icon-pension.svg'
import iconProperty from '../../public/assets/icon-property.svg'

const TypesInsurance = () => {
    return (
        <section id="types" className='py-24'>
            <div className='container'>
                <h2 className='text-4xl font-bold mb-8 text-center lg:text-left'>Виды страхования</h2>
                <div className='flex xl:justify-between justify-center lg:gap-y-5 flex-wrap gap-y-5 gap-x-5'>
                    <TypesInsuranceItem title={'Автострахование'} icon={iconCar} width={'max-w-xs'} />
                    <TypesInsuranceItem title={'Имущество'} icon={iconProperty} width={'max-w-xs'} />
                    <TypesInsuranceItem title={'Путешествия'} icon={iconAirplane} width={'max-w-xs'} />
                    <TypesInsuranceItem title={'Жизнь'} icon={iconHealth}  width={'max-w-xs'} />
                    <TypesInsuranceItem title={'Инвестиции'} icon={iconMoney} width={'xl:max-w-md'}  />
                    <TypesInsuranceItem title={'Здоровье'} icon={iconHeart} width={'xl:max-w-md'}  />
                    <TypesInsuranceItem title={'Пенсия'} icon={iconPension} width={'xl:max-w-md'}  />
                    
                </div>
            </div>
        </section>
    );
};

export default TypesInsurance