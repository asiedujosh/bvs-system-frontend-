import { useState } from "react"

const UploadImage = ({ change }) => {
  const [image, setImage] = useState(null)

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0]
    if (selectedImage) {
      const reader = new FileReader()
      reader.onload = () => {
        //console.log(reader.result)
        change(reader.result, "imageUpload")
        setImage(reader.result)
      }
      reader.readAsDataURL(selectedImage)
    }
    //console.log(image)
    //change(image, "image_upload")
  }

  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-md">
      <div className="w-full md:w-1/2 pr-0 md:pr-4">
        {image ? (
          <img src={image} alt="Preview" className="w-full h-auto rounded-md" />
        ) : (
          <div className="bg-gray-200 w-full h-40 rounded-md flex items-center justify-center">
            No Image
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 mt-2 md:mt-0">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="cursor-pointer bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Upload Image
        </label>
      </div>
    </div>
  )
}

export default UploadImage
