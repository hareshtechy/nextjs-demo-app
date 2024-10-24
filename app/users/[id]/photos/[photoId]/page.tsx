import React from "react";

interface Props {
  params: { id: number; photoId: number };
}
const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <h1>
        Photo {id} {photoId}
      </h1>
    </div>
  );
};

export default PhotoPage;
