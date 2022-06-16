import { useRouter } from 'next/router';
import React from 'react';

interface Props {}

const Detail: React.FunctionComponent<Props> = () => {
  const router = useRouter();
  return <div>
    Detail
    <div>return_url: {decodeURIComponent(router.query.return_url)}</div>
  </div>;
};

export default Detail;

export const getServerSideProps = async () => {
  return { props: {} };
}