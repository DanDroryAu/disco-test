type GetImgPathProps = {
  root: string;
  imageId: string;
  size?: 'thumb' | 'full';
};

const sizes = {
  thumb: 200,
  full: 843,
};

export const getImgPath = ({
  root,
  imageId,
  size = 'thumb',
}: GetImgPathProps) => `${root}/${imageId}/full/${sizes[size]},/0/default.jpg`;
