import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!) {
    createUser(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
      email
      username
      image
    }
  }
`;

function AddTodo() {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    variables: {
      firstName: "placeholder",
      lastName: "placeholder",
    },
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  console.log(data, "data");

  return (
    <div>
      <button
        type="submit"
        onClick={() =>
          createUser({ variables: { firstName: "Hank", lastName: "test" } })
        }
      >
        Create User
      </button>
    </div>
  );
}

export default AddTodo;
