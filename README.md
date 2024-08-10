# Customer Portal

This is a single-page React application built in TypeScript using the Context API and Redux Toolkit. The application displays a customer list and shows detailed information about a selected customer, including a grid of photos that change every 10 seconds.

## Features

### 1. Customer List with Infinite Scroll
- The left side of the application contains a list of customers.
- The list implements infinite scroll functionality, fetching 10 customers at a time.
- As you scroll down, more customers are loaded from the dummyData until no more customers are available.

### 2. Customer Details View
- When a customer is selected from the list, their details are displayed on the right side of the application.
- The details include the customer's name, title, address, and a grid of 9 photos.
- The photos automatically refresh every 10 seconds, displaying new images with a shimmer effect during loading.

### 3. Modular Code Structure
- **Context API:** Used for managing global state, including customer data and the selected customer.
- **TypeScript:** Ensures type safety throughout the application, defining interfaces for customer data and other types.
- **Debouncing:** Implemented for the scroll event handler to improve performance by limiting the rate of fetching new customers.

## Project Structure

- **`src/components/`**
  - `CustomerCard.tsx`: Displays individual customer information in a card format.
  - `CustomerDetails.tsx`: Displays detailed information about a selected customer.
  - `NoCustomerSelected.tsx`: Displays a placeholder message when no customer is selected.

- **`src/context/`**
  - `CustomerContext.tsx`: Manages customer data and state using React's Context API.

- **`src/hooks/`**
  - `useCustomerLoader.ts`: Custom hook for fetching customer data and handling pagination.

- **`src/services/`**
  - `fetchCustomers.ts`: Simulates an API call to fetch customer data with a delay.

- **`src/styles/`**
  - `Home.css`: Contains the main styles for the application layout.
  - `customerDetails.css`: Contains styles specific to the customer details view.
  - `customerCard.css`: Contains styles specific to the customer card view.
  - `Heading.css`: Contains styles specific to the Heading component.
  - `NoCustomerSelected.css`: Contains styles specific to the NoCustomerSelected component.

- **`src/utils/`**
  - `debounce.ts`: Utility function to limit the rate of function execution.
  - `randomImages.ts`: Generates random images for the customer details grid.
  - `truncate.ts`: Utility function to truncate text to a specified length.

## How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/customer-portal.git
   cd customer-portal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm start
   ```

4. **Build the application for production:**
   ```bash
   npm run build
   ```

## Future Enhancements

- **Testing:** Add unit and integration tests using Jest and React Testing Library.
- **Error Handling:** Improve error handling and display error messages to the user.
