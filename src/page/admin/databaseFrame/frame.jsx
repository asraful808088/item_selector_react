import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import crossIcon from "../../../assets/icon/cross.png";
import saveIcon from "../../../assets/icon/right.png";
import TextInput from "../../../components/TextInput/textInput";
import style from "./style.module.css";
const DataBaseContext = createContext();
export default function DatabeseFrame({
  url,
  icon,
  name,
  id = 100,
  email = "default@gmail.com",
  detailsKey = ["id", "email", "oso", "pso"],
  alldata,
}) {
  const [navActive, setNavActive] = useState(false);
  const [dataList, setData] = useState([]);
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    for (let index = 0; index < alldata.length; index++) {
      setData((oldData) => [
        <SingleData key={index} dataObj={alldata[index]} />,
        ...oldData,
      ]);
    }
  }, [alldata]);
  const onPopIndex = () => {
    setSingleData(null);
    setData([...dataList]);
  };
  return (
    <DataBaseContext.Provider value={{ url, dataList, setData }}>
      <div className={style.root}>
        <header className={style.header}>
          <div className={style.icon}>
            <img src={icon} alt="" height={"100%"} width="100%" />
          </div>
          <div className={style.name}>users</div>
        </header>
        <hr />
        <div className={style.items}>
          <div
            className={style.usersList}
            style={{
              left: navActive ? "0" : "-100%",
            }}
          >
            <div className={style.itemHeader}>
              Data-list
              <div className={style.close}>
                <img
                  onClick={() => {
                    setNavActive(!navActive);
                  }}
                  src={require("../../../assets/icon/cross.png")}
                  alt=""
                  height={"70%"}
                  width={"70%"}
                />
              </div>
            </div>
            <hr />
            <div className={style.searchBar}>
              <TextInput placeholder={"search"} iconType="search" />
            </div>
            <div
              className={style.allRecord}
              onClick={() => {
                setSingleData(null);
              }}
            >
              All-record
            </div>

            <div className={style.accoutItems}>
              {dataList.map((e, index) => {
                return (
                  <MenuBar
                    active={false}
                    key={index}
                    id={e.props.dataObj.id}
                    email={e.props.dataObj.email}
                    index={index}
                    onClick={(i) => {
                      for (let index = 0; index < dataList.length; index++) {
                        if (dataList[index].props.dataObj.id === i) {
                          setSingleData(dataList[index]);
                        }
                      }
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className={style.userinfo}>
            <div className={style.itemHeader}>
              <div className={style.navButton}>
                <img
                  onClick={() => {
                    setNavActive(!navActive);
                  }}
                  src={require("../../../assets/icon/navButton.png")}
                  alt=""
                  height={"100%"}
                  width="100%"
                />
              </div>
              Details
            </div>
            <hr />

            <div
              className={style.options}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                onClick={() => {
                  for (let index = 0; index < dataList.length; index++) {
                    if (dataList[index].props.dataObj.id === "") {
                      return;
                    }
                  }
                  setData([
                    <SingleData
                      onSave={(data) => {
                        setData((oldData) => {
                          const array = oldData;
                          array[0] = data.Component[0];

                          return [...oldData];
                        });
                      }}
                      onPopItem={onPopIndex}
                      showYesNoOptions={true}
                      key={dataList.length + 1}
                      dataObj={(() => {
                        let obj = {};
                        for (
                          let index = 0;
                          index < detailsKey.length;
                          index++
                        ) {
                          obj[detailsKey[index]] = "";
                        }
                        return obj;
                      })()}
                    />,
                    ...dataList,
                  ]);
                }}
              >
                +
              </span>
              <div
                onClick={() => {
                  setData([]);
                }}
                style={{
                  height: "50px",
                  width: "50px",
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={require("../../../assets/icon/delete.png")}
                  alt=""
                  height={"60%"}
                  width={"60%"}
                />
              </div>
            </div>

            <div className={style.accoutItems}>
              {singleData ? singleData : dataList}
            </div>
          </div>
        </div>
      </div>
    </DataBaseContext.Provider>
  );
}
/*






MenuBar











* */
function MenuBar({ id, email, onClick }) {
  return (
    <div className={style.item} onClick={() => onClick(id)}>
      ID : {id} <br />
      email : {email}
    </div>
  );
}
/*






Itemfield











* */
function Itemfield({ keyOfValue, value, onTarget, onChange, id }) {
  const input = useRef();

  const [opacitytext, setOpacitytext] = useState(false);
  const [options, setOption] = useState({
    readOnly: true,
  });
  return (
    <div className={style.fields}>
      {keyOfValue} :
      <input
        id={id}
        name={id}
        ref={input}
        onBlur={() => {
          setOption({ readOnly: true });
          setOpacitytext(false);
        }}
        onChange={onChange}
        onDoubleClick={() => {
          setOption({ readOnly: false });
          setOpacitytext(true);
          onTarget();
        }}
        type="text"
        value={value}
        {...options}
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
          color: "white",
          opacity: opacitytext ? 1 : 0.8,
        }}
      />
    </div>
  );
}
/*






SingleData











* */
function SingleData({ dataObj, showYesNoOptions, onPopItem, onSave }) {
  const [yesNoButtonShow, setYesNoButtonShow] = useState(showYesNoOptions);
  const [singleDataObj] = useState(dataObj);
  const [changeDataObj, setChangeDataObj] = useState(dataObj);
  const getContext = useContext(DataBaseContext);
  const onchange = (e) => {
    if (e.target.id === "id") {
      return;
    }
    let dataObj = { ...changeDataObj };
    dataObj[e.target.id] = e.target.value;
    setChangeDataObj(dataObj);
  };
  const onTarget = () => {
    setYesNoButtonShow(true);
  };
  const createData = () => {
    const items = [];
    for (const key in changeDataObj) {
      items.push(
        <Itemfield
          key={key}
          keyOfValue={key}
          id={`${key}`}
          value={changeDataObj[key]}
          onChange={onchange}
          onTarget={onTarget}
        />
      );
    }
    return items;
  };
  return (
    <div className={style.detailsitem}>
      {createData()}
      <YesNoOption
        id={singleDataObj.id}
        display={yesNoButtonShow}
        onSave={() => {
          setYesNoButtonShow(false);
          if (onSave != null) {
            // if (singleDataObj.id === "") {
            //   onPopItem();
            //   return;
            // }
            const data = changeDataObj;
            data["id"] = Math.floor(Math.random() * 1000);
            onSave({
              Component: [
                <SingleData key={getContext.dataList.length} dataObj={data} />,
              ],
            });
          }
        }}
        onCancle={() => {
          if (singleDataObj.id === "") {
            onPopItem();
            return;
          }
          setYesNoButtonShow(false);
          setChangeDataObj(singleDataObj);
        }}
      />
    </div>
  );
}
/*






YesNoOption











* */
function YesNoOption({ display, onCancle, onSave, onAllDelete, id }) {
  const getContext = useContext(DataBaseContext);
  if (!display) {
    return (
      <div
        onClick={() => {
          let array = getContext.dataList;
          for (let index = 0; index < array.length; index++) {
            if (array[index].props.dataObj.id === id) {
              array.splice(index, 1);
            }
          }
          getContext.setData([...array]);
          if (onAllDelete != null) {
            onAllDelete();
          }
        }}
        style={{
          height: "40px",
          width: "40px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={require("../../../assets/icon/delete.png")}
          alt=""
          height={"100%"}
          width={"100%"}
        />
      </div>
    );
  }
  return (
    <div
      className={style.yesOrNo}
      style={{
        display: display ? "flex" : "none",
      }}
    >
      <div className={style.option}>
        <img
          src={crossIcon}
          alt=""
          height={"70%"}
          width={"70%"}
          onClick={() => {
            onCancle();
          }}
        />
      </div>
      <div className={style.option}>
        <img
          src={saveIcon}
          alt=""
          height={"80%"}
          width={"100%"}
          onClick={() => {
            onSave();
          }}
        />
      </div>
    </div>
  );
}
