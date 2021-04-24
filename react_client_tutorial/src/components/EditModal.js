import { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function EditModal({ modalData, closeModal = () => {} }) {
    const [formData, setFormData] = useState({ name: null , password: null });

    useEffect(() => { 
        setFormData({ name: modalData?.user?.name, password: modalData?.user?.password });
    }, [modalData]);

    const handleSaveButton = () => 
        closeModal({ isSaved: true, formVal: { ...formData, _id: modalData?.user?._id, } });

    const handleCloseButton = () => 
        closeModal({ isSaved: false, formVal: null });
    

    return (
        <Modal
            isOpen={modalData.modalIsOpen}
            contentLabel="Form"
        >
            <div>
               <input 
                    value={formData.name} 
                    onChange={({ target }) => setFormData({ ...formData, name: target.value })}
                />
               <input 
                    value={'formData.password'} 
                    onChange={({ target }) => setFormData({ ...formData, password: target.value })}
                />
                <div>
                    <button onClick={handleCloseButton}>Cancel</button>
                    <button onClick={handleSaveButton}>Save</button>
                </div>
            </div>
        </Modal>
    );
}
