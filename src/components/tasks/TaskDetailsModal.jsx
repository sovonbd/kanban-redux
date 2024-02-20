import Modal from "../ui/Modal";

const TaskDetailsModal = ({isOpen, setIsOpen}) => {

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default TaskDetailsModal;