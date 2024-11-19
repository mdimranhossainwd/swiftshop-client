import Modal from "../../shared/Modal";
const RoleModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Change to This user Role"
      ></Modal>
    </>
  );
};

export default RoleModal;
