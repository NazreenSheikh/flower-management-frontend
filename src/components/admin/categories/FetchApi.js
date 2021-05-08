import axios from 'axios'
const apiURL = process.env.REACT_APP_API_URL

const BearerToken = () =>
    localStorage.getItem('jwt')
        ? JSON.parse(localStorage.getItem('jwt')).token
        : false
const Headers = () => {
    return {
        headers: {
            token: `Bearer ${BearerToken()}`,
        },
    }
}

export const getAllCategory = async () => {
    try {
        let res = await axios.get(
            `${apiURL}/api/category/all-category`,
            Headers()
        )
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const createCategory = async ({
    cName,
    cImage,
    cDescription,
    cStatus,
}) => {
    let formData = new FormData()
    formData.append('cImage', cImage)
    formData.append('cName', cName)
    formData.append('cDescription', cDescription)
    formData.append('cStatus', cStatus)

    try {
        let res = await axios.post(
            `${apiURL}/api/category/add-category`,
            formData,
            Headers()
        )
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const editCategory = async (category_id, des, status) => {
    let data = { category_id: category_id, cDescription: des, cStatus: status }
    try {
        let res = await axios.post(
            `${apiURL}/api/category/edit-category`,
            data,
            Headers()
        )
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategory = async (category_id) => {
    try {
        let res = await axios.post(
            `${apiURL}/api/category/delete-category`,
            { category_id },
            Headers()
        )
        return res.data
    } catch (error) {
        console.log(error)
    }
}
