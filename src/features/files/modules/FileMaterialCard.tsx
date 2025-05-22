import { IMaterial } from "../common/types";

type Props = {
  material: IMaterial;
};

function FileMaterialCard({ material }: Props) {
  const { keywords, title, content } = material;

  return (
    <div className="flex flex-col gap-[12px]">
      <section className="flex flex-col gap-[12px] p-[16px] rounded-[8px] bg-white shadow-white">
        <h3 className="b1 text-center py-1">키워드 힌트</h3>

        <div className="flex flex-wrap gap-[4px] bg-gray-50 rounded-[8px] py-[12px] px-[16px]">
          {keywords.map((keyword, index) => (
            <span
              className="bg-blue-50 px-[4px] py-[2px] rounded-[4px] label"
              key={`k_${keyword}_${index}`}
            >
              {keyword}
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[12px] p-[16px] rounded-[8px] bg-white shadow-white">
        <h3 className="b1 text-center py-1">{title}</h3>

        <div className="flex flex-wrap gap-[4px] bg-gray-50 rounded-[8px] py-[12px] px-[16px]">
          <p className="label">{content}</p>
        </div>
      </section>
    </div>
  );
}

export default FileMaterialCard;
