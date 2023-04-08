import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FcFullTrash } from "react-icons/fc";
import Add from "./Add";
import image from "./plus-circle.png";

function List() {
  let list = JSON.parse(window.localStorage.getItem("user"));
  const [task, setTask] = useState(list == null ? [] : list);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  //editing
  const handleEdit = (i) => {
    document.getElementById(i).focus();
    setEdit(true);
  };
  const handleChange = (e, i) => {
    if (edit) {
      let arr = task.filter((item) => {
        if (i == task.indexOf(item)) {
          item.task = e.target.value;
        }
        return item;
      });
      window.localStorage.setItem("user", JSON.stringify(arr));
      setTask(arr);
    }
  };

  //  completed or not
  const handleCheck = (i) => {
    let arr = task.filter((item) => {
      if (i == task.indexOf(item)) {
        if (item.checked == true) {
          item.checked = false;
        } else {
          item.checked = true;
        }
      }
      return item;
    });
    window.localStorage.setItem("user", JSON.stringify(arr));
    setTask(arr);
  };

  //deleting
  const handleDelete = (e, i) => {
    let res = confirm("do you want to delete");
    if (res) {
      e.stopPropagation();
      const arr = task.filter((item) => {
        return i !== task.indexOf(item);
      });
      window.localStorage.setItem("user", JSON.stringify(arr));
      setTask(arr);
    }
  };

  //adding new task
  const addTask = () => {
    setAdd(true);
  };

  const getValue = (val,time, show) => {
    if (val !== "") {
      let arr = [...task, { task: val,time : time, checked: false }];
      window.localStorage.setItem("user", JSON.stringify(arr));
      setTask(arr);
    }

    if (show == "hide") {
      setAdd(false);
    }
  };

  //deleting all
  const clearAll = () => {
    if (confirm("All items will be deleted.")) {
      window.localStorage.removeItem("user");
      setTask([]);
    }
  }
  return (
    <Container>
      {add ? (
        <Add getValue={getValue} display={add} />
      ) : (
        <div>
          <p>Tasks list</p>
          <div className="list-box">
            <div className="head">
              <img onClick={() => addTask()} src={image} alt="Add" style={{ cursor: 'pointer' }} />
              <FcFullTrash onClick={() => clearAll()} style={{ width: "24px", height: "24px", cursor: 'pointer' }}></FcFullTrash>

            </div>
            <div className="list__content">
              <div>
                <ul>
                  {task &&
                    task.map((item, i) => {
                      return (
                        <li key={i}>
                          <div>
                            <span>

                            <input
                              type="checkbox"
                              name="checkbox"
                              defaultChecked={item.checked}
                              onClick={() => {
                                handleCheck(i);
                              }}
                              />
                              <span style={{fontSize: "0.8rem"}}>&nbsp; {item.time}</span>
                              </span>
                            <div className="options">
                              <span
                                onClick={() => {
                                  handleEdit(i);
                                }}
                              >
                                <AiOutlineEdit />
                              </span>
                              <span onClick={(e) => handleDelete(e, i)}>
                                <AiOutlineDelete />
                              </span>
                            </div>
                          </div>
                          <input

                            id={i}
                            type="text"
                            style={{
                              textDecoration: `${item.checked ? "line-through" : "none"
                                }`,
                            }}
                            value={item.task}
                            onChange={(e) => {
                              handleChange(e, i);
                            }}
                            onBlur={() => {
                              setEdit(false);
                            }}
                            onClick={(e) => {
                              e.target.blur();
                            }}
                          ></input>
                          <hr />
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default List;
const Container = styled.div`
  p {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 18px;
    line-height: 115.69%;
    padding-left: 1rem;
    letter-spacing: 0.06rem;
  }
  .list-box {
    padding: 1rem 1rem 1rem 0.6rem;
    height: auto;
    margin: 0.8rem;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: 400;
      }
    }
    .list__content {
      margin-top: 12px;
      padding-bottom: 2px;
      .checked {
        text-decoration: line-through;
      }
      li {
        word-wrap: break-word;
        width: 100%;
        list-style-type: none;
        padding: 6px;
        font-size: medium;
        div {
          display: flex;
          justify-content: space-between;
          .options {
            span {
              margin-right: 8px;
              cursor: pointer;
            }
          }
        }
        input {
         width: inherit;
          outline: none;
          cursor: default;
          border: none;
        }
      }
    }
  }
`;
