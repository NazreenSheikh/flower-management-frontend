import axios from 'axios'
const apiURL = process.env.REACT_APP_API_URL

export const getUserById = async (user_id) => {
    try {
        let res = await axios.post(`${apiURL}/api/user/single-user`, {
            user_id,
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const updatePersonalInformationFetch = async (userData) => {
    try {
        let res = await axios.post(`${apiURL}/api/user/edit-user`, userData)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getOrderByUser = async (user_id) => {
    try {
        let res = await axios.post(`${apiURL}/api/order/order-by-user`, {
            user_id,
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const updatePassword = async (formData) => {
    try {
        let res = await axios.post(
            `${apiURL}/api/user/change-password`,
            formData
        )
        return res.data
    } catch (error) {
        console.log(error)
    }
}
