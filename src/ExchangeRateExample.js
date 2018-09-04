import { Query } from "react-apollo";
import gql from "graphql-tag";
import React, { Component}  from 'react';

export const ExchangeRates = () => (
    <Query
        query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.rates.map(({ currency, rate }) => (
            <div key={currency}>
              <p>{`${currency}: ${rate}`}</p>
            </div>
        ));
      }}
    </Query>
);



const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

export const Dogs = ({ onDogSelected }) => (
    <Query query={GET_DOGS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
            <select name="dog" onChange={onDogSelected}>
              {data.dogs.map(dog => (
                  <option key={dog.id} value={dog.breed}>
                    {dog.breed}
                  </option>
              ))}
            </select>
        );
      }}
    </Query>
);

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export const DogPhoto = ({ breed }) => (
    <Query
        query={GET_DOG_PHOTO}
        variables={{ breed }}
        skip={!breed}
        pollInterval={500}
    >
      {({ loading, error, data, startPolling, stopPolling }) => {
        if (loading) return null;
        if (error) return `Error!: ${error}`;

        return (
            <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
        );
      }}
    </Query>
);
