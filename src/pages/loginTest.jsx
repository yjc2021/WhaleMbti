import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import DownloadBtn from "../components/result/downloadBtn";
import useAsync from "../useAsync";
const signUp = async () => {
  const response = await axios.post("http://localhost:8080/api/v3/join", {
    name: "홍길동",
    account: "doraemong123",
    pwd: "1234321",
    address: {
      city: "서울시",
      street: "광진구",
      zipcode: "세종3로",
    },
    email: "yong1234@sejong.ac.kr",
  });
  return response.data;
};
const postMbti = async () => {
  const response = await axios.post(
    "http://localhost:8080/api/algorithm/result",
    {
      icount: 0,
      ecount: 3,
      scount: 3,
      ncount: 0,
      tcount: 0,
      fcount: 3,
      pcount: 3,
      jcount: 0,
    }
  );
  return response.data;
};
const logIn = async () => {
  const response = await axios.post("http://localhost:8080/api/v4/login", {
    account: "doraemong123",
    password: "1234321",
  });
  console.log(response);
  return response.data;
};
const getMembers = async () => {
  const response = await axios.get("http://localhost:8080/api/v2/members");
  return response.data;
};
const editMember = async () => {
  const response = await axios.put(
    `http://localhost:8080/api/v2/members`,
    {
      account: "hayoon97",
      pwd: "970207",
      address: {
        city: "서울시",
        street: "성북구",
        zipcode: "안암1동",
      },
      email: "hayoon97@sejong.ac.kr",
      name: "도라에몽친구하윤",
    },
    {
      headers: {
        "X-AUTH-TOKEN":
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXlvb245NyIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2NjEwODUwMDUsImV4cCI6MTY2MTA4ODYwNX0.zCrGKUI61GSsrTH0lXY24uX9dGDJt4916lHTV5cLJVk",
      },
    }
  );
  return response.data;
};
const getWhales = async () => {
  const response = await axios.get("http://localhost:8080/api/v2/whale-lists");
  return response.data;
};
const userAccess = async () => {
  const response = await axios.post(
    "http://localhost:8080/api/user/test",
    {},
    {
      headers: {
        "X-AUTH-TOKEN":
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXlvb245NyIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2NjEwODUwMDUsImV4cCI6MTY2MTA4ODYwNX0.zCrGKUI61GSsrTH0lXY24uX9dGDJt4916lHTV5cLJVk",
      },
    }
  );
  console.log(response);
  return response.data;
};
const adminAccess = async () => {
  const response = await axios.post(
    "http://localhost:8080/api/admin/test",
    {},
    {
      headers: {
        "X-AUTH-TOKEN":
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXlvb245NyIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2NjEwODUwMDUsImV4cCI6MTY2MTA4ODYwNX0.zCrGKUI61GSsrTH0lXY24uX9dGDJt4916lHTV5cLJVk",
      },
    }
  );
  console.log(response);
  return response.data;
};

const getTable = async () => {
  const response = await axios.get("http://localhost:8080/api/v3/result");
  return response.data;
};

const saveResult = async () => {
  const response = await axios.post(
    "http://localhost:8080/api/create/user/result",
    {
      whaleId: 13,
      whaleName: "귀신고래",
      whaleShare: 0,
    },
    {
      headers: {
        "X-AUTH-TOKEN":
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkb3JhZXlvbmcxMjMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjYxMDg3MjM4LCJleHAiOjE2NjEwOTA4Mzh9.3MmR6B23qOzFvDTErkIfWnwZuLbJfuNLjhul53Zy3ok",
      },
    }
  );
  return response.data;
};
const getDescending = async () => {
  const response = await axios.get(
    "http://localhost:8080/api/sort/whale-descending"
  );
  return response.data;
};
const getMax = async () => {
  const response = await axios.get("http://localhost:8080/api/list/max-whale");
  return response.data;
};
const getMin = async () => {
  const response = await axios.get("http://localhost:8080/api/list/min-whale");
  return response.data;
};
const compat = async () => {
  const response = await axios.post(
    "http://localhost:8080/api/whale-compatibility",
    {
      whaleId: 11,
      whaleName: "범고래",
      whaleShare: 6.04,
    }
  );
  return response.data;
};
const getHistory = async () => {
  const response = await axios.post(
    "http://localhost:8080/api/history/result",
    {},
    {
      headers: {
        "X-AUTH-TOKEN":
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkb3JhZXlvbmcxMjMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjYxMDg3MjM4LCJleHAiOjE2NjEwOTA4Mzh9.3MmR6B23qOzFvDTErkIfWnwZuLbJfuNLjhul53Zy3ok",
      },
    }
  );
  return response.data;
};
const saveResultNonUser = async () => {
  const response = await axios.post(
    "http://localhost:8080/api/create/non-user/result",
    {
      whaleId: 13,
      whaleName: "귀신고래",
      whaleShare: 0,
    }
  );
  return response.data;
};
const LoginTest = (props) => {
  const [state, refetch] = useAsync(postMbti, []);
  const { loading, data, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) console.log(error);
  if (data) console.log(data);
  return <DownloadBtn id={8} />;
};

export default LoginTest;
