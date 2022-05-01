import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import data from "./data";

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #eeeeee;
  font-size: 3rem;
  font-family: "Public Sans", sans-serif;
  margin-top: 1rem;
  text-transform: capitalize;
`;

const Container = styled.section`
  background-color: #11468f;
  border-radius: 11px;
  padding: 1rem 0.1rem;
  font-size: 1.8rem;
  min-width: 60vw;
  max-width: 80vw;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  color: #eeeeee;
`;

const TableSetup = styled.form`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 0 10px 10px 10px;
`;

const AmmountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.8rem;
  margin-right: 1rem;
`;

const Selector = styled.select`
  margin-right: 1rem;
`;

const Option = styled.option``;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Searcher = styled.input``;

const TableContainer = styled.div``;

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  height: 4rem;
  display: table-row;
`;

const TableHead = styled.thead``;

const TableHeader = styled.th`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  padding-top: 1rem;
  background-color: #041562;
`;

const TableBody = styled.tbody``;

const TableItem = styled.td`
  border: 1px solid #35589a;
  display: table-cell;
  text-align: center;
  padding-top: 1rem;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  padding: 1rem 2rem 1rem 0;
  width: 100%;
  justify-content: space-between;
`;

const DisplayingNow = styled.span`
  margin-left: 1.5rem;
`;

const QuantifierWrapper = styled.div`
  padding-right: 3rem;
  display: flex;
`;

const PageNumber = styled.button`
  display: flex;
  flex-direction: column;
  background-color: #${(props) => (props.page === props.currentPage ? "041562" : "EEEEEE")};
  color: #${(props) => (props.page === props.currentPage ? "EEEEEE" : "041562")};
  box-shadow: none;
  border: none;
  border-radius: 50px;
  margin-right: -2px;
  z-index: ${(props) => (props.page === props.currentPage ? 1 : 0)};
  align-items: center;
  justify-content: center;
`;

export default function MyDataTable() {
  const [people, setPeople] = useState(data);
  const [showAmmount, setShowAmmount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [pagesArray, setPagesArray] = useState([]);
  const [pagesAmmount, setPagesAmmount] = useState(0);

  const getPagesQuantity = () => {
    const ammountOfPeople = data.length;
    setPagesAmmount(Math.ceil(ammountOfPeople / showAmmount));
  };

  const getPagesArray = () => {
    const newArr = [];
    for (let i = 1; i <= pagesAmmount; i++) {
      newArr.push(i);
    }
    setPagesArray(newArr);
  };

  const handleAmmountSelector = (e) => {
    const ammount = parseInt(e.target.value);
    if (Math.floor(data.length / ammount) < currentPage) {
      setCurrentPage(1);
    }
    setShowAmmount(ammount);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const searchHandler = (e) => {
    const pattern = e.target.value.toLowerCase();
    if (pattern.length > 0) {
      const newPeople = data.filter(
        (person) =>
          person.name.toLowerCase().slice(0, pattern.length) === pattern
      );
      setSearchText(e.target.value);
      setPeople(newPeople);
    } else {
      setSearchText(e.target.value);
      currentlyDisplaying();
    }
  };

  const currentlyDisplaying = useCallback(() => {
    const listStart = (currentPage - 1) * showAmmount;
    const newList = data.slice(listStart, listStart + showAmmount);
    setPeople(newList);
  }, [currentPage, showAmmount]);

  useEffect(() => {
    currentlyDisplaying();
    getPagesQuantity();
    getPagesArray();
  }, [showAmmount, currentPage, currentlyDisplaying, pagesAmmount]);

  return (
    <Content>
      <Title>Table with different pages</Title>
      <Container>
        <TableSetup>
          <AmmountWrapper>
            <Label htmlFor="ammount">Show</Label>
            <Selector
              id="ammount"
              name="ammount"
              value={showAmmount}
              onChange={(e) => handleAmmountSelector(e)}
            >
              <Option>5</Option>
              <Option>7</Option>
              <Option>10</Option>
              <Option>15</Option>
            </Selector>
          </AmmountWrapper>
          <SearchWrapper>
            <Label htmlFor="search">Search</Label>
            <Searcher
              type="text"
              id="search"
              value={searchText}
              onChange={(e) => searchHandler(e)}
            />
          </SearchWrapper>
        </TableSetup>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader style={{ width: "40%" }}>Name</TableHeader>
                <TableHeader
                  style={{
                    width: "40%",
                    borderRight: "1px solid #11468f",
                    borderLeft: "1px solid #11468f",
                  }}
                >
                  Role
                </TableHeader>
                <TableHeader style={{ width: "20%" }}>Age</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {people.map((person) => {
                const { id, name, role, age } = person;
                return (
                  <TableRow key={id}>
                    <TableItem>{name}</TableItem>
                    <TableItem>{role}</TableItem>
                    <TableItem>{age}</TableItem>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <BottomContainer>
            {searchText.length === 0 && (
              <DisplayingNow>
                Entries shown: {(currentPage - 1) * showAmmount + 1} -{" "}
                {currentPage * showAmmount <= data.length
                  ? currentPage * showAmmount
                  : data.length}
              </DisplayingNow>
            )}
            <QuantifierWrapper>
              {pagesArray.map((page) => {
                return (
                  searchText.length === 0 && (
                    <PageNumber
                      key={page}
                      page={page}
                      currentPage={currentPage}
                      onClick={() => handlePageClick(page)}
                    >
                      {page}
                    </PageNumber>
                  )
                );
              })}
            </QuantifierWrapper>
          </BottomContainer>
        </TableContainer>
      </Container>
    </Content>
  );
}
