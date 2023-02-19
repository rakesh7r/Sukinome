import React, { useState } from "react"
import { Button, Upload } from "antd"
import ImgCrop from "antd-img-crop"
import CustomModal from "../Components/Modal"
import TextArea from "antd/es/input/TextArea"

function AddPost() {
    const [fileList, setFileList] = useState([])
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList)
    }
    const onPreview = async (file) => {
        let src = file.url
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader()
                reader.readAsDataURL(file.originFileObj)
                reader.onload = () => resolve(reader.result)
            })
        }
        const image = new Image()
        image.src = src
        const imgWindow = window.open(src)
        imgWindow?.document.write(image.outerHTML)
    }
    return (
        <div className="add-post-container width-100 flex-row justify-center">
            <div className="width-60 flex-col bw float-effect padding-large align-center h-100v">
                <h1>Upload Photos/Videos</h1>
                <div className="m-t-huge width-60 padding-large  flex-col justify-center align-center">
                    <ImgCrop shape="rect" rotate>
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 5 && "+ Upload"}
                        </Upload>
                    </ImgCrop>
                    <TextArea
                        placeholder={"Caption"}
                        // value={""}
                        // onChange={() => {}}
                        style={{ marginTop: 15, height: 100, lineHeight: 2 }}
                    />
                    <Button
                        className="width-100 m-t-medium profile-signout"
                        onClick={() => {
                            console.log(fileList)
                        }}
                    >
                        Upload
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddPost
