import { useRef } from "react";
import Input from "./Input";

export function NewProject({ Add }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  console.log("title:", title?.current?.value);

  function handleSave() {
    const enteredTitle = title.current.value;
    console.log("title-2", enteredTitle);
    const enteredDescription = description.current.value;
    const entereddueDate = dueDate.current.value;

    // validation....
    Add({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: entereddueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}
