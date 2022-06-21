import Image from 'next/image'

const MediumCard = ({img,title}) => {
  return (
    <div className='mr-4 w-96'>
        <Image className='rounded-md hover:rotate-3 duration-100' src={img} height={250} width={250}/>
        <p className='font-bold text-sm mt-3'>{title}</p>
    </div>
  )
}

export default MediumCard