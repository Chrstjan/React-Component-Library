import s from "./Modal.module.scss";

export const Modal = ({ children, isModalOpen, setIsModalOpen, type }) => {
  const closeModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${isModalOpen ? s.overlayStyling : s.hiddenStyling}`}
      ></div>
      <div
        className={`${isModalOpen ? s.modalStyling : s.hiddenStyling} ${
          s[type]
        }`}
      >
        <button onClick={() => closeModal()}>X</button>
        {children}
      </div>
    </>
  );
};
