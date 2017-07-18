import React, { Component } from 'react';

export default function callApi () {

  return function (dispatch) {
    let url = 'https://friendlywager.herokuapp.com/lines/mlb';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type:"GOT_API_DATA", data: responseJson })
      })
      .catch((error) => {
        console.log("error was ",error);
      });
  }
}
