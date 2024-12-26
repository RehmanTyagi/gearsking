'use client';
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.log(error);
  return <div>{error.message}</div>;
};

export default Error;
