import React, { Component } from "react";
import styled from "styled-components";

export const Tododiv = styled.div`
  display: flex;
`;

export const TodoContent = styled.p`
  margin-left: 0.3rem;
  font-size: 1.2rem;
`;

export const TodoContentGray = styled.p`
  font-size: 1.2rem;
  margin-left: 0.3rem;
  color: gray;
  text-decoration: line-through gray;
`;

export const TodoDel = styled.p`
  font-weight: bold;
  color: black;
  font-size: 1.2rem;
  margin-left: 10px;
  &:hover {
    color: gray;
  }
`;
