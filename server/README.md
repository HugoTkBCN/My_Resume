# Dashboard Server

## Get API Key
- **[Get Key](#get-key)**
- **[Check Key](#check-key)**

## API Service List:
 - **[Reddit](#reddit)**
 - **[Exchange](#exchange)**
 - **[Weather](#weather)**
 - **[Steam](#steam)**
 - **[Pornhub](#pornhub)**
 - **[Covid](#covid)**

## Auth:
 - **[Login](#login)**
 - **[SignUp](#signUp)**
 - **[Login with Google](#login-google)**

## Save Widgets:
 - **[Add Widget](#add-widget)**
 - **[Get Widget by type for a user](#get-widget-by-type-for-a-user)**
 - **[Get all Widget for a user](#get-all-widget-for-a-user)**
 - **[Update widget by id](#update-widget-by-id)**
 - **[Remove widget by id](#remove-widget-by-id)**

# Get Key
##### Description
Get API Key to use the server

##### Usage
```
POST http://localhost:8080/getToken
```
| Body | description |
| ---- | ----------- |
| pass | password set on the server |

##### Example:
```
{
    "pass": "MySuperStrongPassword"
}
```

# Check Key
##### Description
Check API Key

##### Usage
```
POST http://localhost:8080/checkToken
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

# Reddit
##### Description
Get N last post from a Subreddit

##### Usage
```
POST http://localhost:8080/getSubReddit
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ---- | ----------- |
| name | Name of the subReddit |
| limit | Number of post you want to get |

##### Example:
```
{
    "name": "WhatCouldGoWrong",
    "limit": 2
}
```

# Exchange
##### Description
Get currency of money comparated to N others

##### Usage
```
POST http://localhost:8080/exchange
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| base | Base currency |
| symbols | Currencies you want to compare |

##### Example:
```
{
    "base": "EUR",
    "symbols": ["USD", "CAD"]
}
```

# Weather
##### Description
Get weather for a city

##### Usage
```
POST http://localhost:8080/weather
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| city | The name of the city |

##### Example:
```
{
    "city": "Paris"
}
```

# Steam
##### Description
Get steam server status

##### Usage
```
GET http://localhost:8080/steamstatus
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

# Pornhub
##### Description
Get pornhub videos by keyword and sort by “Most Recent” | “Most Viewed” | “Top Rated” | “Longest”

##### Usage
```
POST http://localhost:8080/pornhub
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| keyword | research keyword |
| order | "Most Recent" or "Most Viewed" or "Top Rated" or "Longest" |

##### Example:
```
{
    "keyword": "teen",
    "order": "Most Viewed"
}
```

# Covid
##### Description
Get covid statistic by country

##### Usage
```
POST http://localhost:8080/covid
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| country |  Country name |

##### Example:
```
{
    "country": "Spain"
}
```

# Login
##### Usage
```
POST http://localhost:8080/login
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| user_name | User name |
| password | User Password |

##### Example:
```
{
    "user_name": "Lana",
    "password": "mypassword"
}
```

#  Signup
##### Usage
```
POST http://localhost:8080/signup
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| user_name |  User name |
| password | User password |
| enrollment | If enrollment accepted |

##### Example:
```
{
    "user_name": "Lana",
    "password": "mypassword",
    "enrollment": 1
}
```

# Login Google
##### Usage
```
POST http://localhost:8080/google
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| usern_name | id google account |

##### Example:
```
{
    "user_name": "128920830202930139882",
}
```

# Add Widget
##### Usage
```
POST http://localhost:8080/addWidget
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| user_name |  User name |
| type | Widget type |
| Data | Data for the widget |

##### Example:
```
{
    "user_name": "Lana",
    "type": "weather",
    "data": {
        "city": "Paris"
    }
}
```
# Get Widget by type for a user
##### Usage
```
POST http://localhost:8080/getWidget
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| user_name |  User name |
| type | Widget type |

##### Example:
```
{
    "user_name": "Lana",
    "type": "exchange"
}
```
# Get all Widget for a user
##### Usage
```
POST http://localhost:8080/getAllWidget
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| user_name |  User name |

##### Example:
```
{
    "user_name": "Lana"
}
```
# Update widget by id
##### Usage
```
POST http://localhost:8080/updateWidget
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| id |  Widget id |
| data | Data to update |

##### Example:
```
{
    "id": "4",
    "data": {
        "city": "Paris"
    }
}
```
# Remove widget by id
##### Usage
```
POST http://localhost:8080/removeWidget
```
| Header | description |
| ------ | ----------- |
| api_key | server api key |

| Body | description |
| ------ | ------ |
| id |  Widget id |

##### Example:
```
{
    "id": "7"
}
```

# Autors

- [Hugo Lachkar](https://github.com/HugoTkBCN)
- [Maxence Desrousseaux](https://github.com/handsomax)

# License

MIT
