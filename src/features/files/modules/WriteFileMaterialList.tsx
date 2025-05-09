import WriteFileMaterialCard from "./WriteFileMaterialCard";
import { IMaterial } from "../common/types";
import { produce } from "immer";

type Props = {
  materials: IMaterial[];
  setMaterials: (by: IMaterial[]) => void;
};

function WriteFileMaterialList({ materials, setMaterials }: Props) {
  const addMaterial = () => {
    setMaterials([
      ...materials,
      { title: "", content: "", keywords: [], limitedTime: "" },
    ]);
  };

  const changeMaterial = (index: number, by: Partial<IMaterial>) => {
    const target = materials[index];
    if (!target) return;

    setMaterials(
      produce(materials, (d) => {
        d[index] = { ...d[index], ...by };
      })
    );
  };

  const moveMaterial = (index: number, direction: "up" | "down") => {
    setMaterials(
      produce(materials, (d) => {
        if (direction === "up" && index !== 0) {
          [d[index - 1], d[index]] = [d[index], d[index - 1]];
        }

        if (direction === "down" && index !== materials.length - 1) {
          [d[index + 1], d[index]] = [d[index], d[index + 1]];
        }
      })
    );
  };

  const copyMaterial = (index: number) => {
    const copied = { ...materials[index] };

    setMaterials([
      ...materials.slice(0, index),
      copied,
      ...materials.slice(index),
    ]);
  };

  const removeMaterial = (index: number) => {
    setMaterials([...materials.slice(0, index), ...materials.slice(index + 1)]);
  };

  return (
    <section className="flex flex-col gap-[8px]">
      <label className="b1">리스트</label>

      <div className="flex-1 flex flex-col gap-[24px] overflow-y-scroll">
        {materials.map((m, idx) => {
          return (
            <WriteFileMaterialCard
              material={m}
              setMaterial={(m) => changeMaterial(idx, m)}
              onMoveUp={() => moveMaterial(idx, "up")}
              onMoveDown={() => moveMaterial(idx, "down")}
              onCopy={() => copyMaterial(idx)}
              onRemove={() => removeMaterial(idx)}
              key={`k_m_${idx}`}
            />
          );
        })}
      </div>

      {/** @todo Btn으로 교체 */}
      <button onClick={addMaterial} className="bg-blue-100 p-5">
        리스트 추가
      </button>
    </section>
  );
}

export default WriteFileMaterialList;
