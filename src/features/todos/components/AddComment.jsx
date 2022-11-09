import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../../../redux/modules/stackComments";

const AddComment = () => {
  const id = nextId();

  const dispatch = useDispatch();
  const [stackComment, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // const todos = useSelector((state) => state.todos.todos);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...stackComment, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (stackComment.title.trim() === "" || stackComment.body.trim() === "") return;

    dispatch(addTodo({ ...stackComment, id }));
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <StAddComment onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel></StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={stackComment.title}
          placeholder="add name"
          onChange={onChangeHandler}
        />
        <StFormLabel></StFormLabel>
        <StAddInput
          type="text"
          name="body"
          placeholder="add comment"
          value={stackComment.body}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton>Add</StAddButton>
    </StAddComment>
  );
};

export default AddComment;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddComment = styled.form`
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
