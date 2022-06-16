import { useRouter } from 'next/router';
import React from 'react';

interface Props {}

const Login: React.FunctionComponent<Props> = () => {
  const router = useRouter();
  return <div>
    Login
    <div>return_url: {decodeURIComponent(router.query.return_url)}</div>
  </div>;

};

export default Login;

