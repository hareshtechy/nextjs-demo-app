import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}
const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return (
    <div>
      <h1>User {id}</h1>
    </div>
  );
};

export default UserDetailPage;
