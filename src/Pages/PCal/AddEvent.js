import React, { useState } from "react";
import { Modal, Button } from "@material-ui/core";
import Datetime from "react-datetime";

export default function AddEvent({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (event) => {
    event.preventDefault();

    onEventAdded({
      title,
      start,
      end,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <label>Start date</label>
          <Datetime value={start} onChange={(date) => setStart(date)} />
        </div>
        <div>
          <label>End date</label>
          <Datetime value={end} onChange={(date) => setEnd(date)} />
        </div>

        <Button variant="contained" color="primary" className="addEvent">
          Add Event
        </Button>
      </form>
    </Modal>
  );
}
