import { useRouter } from 'next/router';
import React from 'react'
import Link from 'next/link';
const pages1 = () => {
  const router = useRouter();
   const {id} = router.query;
  return (
   <> <div>your id what you type in params  - {id}</div>
    <Link href={"/"}> - go back </Link>
    </>
  )
}

export default pages1;