import fetch from "isomorphic-fetch";
import { API } from "../config";
import queryString from "query-string";
import { isAuth, handleResponse } from "./auth";

export const create = (blog, token) => {
  let endpoint;
  if (isAuth() && isAuth().role == 1) {
    endpoint = `${API}/blog`;
  } else if (isAuth() && isAuth().role == 0) {
    endpoint = `${API}/user/blog`;
  }

  return fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listBlogsWithCategoriesAndTags = (skip, limit) => {
  const data = {
    limit,
    skip,
  };
  return fetch(`${API}/blogs-categories-tags`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singleBlog = (slug) => {
  return fetch(`${API}/blog/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listRelated = (blog) => {
  return fetch(`${API}/blogs/related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const list = (username) => {
  let endpoint;
  if (username) {
    endpoint = `${API}/${username}/blogs`;
  } else {
    endpoint = `${API}/blogs`;
  }
  console.log(endpoint);

  return fetch(`${endpoint}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeBlog = (slug, token) => {
  let endpoint;
  if (isAuth() && isAuth().role == 1) {
    endpoint = `${API}/blog/${slug}`;
  } else if (isAuth() && isAuth().role == 0) {
    endpoint = `${API}/user/blog/${slug}`;
  }

  return fetch(`${endpoint}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateBlog = (blog, token, slug) => {
  let endpoint;
  if (isAuth() && isAuth().role == 1) {
    endpoint = `${API}/blog/${slug}`;
  } else if (isAuth() && isAuth().role == 0) {
    endpoint = `${API}/user/blog/${slug}`;
  }

  return fetch(`${endpoint}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listSearch = (params) => {
  console.log("search params", params);
  let query = queryString.stringify(params);
  console.log("query params", query);
  return fetch(`${API}/blogs/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
