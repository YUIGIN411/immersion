import { useState } from "react";
import supabase from "../../supabase";

const AddItem = ({ CloseAddModal, fetchData }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const createItem = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("item")
      .insert([{ 
        'item_name': itemName, 
        'quantity': quantity }])
      .select();

    if (!error) {
      console.log(data);
      fetchData();
      CloseAddModal();
    } else {
      console.log(error);
    }
  };

  return (
    <div className="modal-overly">
      <div className="modal">
        <h2>Add Item</h2>
        <form onSubmit={createItem}>
          <input
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button type="submit">Submit</button>
          <button onClick={CloseAddModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
