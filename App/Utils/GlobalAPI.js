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

const getBusinessListByCategory = async ({ category }) => {
  const query =
    gql`
    query getBusinessListByCategory {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
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

const createBooking = async ({ data }) => {
  console.log(data);
  const query =
    gql`
    mutation createBooking {
      createBooking(
        data: {
          userName: "` +
    data.userName +
    `"
          userEmail: "` +
    data.userEmail +
    `"
          date: "` +
    data.date +
    `"
          time: "` +
    data.time +
    `"
          bookingStatus: Booked
          notes: "` +
    data.note +
    `"
          business: { connect: { id: "` +
    data.businessId +
    `" } }
        }
      ) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
      count
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getUserBookings = async (userEmail) => {
  const query =
    gql`
    query getUserBookings {
      bookings(orderBy: updatedAt_DESC, where: { userEmail: "` +
    userEmail +
    `" }) {
        id
        notes
        time
        date
        userEmail
        userName
        bookingStatus
        business {
          id
          name
          contactPerson
          address
          email
          about
          images {
            url
          }
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getSlider,
  getCategory,
  getBusinessList,
  getBusinessListByCategory,
  createBooking,
  getUserBookings,
};
