import React, { Fragment, useContext, useEffect, useState } from 'react'
import { editCategory, getAllCategory } from './FetchApi'
import { CategoryContext } from './index'

const EditCategoryModal = (props) => {
    const { data, dispatch } = useContext(CategoryContext)

    const [des, setDes] = useState('')
    const [status, setStatus] = useState('')
    const [cId, setCid] = useState('')

    useEffect(() => {
        setDes(data.editCategoryModal.des)
        setStatus(data.editCategoryModal.status)
        setCid(data.editCategoryModal.cId)
    }, [data.editCategoryModal.modal])

    const fetchData = async () => {
        let responseData = await getAllCategory()
        if (responseData.Categories) {
            dispatch({
                type: 'fetchCategoryAndChangeState',
                payload: responseData.Categories,
            })
        }
    }

    const submitForm = async () => {
        dispatch({ type: 'loading', payload: true })
        let edit = await editCategory(cId, des, status)
        if (edit.error) {
            console.log(edit.error)
            dispatch({ type: 'loading', payload: false })
        } else if (edit.success) {
            console.log(edit.success)
            dispatch({ type: 'editCategoryModalClose' })
            setTimeout(() => {
                fetchData()
                dispatch({ type: 'loading', payload: false })
            }, 1000)
        }
    }

    return (
        <Fragment>
            {/* Black Overlay */}
            <div
                onClick={(e) => dispatch({ type: 'editCategoryModalClose' })}
                className={`${
                    data.editCategoryModal.modal ? '' : 'hidden'
                } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
            />
            {/* End Black Overlay */}

            {/* Modal Start */}
            <div
                className={`${
                    data.editCategoryModal.modal ? '' : 'hidden'
                } fixed inset-0 m-4  flex items-center z-30 justify-center`}
            >
                <div className="relative flex flex-col items-center w-11/12 px-4 py-4 space-y-4 overflow-y-auto bg-white shadow-lg md:w-3/6 md:px-8">
                    <div className="flex items-center justify-between w-full pt-4">
                        <span className="text-2xl font-semibold tracking-wider text-left">
                            Add Category
                        </span>
                        {/* Close Modal */}
                        <span
                            style={{ background: '#303031' }}
                            onClick={(e) =>
                                dispatch({ type: 'editCategoryModalClose' })
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
                    <div className="flex flex-col w-full space-y-1">
                        <label htmlFor="description">
                            Category Description
                        </label>
                        <textarea
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                            className="px-4 py-2 border focus:outline-none"
                            name="description"
                            id="description"
                            cols={5}
                            rows={5}
                        />
                    </div>
                    <div className="flex flex-col w-full space-y-1">
                        <label htmlFor="status">Category Status</label>
                        <select
                            value={status}
                            name="status"
                            onChange={(e) => setStatus(e.target.value)}
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
                    <div className="flex flex-col w-full pb-4 space-y-1 md:pb-6">
                        <button
                            style={{ background: '#303031' }}
                            onClick={(e) => submitForm()}
                            className="py-2 text-lg font-medium text-gray-100 bg-gray-800 rounded-full"
                        >
                            Edit category
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditCategoryModal
