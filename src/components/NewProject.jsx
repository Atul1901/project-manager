import { useRef } from "react";
import Input from "./Input";
import Modal from "./modal";

export function NewProject({ Add, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  console.log("title:", title?.current?.value);

  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    console.log("title-2", enteredTitle);
    const enteredDescription = description.current.value;
    const entereddueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      entereddueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    Add({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: entereddueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Oops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-400 mb-4">
          Please enter valid value for every input
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textArea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
