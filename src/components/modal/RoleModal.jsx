import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import Modal from "../../shared/Modal";
const RoleModal = ({ isOpen, setIsOpen, item, refetch }) => {
  const axios = useAxios();

  // User's role changes functions
  const changeUserRole = async (id, currentRole) => {
    const newRole = currentRole === "customer" ? "admin" : "customer";
    try {
      const { data } = await axios.patch(`/users/${id}`, { role: newRole });
      toast.success(`User role updated to ${newRole}`);
      refetch();
    } catch (err) {
      toast.err(`Something is Wrong ${err} !`);
    }
  };

  // Admin delete a users functions
  const handleDeleted = async (id) => {
    try {
      const { data } = await axios.delete(`/users/${id}`);
      toast.success("User deleted Successfully");
      refetch();
    } catch (err) {
      toast.err(`Something is Wrong ${err}`);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <p className="text-[15px] font-medium text-gray-700">
          Changing user's role changes their API token access.
        </p>
        <div className="flex items-center gap-4 pb-6 mt-5">
          <img
            src={item?.photo}
            alt={item?.name || "User Image"}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">{item?.name}</p>
            <p className="text-sm text-gray-600">{item?.email}</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => changeUserRole(item?._id, item?.role)}
            className="bg-gradient-to-r from-primary to-secondary  py-2 px-7 font-medium text-white rounded-full"
          >
            Admin
          </button>
          <button
            onClick={() => handleDeleted(item?._id)}
            className="bg-gradient-to-r hover:from-primary hover:to-secondary bg-gray-600 py-2 px-7 font-medium text-white rounded-full"
          >
            Remove
          </button>
        </div>
      </Modal>
    </>
  );
};

export default RoleModal;
