// src/components/Tables.js
import React, { useState } from "react";
import { toast } from "react-toastify"; // Import toast for notifications

// Components
import CardTable from "components/Cards/CardTable.js";
import EditItemForm from "components/Forms/EditItemForm";

export default function Tables() {
  const [selectedItem, setSelectedItem] = useState(null);

  /**
   * This function is passed to CardTable. It's called when a user
   * clicks the "Edit" button for an item.
   * It receives the full item object and sets it in the state.
   * This action triggers a re-render and shows the EditItemForm.
   * @param {object} item The item object to be edited.
   */
  const handleEdit = (item) => {
    setSelectedItem(item);
  };

  /**
   * This function handles the logic for updating an item in the backend.
   * It is called by handleUpdateItem.
   * @param {object} itemData The data to be sent for the item update.
   */
  const updateItem = async (itemData) => {
    try {
      const backendUrl = "https://slu-backend.vercel.app";
      const response = await fetch(`${backendUrl}/api/items/${itemData._id}`, {
        method: 'PUT', // Use the PUT method for updates
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      });

      if (!response.ok) {
        throw new Error("Failed to update item on the server.");
      }

      // Check the response for the success flag from your backend
      const result = await response.json();
      if (result.success) {
        toast.success("Item updated successfully!");
      } else {
        throw new Error(result.msg || "An unknown error occurred.");
      }

    } catch (err) {
      console.error("Error updating item:", err);
      toast.error(err.message);
    }
  };

  /**
   * This function is passed to EditItemForm. It's called when the
   * user clicks the "Save Changes" button in the form.
   * @param {object} updatedData The item data with updated values.
   */
  const handleUpdateItem = async (updatedData) => {
    // Call the async function to handle the API request
    await updateItem(updatedData);
    
    // Clear the selected item to hide the form and show the table again
    setSelectedItem(null);
  };

  /**
   * This function is passed to EditItemForm. It's called when the
   * user clicks the "Cancel" button.
   * It clears the `selectedItem` state to hide the form and show the table again.
   */
  const handleCloseForm = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        {/* Conditional rendering: show the form if an item is selected, otherwise show the table. */}
        {selectedItem ? (
          <EditItemForm
            item={selectedItem}
            onUpdate={handleUpdateItem}
            onClose={handleCloseForm}
          />
        ) : (
          <CardTable onEdit={handleEdit} />
        )}
      </div>
    </div>
  );
}
