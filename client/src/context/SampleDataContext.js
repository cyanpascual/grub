import React, { createContext, useState } from 'react';
export const SampleDataContext = createContext();

const SampleDataContextProvider = (props) => {
  const [articleData, setArticleData] = useState(
    [
        {
            "id": 1,
            "title": "hi",
            'author':'Cy Pascual',
            "dateArticle": "2020-08-22",
            "post": "hello"
        },
        {
            "id": 2,
            "title": "Happy birthday, My Son",
            'author':'Jes Buaron',
            "dateArticle": "2020-08-22",
            "post": "Leaves from the vine, falling so slow"
        },
        {
            "id": 3,
            'author':'Cy Pascual',
            "title": "This is Madness",
            "dateArticle": "2020-08-22",
            "post": "This is SPARTA!"
        },
        {
            "id": 4,
            'author':'Jes Buaron',
            "title": "Test",
            "dateArticle": "2020-08-22",
            "post": "hello"
        },
        {
            "id": 5,
            'author':'Jes Buaron',
            "title": "hello",
            "dateArticle": "2020-08-22",
            "post": "hello"
        }
    ]);
  const [profileData, setProfileData] = useState([
    {  
        'id': 1,
        "email": 'notcyanpascual@gmail.com',
        'name':'Cy Pascual',
        "description": "I like plants. I like green plants. I like vegetables. I like green vegetables.",
        'interest':{
            'planting_experience':'1 year',
            "plants": 'Carrots',
            'interested_in':'Green plants',
            "member_since": "2020-08-25"
        },
        "badges": [1,2],
        "postIDs": [1,3],
        'image':null,
        'community':'Milk Team'
    },
    {
        'id':2,
        "email": 'notjesbuaron@gmail.com',
        'name':'Jes Buaron',
        "description": "Im Jes.",
        'interest':{
            'planting_experience':'',
            "plants": 'Cabbage',
            'interested_in':'',
            "member_since": "2020-08-25"
        },
        "badges": [1,3],
        "postIDs": [2,4,5],
        'image':null,
        'community':''
    },
    {
        'id':3,
        "email": '',
        'name':'Andrea Onglao',
        "description": "Im Andrea",
        'interest':{
            'planting_experience':'',
            "plants": 'Radish',
            'interested_in':'',
            "member_since": "2020-08-25"
        },
        "badges": [1,3],
        "postIDs": [-1],
        'image':null,
        'community':''
    },
    {
        'id':3,
        "email": '',
        'name':'Thea ',
        "description": "",
        'interest':{
            'planting_experience':'',
            "plants": 'Pepper',
            'interested_in':'',
            "member_since": "2020-08-25"
        },
        "badges": [4],
        "postIDs": [-1],
        'image':null,
        'community':''
    },
    {
        'id':4,
        "email": '',
        'name':'Steve',
        "description": "",
        'interest':{
            'planting_experience':'Onions',
            "plants": 'Onions',
            'interested_in':'',
            "member_since": "2020-08-25"
        },
        "badges": [3],
        "postIDs": [-1],
        'image':null,
        'community':''
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

    const [marketData,setMarketData] = useState([
        {
            "id": 1,
            "price": "70.00",
            "product": "Red Onions",
            "hdate": "2020-08-24",
            "prod_pic": 'violet.jpg'
        },
        {
            "id": 2,
            "price": "50.00",
            "product": "Cabbage",
            "hdate": "2020-08-24",
            "prod_pic": 'green2.png'
        },
        {
            "id": 3,
            "price": "140.00",
            "product": "Radish",
            "hdate": "2020-08-24",
            "prod_pic": 'offwhite.jpg'
        },
        {
            "id": 4,
            "price": "400.00",
            "product": "Red Pepper",
            "hdate": "2020-08-24",
            "prod_pic": 'red.jpg'
        },
        {
            "id": 5,
            "price": "80.00",
            "product": "Lettuce",
            "hdate": "2020-08-24",
            "prod_pic": 'green.png'
        }
    ])

    const [communityData, setCommunityData] = useState([
        {
            'name':'Milk Team',
            "member_IDs": "1, 2, 3",
            "lat": "14.345700",
            "longi": "120.584200"
        }
    ])


  return(
    <SampleDataContext.Provider value={{ setProfileData, ordersData, articleData, profileData,marketData,communityData}}>
      {props.children}
    </SampleDataContext.Provider>
  );
}

export default SampleDataContextProvider;