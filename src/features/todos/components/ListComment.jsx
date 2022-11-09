import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../../redux/modules/stackComments";
import { Link } from "react-router-dom";

const ListComments = () => {
  const dispatch = useDispatch();
  const stackComments = useSelector((state) => state.stackComments.stackComments);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  // const onToggleStatusTodo = (id) => {
  //   dispatch(toggleStatusTodo(id));
  // };

  return (
    <StListContainer>
      <StListWrapper>
        {stackComments.map((stackComment) => {
          if (stackComment) {
            return (
              <StTodoContainer key={stackComment.id} Color="blue">           
                <div>
                  <h2 className="todo-title">{stackComment.title}</h2>
                  <div>{stackComment.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    Color="red"
                    onClick={() => onDeleteTodo(stackComment.id)}
                  >
                    D
                  </StButton>
                   <StLink to={`/${stackComment.id}`} key={stackComment.id}>
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

export default ListComments;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
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
  cursor: pointer;
`;
