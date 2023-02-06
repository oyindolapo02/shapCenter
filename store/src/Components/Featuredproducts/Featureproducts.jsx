import React from 'react'
import Typed from 'react-typed'
import Cards from '../CardsF/Cards'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import useFetch from '../useFetchFolder/useFetch'


const Featureproducts = ({typed}) => {

    const data = [
        {
            id: 1,
            img: 'https://th.bing.com/th/id/OIP.ydPNEpUgKxYrsRB_L8vyxAHaLH?pid=ImgDet&rs=1',
            img2: 'https://theimpression.com/wp-content/uploads/2018/03/balenciaga-rf18-3234.jpg',
            title: 'Fashion shows',
            isNew: true,
            oldPrice: 19,
            Price: 12,
        },

        {
            id: 2,
            img: 'https://pyxis.nymag.com/v1/imgs/fd9/5bd/f00bd008f4b7b4167b2e4ae770f55fdacc-30-dior-1.2x.w710.jpg',
            img2: 'https://th.bing.com/th/id/R.76353df8997642a8c0fe767812c06d35?rik=snFPd2%2bHr3sPcA&riu=http%3a%2f%2ftheimpression.com%2fwp-content%2fuploads%2f2017%2f09%2fchloe-rs18-0689.jpg&ehk=bX7r%2brC2K7db574SYywDU%2bUBT1IAcNuZy%2b0zPwr7zO4%3d&risl=&pid=ImgRaw&r=0',
            title: 'Fashion shows',
            isNew: false,
            oldPrice: 19,
            Price: 12,
        },

        {
            id: 3,
            img: 'https://th.bing.com/th/id/R.6875821283fa88acd918114b6028304b?rik=yF9ZAmvv1lOHLg&pid=ImgRaw&r=0',
            img2: 'https://th.bing.com/th/id/OIP.uBzGII0UwsAyQAi1OAgNCAHaLJ?pid=ImgDet&w=1793&h=2700&rs=1',
            title: 'Fashion shows',
            isNew: true,
            oldPrice: 19,
            Price: 12,
        },

        {
            id: 3,
            img: 'https://th.bing.com/th/id/R.fb3c8125c97c7e5116a9621263048832?rik=%2bjGNl2ugn3nHPw&pid=ImgRaw&r=0',
            img2: 'https://tokyofashion.com/wp-content/uploads/2017/11/TK-2017-11-04-004-002-Harajuku.jpg',
            title: 'Fashion shows',
            isNew: true,
            oldPrice: 19,
            Price: 12,
        }
    ]

    const [cardsApi, setcardsApi] = useState([])

    const app = `https://6387d1c7a4bb27a7f778f779.mockapi.io/postputdeleteget`

    // const [dataLoad, errorMessage] = useFetch(app)

    const getData = async()=> {
        try {
            const datas = await axios.get(app)
            const popData = datas.data
            console.log(popData)
            setcardsApi(popData)
        } catch(error) {
            console.log(error.message)
        }
    }

    useEffect(()=> {
        getData()
    },[])

    // xl:min-w-[90vh]
    // w-full lg:w-11/12 xl:w-[90%]

  return (
    <div className='flex flex-col items-center mt-3 pb-4 min-h-[50vh] md:h-[45vh] lg:h-[60vh] w-full lg:w-11/12 xl:w-[90%] bg-slate-100 rounded-md'>
        <div className='flex flex-col md:flex md:flex-row md:justify-between border py-12 h-[35%] md:h-[25%] border w-full lg:w-[90%]'>
            <h3 className='m-auto border text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-3'>{typed} Products</h3>
            {/* <p className='border w-[60%] m-auto font-medium text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit illum vitae eaque, quas aspernatur labore, voluptates suscipit molestiae officiis sed pariatur. Possimus deleniti totam nobis vel eligendi exercitationem pariatur?</p> */}
            <Typed className='border w-[60%] m-auto text-center md:text-left font-semibold text-gray-400' strings={['THE GAME IS NOT TOLD, IT IS SOLD. WE DONT PLAY WE WORK, DONT ASK WHERE HAVE WE BEEN, ASK US WHAT HAVE WE BEEN DOING. THATS THE WORD, THAK YOU.']} typeSpeed={20} backSpeed={10} loop/>
        </div>
        <div className='flex justify-center flex-wrap md:flex-nowrap border pb-2 border-emerald-400 mt-3 h-[50%] md:h-[70%] lg:h-[75%] w-full md:w-[85%] lg:w-[80%]'>
            {data.map(info => {
                return (
                    <Cards
                        info = {info}
                        key = {info.id}  
                    />
                )
            })}
            {/* {errorMessage && <div>Loading Data....</div>}
            {dataLoad.map(info => {
                return (
                    <Cards
                        info = {info}
                    />
                )
            })} */}
        </div>
    </div>
  )
}

export default Featureproducts

// flex flex-col items-center