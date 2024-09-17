import React from 'react'
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";

const Reviews = () => {
  return (
    <div className='p-8 flex flex-col gap-8 bg-gray-100'>
      <h1 className='text-[40px] text-center font-bold'>Let´s Hear Whath they says</h1>
      <div className='flex justify-center gap-4'>
        <span ><ImQuotesLeft className='text-5xl text-primary'/></span><p className='max-w-2xl text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, alias quibusdam a vitae fugit veritatis est tempora, debitis expedita hic dicta, aspernatur sunt commodi blanditiis? A doloribus corrupti quam quae?</p><span><ImQuotesRight className='text-5xl text-primary '/></span>
    </div>
    <div className='flex flex-col items-center justify-center gap-4 '>
        <div className='flex items-center justify-center gap-8 md:gap-12'> <img
            src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
            className="md:w-14 md:h-14 w-8 h-8object-cover rounded-full -ml-4"
            />
        <img
            src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
            className="md:w-16 md:h-16 h-10 w-10 object-cover rounded-full -ml-4"
            />    
        <img
            src="https://img.freepik.com/foto-gratis/apoyo-optimismo-alegre-agradable-morena-europea-gafas-sueter-mostrando-pulgares-arriba-impresionado-encantado-que-gusta-producto-dando-respuesta-positiva-recomendandolo-sobre-pared-gris_176420-35790.jpg"
            className="md:w-20 md:h-20 w-12 h-12 object-cover rounded-full ring-4 ring-primary -ml-4 p-1 bg-white"
            />
        <img
            src="https://img.freepik.com/foto-gratis/seguro-joven-apuntando-camara_74855-4132.jpg"
            className="md:w-16 md:h-16 h-10 w-10 object-cover rounded-full -ml-4"
            />
        <img
            src="https://img.freepik.com/fotos-premium/trabajador-construccion-joven-guapo-barba_251136-3489.jpg"
            className="md:w-14 md:h-14 w-8 h-8 object-cover rounded-full -ml-4"
            /></div>
            <div>
                <h3 className='text-center text-[24px] fond-bold'>Riky Asprilla</h3>
                <h5 className='text-center text-[20px] text-gray-500'>Funder of Varibo</h5>
            </div>
   
    </div>
    </div>
  )
}

export default Reviews
