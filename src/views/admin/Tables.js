// import React from "react";

// // components

// import CardTable from "components/Cards/CardTable.js";

// export default function Tables() {
//   return (
//     <>
//       <div className="flex flex-wrap mt-4">
//         <div className="w-full mb-12 px-4">
//           <CardTable />
//         </div>
//       </div>
//     </>
//   );
// }
// Tables.js
import React, { useState } from "react";
import CardTable from "components/Cards/CardTable.js";
import EditItemModal from "components/Modals/EditItemModal.js";
import EditItemForm from "components/Forms/EditItemForm";

export default function Tables() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // This function is passed to CardTable to handle the edit click
  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleUpdateItem = (updatedData) => {
    // Your update logic...
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        {isModalOpen ? (
          <EditItemModal onClose={() => setIsModalOpen(false)}>
            <EditItemForm item={selectedItem} onUpdate={handleUpdateItem} />
          </EditItemModal>
        ) : (
          <CardTable onEdit={handleEdit} />
        )}
      </div>
    </div>
  );
}