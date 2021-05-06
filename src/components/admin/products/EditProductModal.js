import React, { Fragment, useContext, useEffect, useState } from 'react'
import { getAllCategory } from '../categories/FetchApi'
import { editProduct, getAllProduct } from './FetchApi'
import { ProductContext } from './index'
const apiURL = process.env.REACT_APP_API_URL

const EditProductModal = (props) => {
    const { data, dispatch } = useContext(ProductContext)

    const [categories, setCategories] = useState(null)

    const alert = (msg, type) => (
        <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
    )

    const [editformData, setEditformdata] = useState({
        product_id: '',
        pName: '',
        pDescription: '',
        pImages: null,
        pEditImages: null,
        pStatus: '',
        pCategory: '',
        pQuantity: '',
        pPrice: '',
        error: false,
        success: false,
    })

    useEffect(() => {
        fetchCategoryData()
    }, [])

    const fetchCategoryData = async () => {
        let responseData = await getAllCategory()
        if (responseData.Categories) {
            setCategories(responseData.Categories)
        }
    }

    useEffect(() => {
        setEditformdata({
            product_id: data.editProductModal.product_id,
            pName: data.editProductModal.pName,
            pDescription: data.editProductModal.pDescription,
            pImages: data.editProductModal.pImages,
            pStatus: data.editProductModal.pStatus,
            pCategory: data.editProductModal.pCategory,
            pQuantity: data.editProductModal.pQuantity,
            pPrice: data.editProductModal.pPrice,
        })
    }, [data.editProductModal])

    const fetchData = async () => {
        let responseData = await getAllProduct()
        if (responseData && responseData.Products) {
            dispatch({
                type: 'fetchProductsAndChangeState',
                payload: responseData.Products,
            })
        }
    }

    const submitForm = async (e) => {
        e.preventDefault()
        if (!editformData.pEditImages) {
            console.log('Image Not upload=============', editformData)
        } else {
            console.log('Image uploading')
        }
        try {
            let responseData = await editProduct(editformData)
            if (responseData.success) {
                fetchData()
                setEditformdata({
                    ...editformData,
                    success: responseData.success,
                })
                setTimeout(() => {
                    return setEditformdata({
                        ...editformData,
                        success: responseData.success,
                    })
                }, 2000)
            } else if (responseData.error) {
                setEditformdata({ ...editformData, error: responseData.error })
                setTimeout(() => {
                    return setEditformdata({
                        ...editformData,
                        error: responseData.error,
                    })
                }, 2000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            {/* Black Overlay */}
            <div
                onClick={(e) =>
                    dispatch({ type: 'editProductModalClose', payload: false })
                }
                className={`${
                    data.editProductModal.modal ? '' : 'hidden'
                } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
            />
            {/* End Black Overlay */}

            {/* Modal Start */}
            <div
                className={`${
                    data.editProductModal.modal ? '' : 'hidden'
                } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
            >
                <div className="relative flex flex-col items-center w-11/12 px-4 py-4 mt-32 space-y-4 bg-white shadow-lg md:mt-0 md:w-3/6 md:px-8">
                    <div className="flex items-center justify-between w-full pt-4">
                        <span className="text-2xl font-semibold tracking-wider text-left">
                            Edit Product
                        </span>
                        {/* Close Modal */}
                        <span
                            style={{ background: '#303031' }}
                            onClick={(e) =>
                                dispatch({
                                    type: 'editProductModalClose',
                                    payload: false,
                                })
                            }
                            className="px-2 py-2 text-gray-100 rounded-full cursor-pointer"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </span>
                    </div>
                    {editformData.error ? alert(editformData.error, 'red') : ''}
                    {editformData.success
                        ? alert(editformData.success, 'green')
                        : ''}
                    <form className="w-full" onSubmit={(e) => submitForm(e)}>
                        <div className="flex py-4 space-x-1">
                            <div className="flex flex-col w-1/2 space-x-1 space-y-1">
                                <label htmlFor="name">Product Name *</label>
                                <input
                                    value={editformData.pName}
                                    onChange={(e) =>
                                        setEditformdata({
                                            ...editformData,
                                            error: false,
                                            success: false,
                                            pName: e.target.value,
                                        })
                                    }
                                    className="px-4 py-2 border focus:outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col w-1/2 space-x-1 space-y-1">
                                <label htmlFor="price">Product Price *</label>
                                <input
                                    value={editformData.pPrice}
                                    onChange={(e) =>
                                        setEditformdata({
                                            ...editformData,
                                            error: false,
                                            success: false,
                                            pPrice: e.target.value,
                                        })
                                    }
                                    type="number"
                                    className="px-4 py-2 border focus:outline-none"
                                    id="price"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="description">
                                Product Description *
                            </label>
                            <textarea
                                value={editformData.pDescription}
                                onChange={(e) =>
                                    setEditformdata({
                                        ...editformData,
                                        error: false,
                                        success: false,
                                        pDescription: e.target.value,
                                    })
                                }
                                className="px-4 py-2 border focus:outline-none"
                                name="description"
                                id="description"
                                cols={5}
                                rows={2}
                            />
                        </div>
                        {/* Most Important part for uploading multiple image */}
                        <div className="flex flex-col mt-4">
                            <label htmlFor="image">Product Images *</label>
                            {editformData.pImages ? (
                                <div className="flex space-x-1">
                                    <img
                                        className="object-cover w-16 h-16"
                                        src={`${apiURL}/uploads/products/${editformData.pImages[0]}`}
                                        alt="productImage"
                                    />
                                    <img
                                        className="object-cover w-16 h-16"
                                        src={`${apiURL}/uploads/products/${editformData.pImages[1]}`}
                                        alt="productImage"
                                    />
                                </div>
                            ) : (
                                ''
                            )}
                            <span className="text-xs text-gray-600">
                                Must need 2 images
                            </span>
                            <input
                                onChange={(e) =>
                                    setEditformdata({
                                        ...editformData,
                                        error: false,
                                        success: false,
                                        pEditImages: [...e.target.files],
                                    })
                                }
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                className="px-4 py-2 border focus:outline-none"
                                id="image"
                                multiple
                            />
                        </div>
                        {/* Most Important part for uploading multiple image */}
                        <div className="flex py-4 space-x-1">
                            <div className="flex flex-col w-1/2 space-y-1">
                                <label htmlFor="status">Product Status *</label>
                                <select
                                    value={editformData.pStatus}
                                    onChange={(e) =>
                                        setEditformdata({
                                            ...editformData,
                                            error: false,
                                            success: false,
                                            pStatus: e.target.value,
                                        })
                                    }
                                    name="status"
                                    className="px-4 py-2 border focus:outline-none"
                                    id="status"
                                >
                                    <option name="status" value="Active">
                                        Active
                                    </option>
                                    <option name="status" value="Disabled">
                                        Disabled
                                    </option>
                                </select>
                            </div>
                            <div className="flex flex-col w-1/2 space-y-1">
                                <label htmlFor="status">
                                    Product Category *
                                </label>
                                <select
                                    onChange={(e) =>
                                        setEditformdata({
                                            ...editformData,
                                            error: false,
                                            success: false,
                                            pCategory: e.target.value,
                                        })
                                    }
                                    name="status"
                                    className="px-4 py-2 border focus:outline-none"
                                    id="status"
                                >
                                    <option disabled value="">
                                        Select a category
                                    </option>
                                    {categories && categories.length > 0
                                        ? categories.map((elem) => {
                                              return (
                                                  <Fragment
                                                      key={elem.category_id}
                                                  >
                                                      {editformData.pCategory
                                                          .category_id &&
                                                      editformData.pCategory
                                                          .category_id ===
                                                          elem.category_id ? (
                                                          <option
                                                              name="status"
                                                              value={
                                                                  elem.category_id
                                                              }
                                                              key={
                                                                  elem.category_id
                                                              }
                                                              selected
                                                          >
                                                              {elem.cName}
                                                          </option>
                                                      ) : (
                                                          <option
                                                              name="status"
                                                              value={
                                                                  elem.category_id
                                                              }
                                                              key={
                                                                  elem.category_id
                                                              }
                                                          >
                                                              {elem.cName}
                                                          </option>
                                                      )}
                                                  </Fragment>
                                              )
                                          })
                                        : ''}
                                </select>
                            </div>
                        </div>
                        <div className="flex py-4 space-x-1">
                            <div className="flex flex-col w-1/2 space-y-1">
                                <label htmlFor="quantity">
                                    Product in Stock *
                                </label>
                                <input
                                    value={editformData.pQuantity}
                                    onChange={(e) =>
                                        setEditformdata({
                                            ...editformData,
                                            error: false,
                                            success: false,
                                            pQuantity: e.target.value,
                                        })
                                    }
                                    type="number"
                                    className="px-4 py-2 border focus:outline-none"
                                    id="quantity"
                                />
                            </div>
                            <div className="flex flex-col w-1/2 space-y-1">
                                <label htmlFor="offer">
                                    Product Offfer (%) *
                                </label>
                                <input
                                    value={editformData.pOffer}
                                    onChange={(e) =>
                                        setEditformdata({
                                            ...editformData,
                                            error: false,
                                            success: false,
                                            pOffer: e.target.value,
                                        })
                                    }
                                    type="number"
                                    className="px-4 py-2 border focus:outline-none"
                                    id="offer"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-full pb-4 mt-4 space-y-1 md:pb-6">
                            <button
                                style={{ background: '#303031' }}
                                type="submit"
                                className="py-2 text-lg font-medium text-gray-100 bg-gray-800 rounded-full"
                            >
                                Update product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default EditProductModal
