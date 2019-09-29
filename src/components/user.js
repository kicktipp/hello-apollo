import gql from "graphql-tag";

export default gql`{
    user (id: 1) {
        id
        firstname
        age
    }
}`