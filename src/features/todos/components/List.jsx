import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../../redux/modules/stackCards";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const stackCards = useSelector((state) => state.stackCards.stackCards);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StListContainer>
      <h2><font color="red">Unsolved</font></h2>
      <StListWrapper>
        {stackCards.map((stackCard) => {
          if (!stackCard.isDone) {
            return (
              <StTodoContainer key={stackCard.id} Color="red">           
                <div>
                  <h2 className="todo-title">{stackCard.title}</h2>
                  <div>{stackCard.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    Color="red"
                    onClick={() => onDeleteTodo(stackCard.id)}
                  >
                    D
                  </StButton>
                  <StButton
                    Color="green"
                    onClick={() => onToggleStatusTodo(stackCard.id)}
                  >
                    {stackCard.isDone ? "Cancel!" : "E"}
                  </StButton>
                   <StLink to={`/${stackCard.id}`} key={stackCard.id}>
                  <div>Detail</div>
                </StLink>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2 className="list-title"><font color="green">Solved</font></h2>
      <StListWrapper>
        {stackCards.map((stackCard) => {
          if (stackCard.isDone) {
            return (
              <StTodoContainer key={stackCard.id} Color="green">
                <div>
                  <h2 className="todo-title">{stackCard.title}</h2>
                  <div>{stackCard.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    Color="red"
                    onClick={() => onDeleteTodo(stackCard.id)}
                  >
                    D
                  </StButton>
                   <StLink to={`/${stackCard.id}`} key={stackCard.id}>
                  <div>Detail</div>
                </StLink>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 100%;
   border: 4px solid ${({ Color }) => Color};
  min-height: 100px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: none;
  font-size: 20px;
  color: ${({ Color }) => Color};
  height: 10px;
  width:  50px;
  background-color: #fff;
  border-radius: 12px;
  margin-right: 15px;
  cursor: pointer;
`;
