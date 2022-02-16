import React, { useState, useEffect, useContext } from "react";
function UserInput({
  data,
  setData,
  input,
  setInput,
  handleInput,
  isedit,
  editelmid,
  setIsEdit,
  setShow,
}) {
  // const [input, setInput] = useState("");
  // const handleInput = (event) => {
  //   setInput(event.target.value);
  // };

  const storeInput = (event) => {
    if (event.key === "Enter") {
      if (input === "") {
        alert("You should enter some value");
        return;
      } else if (isedit && input !== "") {
        console.log("executing");
        setData(
          data.map((elm) => {
            if (elm.id == editelmid) {
              return { ...elm, data: input };
            }
            return elm;
          })
        );
        setIsEdit(false);
        setInput("");
        setShow(false);
      } else {
        const tmpdata = {
          data: input,
          id: new Date().getTime().toString(),
          date: new Date().toLocaleDateString(),
        };
        setData([...data, tmpdata]);
      }
      setInput("");
    }
    return;
  };
  return (
    <div>
      <input
        type="text"
        placeholder=" ✍️ Add your todos...."
        className={`form-control mt-3 w-75 mx-auto`}
        value={input}
        onChange={handleInput}
        onKeyPress={storeInput}
      />
    </div>
  );
}

export default UserInput;
