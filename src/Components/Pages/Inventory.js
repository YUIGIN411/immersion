import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddItem from "../Modal/AddItem";
import EditItem from "../Modal/EditItem";
import supabase from "../../supabase";

const Inventory = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [itemData, setItemData] = useState([]);
  const [itemID, setEditID] = useState(0);

  useEffect(() => {
    fetchData();
  },  []);

  const deleteData = async (item_id) => {
    const { error } = await supabase
      .from('item')
      .delete()
      .eq('id', item_id)

      if(!error){
        fetchData();
      }
    }
  


  const fetchData = async () => {
    let { data: item, error } = await supabase.from("item").select("*");
    setItemData(item);
    console.log(itemData);
  };

  const createItem = async (e) => {
    e.preventDefault();
  };

  const OpenAddModal = () => {
    setAddModal(true);
  };

  const CloseAddModal = () => {
    setAddModal(false);
  };

  const OpenEditModal = (item_id) => {
    setEditID(item_id);
    setEditModal(true);
  };

  const CloseEditModal = () => {
    setEditModal(false);
  };

  return (
    <div>
      <div className="search">
        <input type="text"></input>
        <button onClick={OpenAddModal}>Add Item</button>
      </div>
      {addModal && <AddItem CloseAddModal={CloseAddModal} fetchData={fetchData} />}
      {editModal && <EditItem CloseEditModal={CloseEditModal} fetchData={fetchData} itemID={itemID} />}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {itemData && itemData.length > 0 ?(
             itemData.map((item) =>(
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.item_name}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => OpenEditModal(item.id)}>
                <FaEdit />
              </button>
              <button onClick={() => deleteData(item.id)}>
                <MdDelete />
              </button>{" "}
            </td>
          </tr>
 ))) : (
            <tr>
                <td colSpan="4">No items found</td>
            </tr>
)}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
