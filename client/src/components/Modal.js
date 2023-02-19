import { Modal } from "antd"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setModalOpen } from "../redux/Actions"

function CustomModal({ title, children, footer, centered }) {
    const open = useSelector((state) => state.flags.modalOpen)
    const dispatch = useDispatch()
    return (
        <Modal
            open={open}
            title={title}
            centered={centered}
            onOk={() => dispatch(setModalOpen(false))}
            onCancel={() => dispatch(setModalOpen(false))}
            footer={footer}
        >
            {children}
        </Modal>
    )
}

export default CustomModal
