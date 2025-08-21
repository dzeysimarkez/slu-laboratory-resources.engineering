// src/components/Tables.js
import React, { useState } from "react";

// Components
import CardTable from "components/Cards/CardTable.js";
import EditItemForm from "components/Forms/EditItemForm";

export default function Tables() {
  // We'll use a single state to hold the item being edited.
  // If `selectedItem` is null, we show the table.
  // If `selectedItem` has an item object, we show the form.
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
   * This function is passed to EditItemForm. It's called when the
   * user clicks the "Save Changes" button in the form.
   * @param {object} updatedData The item data with updated values.
   */
  const handleUpdateItem = (updatedData) => {
    // NOTE: This is where you would put your logic to update the item
    // in your backend, using the updatedData object.
    
    // For now, we'll simply close the form by clearing the state.
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
