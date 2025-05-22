import { useRouter } from "../../../app/_root";
import { Button } from "../../../components/Button";

type Props = {
  fileId: number;
};

function FileEditBtn({ fileId }: Props) {
  const { push } = useRouter();

  const handleClick = () => {
    push("WriteFileScreen", { fileId });
  };

  return (
    <Button onClick={handleClick} className="w-full!">
      수정
    </Button>
  );
}

export default FileEditBtn;
