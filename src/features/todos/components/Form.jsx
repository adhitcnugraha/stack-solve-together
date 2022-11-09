import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../../../redux/modules/stackCards";

const Form = () => {
  const id = nextId();

  const dispatch = useDispatch();
  const [stackCard, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // const todos = useSelector((state) => state.todos.todos);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...stackCard, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (stackCard.title.trim() === "" || stackCard.body.trim() === "") 
    return;
    dispatch(addTodo({ ...stackCard, id }));
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel></StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={stackCard.title}
          placeholder="add title"
          onChange={onChangeHandler}
        />
        <StFormLabel></StFormLabel>
        <StAddInput
          type="text"
          name="body"
          placeholder="add content"
          value={stackCard.body}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton>Add</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 450px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
