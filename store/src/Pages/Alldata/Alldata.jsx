import React from 'react'
import useFetch from '../../useFetch/useFetch'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Alldata = () => {

    const urls = `https://jsonplaceholder.typicode.com/posts`
    const [pagesNum, setpagesNum] = useState(0)

    // const itemsPerPage = 10

    // const pageOfNumber = pagesNum * itemsPerPage

    // const newItems = pagesNum.slice(pageOfNumber, pageOfNumber + itemsPerPage).map(newOnes=> {
    //     return (
    //         <div>
    //             <h2>{newOnes.title}</h2>
    //             <h2>{newOnes.userId}</h2>
    //         </div>
    //     )
    // })

    // const counted = Math.ceil(api.length / itemsPerPage)

    // const selected = (({selected})=> {
    //     setpagesNum(selected)
    // })

    const [api, loadingUp] = useFetch(urls)
    console.log(api)

    const itemsPerPage = 10

    const pageOfNumber = pagesNum * itemsPerPage

    const newItems = api.slice(pageOfNumber, pageOfNumber + itemsPerPage).map(newOnes=> {
        return (
            <div>
                <h2>{newOnes.title}</h2>
                <h2>{newOnes.userId}</h2>
            </div>
        )
    })

    const counted = Math.ceil(api.length / itemsPerPage)

    const selected = (({selected})=> {
        setpagesNum(selected)
    })

  return (
    <div>
        <div>
            {loadingUp && 'Loading'}
        </div>
        <div>
            <ReactPaginate
                previousLabel = {'previous'}
                nextLabel = {'next'}
                pageCount = {counted}
                onPageChange = {selected}
            />
        </div>
        <div>{newItems}</div>
        {/* {api.map(items => {
            return (
                <div>
                    <h2>{items.title}</h2>
                    <h2>{items.userId}</h2>
                </div>
            )
        })} */}
    </div>
  )
}

export default Alldata