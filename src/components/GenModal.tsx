import { Modal } from "react-bootstrap";
import React from "react";

interface GenModalProps {
  Text: string;
  show:boolean;
  onHide: ()=> void;

}

const GenModal: React.FC<GenModalProps> = ({ Text,show,onHide }:GenModalProps) => {


  return (
    <>
      <Modal backdrop="static" show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Text}</Modal.Body>
      </Modal>
    </>
  );
};

export default GenModal;
