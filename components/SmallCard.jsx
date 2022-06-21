import Image from 'next/image'

const SmallCard = ({img,location,distance}) => {
  return (
    <div className='flex hover:rotate-6 duration-100 transform'>
        <div className='mr-2'>
            <Image className='rounded-lg' src={img} width={50} height={50} />
        </div>
        <div className='flex flex-col'>
            <p className='font-bold text-sm'>{location}</p>
            <p className='font-bold opacity-50 text-xs mt-2'>{distance}</p>
        </div>
    </div>
  )
}

export default SmallCard