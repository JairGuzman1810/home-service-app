import { request, gql } from "graphql-request";

const MASTER_URL = process.env.EXPO_PUBLIC_API_URL;

const getSlider = async () => {
  const query = gql`
    query getSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getCategory = async () => {
  const query = gql`
    query getCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessList = async () => {
  const query = gql`
    query getBusinessList {
      businessLists {
        id
        name
        email
        contactPerson
        category {
          name
        }
        address
        about
        images {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default { getSlider, getCategory, getBusinessList };
