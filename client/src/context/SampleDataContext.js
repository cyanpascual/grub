import React, { createContext, useState } from 'react';
export const SampleDataContext = createContext();

const SampleDataContextProvider = (props) => {
  const [articleData, setArticleData] = useState(
    [
        {
            "id": 1,
            "title": "hi",
            "dateArticle": "2020-08-22T10:13:40.495882Z",
            "post": "hello"
        },
        {
            "id": 2,
            "title": "Happy birthday, My Son",
            "dateArticle": "2020-08-22T10:25:40.386658Z",
            "post": "Leaves from the vine, falling so slow"
        },
        {
            "id": 3,
            "title": "This is Madness",
            "dateArticle": "2020-08-22T10:25:45.887435Z",
            "post": "This is SPARTA!"
        },
        {
            "id": 4,
            "title": "Test",
            "dateArticle": "2020-08-22T10:25:50.818381Z",
            "post": "hello"
        },
        {
            "id": 5,
            "title": "hello",
            "dateArticle": "2020-08-22T10:25:55.578107Z",
            "post": "hello"
        }
    ]);
  const [profileData, setProfileData] = useState([
    {
        "id": 1,
        "uName": "kyogrejotho",
        "pWord": "dragon123",
        "email": "d@g.com",
        "dateStarted": "2020-08-22",
        "description": "Farmer1",
        "badges": "badge1,badge2,badge3",
        "reviews": "Great",
        "plants": "Cabbage",
        "postIDs": 1,
        "memberSince": "2020-08-22"
    },
    {
        "id": 2,
        "uName": "jdarb",
        "pWord": "dragon",
        "email": "dragon@dragon.com",
        "dateStarted": "2020-08-22",
        "description": "I like dragons",
        "badges": "badge 3",
        "reviews": "Not enough dragons",
        "plants": "Lettuce, carrots",
        "postIDs": 2,
        "memberSince": "2020-08-22"
    },
    {
        "id": 3,
        "uName": "slgo",
        "pWord": "esteban",
        "email": "slgo@slg.com",
        "dateStarted": "2020-08-22",
        "description": "Numbah One",
        "badges": "badge 1, badge 3",
        "reviews": "Atin to",
        "plants": "chinese onion, chinese cabbage",
        "postIDs": 4,
        "memberSince": "2020-08-22"
    },
    {
        "id": 4,
        "uName": "cashews",
        "pWord": "nuts",
        "email": "cashew@nuts.com",
        "dateStarted": "2020-08-22",
        "description": "I hate cashews",
        "badges": "badge 1",
        "reviews": "Too expensive",
        "plants": "bell peppers",
        "postIDs": 5,
        "memberSince": "2020-08-22"
    },
    {
        "id": 5,
        "uName": "Taylor",
        "pWord": "Series",
        "email": "taylor@swift.com",
        "dateStarted": "2020-08-22",
        "description": "Fearless",
        "badges": "badge 1,badge 2, badge 3",
        "reviews": "Bestseller",
        "plants": "Red Onion",
        "postIDs": 6,
        "memberSince": "2020-08-22"
    }
]);
  const [ordersData, setOrdersData] = useState([
    {
        "id": 2,
        "amount": "99.00",
        "date_made": "2020-08-22"
    },
    {
        "id": 3,
        "amount": "44.00",
        "date_made": "2020-08-22"
    },
    {
        "id": 4,
        "amount": "22.00",
        "date_made": "2020-08-22"
    },
    {
        "id": 5,
        "amount": "44.00",
        "date_made": "2020-08-22"
    },
    {
        "id": 6,
        "amount": "543.00",
        "date_made": "2020-08-22"
    },
    {
        "id": 7,
        "amount": "563.00",
        "date_made": "2020-08-22"
    }
]);


  return(
    <SampleDataContext.Provider value={{ ordersData, articleData, profileData}}>
      {props.children}
    </SampleDataContext.Provider>
  );
}

export default LoginContextProvider;