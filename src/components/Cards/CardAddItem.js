import React, { useState } from "react";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the stylesheet

export default function CardAddItem() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    count: 0,
    shortDescription: "",
    instructions: "", // Initialized as an empty string for the rich text editor
  });
  const [mainImageFile, setMainImageFile] = useState(null);
  const [thumbnailFiles, setThumbnailFiles] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  // New state to store the generated QR code data URL and the item name
  const [qrCodeData, setQrCodeData] = useState(null);
  const [savedItemName, setSavedItemName] = useState("");

  // Handles changes for all text and number inputs
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  // Dedicated handler for the ReactQuill editor
  const handleInstructionsChange = (content) => {
    setFormData({
      ...formData,
      instructions: content,
    });
  };

  // Handles the main image file input change
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImageFile(file || null);
  };

  // Handles the thumbnail image file inputs
  const handleThumbnailChange = (e, index) => {
    const file = e.target.files[0];
    setThumbnailFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles[index] = file || null; // Store the file object, not its contents
      return newFiles;
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage("");
    // Reset QR code display on new save attempt
    setQrCodeData(null);
    setSavedItemName("");

    // Client-side validation to ensure name is not empty
    if (!formData.name) {
      setMessage("Item Name is a required field. Please enter a name.");
      setIsSaving(false);
      return;
    }

    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    if (!backendUrl) {
      setMessage("Backend URL is not configured. Cannot save item.");
      setIsSaving(false);
      return;
    }

    // Create a new FormData object to send both text and file data
    const formDataWithFiles = new FormData();

    // Append all text-based form data
    Object.keys(formData).forEach((key) => {
      formDataWithFiles.append(key, formData[key]);
    });

    // Append the main image file if it exists
    if (mainImageFile) {
      formDataWithFiles.append("mainImage", mainImageFile);
    }

    // Append each thumbnail file if it exists
    thumbnailFiles.forEach((file, index) => {
      if (file) {
        formDataWithFiles.append(`thumbnail${index}`, file);
      }
    });

    try {
      // Send the FormData object directly to the backend
      const response = await axios.post(
        `${backendUrl}/api/items`,
        formDataWithFiles
      );

      console.log("Item added successfully:", response.data);
      setMessage("Item added successfully!");

      // Get the QR code and name from the backend response and save it to state
      const { name, qrCode } = response.data;
      if (qrCode) {
        setQrCodeData(qrCode);
        setSavedItemName(name);
      }

      // Reset the form and file inputs after a successful save
      setFormData({
        name: "",
        category: "",
        count: 0,
        shortDescription: "",
        instructions: "",
      });
      setMainImageFile(null);
      setThumbnailFiles([]);
      // You may also want to manually clear the file input elements if needed
    } catch (error) {
      console.error("Failed to add item:", error);
      const errorMessage =
        error.response?.data?.message || "Failed to add item.";
      setMessage(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      {/* Local styles to override Quill's default appearance */}
      <style>{`
        .ql-container.ql-snow {
            border: 0;
        }
        .ql-toolbar.ql-snow {
            background-color: #f3f4f6;
            border-bottom: 1px solid #e2e8f0;
            border-radius: 0.25rem 0.25rem 0 0;
        }
        .ql-editor {
            background-color: white;
            min-height: 150px;
        }
      `}</style>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Add New Item
            </h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
          </div>
          {message && (
            <p
              className={`mt-4 text-center ${
                message.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
          {/* Conditional rendering for the QR code display */}
          {qrCodeData && (
            <div className="mt-6 text-center">
              <h6 className="text-blueGray-700 text-lg font-bold">
                QR Code for {savedItemName}
              </h6>
              <img
                src={qrCodeData}
                alt={`QR Code for ${savedItemName}`}
                className="mx-auto mt-4 w-48 h-48 border-2 border-blueGray-300 rounded-lg shadow-lg"
              />
              <p className="mt-2 text-sm text-blueGray-500">
                Scan this code to view the item details.
              </p>
            </div>
          )}
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            {/* Item Information Section */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Item Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="name"
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="category"
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Consumable">Consumable</option>
                    <option value="Non-consumable">Non-consumable</option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="count"
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  >
                    Count
                  </label>
                  <input
                    type="number"
                    name="count"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.count}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="shortDescription"
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  >
                    Short Description
                  </label>
                  <textarea
                    name="shortDescription"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* Images Section */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Images
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="mainImage"
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  >
                    Main Image (Required)
                  </label>
                  <input
                    type="file"
                    name="mainImage"
                    accept="image/*"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={handleMainImageChange}
                    required
                  />
                </div>
              </div>
              {[0, 1, 2].map((index) => (
                <div key={index} className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor={`thumbnail${index}`}
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Thumbnail {index + 1} (Optional)
                    </label>
                    <input
                      type="file"
                      name={`thumbnail${index}`}
                      accept="image/*"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => handleThumbnailChange(e, index)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* Instructions Section */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="instructions"
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  >
                    Instructions
                  </label>
                  <div className="border-0 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full">
                    <ReactQuill
                      theme="snow"
                      value={formData.instructions}
                      onChange={handleInstructionsChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
