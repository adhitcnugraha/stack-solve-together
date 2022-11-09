import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/stackCards";
import { getCommentByID } from "../redux/modules/stackComments";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import AddComment from "../features/todos/components/AddComment";
import ListComment from "../features/todos/components/ListComment";

const Detail = () => {
  const dispatch = useDispatch();
  const stackCard = useSelector((state) => state.stackCards.stackCard);

  const comments = useDispatch();
  const stackComment = useSelector((state) => state.stackComments.stackComment);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    comments(getCommentByID(id))
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <Header />
      <div>
        <StButton
          borderColor="#ddd"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to List
        </StButton>
      </div>
      <StContainer>
        <StDialog>
          <StDialogHeader>
            <div>ID :{stackCard.id}</div>
            <StTitle>{stackCard.title}</StTitle>
            <StBody>{stackCard.body}</StBody>
          </StDialogHeader>
        </StDialog>
      </StContainer>
      <div>
        <div>
          <AddComment />
          <ListComment />
        </div>
      </div>
    </Layout>

  );
};

export default Detail;

const StContainer = styled.div`
    padding: 0 24px;
    margin-bottom: 24px;
`;

const StDialog = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StDialogHeader = styled.div`
  width: 100%;
  border: 4px solid ${({ Color }) => Color};
  min-height: 100px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 24px;
  cursor: pointer;
`;
