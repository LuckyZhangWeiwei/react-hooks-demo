import React from "react";
import useRequest from "../hooks/useRequest";

const URL = "http://localhost:8000/api/users";

export default function Table() {
  const [data, options, setOptions] = useRequest(URL);
  const { currentPage, totalPage, list } = data;
  console.log(data);
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {new Array(totalPage).fill(0).map((item, index) => (
            <li key={index}>
              <button
                className="btn btn-primary"
                onClick={() =>
                  setOptions({ ...options, currentPage: index + 1 })
                }
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
