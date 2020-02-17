import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAllRequests, arrangeRequests } from "../store/allrequests";
import SingleRequest from "./singlerequest";
const moment = require("moment");
moment().format();

const AllRequests = props => {
  const getRequests = requestsArr => {
    if (requestsArr.length === 0) {
      props.getAllRequests("createdAt", "desc");
    }
  };

  const sortDates = (arr, sortBy, direction) => {
    let newArr = arr.map(elem => {
      return { ...elem, date: new Date(elem.date), createdAt: new Date(elem.createdAt) };
    });

    if (direction === "asc") {

      newArr.sort((a, b) => {
        return a[sortBy] - b[sortBy];
      });
    } else {
      newArr.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });
    }

    let finalArr = newArr.map(elem => {
      return { ...elem, date: moment.utc(elem.date).format("YYYY-MM-DD"), createdAt: moment.utc(elem.createdAt).format("YYYY-MM-DD") };
    });

    props.arrangeRequests(finalArr);
  };

  const sortString = (arr, sortBy, direction) => {
    let newArr = arr.map(elem => elem);
    if (direction === "asc") {
      newArr.sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy]);
      });
    } else {
      newArr.sort((a, b) => {
        return b[sortBy].localeCompare(a[sortBy]);
      });
    }
    props.arrangeRequests(newArr);
  };

  getRequests(props.requests);

  return (
    <div>
      <header className="venues-header">
        <div className="venues-cell">
          Date
          <i
            onClick={() => sortDates(props.requests, "date", "asc")}
            className="far fa-arrow-alt-circle-up"
          ></i>
          <i
            onClick={() => sortDates(props.requests, "date", "desc")}
            className="far fa-arrow-alt-circle-down"
          ></i>
        </div>
        <div className="venues-cell">
          Last Name
          <i
            onClick={() => sortString(props.requests, "lastName", "asc")}
            className="far fa-arrow-alt-circle-up"
          ></i>
          <i
            onClick={() => sortString(props.requests, "lastName", "desc")}
            className="far fa-arrow-alt-circle-down"
          ></i>
        </div>
        <div className="venues-cell"> First Name
        <i
            onClick={() => sortString(props.requests, "firstName", "asc")}
            className="far fa-arrow-alt-circle-up"
          ></i>
          <i
            onClick={() => sortString(props.requests, "firstName", "desc")}
            className="far fa-arrow-alt-circle-down"
          ></i>
        </div>
        <div className="venues-cell">Email
        <i
            onClick={() => sortString(props.requests, "email", "asc")}
            className="far fa-arrow-alt-circle-up"
          ></i>
          <i
            onClick={() => sortString(props.requests, "email", "desc")}
            className="far fa-arrow-alt-circle-down"
          ></i></div>
        <div className="venues-cell"># people
        <i
            onClick={() => sortDates(props.requests, "numOfPeople", "asc")}
            className="far fa-arrow-alt-circle-up"
          ></i>
          <i
            onClick={() => sortDates(props.requests, "numOfPeople", "desc")}
            className="far fa-arrow-alt-circle-down"
          ></i></div>
        <div className="venues-cell">Created at
        <i
            onClick={() => sortDates(props.requests, "createdAt", "asc")}
            className="far fa-arrow-alt-circle-up"
          ></i>
          <i
            onClick={() => sortDates(props.requests, "createdAt", "desc")}
            className="far fa-arrow-alt-circle-down"
          ></i>
        </div>
      </header>
      <div>
        {props.requests.map((request, ind) => (
          <SingleRequest
            id={request.id}
            firstName={request.firstName}
            lastName={request.lastName}
            email={request.email}
            numOfPeople={request.numOfPeople}
            date={request.date}
            createdAt={request.createdAt}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state in all requests", state);
  return {
    requests: state.allrequests.requests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllRequests: (sortBy, direction) =>
      dispatch(getAllRequests(sortBy, direction)),
    arrangeRequests: arr => dispatch(arrangeRequests(arr))
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllRequests)
);
