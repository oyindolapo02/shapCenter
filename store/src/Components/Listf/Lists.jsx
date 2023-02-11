import React from 'react'
import Cards from '../CardsF/Cards'

const Lists = () => {

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
        },

        {
            id: 3,
            img: 'https://th.bing.com/th/id/R.fb3c8125c97c7e5116a9621263048832?rik=%2bjGNl2ugn3nHPw&pid=ImgRaw&r=0',
            img2: 'https://tokyofashion.com/wp-content/uploads/2017/11/TK-2017-11-04-004-002-Harajuku.jpg',
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
        },

        {
            id: 3,
            img: 'https://th.bing.com/th/id/R.fb3c8125c97c7e5116a9621263048832?rik=%2bjGNl2ugn3nHPw&pid=ImgRaw&r=0',
            img2: 'https://tokyofashion.com/wp-content/uploads/2017/11/TK-2017-11-04-004-002-Harajuku.jpg',
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

  return (
    <div className='flex justify-between flex-wrap border border-blue-500 mt-2 w-full min-h-[100%] rounded-md'>
        {data.map(info=> {
            return (
                <Cards
                    info = {info}
                    key = {info.id}  
                />
            )
        })}
    </div>
  )
}

export default Lists