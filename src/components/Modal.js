import './modal.css';
import ImageSlider from './ImageSlider'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
console.log("inside modal",children[0].props.children);
  return (
    <div className={showHideClassName}>
        
      <section className="modal-main">
          <ImageSlider slides={children[0].props.children} index={children[1].props.children} />
        
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Modal;