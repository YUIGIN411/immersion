import '../../App.css';
import { useState } from 'react';
import supabase from '../../supabase';

const EditItem = ({ CloseEditModal, fetchData, itemID}) => {
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const updateData = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
           .from('item')
           .update({ 'item_name': itemName,
            'quantity': quantity
            })
           .eq('id', itemID)
           .select();
           if(!error)
            fetchData();
            CloseEditModal();
}

    return ( 
        <div className="modal-overly">
            <div className="modal">
            <h2>Edit Item</h2>
            <form onSubmit={updateData}>
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
                <button onClick={CloseEditModal}>Cancel</button>
            </form>
        </div>
        </div>
     );
}
 
export default EditItem;