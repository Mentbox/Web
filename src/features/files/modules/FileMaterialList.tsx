import useFileSuspenseQuery from "../hooks/queries/useFileSuspenseQuery";
import FileMaterialCard from "./FileMaterialCard";

type Props = {
  fileId: number;
};

function FileMaterialList({ fileId }: Props) {
  const {
    file: { materials },
  } = useFileSuspenseQuery(fileId);

  return (
    <section className="flex flex-col gap-[8px]">
      <h2 className="b1">리스트</h2>

      <div className="flex flex-col gap-[20px]">
        {materials.map((material) => (
          <FileMaterialCard material={material} key={material.id} />
        ))}
      </div>
    </section>
  );
}

export default FileMaterialList;
