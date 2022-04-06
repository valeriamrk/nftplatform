import React from "react";
import * as S from "./styles";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useSortableData } from "../../../../utils/hooks/useSortableData";
import { useEffect } from "react";

const TopNftTable = (props) => {
  const { statsData, selectedOption } = props;
  const [tableData, setTableData] = useState(statsData);
  const [sortConfig, setSortConfig] = useState();

  const filterData = () => {
    if (selectedOption.label !== "All Categories") {
      const filteredData = statsData.filter(
        (element) => element.category === selectedOption.label
      );
      console.log(filteredData);
      setTableData(filteredData);
    } else {
      setTableData(statsData);
    }
  };

  const ascSort = (a, b, sortKey) => {
    const numA = Number(a[sortKey]);
    const numB = Number(b[sortKey]);
    if (numB < numA) return -1;
    if (numB > numA) return 1;
    if (numA == numB) return 0;
  };

  const descSort = (a, b, sortKey) => {
    const numA = Number(a[sortKey]);
    const numB = Number(b[sortKey]);
    if (numB < numA) return 1;
    if (numB > numA) return -1;
    if (numA == numB) return 0;
  };

  const getComparator = (sortKey, sortDirection) => {
    if (sortDirection === "descending") {
      return (a, b) => descSort(a, b, sortKey);
    } else {
      return (a, b) => ascSort(a, b, sortKey);
    }
  };

  const sortArray = () => {
    if (sortConfig) {
      const sortedData = [...statsData];
    sortedData.sort(getComparator(sortConfig.sortKey, sortConfig.direction));
    setTableData(sortedData) ;
    } else {
      setTableData(statsData);
    }
  };

  const handleItemClick = (sortKey) => {
    console.log(sortConfig)
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.sortKey === sortKey &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ sortKey, direction });
  };

  useEffect(() => {
    filterData();
  }, [selectedOption]);

  useEffect(() => {
    sortArray();
  }, [sortConfig]);

  return (
    <S.TableWrapper>
      <thead>
        <S.TableHeader>
          <S.FirstTableCell>Collection</S.FirstTableCell>
          <S.TableHeaderCell onClick={() => handleItemClick("volume")}>
            Volume <MdKeyboardArrowDown />
          </S.TableHeaderCell>
          <S.TableHeaderCell onClick={() => handleItemClick("hours")}>
            24h % <MdKeyboardArrowDown />
          </S.TableHeaderCell>
          <S.TableHeaderCell onClick={() => handleItemClick("days")}>
            7d % <MdKeyboardArrowDown />
          </S.TableHeaderCell>
          <S.TableHeaderCell onClick={() => handleItemClick("floorPrice")}>
            Floor Price <MdKeyboardArrowDown />
          </S.TableHeaderCell>
          <S.TableHeaderCell onClick={() => handleItemClick("owners")}>
            Owners <MdKeyboardArrowDown />
          </S.TableHeaderCell>
          <S.TableHeaderCell onClick={() => handleItemClick("items")}>
            Items <MdKeyboardArrowDown />
          </S.TableHeaderCell>
        </S.TableHeader>
      </thead>
      <S.Body>
        {tableData.length === 0 ? (
          <S.NotFound>Not found</S.NotFound>
        ) : (
          tableData.map((element) => (
            <S.TableRow key={element.id}>
              <S.FirstCellBody>
                {element.id} <S.Avatar src={element.avatar} alt="avatar" />{" "}
                {element.author}
              </S.FirstCellBody>
              <S.BodyCell>
                {" "}
                <S.EthLogo
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                />
                {element.volume}
              </S.BodyCell>
              <S.HoursCell {...element}>{element.hours}%</S.HoursCell>
              {/* <S.TableItemDays {...props}>{element.days}</S.TableItemDays> */}
              {element.days === null ? (
                <S.DaysCell>---</S.DaysCell>
              ) : (
                <S.DaysCell {...element}>{element.days}%</S.DaysCell>
              )}
              <S.BodyCell>
                {" "}
                <S.EthLogo
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                />
                {element.floorPrice}
              </S.BodyCell>
              <S.BodyCell>{element.owners}K</S.BodyCell>
              <S.BodyCell>{element.items}K</S.BodyCell>
            </S.TableRow>
          ))
        )}
      </S.Body>
    </S.TableWrapper>
  );
};

export { TopNftTable };
