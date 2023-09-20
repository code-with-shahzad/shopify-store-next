import React from "react";

interface Props {
    statusCode: number | string;
}
const Error = ({statusCode}: Props) => {
  return (
    <>
      <div className="error-head">
        <div className="text-404">{statusCode}</div>
        <p className="text-not-found">Oops! Page not found.</p>
      </div>
    </>
  );
};
Error.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }

export default Error;

