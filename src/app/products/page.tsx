const Products = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/10');

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const todo = await response.json();
  console.log(todo);

  return <div>{todo.title}</div>;
};

export default Products;
