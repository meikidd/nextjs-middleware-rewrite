import React from 'react';

interface Props {}

const Detail: React.FunctionComponent<Props> = () => {
  return <div>Detail</div>;
};

export default Detail;

export const getServerSideProps = async () => {
  return { props: {} };
}