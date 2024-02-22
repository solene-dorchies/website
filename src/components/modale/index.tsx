import React from "react";
import { TfiCommentsSmiley } from "react-icons/tfi";
import "./index.scss";

interface Props {
  setIsModale: (value: boolean) => void;
}

export default function Modale(props: Props) {
  const modalRef = React.useRef(null);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
      props.setIsModale(false);
    }
  };

  return (
    <div
      id="myModal"
      className="modal"
      ref={modalRef}
      onClick={handleClickOutside}
    >
      <div className="modal-content">
        <div className="img">
          <img src="./img/wait.png" alt="Curriculum Vitae en attente" />
        </div>
        <p>Mon Curriculum Vitae est en cours de création.</p>
        <p>
          Un peu de patience... <TfiCommentsSmiley className="color-change" />
        </p>
        <button onClick={() => props.setIsModale(false)}>Fermer</button>
      </div>
    </div>
  );
}
