import axios from 'axios'
const apiURL = process.env.REACT_APP_API_URL

export const getSingleProduct = async (product_id) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/single-product`, {
            product_id: product_id,
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const postAddReview = async (formData) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/add-review`, formData)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const postDeleteReview = async (formData) => {
    try {
        let res = await axios.post(
            `${apiURL}/api/product/delete-review`,
            formData
        )
        return res.data
    } catch (error) {
        console.log(error)
    }
}
